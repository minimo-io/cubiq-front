// lib/databases/postgre.service.ts
import knex, { type Knex } from 'knex';
import knexConfig from './knex.config';
import { browser } from '$app/environment';

export class PostgreException extends Error {
	constructor(
		public readonly code: string,
		message: string,
		public readonly originalError?: Error
	) {
		super(message);
		this.name = 'PostgreException';
	}
}

class PostgreService {
	private knexInstance: Knex | null = null;
	private isInitialized = false;

	constructor() {
		// Only initialize on server-side
		if (!browser) {
			this.initializeKnex();
		}
	}

	private initializeKnex() {
		if (this.isInitialized) return;

		try {
			this.knexInstance = knex(knexConfig);

			// Add connection logging in development
			if (process.env.NODE_ENV === 'development') {
				this.knexInstance.on('query', (query) => {
					console.debug(`[KNEX] ${query.sql}`, query.bindings);
				});
			}

			this.isInitialized = true;
		} catch (error) {
			console.error('Failed to initialize Knex:', error);
			throw new PostgreException('INIT_ERROR', 'Failed to initialize database connection');
		}
	}

	get knex(): Knex {
		if (browser) {
			throw new PostgreException(
				'BROWSER_ERROR',
				'Direct database access is not allowed in browser. Use API endpoints instead.'
			);
		}

		if (!this.knexInstance) {
			throw new PostgreException('NOT_INITIALIZED', 'Database not initialized');
		}

		return this.knexInstance;
	}

	/**
	 * Centralized wrapper for all queries & transactions.
	 * Only works on server-side (in +page.server.ts, +layout.server.ts, API routes, etc.)
	 */
	async execute<T>(fn: (qb: Knex) => Promise<T>): Promise<T> {
		if (browser) {
			throw new PostgreException(
				'BROWSER_ERROR',
				'Database operations must be performed on server-side'
			);
		}

		try {
			return await fn(this.knex);
		} catch (error) {
			const err = error as Error;
			// Detect connection-level errors
			if (('code' in err && err.code === 'ECONNREFUSED') || err.message?.includes('connect')) {
				throw new PostgreException('SERVICE_UNAVAILABLE', err.message, err);
			}
			// Otherwise wrap in DatabaseException
			throw new PostgreException('DATABASE_ERROR', err.message, err);
		}
	}

	/**
	 * Executes the provided callback within a transaction.
	 */
	async runTransaction<T>(callback: (trx: Knex.Transaction) => Promise<T>): Promise<T> {
		return this.execute((knex) => knex.transaction((trx) => callback(trx)));
	}

	/**
	 * Properly close the database connection
	 */
	async destroy(): Promise<void> {
		if (this.knexInstance) {
			await this.knexInstance.destroy();
			this.knexInstance = null;
			this.isInitialized = false;
		}
	}
}

// Create a singleton instance
export const postgreService = new PostgreService();
