// src/lib/api.ts
import { AppConfig } from './configs';

const apiClient = {
	async get(path: string, customHeaders: Record<string, string> = {}) {
		const response = await fetch(`${AppConfig.apiUrl}${path}`, {
			headers: {
				'Content-Type': 'application/json',
				...customHeaders
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();
		return { data };
	},

	async post(path: string, body: unknown, customHeaders: Record<string, string> = {}) {
		const response = await fetch(`${AppConfig.apiUrl}${path}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...customHeaders
			},
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
			try {
				const error = await response.json();
				errorMessage = error.message || errorMessage;
			} catch {
				const text = await response.text();
				if (text) errorMessage += ` - ${text}`;
			}
			throw new Error(errorMessage);
		}

		const data = await response.json();
		return { data };
	}
};

export default apiClient;

// // src/lib/api.ts
// import { AppConfig } from './configs';

// const apiClient = {
// 	async get(path: string) {
// 		const response = await fetch(`${AppConfig.apiUrl}${path}`, {
// 			headers: { 'Content-Type': 'application/json' }
// 		});

// 		// 🔥 Throw if HTTP status is not in 200-299 range
// 		if (!response.ok) {
// 			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
// 		}

// 		const data = await response.json();
// 		return { data }; // Wrap it like axios does
// 	},

// 	async post(path: string, body: unknown) {
// 		const response = await fetch(`${AppConfig.apiUrl}${path}`, {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(body)
// 		});
// 		const data = await response.json();
// 		return { data }; // Wrap it like axios does
// 	}
// };

// export default apiClient;
