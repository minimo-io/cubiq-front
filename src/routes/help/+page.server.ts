import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { localizeHref } from '$paraglide/runtime';

export const load: PageServerLoad = async () => {
	redirect(307, localizeHref('/soon'));
};
