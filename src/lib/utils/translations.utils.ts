import { m } from '$paraglide/messages';

export function getTranslationFromCode(code: string) {
	return typeof m[code] == 'function' ? m[code]() : code;
}
