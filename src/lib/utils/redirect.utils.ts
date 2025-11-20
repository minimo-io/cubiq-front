import { localizeHref } from '$paraglide/runtime';

export function redirectLocale(newLocale: string, path: string = '/') {
	window.location.href = localizeHref(path, { locale: newLocale });
}

export function redirectHref(href: string) {
	window.location.href = href;
}
