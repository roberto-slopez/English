# English Learning Platform — Diseño compartido

> Contrato técnico que **todos** los tracks del plan deben respetar. Si algo
> no aparece aquí, el implementador puede decidirlo, pero los límites entre
> tracks (data layer ↔ UI components ↔ content) son innegociables.

## 0. Stack obligatorio (decidido por el usuario)

- **Astro 6** (server output: `server` o `hybrid` con adapter Node) + `@astrojs/react`
- **React 19** (componentes interactivos `client:load` / `client:visible`)
- **TypeScript** estricto (`tsconfig` extiende `astro/tsconfigs/strict`)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, sin `tailwind.config.js`; config inline en CSS con `@theme`)
- **better-sqlite3** para SQLite embebido (sin servidor externo)
- **pnpm** como package manager
- **lucide-react** como librería de iconos (ligera, SVG, tree-shakeable)

NO usar:
- Next.js, Remix, SvelteKit
- Vite puro sin Astro
- LocalStorage del lado del servidor (solo navegador)
- Frameworks de animación pesados (framer-motion); usar **CSS transitions + keyframes** y/o SVG/Canvas
- Markdown pesado, MDX, i18n de Astro (`astro-i18n`); las traducciones viven en SQLite y se sirven por API
- Tailwind plugins de pago / componentes UI prehechos (shadcn, MUI). Componentes propios.

## 1. Estructura de directorios

```
C:\Users\RobES\source\English\
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── astro.config.mjs
├── data\
│   └── english.db                  # SQLite, gitignored, creado en bootstrap
├── public\
│   └── favicon.svg
├── src\
│   ├── pages\
│   │   ├── index.astro              # landing
│   │   ├── lessons\
│   │   │   ├── index.astro          # listado de lecciones
│   │   │   └── [slug].astro         # una lección
│   │   └── api\
│   │       ├── lessons.ts           # GET /api/lessons
│   │       ├── lessons/[slug].ts    # GET /api/lessons/:slug (con ejercicios)
│   │       └── translate.ts         # GET /api/translate?key=...&locale=...
│   ├── lib\
│   │   ├── db.ts                    # better-sqlite3 singleton
│   │   ├── schema.sql               # DDL fuente (se ejecuta en bootstrap)
│   │   ├── seed.ts                  # pobla lecciones/ejercicios/traducciones iniciales
│   │   ├── lessons-repo.ts          # CRUD lecciones y ejercicios
│   │   ├── translate.ts             # lookup de traducciones con fallback a EN
│   │   └── i18n-locales.ts          # constante de locales soportados
│   ├── components\
│   │   ├── Layout.astro             # layout base, selector de idioma
│   │   ├── LanguageSwitcher.tsx     # componente cliente: cambia locale persistido
│   │   ├── NativeLanguageGate.tsx   # modal inicial: ¿cuál es tu idioma nativo?
│   │   ├── ExerciseRunner.tsx       # orquestador: recibe array de ejercicios, lleva score
│   │   ├── exercises\
│   │   │   ├── FillBlank.tsx
│   │   │   ├── MultipleChoice.tsx
│   │   │   ├── DragDrop.tsx
│   │   │   ├── TrueFalse.tsx
│   │   │   ├── Matching.tsx
│   │   │   └── SentenceReorder.tsx
│   │   ├── feedback\
│   │   │   ├── CorrectFeedback.tsx  # animación de éxito + aliento
│   │   │   ├── WrongFeedback.tsx    # feedback de error + opción de reintentar
│   │   │   └── ProgressBar.tsx      # barra X de N, "ya casi"
│   │   └── TranslationReveal.tsx    # botón/popover que muestra traducción nativa
│   ├── styles\
│   │   └── global.css               # @import "tailwindcss"; @theme {...}
│   └── types.ts                     # tipos compartidos: Lesson, Exercise, Translation
└── docs\
    └── design.md                    # este archivo
```

## 2. Schema SQLite (canónico)

Archivo `src/lib/schema.sql`. Se ejecuta en el primer arranque si la DB no existe.

