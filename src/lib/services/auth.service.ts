// src/lib/services/auth.service.ts
import bcrypt from 'bcrypt';
import type { Cookies } from '@sveltejs/kit';
import { postgreService } from '$lib/databases';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import { getUsername } from '$utils';
// import { browser } from '$app/environment';

export interface User {
	id: string;
	name: string;
	email?: string;
	email_verified: boolean;
}
export interface UserState {
	session: string | null;
	user: string | null;
}

// // Create a store for auth state that's backed by cookies
// const createAuthStore = () => {
// 	// Initialize store from cookie if in browser
// 	const initialValue: AuthState = { token: null, user: null };

// 	if (browser) {
// 		const token = Cookies.get('auth_token');
// 		const userStr = Cookies.get('auth_user');

// 		if (token) {
// 			initialValue.token = token; // Now TypeScript knows token can be string
// 			try {
// 				initialValue.user = userStr ? JSON.parse(userStr) : null;
// 			} catch (e) {
// 				console.error(`Failed to parse user data from cookie: ${e}`);
// 			}
// 		}
// 	}

// 	const { subscribe, set } = writable<AuthState>(initialValue);

// 	return {
// 		subscribe,
// 		setAuth: (token: string, user: any) => {
// 			if (browser) {
// 				// Set cookies with appropriate options
// 				Cookies.set('auth_token', token, {
// 					expires: 7,
// 					path: '/',
// 					sameSite: 'strict',
// 					secure: window.location.protocol === 'https:'
// 				});

// 				if (user) {
// 					Cookies.set('auth_user', JSON.stringify(user), {
// 						expires: 7,
// 						path: '/',
// 						sameSite: 'strict',
// 						secure: window.location.protocol === 'https:'
// 					});
// 				}
// 			}

// 			set({ token, user });
// 		},
// 		clearAuth: () => {
// 			if (browser) {
// 				Cookies.remove('auth_token', { path: '/' });
// 				Cookies.remove('auth_user', { path: '/' });
// 			}

// 			set({ token: null, user: null });
// 		}
// 	};
// };

export const AuthService = {
	// Define paths that require authentication
	protectedRoutes: ['/dashboard'],

	isProtectedRoute(path: string): boolean {
		return this.protectedRoutes.some((route) => path.startsWith(route));
	},

	// Create a user/password user
	// async createEmailUser(email: string, password: string) {
	// 	const hashedPassword = await bcrypt.hash(password, 10);

	// 	return await postgreService.execute(async (knex) => {
	// 		const [user] = await knex('users')
	// 			.insert({
	// 				email,
	// 				password_hash: hashedPassword
	// 			})
	// 			.returning(['id', 'email', 'email_verified']);

	// 		return user;
	// 	});
	// },

	async getUserPermissionList(session: string): Promise<string[]> {
		// Get user from db and not from cookies/state for security reasons (while still using the session)
		// just as an extra security measure
		const user = await this.getUserFromDbSession(session);
		let userPermissions: string[] = [];
		if (user.id) {
			const dbPermissions = await postgreService.execute<{ permissions: string[] }>(
				async (knex) => {
					return await knex('Fw_Users').select('permissions').where('id', user.id).first();
				}
			);

			userPermissions = dbPermissions?.permissions;
			// console.log('USER_PERMISSIONS_FROM_DB', userPermissions);
		}

		return userPermissions;
	},

	async verifyEmailLogin(email: string, password: string): Promise<User | null> {
		const user = await postgreService.execute(async (knex) => {
			return await knex('Fw_Users')
				.select('id', 'email', 'password_hash', 'email_verified')
				.where('email', email)
				.first();
		});

		if (!user || !user.password_hash) {
			console.error('NOT USER OR HASH');
			return null;
		}

		const isValid = await bcrypt.compare(password, user.password_hash);

		if (!isValid) {
			console.error(`IS VALID: ${isValid}`);
			return null;
		}

		return {
			id: user.id,
			name: getUsername(user.email),
			email: user.email,
			email_verified: user.email_verified
		};
	},

	// Create user session token which will be used to set the cookies at
	// src/routes/login/+page.server.ts
	async createUserSession(userId: string) {
		const sessionToken = this.generateSessionToken();
		const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

		await postgreService.execute(async (knex) => {
			return await knex('Fw_User_Sessions').insert({
				user_id: userId,
				session_token: sessionToken,
				expires_at: expiresAt
			});
		});

		return sessionToken;
	},

	// getAuthenticatedUser: async function (cookies: Cookies) {
	// 	const sessionToken = cookies.get('session');

	// 	if (!sessionToken) {
	// 		return null;
	// 	}

	// 	try {
	// 		const user = await this.getUserFromSession(sessionToken);
	// 		return user || null;
	// 	} catch (error) {
	// 		console.error('Error verifying session:', error);
	// 		return null;
	// 	}
	// },

	async getUserFromDbSession(sessionToken: string): Promise<User> {
		return await postgreService.execute(async (knex) => {
			return await knex('Fw_User_Sessions')
				.join('Fw_Users', 'Fw_Users.id', 'Fw_User_Sessions.user_id')
				.select('Fw_Users.id', 'Fw_Users.email', 'Fw_Users.email_verified')
				.where('Fw_User_Sessions.session_token', sessionToken)
				.where('Fw_User_Sessions.expires_at', '>', new Date())
				.first();
		});
	},

	// Set the params.locals.user state from cookies
	async userSetState(cookies: Cookies, sessionToken: string, userData: User) {
		// Set the session
		cookies.set('session', sessionToken, {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		cookies.set('user', JSON.stringify(userData), {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});
	},
	// Get cookies representing the params.locals.user
	// Works on server side because of events.cookies passed from (hooks.server.ts)
	async userGetState(cookies: Cookies) {
		const userState: UserState = {
			session: null,
			user: null
		};

		const session = cookies.get('session');
		const userStr = cookies.get('user');

		if (session) {
			userState.session = session;
			try {
				userState.user = userStr ? JSON.parse(userStr) : null;
			} catch (e) {
				console.error(`Failed to parse user data from cookie: ${e}`);
			}
		}

		return userState;
	},
	async userClearState(cookies: Cookies) {
		cookies.delete('session', { path: '/' });
		cookies.delete('user', { path: '/' });
	},
	generateSessionToken() {
		return jwt.sign({ timestamp: Date.now() }, JWT_SECRET, { expiresIn: '7d' });
	}
};
