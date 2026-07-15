// src/routes/+layout.server.ts
import { UPTIMEROBOT_API_KEY } from '$env/static/private';
import { dev } from '$app/environment';
import type { LayoutServerLoad } from './$types';

interface Monitor {
	id: number;
	friendly_name: string;
	status: number;
}

let cachedMonitors: Monitor[] | null = null;
let lastFetched = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const load: LayoutServerLoad = async (params) => {
	const now = Date.now();

	if (!cachedMonitors || now - lastFetched >= CACHE_TTL) {
		try {
			const res = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({ api_key: UPTIMEROBOT_API_KEY, format: 'json' })
			});
			if (res.ok) {
				const data = await res.json();
				if (dev) console.log('UptimeRobot response:', JSON.stringify(data, null, 2));
				cachedMonitors = data.monitors.map((m: any) => ({
					id: m.id,
					friendly_name: m.friendly_name,
					status: m.status
				}));
				lastFetched = now;
			}
		} catch (e) {
			console.error('UptimeRobot fetch error:', e);
		}
	}

	const allUp = cachedMonitors ? cachedMonitors.every((m) => m.status === 2) : true;

	return {
		user: params.locals.user,
		allUp
	};
};
