import { postgreService } from '$databases';
import { fail, type Actions } from '@sveltejs/kit';
import { dashboardCommonActions } from '../../..';

export const actions: Actions = {
	...dashboardCommonActions,

	updateServiceHistory: async ({ request }) => {
		// const { deviceId } = params;
		const formData = await request.formData();
		const historyId = formData.get('historyId') as string;
		const description = formData.get('description') as string;

		if (!historyId || !description) {
			return fail(400, {
				error: 'History ID and description are required'
			});
		}

		try {
			// Update the service history record
			const updatedRecord = await postgreService.execute(async (knex) => {
				return knex('CareSync_Device_History')
					.where('id', historyId)
					.update({
						description: description.trim(),
						updated_at: new Date()
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
