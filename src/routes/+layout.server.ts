import type { LayoutServerLoad } from './$types';
// import { AuthService } from '$services';

export const load: LayoutServerLoad = async (params) => {
	const user = params.locals.user;
	return {
		user
	};
};
