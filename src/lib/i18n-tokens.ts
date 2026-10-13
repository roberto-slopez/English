// Shared token grammar for runtime resolution and coverage validation.
export const I18N_TOKEN = /\{\{i18n:([a-zA-Z0-9_.\-]+)\}\}/g;

export function collectI18nTokens(value: unknown, out: Set<string>): void {
  if (typeof value === 'string') {
    for (const match of value.matchAll(I18N_TOKEN)) out.add(match[1]!);
  } else if (Array.isArray(value)) {
    value.forEach(item => collectI18nTokens(item, out));
  } else if (value !== null && typeof value === 'object') {
    Object.values(value).forEach(item => collectI18nTokens(item, out));
  }
}
