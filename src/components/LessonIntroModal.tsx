'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Trophy, HelpCircle, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  intro: string;
  slug: string;
  onStart: () => void;
  onClose?: () => void;
  isMidLesson?: boolean;
  uiLocale?: string;
}

export default function LessonIntroModal({
  title,
  intro,
  slug,
  onStart,
  onClose,
  isMidLesson = false,
  uiLocale = 'es',
}: Props) {
  const isEs = uiLocale === 'es';

  // Format intro markdown-like bold syntax (**word**) into <strong> tags
  const renderFormattedIntro = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-primary-600 dark:text-primary-400">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="italic text-slate-800 dark:text-slate-200">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:p-8"
        >
          {/* Close button if opened mid-lesson */}
          {isMidLesson && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          )}

          {/* Header Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-950/60 dark:text-primary-300">
            <BookOpen className="h-4 w-4" />
            <span>{isEs ? 'Guía y Reglas de la Lección' : 'Lesson Guide & Rules'}</span>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {title}
          </h2>

          {/* Grammar Concept Box */}
          <div className="mb-6 max-h-[50vh] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50/90 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300 sm:p-5">
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
              <Sparkles className="h-4 w-4 text-amber-500" />
              {isEs ? 'Concepto Gramatical y Guía de Respuestas' : 'Grammar Concept & Response Guide'}
            </h3>
            {intro && intro.includes('<') ? (
              <div
                className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 dark:prose-invert dark:text-slate-300 [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-sm [&_h3]:font-bold [&_h3]:text-primary-700 dark:[&_h3]:text-primary-400 [&_li]:my-1 [&_p]:my-2 [&_ul]:my-2"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
            ) : (
              <p className="whitespace-pre-line">{renderFormattedIntro(intro)}</p>
            )}
          </div>

          {/* How to Play / Rules List */}
          <div className="mb-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {isEs ? '¿Cómo funciona este repaso?' : 'How this practice works'}
            </h4>

            <div className="grid gap-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-xs dark:border-slate-800/80 dark:bg-slate-800/40">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {isEs ? 'Responde y comprueba instante' : 'Instant Feedback'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isEs
                      ? 'Obtén verificación inmediata y explicaciones en cada pregunta.'
                      : 'Get real-time verification and explanations.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-xs dark:border-slate-800/80 dark:bg-slate-800/40">
                <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {isEs ? 'Puntos y Rachas' : 'Points & Streaks'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isEs
                      ? 'Gana más puntos acertando al primer intento y acumulando racha.'
                      : 'Earn maximum points on first attempts and streak hits.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-xs dark:border-slate-800/80 dark:bg-slate-800/40">
                <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {isEs ? 'Botón de Traducción y Reglas' : 'Help & Translation'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isEs
                      ? 'Usa el botón de traducción si tienes dudas o presiona (?) Reglas en la barra superior.'
                      : 'Tap translate or press (?) Rules in the header anytime.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={isMidLesson && onClose ? onClose : onStart}
              className="touch-target flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-6 py-4 text-base font-bold text-white shadow-md transition hover:bg-primary-700 active:scale-[0.99] dark:bg-primary-500 dark:hover:bg-primary-600 sm:w-auto"
            >
              <span>
                {isMidLesson
                  ? isEs
                    ? 'Continuar repaso'
                    : 'Resume practice'
                  : isEs
                  ? '¡Empezar repaso!'
                  : 'Start Practice!'}
              </span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
