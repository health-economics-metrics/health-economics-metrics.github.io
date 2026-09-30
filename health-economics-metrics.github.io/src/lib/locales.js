// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`$lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-us': 'English - United States',
	'en-gb': 'English - Great Britain',
	'en-gb-oxendict': 'English - Great Britain - Oxford',
	'en-001': 'English',
	'en-150': 'English - Europe',
	'de-de': 'Deutsch - Deutschland',
	'it-it': 'Italiano - Italia',
	'ja-jp': '日本語 - 日本',
	'ko-kr': '한국어 - 대한민국',
	'nl-nl': 'Nederlands - Nederland',
	'es-es': 'Español - España',
	'es-001': 'Español',
	'fr-fr': 'Français - France',
	'fr-001': 'Français',
	'ru-ru': 'Русский - Россия',
	'ru-001': 'Русский',
	'uk-ua': 'Українська - Україна',
	'zh-cn': '中文 - 中国大陆',
	'zh-001': '中文',
	'ar-eg': 'العربية - مصر',
	'ar-001': 'العربية',
	'cy-gb': 'Cymraeg - Y Deyrnas Unedig',
	'cy-001': 'Cymraeg',
	'hi-001': 'हिन्दी',
	'hi-in': 'हिन्दी - भारत',
	'bn-001': 'বাংলা',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'pt-001': 'Português',
	'pt-pt': 'Português - Portugal',
	'id-001': 'Bahasa Indonesia',
	'id-id': 'Bahasa Indonesia - Indonesia',
	'ur-001': 'اردو',
	'ur-pk': 'اردو - پاکستان'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}
