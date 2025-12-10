// src/lib/api.ts
import { AppConfig } from './configs';

const apiClient = {
	async get(path: string) {
		const response = await fetch(`${AppConfig.apiUrl}${path}`, {
			headers: { 'Content-Type': 'application/json' }
		});
		const data = await response.json();
		return { data }; // Wrap it like axios does
	},

	async post(path: string, body: unknown) {
		const response = await fetch(`${AppConfig.apiUrl}${path}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		const data = await response.json();
		return { data }; // Wrap it like axios does
	}
};

export default apiClient;
