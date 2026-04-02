import apiClient from '$lib/api';
import { CUBIQ_API_APP_TOKEN } from '$env/static/private';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const startDate = `${year}-${month}-01`;
	const endDate = `${year}-${month}-${String(now.getDate()).padStart(2, '0')}`;

	try {
		const result = await apiClient.get(
			`/reports/github/commits?startDate=${startDate}&endDate=${endDate}`,
			{ Authorization: `Bearer ${CUBIQ_API_APP_TOKEN}` }
		);

		return {
			commits: result.data?.data || [],
			currentStartDate: startDate,
			currentEndDate: endDate
		};
	} catch (e) {
		console.error('Changelog: Failed to fetch commits:', e);
		return {
			commits: [],
			error: 'Failed to load commits',
			currentStartDate: startDate,
			currentEndDate: endDate
		};
	}
};

export const actions: Actions = {
	loadMore: async ({ request }) => {
		const formData = await request.formData();
		const startDate = formData.get('startDate') as string;
		const endDate = formData.get('endDate') as string;
		const refresh = formData.get('refresh') === 'true';

		const params = new URLSearchParams({ startDate, endDate });
		if (refresh) params.set('refresh', 'true');

		try {
			const result = await apiClient.get(`/reports/github/commits?${params}`, {
				Authorization: `Bearer ${CUBIQ_API_APP_TOKEN}`
			});

			return { success: true, commits: result.data?.data || [] };
		} catch (e) {
			console.error('Changelog: Failed to load more commits:', e);
			return { success: false, commits: [], error: 'Failed to load more commits' };
		}
	}
};
