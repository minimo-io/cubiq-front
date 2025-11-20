// src/hooks.server.ts
import { redirect, type Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from './paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';
import { deLocalizeUrl, localizeHref } from '$paraglide/runtime';
import { AuthService } from '$services/auth.service';
// import { deLocalizeUrl, localizeHref } from '$paraglide/runtime';
// import { redirect } from '@sveltejs/kit';
// import { getLocale } from '$paraglide/runtime';

// Auth middleware
const authHandle: Handle = async ({ event, resolve }) => {
	const userState = await AuthService.userGetState(event.cookies);

	// Get auth token from cookies
	// const authToken = event.cookies.get('session');
	const authToken = userState.session;

	// // Make it available to the rest of the application
	if (authToken) {
		event.locals.session = authToken;
		try {
			if (userState.user) {
				event.locals.user = userState.user;
			}
		} catch (e) {
			console.error(`Failed to parse user data: ${e}`);
		}
	}
	// console.log('USER_STATE_FROM_HOOKS', userState);
	// Check if the route requires authentication and redirect if needed
	const pathDelocalized = deLocalizeUrl(event.url.href);

	if (AuthService.isProtectedRoute(pathDelocalized.pathname) && !event.locals.session) {
		// 	// Redirect to login page with return URL as a query parameter
		throw redirect(
			303,
			localizeHref(`/login?returnUrl=${encodeURIComponent(pathDelocalized.pathname)}`)
		);
	}

	return resolve(event);
};

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});

// export const handle: Handle = paraglideHandle;
export const handle = sequence(authHandle, paraglideHandle);
