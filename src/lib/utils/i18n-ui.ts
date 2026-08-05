/**
 * UI button & hint labels per locale (en, es, zh, ko, ja) for exercise components.
 */

export function getCheckLabel(locale?: string): string {
  switch (locale) {
    case 'en':
      return 'Check';
    case 'zh':
      return '检查';
    case 'ko':
      return '확인';
    case 'ja':
      return '確認';
    case 'es':
    default:
      return 'Comprobar';
  }
}

export function getSelectOptionLabel(locale?: string): string {
  switch (locale) {
    case 'en':
      return 'Select an option:';
    case 'zh':
      return '选择一个选项：';
    case 'ko':
      return '옵션을 선택하세요:';
    case 'ja':
      return 'オプションを選択してください：';
    case 'es':
    default:
      return 'Selecciona una opción:';
  }
}

export function getSelectAllCorrectLabel(locale?: string): string {
  switch (locale) {
    case 'en':
      return 'Select all correct options';
    case 'zh':
      return '选择所有正确的选项';
    case 'ko':
      return '모든 올바른 옵션을 선택하세요';
    case 'ja':
      return '正しいオプションをすべて選択してください';
    case 'es':
    default:
      return 'Selecciona todas las opciones correctas';
  }
}

export function getEnterOrCheckHint(locale?: string): string {
  const checkBtn = getCheckLabel(locale);
  switch (locale) {
    case 'en':
      return `Press Enter or tap ${checkBtn}`;
    case 'zh':
      return `按 Enter 或点击${checkBtn}`;
    case 'ko':
      return `Enter를 누르거나 ${checkBtn}를 누르세요`;
    case 'ja':
      return `Enter を押すか [${checkBtn}] をタップ`;
    case 'es':
    default:
      return `Presiona Enter o toca ${checkBtn}`;
  }
}
