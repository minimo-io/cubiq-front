// // src/lib/stores/UserContext.state.svelte.ts
// import type { CompanyContext } from '$types/caresync-machines.types';

// // eslint-disable-next-line prefer-const
// export let userContextState = $state<{
// 	contexts: CompanyContext[];
// 	active: CompanyContext | undefined;
// }>({
// 	contexts: [],
// 	active: undefined
// });

// src/lib/stores/UserContext.state.svelte.ts
import type { CompanyContext } from '$types/care/care.machines.types';
import { browser } from '$app/environment';

const COOKIE_NAME = 'user_context';

function getContextFromCookie(): CompanyContext | undefined {
	if (!browser) return undefined;
	const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
	if (!match) return undefined;
	try {
		return JSON.parse(decodeURIComponent(match[2]));
	} catch {
		return undefined;
	}
}

export function saveContextToCookie(context: CompanyContext | undefined) {
	if (!browser || !context) return;
	document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(context))}; path=/; max-age=${60 * 60 * 24 * 30}`;
}

export const userContextState = $state<{
	contexts: CompanyContext[];
	active: CompanyContext | undefined;
}>({
	contexts: [],
	active: getContextFromCookie()
});