```sql
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS lessons (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT NOT NULL UNIQUE,        -- "because-so-that", "adverbs-of-frequency", etc.
  title_key    TEXT NOT NULL,               -- clave i18n para el título: "lesson.because.title"
  description_key TEXT NOT NULL,            -- clave i18n para descripción corta
  order_index  INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 1,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS exercises (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_id    INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  order_index  INTEGER NOT NULL,
  type         TEXT NOT NULL CHECK (type IN
                ('fill_blank','multiple_choice','drag_drop','true_false','matching','sentence_reorder')),
  prompt_key   TEXT NOT NULL,               -- clave i18n del enunciado
  data_json    TEXT NOT NULL,               -- payload específico del tipo (ver §3)
  answer_json  TEXT NOT NULL,               -- respuesta(s) correcta(s) en JSON
  explanation_key TEXT,                     -- clave i18n de la explicación post-respuesta
  pro_tip_key  TEXT,                        -- clave i18n del pro tip
  points       INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson ON exercises(lesson_id, order_index);

CREATE TABLE IF NOT EXISTS translations (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  key          TEXT NOT NULL,               -- "lesson.because.title", "exercise.beause.1.prompt", "ui.start"
  locale       TEXT NOT NULL CHECK (locale IN ('en','es','zh','ko','ja')),
  value        TEXT NOT NULL,
  UNIQUE(key, locale)
);
CREATE INDEX IF NOT EXISTS idx_translations_lookup ON translations(key, locale);

CREATE TABLE IF NOT EXISTS native_locale_visit (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  visit_token  TEXT NOT NULL,               -- uuid guardado en localStorage
  locale       TEXT NOT NULL,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
```

**Nota:** El progreso del usuario (qué ejercicio acertó, streak, respuestas) vive
**exclusivamente en localStorage** del navegador. La tabla `native_locale_visit`
es opcional, solo si en el futuro se quiere trackear analítica; en la v1 se
puede omitir para mantener la DB minimal.

## 3. Contrato de `data_json` y `answer_json` por tipo

Todos los JSON son objetos serializados. Tipos TypeScript en `src/types.ts`.

### 3.1 `fill_blank`
```ts
data:    { sentence: string, options?: string[] }  // sentence contiene "____" como placeholder
answer:  { correct: string, caseSensitive?: boolean }
```
- Si hay `options`, se renderiza como dropdown o chips; si no, input de texto.
- Acepta `correct` con trim y normalización de espacios.

### 3.2 `multiple_choice`
```ts
data:    { choices: string[] }   // 2-6 opciones
answer:  { correctIndex: number } // o { correctIndices: number[] } para multi-select
```

### 3.3 `drag_drop`
```ts
data:    { tokens: string[], slots?: string[] }  // tokens: palabras desordenadas
answer:  { correctOrder: number[] }              // permutación: tokens[correctOrder[i]] es la posición i
```
- Si `slots` está presente, se renderiza como "fill the gaps in the sentence";
  si no, el usuario ordena una pila de tokens arrastrándolos.

### 3.4 `true_false`
```ts
data:    { statement: string }
answer:  { correct: boolean }
```

### 3.5 `matching`
```ts
data:    { left: string[], right: string[] }   // right está en orden aleatorio por defecto
answer:  { pairs: { leftIndex: number, rightIndex: number }[] }
```

### 3.6 `sentence_reorder`
```ts
data:    { tokens: string[] }                  // palabras en orden incorrecto
answer:  { correctOrder: number[] }
```
- Similar a drag_drop pero el contexto es explícitamente "forma una oración".

## 4. Contrato de i18n

- **Locales soportados:** `en` (base), `es`, `zh`, `ko`, `ja`.
- **Resolución de una clave:** `SELECT value FROM translations WHERE key = ? AND locale = ?`;
  si no hay fila, fallback a `locale='en'`. Si tampoco, devolver la clave literal
  (en consola `console.warn` durante dev, silencioso en build).
- **API endpoint:** `GET /api/translate?key=lesson.because.title&locale=es`
  → `{ key, locale, value }`. Cacheable 1h.
