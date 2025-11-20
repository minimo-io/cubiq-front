import type { PageServerLoad } from '../$types';
import { dashboardCommonActions } from '../..';
import { Product } from '$types/products.types';
import { localizeHref } from '$paraglide/runtime';
import { redirect } from '@sveltejs/kit';

export const actions = dashboardCommonActions;

export const load: PageServerLoad = async () => {
	redirect(302, localizeHref(`/dashboard/${Product.CARE.toLowerCase()}`));
};
