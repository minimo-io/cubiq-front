import type { Knex } from 'knex';
import { browser } from '$app/environment';
import { DATABASE_URL } from '$env/static/private';

const knexConfig: Knex.Config = {
	client: 'pg',
	connection: {
		// In SvelteKit, we need to be careful about exposing connection strings
		// Use environment variables that are prefixed with PUBLIC_ for client-side access
		// or handle this through server-side endpoints
		connectionString: browser
			? undefined // Don't expose connection in browser
			: DATABASE_URL,
		ssl: { rejectUnauthorized: false }
	},
	pool: {
		min: 2, // Reduced for frontend
		max: 5, // Reduced for frontend
		createRetryIntervalMillis: 200,
		acquireTimeoutMillis: 60000,
		createTimeoutMillis: 30000,
		idleTimeoutMillis: 600000,
		afterCreate: (conn, done) => {
			conn.query('SET TIMEZONE TO UTC;', (err) => done(err, conn));
		}
	},
	debug: !browser && process.env.NODE_ENV === 'development'
};

export default knexConfig;
