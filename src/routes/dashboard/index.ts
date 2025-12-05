// import { page } from '$app/state';
import { postgreService } from '$databases';
import { localizeHref } from '$paraglide/runtime';
import { AuthService } from '$services/auth.service';
import { redirect, type Actions, type RequestEvent } from '@sveltejs/kit';

// Global logout action for dashboard
export const logoutAction = async ({ cookies, request }: RequestEvent) => {
	const sessionToken = cookies.get('session');

	if (sessionToken) {
		try {
			// Remove session from database
			await postgreService.execute(async (knex) => {
				return await knex('Fw_User_Sessions').where('session_token', sessionToken).del();
			});
		} catch (error) {
			// Log error but don't prevent logout
			console.error('Error removing session from database:', error);
		}
	}

	AuthService.userClearState(cookies);

	const form = await request.formData();
	let redirectTo = form.get('redirect_to')?.toString() ?? localizeHref('/login');

	// ✅ Add the parameter here, nothing else changed
	const url = new URL(redirectTo, request.url);
	url.searchParams.set('logged_out', '1');
	redirectTo = url.pathname + url.search;

	console.log(redirectTo);
	redirect(303, redirectTo);
};

export const dashboardCommonActions = {
	logout: logoutAction
} satisfies Actions;
