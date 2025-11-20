import { dashboardCommonActions } from '..';
import type { PageServerLoad } from '../$types';

export const actions = dashboardCommonActions;

export const load: PageServerLoad = async () => {
	// if (!productState.active) {
	//     productState.active = Product.CARE;
	// }
	// redirect(302, localizeHref(`/dashboard/${productState.active.toLowerCase()}`));
	// error(404, 'Not found');
};
