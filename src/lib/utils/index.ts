// import type { Action } from 'svelte/action';
// import { smoothScroll } from './smoothScroll.utils';

export * from './date.utils';
export * from './redirect.utils';
export * from './smoothScroll.utils';
export * from './string.utils';
export * from './smoothScroll.utils';
export * from './share.utils';

export function getLocaleName(uiLocale: string) {
	// create a DisplayNames instance for language‐type codes
	const languageNames = new Intl.DisplayNames([uiLocale], { type: 'language' });
	return languageNames.of(uiLocale) || uiLocale;
}
