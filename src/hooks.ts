// // src/hooks.ts

import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$paraglide/runtime';

export const reroute: Reroute = ({ url }) => {
	const delocalizedPath = deLocalizeUrl(url).pathname;

	return delocalizedPath;
};
