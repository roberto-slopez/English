import { useId, type ReactNode } from 'react';
import { BookOpen, CheckCircle2, HelpCircle, Trophy, X } from 'lucide-react';
import Dialog from './Dialog.js';
import { uiText } from '../lib/ui-labels.js';

interface Props {
  title: string;
  intro: string;
  slug: string;
  onStart: () => void;
  onClose?: () => void;
  isMidLesson?: boolean;
  uiLocale?: string;
}

function formatted(text: string): ReactNode {
  return text.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export default function LessonIntroModal({ title, intro, onStart, onClose, isMidLesson = false, uiLocale = 'en' }: Props) {
  const id = useId();
  const close = onClose ?? onStart;
  const hints = [
    { icon: CheckCircle2, title: 'instantFeedback', description: 'instantFeedbackHelp' },
    { icon: Trophy, title: 'pointsStreaks', description: 'pointsStreaksHelp' },
    { icon: HelpCircle, title: 'helpTranslation', description: 'helpTranslationHelp' },
  ] as const;

  return (
    <Dialog open onClose={close} labelledBy={id}>
      <div className="dialog-layout">
        <header className="dialog-header">
          <div className="min-w-0">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {uiText(uiLocale, 'guide')}
            </p>
            <h2 id={id} className="font-display text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
          </div>
          <button type="button" onClick={close} className="touch-target shrink-0 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" aria-label={uiText(uiLocale, 'close')}>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>
        <div className="dialog-body space-y-6">
          <section aria-labelledby={id + '-concept'}>
            <h3 id={id + '-concept'} className="mb-3 text-base font-bold">{uiText(uiLocale, 'grammar')}</h3>
            {intro.includes('<') ? (
              <div
                className="text-base leading-relaxed text-slate-700 dark:text-slate-200 [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:font-bold [&_li]:my-1 [&_p]:my-2 [&_strong]:font-bold [&_ul]:my-2 [&_ul]:list-inside [&_ul]:list-disc"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
            ) : <p className="whitespace-pre-line text-base leading-relaxed text-slate-700 dark:text-slate-200">{formatted(intro)}</p>}
          </section>
          <section aria-labelledby={id + '-how'}>
            <h3 id={id + '-how'} className="mb-3 text-base font-bold">{uiText(uiLocale, 'howPractice')}</h3>
            <ul className="space-y-4">
              {hints.map(({ icon: Icon, title: key, description }) => (
                <li key={key} className="flex items-start gap-3">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-primary-700 dark:text-primary-300" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{uiText(uiLocale, key)}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{uiText(uiLocale, description)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <footer className="dialog-footer flex justify-end">
          <button type="button" data-dialog-autofocus onClick={isMidLesson ? close : onStart} className="button-primary w-full sm:w-auto">
            {uiText(uiLocale, isMidLesson ? 'resumePractice' : 'startPractice')}
          </button>
        </footer>
      </div>
    </Dialog>
  );
}
