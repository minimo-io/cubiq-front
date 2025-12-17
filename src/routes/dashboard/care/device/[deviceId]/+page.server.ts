import { postgreService } from '$databases';
import { fail, type Actions } from '@sveltejs/kit';
import { dashboardCommonActions } from '../../..';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Get services statuses
	const serviceStatuses = await postgreService.execute(async (knex) => {
		return knex('Cq_Care_Service_Statuses').select('id', 'service_status_code');
	});

	return { serviceStatuses };
};

export const actions: Actions = {
	...dashboardCommonActions,

	updateServiceHistory: async ({ request }) => {
		// const { deviceId } = params;
		const formData = await request.formData();
		const historyId = formData.get('historyId') as string;
		const description = formData.get('description') as string;
		const statusCode = formData.get('service_status_code') as string;
		const finishTime = (formData.get('finish_time') as string) || null;

		if (!historyId || !description) {
			return fail(400, {
				error: 'History ID and description are required'
			});
		}

		try {
			// Update the service history record
			const updatedRecord = await postgreService.execute(async (knex) => {
				return knex('Cq_Care_Device_Services')
					.where('id', historyId)
					.update({
						description: description.trim(),
						service_status: statusCode,
						finish_time: finishTime
					})
					.returning('*');
			});

			if (!updatedRecord || updatedRecord.length === 0) {
				return fail(404, {
					error: 'Service history record not found'
				});
			}

			return {
				success: true,
				message: 'Service history updated successfully'
			};
		} catch (err) {
			console.error('Error updating service history:', err);
			return fail(500, {
				error: 'Failed to update service history'
			});
		}
	}
};
