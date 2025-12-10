// src/routes/dashboard/care/+page.server.ts
import { AuthService } from '$services/auth.service';
import { error, redirect } from '@sveltejs/kit';
import { dashboardCommonActions } from '..';
import type { PageServerLoad } from '../$types';
import { localizeHref } from '$paraglide/runtime';
import { Product } from '$types/products.types';
import type { CompanyContext } from '$types/caresync-machines.types';

export const actions = dashboardCommonActions;

export const load: PageServerLoad = async (event) => {
	// Using 'event' as the parameter name

	// 1. Get the user identifier directly from event.locals.user
	//    We assume event.locals.user is set to the UUID string by hooks.server.ts
	const userData = event.locals.user;

	if (!userData) {
		throw redirect(302, localizeHref('/login'));
	}

	// --- Security and Context Lookup ---
	try {
		// 3. Fetch all available company contexts using the secure UUID (userId)
		//    This uses the service function (with the fixed knex query) to check permissions.
		const availableContexts: CompanyContext[] = await AuthService.getUserCompanyContexts(
			userData.id,
			Product.CARE
		);

		if (availableContexts.length === 0) {
			// User has no company access for CARE.
			throw redirect(302, localizeHref('/dashboard'));
		}

		console.log('AC', availableContexts);

		return { contexts: availableContexts };

		// 4. Select a default company and redirect to the canonical, protected page
		// const defaultCompanyId = availableContexts[0].company_id;

		// Redirect to the first protected page, passing the context via URL parameter
		// throw redirect(302, localizeHref(`/dashboard/care/devices?companyId=${defaultCompanyId}`));
	} catch (e) {
		// Catch database or service errors (including invalid UUID format if userId was malformed)
		console.error('Context Load Error:', e);
		// Throw a SvelteKit error for server failures
		throw error(500, 'Failed to load company contexts due to an internal error.');
	}
};