- **Para el cliente:** una función `t(key, locale)` en `src/lib/translate.ts`
  se llama desde el backend durante el render de la página (Astro es SSR) y
  se hidrata con los strings ya traducidos.
- **Convención de keys:**
  - `ui.*` → cadenas de UI (botones, labels): `ui.start`, `ui.check`, `ui.next`,
    `ui.retry`, `ui.correct`, `ui.wrong`, `ui.explanation`, `ui.pro_tip`,
    `ui.translate`, `ui.choose_language`
  - `lesson.<slug>.title`, `lesson.<slug>.description`
  - `lesson.<slug>.intro` → párrafo introductorio largo con explicación gramatical
  - `exercise.<slug>.<n>.prompt` → enunciado
  - `exercise.<slug>.<n>.explanation` → explicación post-respuesta
  - `exercise.<slug>.<n>.pro_tip` → pro tip
  - Para `data_json` y `answer_json` que **contienen strings traducibles**
    (ej. las opciones de multiple choice), se permiten **claves anidadas**
    con el formato `{{i18n:lesson.<slug>.<n>.choice.0}}`. Una función
    `resolveI18n(json, locale)` recorre el objeto/array y reemplaza.

## 5. UX de la lección (flujo canónico)

1. Usuario entra a `/lessons/<slug>`.
2. Ve **intro gramatical** con la explicación (`lesson.<slug>.intro`) y opcional
   tabla de referencia (verbos irregulares, etc.).
3. Barra de progreso: "Exercise 3 of 20".
4. Por cada ejercicio:
   - Se renderiza el componente correspondiente al `type`.
   - Hay un botón "Check" (valida la respuesta) y, si es correcta, "Next".
   - Al validar: animación de éxito (checkmark animado vía CSS/SVG) o de
     error (shake + color rojo suave). Sin sonidos por defecto.
   - Al fallar: muestra la respuesta correcta, la explicación y el pro tip.
     Botón "Try again" reinicia el ejercicio; "Skip" avanza.
   - Al acertar: muestra brevemente feedback positivo ("Nice!", "Awesome!")
     antes de habilitar "Next".
5. Al terminar: pantalla de resumen con score, mensaje de aliento y botones
   "Retry lesson" o "Back to lessons".
6. **Botón flotante "🌐 Translate"** (icono lucide `Languages`): al pulsarlo,
   revela la traducción al idioma nativo del usuario (guardado en localStorage)
   de las palabras/frases clave del ejercicio actual. Si una palabra no tiene
   traducción al locale nativo, se muestra en inglés.
7. **Primera visita:** modal `NativeLanguageGate` que pregunta "¿Cuál es tu
   idioma nativo?" y guarda la respuesta en `localStorage.english.nativeLocale`.
   Botón "Maybe later" lo cierra sin guardar.

## 6. Persistencia en localStorage

Claves (todas con prefijo `english.`):

```
english.nativeLocale        : 'es' | 'zh' | 'ko' | 'ja' | null
english.uiLocale            : 'en' | 'es' | 'zh' | 'ko' | 'ja'  (default 'en')
english.progress.<slug>     : {
                                completed: number,
                                total: number,
                                streak: number,
                                lastAnswers: { [exerciseId]: 'correct'|'wrong'|'skipped' }
                              }
english.lessonAnswers.<slug>: { [exerciseId]: { attempts: number, lastAnswer: any } }
```

## 7. Animaciones y feedback

- **Correcto:** SVG checkmark que se dibuja con `stroke-dasharray` + CSS animation
  (~600ms). Confetti minimalista con 8-12 partículas CSS que caen.
- **Incorrecto:** shake horizontal del card (3 oscilaciones, 300ms total).
  Card se pone en rojo suave, luego vuelve al normal.
- **Progreso:** barra que se llena con `transition: width 400ms ease-out`.
- **Traducción revelada:** slide-down suave del panel (200ms).
- **Sin** librerías de animación externa. Todo CSS + SVG inline.

## 8. Estilo visual (Tailwind v4)

