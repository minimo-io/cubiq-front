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
	const userData = event.locals.user;

	if (!userData) {
		throw redirect(302, localizeHref('/login'));
	}

	try {
		// Fetch all available company contexts for this user
		const availableContexts: CompanyContext[] = await AuthService.getUserCompanyContexts(
			userData.id,
			Product.CARE
		);

		if (availableContexts.length === 0) {
			// User has no company access for CARE
			throw redirect(302, localizeHref('/dashboard'));
		}

		// Try to load the stored context from cookie
		let activeContext: CompanyContext | undefined;
		const storedContextCookie = event.cookies.get('user_context');

		if (storedContextCookie) {
			try {
				const parsed: CompanyContext = JSON.parse(decodeURIComponent(storedContextCookie));
				// Validate that the stored context is still in the user's available contexts
				const isValid = availableContexts.some((c) => c.company_id === parsed.company_id);
				if (isValid) {
					activeContext = parsed;
				}
			} catch (err) {
				console.error('Failed to parse user context cookie:', err);
			}
		}

		// If no valid stored context, default to the first available context
		if (!activeContext) {
			activeContext = availableContexts[0];
		}

		return {
			contexts: availableContexts,
			activeContext
		};
	} catch (e) {
		console.error('Context Load Error:', e);
		throw error(500, 'Failed to load company contexts due to an internal error.');
	}
};
