import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Grade } from "ts-fsrs";
import {
  payloadSchema,
  wordTranslation,
  type Catalog,
  type Word,
} from "../../lib/vocabulary/content.js";
import {
  VocabularyStore,
  validateBackup,
  settingsSchema,
  type Snapshot,
} from "../../lib/vocabulary/store.js";
import {
  cardId,
  emptyCard,
  intervalLabel,
  preview,
  queue,
  studyDay,
  type Settings,
} from "../../lib/vocabulary/scheduler.js";
import type { SrsLabels } from "../../content/translations/vocabulary-srs.js";
import { VOCABULARY_CATALOG_VERSION } from '../../lib/vocabulary/catalog-version.js';
import { speakEnglish, stopSpeech } from "../../lib/utils/speech.js";
import "../../styles/vocabulary.css";

type Tab = "home" | "library" | "stats" | "settings" | "study";
type Props = { labels: SrsLabels; locale: string };
type SyncKind = "rate" | "undo" | "change" | "settings" | "import" | "backup";
function requestPersistentStorage() {
  if (typeof navigator !== "undefined" && navigator.storage?.persist) {
    void navigator.storage
      .persisted()
      .then((persisted) => (persisted ? true : navigator.storage.persist()))
      .catch(() => false);
  }
}
function diffCharacters(
  typedRaw: string,
  targetRaw: string,
): Array<{ char: string; status: "ok" | "miss" | "extra" }> {
  const a = Array.from(typedRaw.trim()),
    b = Array.from(targetRaw.trim());
  const m = a.length,
    n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0),
  );
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (a[i]!.toLocaleLowerCase("en") === b[j]!.toLocaleLowerCase("en")) {
        dp[i]![j] = 1 + dp[i + 1]![j + 1]!;
      } else {
        dp[i]![j] = Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!);
      }
    }
  }
  const out: Array<{ char: string; status: "ok" | "miss" | "extra" }> = [];
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    if (a[i]!.toLocaleLowerCase("en") === b[j]!.toLocaleLowerCase("en")) {
      out.push({ char: b[j]!, status: "ok" });
      i++;
      j++;
    } else if (dp[i + 1]![j]! >= dp[i]![j + 1]!) {
      out.push({ char: a[i]!, status: "extra" });
      i++;
    } else {
      out.push({ char: b[j]!, status: "miss" });
      j++;
    }
  }
  while (i < m) out.push({ char: a[i++]!, status: "extra" });
  while (j < n) out.push({ char: b[j++]!, status: "miss" });
  return out;
}
function download(name: string, value: string, type = "application/json") {
  const url = URL.createObjectURL(new Blob([value], { type })),
    a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function legacySnapshot(legacy: Record<string, string>, words: Set<string>) {
  const raw: Record<string, string> = {},
    seen = new Set<string>();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)!;
    if (
      !/^english\.(?:progress\.vocab-chunk-|vocabulary\.round\.vocab-chunk-|points\.vocab-chunk-)/.test(
        key,
      )
    )
      continue;
    const value = localStorage.getItem(key);
    if (value === null) continue;
    raw[key] = value;
    try {
      const p = JSON.parse(value);
      for (const prompt of [
        ...(Array.isArray(p.mastered) ? p.mastered : []),
        ...Object.keys(p.lastAnswers ?? {}),
      ])
        if (typeof prompt === "string" && words.has(legacy[prompt]!))
          seen.add(legacy[prompt]!);
    } catch {
      /* Keep the raw value even if an old record is malformed. */
    }
  }
  return { raw, seen: [...seen] };
}
export default function VocabularyApp({ labels: l, locale }: Props) {
  const [catalog, setCatalog] = useState<Catalog | null>(null),
    [data, setData] = useState<Snapshot | null>(null),
    [tab, setTab] = useState<Tab>("home");
  const [now, setNow] = useState(() => new Date()),
    [error, setError] = useState(""),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false),
    [revealed, setRevealed] = useState(false),
    [typed, setTyped] = useState("");
  const [help, setHelp] = useState(false),
    [search, setSearch] = useState(""),
    [filter, setFilter] = useState("all"),
    [from, setFrom] = useState(1),
    [to, setTo] = useState(5000),
    [page, setPage] = useState(0),
    [selection, setSelection] = useState<Set<string>>(new Set());
  const [freeIds, setFreeIds] = useState<string[] | null>(null),
    [freeIndex, setFreeIndex] = useState(0),
    [sessionCount, setSessionCount] = useState(0),
    [pendingBackup, setPendingBackup] = useState<{
      raw: string;
      cards: number;
      reviews: number;
    } | null>(null);
  const [draft, setDraft] = useState<Settings | null>(null),
    [boot, setBoot] = useState(0);
  const [legacyScope, setLegacyScope] = useState<Set<string> | null>(null),
    [offlineReady, setOfflineReady] = useState(false);
  const store = useRef<VocabularyStore | null>(null),
    channel = useRef<BroadcastChannel | null>(null),
    lock = useRef(false),
    started = useRef(Date.now()),
    revealButton = useRef<HTMLButtonElement>(null),
    answerHeading = useRef<HTMLHeadingElement>(null);
  const refresh = useCallback(async () => {
    if (!store.current) return;
    const snapshot = await store.current.load();
    setData(snapshot);
    setNow(new Date());
    return snapshot;
  }, []);
  useEffect(() => {
    let alive = true;
    const controller = new AbortController();
    const db = new VocabularyStore();
    store.current = db;
    requestPersistentStorage();
    void (async () => {
      try {
        const response = await fetch(
          "/api/vocabulary/catalog?v=" + VOCABULARY_CATALOG_VERSION,
          { signal: controller.signal },
        );
        if (!response.ok) throw Error("CONTENT");
        const payload = payloadSchema.parse(await response.json());
        if (new Set(payload.words.map((w) => w.id)).size !== 5000)
          throw Error("CONTENT");
        try {
          const legacy = legacySnapshot(
            payload.legacy,
            new Set(payload.words.map((w) => w.id)),
          );
          await db.archiveLegacy(legacy.raw, legacy.seen);
        } catch (e) {
          if (e instanceof DOMException && e.name === "SecurityError") {
            /* localStorage unavailable; IndexedDB may still work */
          } else throw e;
        }
        const saved = await db.load();
        if (!alive) return;
        setCatalog(payload);
        setData(saved);
        setDraft(saved.settings);
        setError("");
        const params = new URLSearchParams(location.search);
        if (params.get("legacy")) {
          const slug = params.get("legacy")!;
          setLegacyScope(
            new Set(
              Object.entries(payload.legacy)
                .filter(([key]) => key.includes("." + slug + "."))
                .map(([, id]) => id),
            ),
          );
          setTab("library");
        }
        if (params.get("study") === "1" && saved.settings.onboarded)
          setTab("study");
        if ("serviceWorker" in navigator)
          void navigator.serviceWorker
            .register("/vocabulary-sw.js", { scope: "/" })
            .then(() => navigator.serviceWorker.ready)
            .then((registration) => {
              const assets = performance
                .getEntriesByType("resource")
                .map((r) => r.name)
                .filter((url) => new URL(url).pathname.startsWith("/_astro/"));
              registration.active?.postMessage({
                type: "CACHE_VOCABULARY",
                assets,
              });
            })
            .catch(() => {});
      } catch (e) {
        if (alive && !controller.signal.aborted)
          setError(
            e instanceof Error && e.message === "CONTENT"
              ? l.contentError
              : l.storageError,
          );
      }
    })();
    if ("BroadcastChannel" in window) {
      const c = new BroadcastChannel("english-vocabulary");
      channel.current = c;
      c.onmessage = (event: MessageEvent<{ kind?: SyncKind } | string>) => {
        const kind =
          typeof event.data === "object" && event.data?.kind
            ? event.data.kind
            : "rate";
        void refresh().then((snap) => {
          if (snap && (kind === "settings" || kind === "import"))
            setDraft(snap.settings);
        });
        if (kind !== "backup" && kind !== "settings") {
          setRevealed(false);
          setTyped("");
          setNotice(l.stale);
        }
      };
    }
    const timer = setInterval(() => setNow(new Date()), 30_000);
    const wake = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    document.addEventListener("visibilitychange", wake);
    const offline = (e: MessageEvent) => {
      if (e.data?.type === "VOCABULARY_OFFLINE_READY") setOfflineReady(true);
    };
    navigator.serviceWorker?.addEventListener("message", offline);
    return () => {
      alive = false;
      controller.abort();
      clearInterval(timer);
      document.removeEventListener("visibilitychange", wake);
      navigator.serviceWorker?.removeEventListener("message", offline);
      channel.current?.close();
      void db.close();
      store.current = null;
      stopSpeech();
    };
  }, [boot, l.contentError, l.storageError, l.stale, refresh]);
  const notify = (kind: SyncKind = "rate") =>
    channel.current?.postMessage({ kind });
  const perform = async (
    action: () => Promise<unknown>,
    reset = true,
    kind: SyncKind = "rate",
  ) => {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError("");
    try {
      await action();
      await refresh();
      notify(kind);
      requestPersistentStorage();
      if (reset) {
        setRevealed(false);
        setTyped("");
        started.current = Date.now();
      }
      return true;
    } catch (e) {
      const stale =
        e instanceof Error && ["STALE", "LIMIT"].includes(e.message);
      setError(stale ? l.stale : l.storageError);
      if (stale) {
        await refresh();
        setRevealed(false);
        setTyped("");
      }
      return false;
    } finally {
      lock.current = false;
      setBusy(false);
    }
  };
  const words = catalog?.words ?? [],
    settings = data?.settings;
  const wordMap = useMemo(() => new Map(words.map((w) => [w.id, w])), [words]);
  const searchIndex = useMemo(
    () =>
      new Map(
        words.map((w) => [
          w.id,
          `${w.word} ${w.meaning} ${wordTranslation(w, locale).meaning} ${wordTranslation(w, locale).alternatives.join(" ")}`.toLocaleLowerCase(locale),
        ]),
      ),
    [words, locale],
  );
  const daily = useMemo(
    () =>
      data
        ? queue(
            words,
            data.cards,
            data.reviews,
            data.settings,
            now,
            data.legacyWords,
          )
        : [],
    [words, data, now],
  );
  const current = freeIds
    ? freeIds[freeIndex]
      ? emptyCard(freeIds[freeIndex]!, "recognition", now)
      : undefined
    : daily[0];
  const word = current ? wordMap.get(current.wordId) : undefined;
  useEffect(() => {
    setRevealed(false);
    setTyped("");
    started.current = Date.now();
  }, [current?.id, freeIndex, tab]);
  useEffect(() => {
    if (tab !== "study") return;
    if (revealed) answerHeading.current?.focus();
    else revealButton.current?.focus();
  }, [tab, current?.id, revealed]);
  const rate = useCallback(
    async (rating: Grade) => {
      if (!current || !revealed || !store.current || freeIds) return;
      if (
        await perform(() =>
          store.current!.rate(
            current,
            rating,
            crypto.randomUUID(),
            new Date(),
            (Date.now() - started.current) / 1000,
          ),
        )
      )
        setSessionCount((n) => n + 1);
    },
    [current, revealed, freeIds, refresh],
  );
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (
        tab !== "study" ||
        e.repeat ||
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        lock.current
      )
        return;
      const target = e.target as HTMLElement;
      if (
        target.closest('input,textarea,select,[contenteditable="true"]') ||
        (target.closest("button,a") &&
          target !== revealButton.current &&
          target !== answerHeading.current)
      )
        return;
      if ((e.key === " " || e.key === "Enter") && !revealed && current) {
        e.preventDefault();
        setRevealed(true);
      } else if (
        revealed &&
        (/^[1-4]$/.test(e.key) || e.key === " " || e.key === "Enter") &&
        !freeIds
      ) {
        e.preventDefault();
        void rate((/^[1-4]$/.test(e.key) ? Number(e.key) : 3) as Grade);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [tab, revealed, current, freeIds, rate]);
  const audio = (text: string) => {
    if (
      !speakEnglish(text, {
        explicit: true,
        onError: () => setNotice(l.noAudio),
      })
    )
      setNotice(l.noAudio);
  };
  const start = (free: string[] | null = null) => {
    stopSpeech();
    setFreeIds(free);
    setFreeIndex(0);
    setSessionCount(0);
    setTab("study");
    setRevealed(false);
    setNotice("");
  };
  const day = settings ? studyDay(now, settings) : "";
  const today = data?.reviews.filter((r) => !r.undone && r.day === day) ?? [];
  const allCards = Object.values(data?.cards ?? {}),
    activeCards = allCards.filter(
      (c) =>
        !c.suspended && (settings?.production || c.direction === "recognition"),
    );
  const dueCount = activeCards.filter(
    (c) => c.state === 2 && c.due <= now && c.buriedUntil <= now.getTime(),
  ).length;
  const learningCount = activeCards.filter(
    (c) => c.state === 1 || c.state === 3,
  ).length;
  const introduced = new Set(
    allCards.filter((c) => c.reps > 0).map((c) => c.wordId),
  ).size;
  const future = activeCards
    .filter((c)=>c.state!==0)
    .map((c)=>({...c,due:new Date(Math.max(c.due.getTime(),c.buriedUntil))}))
    .filter((c)=>c.due>now)
    .sort((a, b) => a.due.getTime() - b.due.getTime())[0];
  const filtered = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    return words.filter((w) => {
      const a = data?.cards[cardId(w.id, "recognition")],
        b = data?.cards[cardId(w.id, "production")];
      return (
        (!legacyScope || legacyScope.has(w.id)) &&
        w.rank >= from &&
        w.rank <= to &&
        (!term || (searchIndex.get(w.id)?.includes(term) ?? false)) &&
        (filter === "all" ||
          (filter === "unseen" && !(a?.reps || b?.reps)) ||
          (filter === "flagged" && (a?.flagged || b?.flagged)) ||
          (filter === "suspended" && (a?.suspended || b?.suspended)) ||
          (filter === "due" &&
            [a, b].some(
              (c) =>
                c &&
                !c.suspended &&
                c.state !== 0 &&
                c.due <= now &&
                c.buriedUntil <= now.getTime(),
            )))
      );
    });
  }, [words, searchIndex, data, search, from, to, filter, now, legacyScope]);
  useEffect(() => setPage(0), [search, filter, from, to]);
  const date = (value: Date | number) =>
    new Intl.DateTimeFormat(locale, {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: settings?.timeZone,
    }).format(value);
  const valueCard = (
    w: Word,
    direction: "recognition" | "production" = "recognition",
  ) => data?.cards[cardId(w.id, direction)] ?? emptyCard(w.id, direction, now);
  const dump = async () => {
    if (store.current) {
      const raw = await store.current.export();
      download("english-vocabulary-" + day + ".json", raw);
      await refresh();
      notify("backup");
    }
  };
  const readBackup = async (file: File | undefined) => {
    setPendingBackup(null);
    if (!file) return;
    if (file.size > 100_000_000) {
      setError(l.backupSize);
      return;
    }
    try {
      const raw = await file.text(),
        checked = validateBackup(raw, new Set(words.map((w) => w.id)));
      setPendingBackup({
        raw,
        cards: checked.cards.length,
        reviews: checked.reviews.filter((r) => !r.undone).length,
      });
      setError("");
    } catch {
      setError(l.invalidBackup);
    }
  };
  const sense = (w: Word, expanded = false) => {
    const translated = wordTranslation(w, locale);
    return (
    <div className="vocab-answer">
      <p className="vocab-meaning" lang={translated.lang}>
        {translated.meaning}
      </p>
      <p lang="en">{w.definition}</p>
      {w.example && (
        <div className="vocab-example">
          <div className="vocab-example-head">
            <p className="vocab-caption">{l.context}</p>
            <button
              type="button"
              className="vocab-button"
              aria-label={`${l.audioExample}: ${w.word}`}
              onClick={() => audio(w.example!.en)}
            >
              ◖
            </button>
          </div>
          <p lang="en">{w.example.en}</p>
          <p lang={translated.lang}>{translated.example}</p>
          <details>
            <summary>{l.source}</summary>
            <small>{w.example.attribution}</small>
            <p>{l.exampleNote}</p>
          </details>
        </div>
      )}
      {expanded && w.alternatives.length > 0 && (
        <details>
          <summary>{l.otherSenses}</summary>
          {w.alternatives.map((s, i) => (
            <p key={i}>
              <span lang={translated.lang}>{translated.alternatives[i]}</span> ·{" "}
              <span lang="en">{s.definition}</span>
            </p>
          ))}
        </details>
      )}
    </div>
    );
  };
  if (!catalog || !data || !settings)
    return (
      <div className="vocab-shell">
        <p role={error ? "alert" : "status"}>{error || l.loading}</p>
        {error && (
          <>
            <button
              className="button-primary"
              onClick={() => {
                setError("");
                setBoot((n) => n + 1);
              }}
            >
              {l.retry}
            </button>
            <button
              className="vocab-button"
              onClick={() =>
                void store.current
                  ?.export()
                  .then((raw) =>
                    download("english-vocabulary-recovery.json", raw),
                  )
                  .catch(() => setError(l.storageError))
              }
            >
              {l.export}
            </button>
          </>
        )}
      </div>
    );
  const scheduledFirst = new Map<string, (typeof today)[number]>();
  for (const r of [...data.reviews].sort((a, b) => a.at - b.at))
    if (
      !r.undone &&
      r.at>=now.getTime()-30*86400_000 &&
      r.before?.state === 2 &&
      !scheduledFirst.has(r.day + r.cardId)
    )
      scheduledFirst.set(r.day + r.cardId, r);
  const measured = [...scheduledFirst.values()],
    recall =
      measured.length >= 10
        ? Math.round(
            (measured.filter((r) => r.rating !== 1).length / measured.length) *
              100,
          )
        : null;
  return (
    <div
      className="vocab-shell"
      data-vocabulary-app
      data-studying={tab === "study" ? "true" : "false"}
    >
      {tab === "study" ? (
        <header className="vocab-study-heading">
          <h1>{freeIds ? l.free : l.study}</h1>
          <button
            className="vocab-button"
            onClick={() => {
              stopSpeech();
              setDraft(settings);
              setTab("settings");
            }}
          >
            {l.settings}
          </button>
        </header>
      ) : (
        <>
          <header className="vocab-heading">
            <p className="vocab-eyebrow">{l.deck}</p>
            <h1>{l.title}</h1>
            <p>{l.subtitle}</p>
          </header>
          <nav className="vocab-tabs" aria-label={l.deck}>
            {(["home", "library", "stats", "settings"] as const).map((t) => (
              <button
                key={t}
                aria-pressed={tab === t}
                onClick={() => {
                  stopSpeech();
                  setTab(t);
                  setNotice("");
                  setRevealed(false);
                  if (t === "settings") setDraft(settings);
                }}
              >
                {l[t]}
              </button>
            ))}
          </nav>
        </>
      )}
      {error && (
        <p className="vocab-error" role="alert">
          {error}{" "}
          <button
            onClick={() => {
              void refresh();
              setError("");
            }}
          >
            {l.retry}
          </button>
        </p>
      )}
      {notice && (
        <p className="vocab-notice" role="status">
          {notice}
        </p>
      )}
      {legacyScope && tab !== "study" && (
        <p className="vocab-notice">
          {l.legacy} · {legacyScope.size}{" "}
          <button className="vocab-button" onClick={() => setLegacyScope(null)}>
            {l.clearFilter}
          </button>
        </p>
      )}
      {offlineReady && tab !== "study" && (
        <p className="vocab-footnote" data-offline-ready>
          {l.downloaded} ✓
        </p>
      )}
      {tab === "home" && (
        <>
          {!settings.onboarded && (
            <section className="vocab-panel">
              <h2>{l.welcome}</h2>
              <p>{l.welcomeHelp}</p>
              <div className="vocab-rating-guide">
                {(["again", "hard", "good", "easy"] as const).map((key, i) => (
                  <p key={key}>
                    <b>
                      {i + 1} · {l[key]}
                    </b>
                    <br />
                    {l[`${key}Help`]}
                  </p>
                ))}
              </div>
              <button
                className="button-primary"
                disabled={busy}
                onClick={() =>
                  void perform(
                    () =>
                      store.current!.configure({
                        ...settings,
                        onboarded: true,
                      }),
                    true,
                    "settings",
                  ).then((ok) => {
                    if (ok) start();
                  })
                }
              >
                {l.start}
              </button>
            </section>
          )}
          <section className="vocab-panel vocab-daily">
            <div className="vocab-counts">
              {[
                { label: l.new, n: daily.filter((c) => c.state === 0).length },
                { label: l.learning, n: learningCount },
                { label: l.due, n: dueCount },
              ].map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.n}</strong>
                </div>
              ))}
            </div>
            <button className="button-primary" onClick={() => start()}>
              {l.study} →
            </button>
            <p>
              {l.reviewed}: {today.length} · {l.introduced}:{" "}
              {introduced.toLocaleString(locale)} / 5,000
            </p>
            {!daily.length && (
              <p>
                {l.done}
                {future && (
                  <>
                    {" "}
                    {l.nextDue}: {date(future.due)}.
                  </>
                )}
              </p>
            )}
            {activeCards.some(
              (c) =>
                c.state === 2 && c.due.getTime() < now.getTime() - 86400_000,
            ) && <p>{l.backlog}</p>}
          </section>
          {data.totalReviews >= 20 &&
            (!data.lastBackupAt ||
              now.getTime() - data.lastBackupAt > 7 * 86_400_000) && (
              <aside
                className="vocab-panel vocab-backup-nudge"
                data-cy="backup-nudge"
              >
                <p>{l.backupReminder}</p>
                <button className="vocab-button" onClick={() => void dump()}>
                  {l.export}
                </button>
              </aside>
            )}
          {Object.keys(data.legacy).length > 0 && (
            <details className="vocab-panel">
              <summary>{l.legacy}</summary>
              <p>{l.legacyHelp}</p>
              <p>
                {l.legacyCount}: {data.legacyWords.length}
              </p>
              <button className="vocab-button" onClick={() => void dump()}>
                {l.export}
              </button>
            </details>
          )}
          <p className="vocab-footnote">{l.local}</p>
        </>
      )}
      {tab === "study" && (
        <section
          className="vocab-study"
          aria-label={freeIds ? l.free : l.study}
        >
          <div className="vocab-sessionbar">
            <span>
              {freeIds ? l.free : `${l.sessionCount}: ${sessionCount}`}
            </span>
            <button
              className="vocab-button"
              onClick={() => {
                stopSpeech();
                setTab("home");
                setNotice(l.sessionHelp);
              }}
            >
              {l.pause}
            </button>
          </div>
          {word && current ? (
            <>
              <article
                data-cy="flashcard"
                className="vocab-flashcard"
                key={current.id + freeIndex}
              >
                <p className="vocab-caption">
                  {current.direction === "recognition"
                    ? l.recognition
                    : l.production}{" "}
                  · {l.range} {word.rank.toLocaleString(locale)}
                </p>
                {current.direction === "recognition" ? (
                  <h2 lang="en">{word.word}</h2>
                ) : (
                  <>
                    <h2 lang={wordTranslation(word, locale).lang}>{wordTranslation(word, locale).meaning}</h2>
                    <p lang="en">{word.definition}</p>
                    {!revealed && (
                      <input
                        aria-label={l.type}
                        placeholder={l.type}
                        value={typed}
                        onChange={(e) => setTyped(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.repeat) {
                            e.preventDefault();
                            setRevealed(true);
                          }
                        }}
                      />
                    )}
                  </>
                )}
                <p className="vocab-pos">{word.pos}</p>
                {(current.direction === "recognition" || revealed) && (
                  <button
                    className="vocab-button"
                    aria-label={`${l.audio}: ${word.word}`}
                    onClick={() => audio(word.word)}
                  >
                    ◖ {l.audio}
                  </button>
                )}
                {revealed && (
                  <div className="vocab-revealed">
                    <h3 ref={answerHeading} tabIndex={-1}>
                      {l.answer}
                      {current.direction === "production" && (
                        <span lang="en"> · {word.word}</span>
                      )}
                    </h3>
                    {typed && (
                      <>
                        <p>
                          {l.type}: {typed}
                        </p>
                        {current.direction === "production" && typed.trim() && (
                          <div
                            className="vocab-diff"
                            data-cy="production-diff"
                            aria-label={l.diffHint}
                          >
                            {typed.trim().toLocaleLowerCase("en") ===
                            word.word.toLocaleLowerCase("en") ? (
                              <span className="vocab-diff-ok">
                                ✓ {l.exactMatch}
                              </span>
                            ) : (
                              diffCharacters(typed, word.word).map(
                                (part, idx) => (
                                  <span
                                    key={idx}
                                    className={`vocab-diff-${part.status}`}
                                  >
                                    {part.char}
                                  </span>
                                ),
                              )
                            )}
                          </div>
                        )}
                      </>
                    )}
                    {sense(word, true)}
                    <p className="vocab-footnote">{l.selfGrade}</p>
                    {current.lapses >= 8 && (
                      <p className="vocab-notice">{l.attention}</p>
                    )}
                  </div>
                )}
              </article>
              <div className="vocab-actions">
                {!revealed ? (
                  <button
                    data-cy="reveal"
                    ref={revealButton}
                    className="button-primary"
                    disabled={busy}
                    onClick={() => setRevealed(true)}
                  >
                    {l.reveal}
                    <kbd>↵</kbd>
                  </button>
                ) : freeIds ? (
                  <button
                    className="button-primary"
                    onClick={() => {
                      stopSpeech();
                      setFreeIndex((i) => i + 1);
                      setRevealed(false);
                    }}
                  >
                    {l.nextFree} →
                  </button>
                ) : (
                  <div className="vocab-ratings">
                    {(["again", "hard", "good", "easy"] as const).map(
                      (key, i) => (
                        <button
                          data-cy={"rating-" + key}
                          key={key}
                          className={"vocab-rating rating-" + key}
                          disabled={busy}
                          title={l[`${key}Help`]}
                          onClick={() => void rate((i + 1) as Grade)}
                        >
                          <span>
                            <kbd>{i + 1}</kbd> {l[key]}
                          </span>
                          <small>
                            {intervalLabel(
                              preview(current, now, settings)[(i + 1) as Grade]
                                .due,
                              now,
                              locale,
                            )}
                          </small>
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>
              {!freeIds && (
                <div className="vocab-tools">
                  <button
                    disabled={busy || !data.canUndo}
                    onClick={() =>
                      void perform(() => store.current!.undo()).then((ok) => {
                        if (ok) setSessionCount((n) => Math.max(0, n - 1));
                      })
                    }
                  >
                    {l.undo}
                  </button>
                  <button
                    disabled={busy}
                    onClick={() =>
                      void perform(
                        () =>
                          store.current!.change(current, "flag", new Date()),
                        false,
                      )
                    }
                  >
                    {current.flagged ? "★" : "☆"} {l.flag}
                  </button>
                  <button
                    disabled={busy}
                    onClick={() =>
                      void perform(() =>
                        store.current!.change(current, "bury", new Date()),
                      )
                    }
                  >
                    {l.bury}
                  </button>
                  <button
                    disabled={busy}
                    onClick={() =>
                      void perform(() =>
                        store.current!.change(current, "suspend", new Date()),
                      )
                    }
                  >
                    {l.suspend}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="vocab-panel">
              <h2>{freeIds ? l.freeDone : l.done}</h2>
              <p>{l.sessionHelp}</p>
              {future && !freeIds && (
                <p>
                  {l.nextDue}: {date(future.due)}
                </p>
              )}
              <p>
                {l.pending}: {daily.length}
              </p>
              {!freeIds && (
                <button
                  className="vocab-button"
                  disabled={busy || !data.canUndo}
                  onClick={() => void perform(() => store.current!.undo())}
                >
                  {l.undo}
                </button>
              )}
              <button className="button-primary" onClick={() => setTab("home")}>
                {l.home}
              </button>
            </div>
          )}
          <button
            className="vocab-help-button"
            aria-expanded={help}
            onClick={() => setHelp(!help)}
          >
            {help ? l.closeHelp : l.showHelp}
          </button>
          {help && (
            <aside className="vocab-panel">
              <p>{l.welcomeHelp}</p>
              <div className="vocab-rating-guide">
                {(["again", "hard", "good", "easy"] as const).map((key) => (
                  <p key={key}>
                    <b>{l[key]}</b>: {l[`${key}Help`]}
                  </p>
                ))}
              </div>
            </aside>
          )}
        </section>
      )}
      {tab === "library" && (
        <section className="vocab-library">
          <h2>{l.library}</h2>
          <div className="vocab-filters">
            <label>
              {l.search}
              <input
                data-cy="library-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <label>
              {l.state}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {(
                  ["all", "unseen", "due", "flagged", "suspended"] as const
                ).map((f) => (
                  <option key={f} value={f}>
                    {l[f]}
                  </option>
                ))}
              </select>
            </label>
            <div className="vocab-range">
              <label>
                {l.range} ≥
                <input
                  type="number"
                  min={1}
                  max={5000}
                  value={from}
                  onChange={(e) =>
                    setFrom(Math.min(5000, Math.max(1, Number(e.target.value))))
                  }
                />
              </label>
              <label>
                ≤
                <input
                  type="number"
                  min={1}
                  max={5000}
                  value={to}
                  onChange={(e) =>
                    setTo(Math.min(5000, Math.max(1, Number(e.target.value))))
                  }
                />
              </label>
            </div>
          </div>
          <p>
            {filtered.length.toLocaleString(locale)} / 5,000 · {l.selected}:{" "}
            {selection.size}
          </p>
          <div className="vocab-free-intro">
            <h3>{l.free}</h3>
            <p>{l.freeHelp}</p>
            <button
              className="vocab-button"
              disabled={!selection.size && !filtered.length}
              onClick={() =>
                start(
                  selection.size ? [...selection] : filtered.map((w) => w.id),
                )
              }
            >
              {l.practiceRange}
            </button>
            {selection.size > 0 && (
              <button
                className="vocab-button"
                onClick={() => setSelection(new Set())}
              >
                {l.resetRange}
              </button>
            )}
          </div>
          <ul data-cy="word-list" className="vocab-wordlist">
            {filtered.slice(page * 25, page * 25 + 25).map((w) => (
              <li data-word={w.id} key={w.id}>
                <div className="vocab-wordline">
                  <label>
                    <input
                      type="checkbox"
                      aria-label={`${l.selected}: ${w.word}`}
                      checked={selection.has(w.id)}
                      onChange={() =>
                        setSelection((previous) => {
                          const next = new Set(previous);
                          if (next.has(w.id)) next.delete(w.id);
                          else next.add(w.id);
                          return next;
                        })
                      }
                    />
                    <b lang="en">{w.word}</b>
                  </label>
                  <span>
                    #{w.rank} · {w.pos}
                  </span>
                  <button
                    className="vocab-button"
                    aria-label={`${l.audio}: ${w.word}`}
                    onClick={() => audio(w.word)}
                  >
                    ◖
                  </button>
                </div>
                <p lang={wordTranslation(w, locale).lang}>{wordTranslation(w, locale).meaning}</p>
                <details>
                  <summary>{l.definition}</summary>
                  {sense(w, true)}
                  {(["recognition", "production"] as const)
                    .filter((d) => d === "recognition" || settings.production)
                    .map((direction) => {
                      const c = valueCard(w, direction);
                      return (
                        <div
                          data-direction={direction}
                          key={direction}
                          className="vocab-word-schedule"
                        >
                          <p>
                            {l[direction]} ·{" "}
                            {c.suspended
                              ? l.suspended
                              : c.state === 0
                                ? l.unseen
                                : `${l.nextReview}: ${date(c.due)}`}
                          </p>
                          <button
                            disabled={busy}
                            className="vocab-button"
                            onClick={() =>
                              void perform(
                                () =>
                                  store.current!.change(c, "flag", new Date()),
                                false,
                              )
                            }
                          >
                            {c.flagged ? "★" : "☆"} {l.flag}
                          </button>
                          <button
                            disabled={busy}
                            className="vocab-button"
                            onClick={() =>
                              void perform(
                                () =>
                                  store.current!.change(
                                    c,
                                    "suspend",
                                    new Date(),
                                  ),
                                false,
                              )
                            }
                          >
                            {l.suspend}
                          </button>
                        </div>
                      );
                    })}
                </details>
              </li>
            ))}
          </ul>
          {!filtered.length && <p>{l.noMatches}</p>}
          <div className="vocab-pagination">
            <button
              className="vocab-button"
              disabled={page === 0}
              onClick={() => setPage((n) => n - 1)}
            >
              {l.previous}
            </button>
            <span>
              {Math.min(page * 25 + 1, filtered.length)}–
              {Math.min((page + 1) * 25, filtered.length)} / {filtered.length}
            </span>
            <button
              className="vocab-button"
              disabled={(page + 1) * 25 >= filtered.length}
              onClick={() => setPage((n) => n + 1)}
            >
              {l.next}
            </button>
          </div>
        </section>
      )}
      {tab === "stats" && (
        <section className="vocab-panel">
          <h2>{l.stats}</h2>
          <dl className="vocab-statgrid">
            {[
              { label: l.introduced, value: `${introduced} / 5,000` },
              { label: l.reviewed, value: today.length },
              { label: l.allTime, value: data.totalReviews },
              { label: l.points, value: data.points },
              {
                label: l.retention,
                value: recall === null ? l.noData : recall + "%",
              },
            ].map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          <p>{l.retentionHelp}</p>
          <p>{l.pointsHelp}</p>
          <h3>{l.forecast}</h3>
          <ul className="vocab-forecast">
            {Array.from({ length: 7 }, (_, i) => {
              const d = new Date(day + "T12:00:00Z");
              d.setUTCDate(d.getUTCDate() + i);
              const key = d.toISOString().slice(0, 10),
                n = activeCards.filter(
                  (c) => {const scheduled=studyDay(new Date(Math.max(c.due.getTime(),c.buriedUntil)),settings);return c.state!==0&&(i===0?scheduled<=key:scheduled===key);},
                ).length;
              return (
                <li key={key}>
                  <span>{key}</span>
                  <meter
                    min="0"
                    max={Math.max(1, activeCards.length)}
                    value={n}
                  >
                    {n}
                  </meter>
                  <b>{n}</b>
                </li>
              );
            })}
          </ul>
          <div className="vocab-statgrid">
            {(["recognition", "production"] as const).map((direction) => (
              <div key={direction}>
                <h3>{l[direction]}</h3>
                <p>
                  {
                    allCards.filter(
                      (c) => c.direction === direction && c.reps > 0,
                    ).length
                  }{" "}
                  {l.cards}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      {tab === "settings" && draft && (
        <section className="vocab-panel">
          <h2>{l.settings}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!settingsSchema.safeParse(draft).success) {
                setError(l.invalidSettings);
                return;
              }
              void perform(
                () => store.current!.configure(draft),
                false,
                "settings",
              ).then((ok) => {
                if (ok) setNotice(l.saved);
              });
            }}
          >
            <div className="vocab-settings-grid">
              <label>
                {l.newLimit}
                <input
                  type="number"
                  min={0}
                  max={100}
                  required
                  value={draft.newLimit}
                  onChange={(e) =>
                    setDraft({ ...draft, newLimit: Number(e.target.value) })
                  }
                />
              </label>
              <label>
                {l.target} (%)
                <input
                  type="number"
                  min={70}
                  max={97}
                  required
                  value={Math.round(draft.retention * 100)}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      retention: Number(e.target.value) / 100,
                    })
                  }
                />
              </label>
              <label>
                {l.rollover}
                <input
                  type="number"
                  min={0}
                  max={23}
                  required
                  value={draft.rollover}
                  onChange={(e) =>
                    setDraft({ ...draft, rollover: Number(e.target.value) })
                  }
                />
              </label>
              <label>
                {l.zone}
                <input
                  required
                  value={draft.timeZone}
                  onChange={(e) =>
                    setDraft({ ...draft, timeZone: e.target.value })
                  }
                />
              </label>
            </div>
            <label className="vocab-check">
              <input
                type="checkbox"
                checked={draft.production}
                onChange={(e) =>
                  setDraft({ ...draft, production: e.target.checked })
                }
              />
              {l.reverse}
            </label>
            <p>{l.reverseHelp}</p>
            <label className="vocab-check">
              <input
                type="checkbox"
                checked={Boolean(draft.includeBasicWords)}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    includeBasicWords: e.target.checked,
                  })
                }
              />
              {l.includeBasicWords}
            </label>
            <p>{l.includeBasicWordsHelp}</p>
            {data.legacyWords.length > 0 && (
              <label className="vocab-check">
                <input
                  type="checkbox"
                  checked={draft.legacyFirst}
                  onChange={(e) =>
                    setDraft({ ...draft, legacyFirst: e.target.checked })
                  }
                />
                {l.legacyFirst}
              </label>
            )}
            <p>{l.quota}</p>
            <button className="button-primary" disabled={busy}>
              {l.save}
            </button>
          </form>
          <hr />
          <h3>{l.export}</h3>
          <p>{l.local}</p>
          <button
            className="vocab-button"
            onClick={() => void dump().catch(() => setError(l.storageError))}
          >
            {l.export}
          </button>
          <button
            className="vocab-button"
            onClick={() => {
              const quote = (s: string) => '"' + s.replaceAll('"', '""') + '"';
              download(
                "ngsl-gr-5000.csv",
                "\uFEFF" +
                  [
                    [
                      "Word",
                      wordTranslation(words[0]!, locale).lang.toUpperCase(),
                      "Definition",
                      "Example EN",
                      "Example " + wordTranslation(words[0]!, locale).lang.toUpperCase(),
                    ],
                    ...words.map((w) => [
                      w.word,
                      wordTranslation(w, locale).meaning,
                      w.definition,
                      w.example?.en ?? "",
                      wordTranslation(w, locale).example,
                    ]),
                  ]
                    .map((row) => row.map(quote).join(","))
                    .join("\r\n"),
                "text/csv;charset=utf-8",
              );
            }}
          >
            {l.exportCsv}
          </button>
          <h3>{l.import}</h3>
          <p>{l.importHelp}</p>
          <label>
            {l.verifyImport}
            <input
              type="file"
              accept="application/json,.json"
              onChange={(e) => void readBackup(e.target.files?.[0])}
            />
          </label>
          {pendingBackup && (
            <div className="vocab-notice">
              <p>
                {l.importSummary} {pendingBackup.cards} {l.cards} ·{" "}
                {pendingBackup.reviews} {l.reviews}.
              </p>
              <button
                disabled={busy}
                className="button-primary"
                onClick={() =>
                  void perform(
                    async () => {
                      await dump();
                      await store.current!.import(
                        pendingBackup.raw,
                        new Set(words.map((w) => w.id)),
                      );
                      setPendingBackup(null);
                      setTab("home");
                    },
                    true,
                    "import",
                  )
                }
              >
                {l.confirmImport}
              </button>
              <button
                className="vocab-button"
                onClick={() => setPendingBackup(null)}
              >
                {l.cancel}
              </button>
            </div>
          )}
          {offlineReady && <p>{l.offline}</p>}
        </section>
      )}
      <footer className="vocab-footer">
        <a href="/vocabulary/sources">{l.source}</a>
        <span>FSRS · NGSL-GR 1.0 · 5,000</span>
      </footer>
    </div>
  );
}
