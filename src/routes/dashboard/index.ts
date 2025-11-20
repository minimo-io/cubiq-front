import { postgreService } from '$databases';
import { localizeHref } from '$paraglide/runtime';
import { AuthService } from '$services/auth.service';
import { redirect, type Actions, type RequestEvent } from '@sveltejs/kit';

// Global logout action for dashboard
export const logoutAction = async ({ cookies }: RequestEvent) => {
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
	// cookies.delete('session', { path: '/' });
	redirect(303, localizeHref('/login'));
};

export const dashboardCommonActions = {
	logout: logoutAction
} satisfies Actions;