- **Paleta por defecto** (se sobreescribe en `@theme`):
  - `primary`: indigo 600 (`#4f46e5`)
  - `success`: emerald 500
  - `danger`: rose 500
  - `surface`: slate 50 (light) / slate 900 (dark)
- **Tipografía:** system stack + `font-sans` por defecto; `font-display` para
  títulos usando `Inter` desde `@fontsource/inter` (auto-hospedado).
- **Modo oscuro:** por defecto `prefers-color-scheme`; toggleable en header.
- **Espaciado:** generoso. Cards con `p-6` o `p-8`, gap-4 entre opciones.
- **Border radius:** `rounded-2xl` para cards, `rounded-lg` para botones.

## 9. Primeras 5 lecciones (contenido obligatorio)

Orden, slug, número de ejercicios, distribución por tipo (referencia; la pista
de contenido puede ajustar si lo justifica):

1. **`because-so-that`** (20 ej.) — uso de "because" y "so that" para causa/resultado.
   - Mezcla: 6 fill_blank, 6 multiple_choice, 4 drag_drop, 2 true_false, 2 sentence_reorder.
2. **`adverbs-of-frequency`** (20 ej.) — never, rarely, sometimes, usually, always,
   + occasionally, hardly ever, often.
   - Mezcla: 5 fill_blank, 6 multiple_choice, 3 drag_drop, 4 true_false, 2 sentence_reorder.
3. **`time-expressions`** (20 ej.) — once, twice, three times, every day/week/month,
   +频率: how often do you...?
   - Mezcla: 6 fill_blank, 5 multiple_choice, 4 drag_drop, 2 true_false, 3 sentence_reorder.
4. **`did-and-was`** (20 ej. en 2 partes) — did/didn't + was/wasn't, were/weren't.
   - Parte A (10): did/didn't en preguntas y negaciones.
   - Parte B (10): was/were, wasn't/weren't, preguntas y respuestas cortas.
5. **`simple-past-and-past-continuous`** (40 ej.) — pasado simple regular e irregular
   + pasado continuo, con explicación de verbos irregulares en tabla.
   - Distribución sugerida: 12 fill_blank, 10 multiple_choice, 6 drag_drop,
     4 true_false, 4 sentence_reorder, 4 matching (parejas base/participio).

Cada ejercicio debe tener:
- Enunciado (`prompt_key`).
- Explicación post-respuesta (`explanation_key`) — 1-3 frases cortas.
- Pro tip (`pro_tip_key`) — 1 frase con un truco para recordar.
- Respuesta correcta en `answer_json`.
- Variedad: no repetir el mismo patrón consecutivamente.

## 10. Reglas críticas

- **No loguear ni persistir** respuestas correctas en texto plano al cliente:
  se envía el hash o el JSON completo por API; nunca exponer todas las
  respuestas de la lección en una sola request GET (sí, una por lección, con
  sus ejercicios). Es contenido público, no hay problema de seguridad aquí.
- **No usar** `dangerouslySetInnerHTML` para traducciones (XSS si alguna
  traducción contiene HTML). Si hace falta formato, usar **Markdown ligero**
  procesado con `marked` o **React children con `<strong>` permitido por
  prefijo `**`**, parseado de forma segura.
- **Todas las traducciones** deben existir en los 5 locales antes de marcar
  una lección como `is_published = 1`. El seed inicial debe completar esto
  para las 5 lecciones.
- **El botón "🌐 Translate"** solo aparece si `english.nativeLocale` está seteado
  Y es distinto del locale actual de la UI.
- **`unpkg`/`cdn` no permitidos**: todo bundled. Iconos `lucide-react` se importan
  por nombre desde la librería (tree-shaking automático).

## 11. Smoke checks de aceptación

Antes de declarar una lección funcional:
- `pnpm dev` levanta sin errores.
- Visitar `/lessons/because-so-that` muestra intro + 20 ejercicios.
- Responder correctamente dispara feedback verde y avanza.
- Responder incorrectamente muestra explicación + pro tip + permite reintentar.
- Cambiar el idioma nativo en el modal cambia la salida del botón "Translate".
- Progreso sobrevive a un refresh (localStorage).
- `pnpm build` termina sin errores TypeScript.
