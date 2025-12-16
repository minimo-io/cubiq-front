// src/routes/dashboard/care/device/[deviceId]/add-service/+page.server.ts
import { postgreService } from '$lib/databases/postgre.service';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// Get technicians
	const technicians = await postgreService.execute(async (db) => {
		return db('Cq_Care_Technicians').select('id', 'name');
	});

	// Get services types
	const serviceTypes = await postgreService.execute(async (knex) => {
		return knex('Cq_Care_Service_Types').select('id', 'service_type_code');
	});

	// Get services statuses
	const serviceStatuses = await postgreService.execute(async (knex) => {
		return knex('Cq_Care_Service_Statuses').select('id', 'service_status_code');
	});

	return {
		deviceId: params.deviceId,
		serviceTypes,
		serviceStatuses,
		technicians
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();
		const event_time_str = formData.get('event_time');
		const technician_id_str = formData.get('technician_id');
		const event_type = formData.get('event_type');
		const service_status = formData.get('service_status');
		const description = formData.get('description');
		const finishTimeToggle = formData.get('finish_time_toggle') === 'on';
		const finish_time_str = formData.get('finish_time');

		if (!event_time_str || !technician_id_str || !event_type) {
			return fail(400, {
				error: 'Please fill out all required fields.',
				event_time: event_time_str,
				technician_id: technician_id_str,
				event_type,
				description
			});
		}

		const event_time = new Date(event_time_str as string);
		const technician_id = technician_id_str as string;
		let finish_time;
		if (finishTimeToggle) {
			finish_time = new Date(finish_time_str as string);
		}

		try {
			await postgreService.execute(async (db) => {
				await db('Cq_Care_Device_Services').insert({
					report_id: params.deviceId,
					event_time,
					technician_id,
					event_type,
					description,
					service_status,
					finish_time
				});
			});
		} catch (error: unknown) {
			console.error('Database insert error:', error);
			let errorMessage = 'An unknown error occurred.';
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			return fail(500, {
				error: `An error occurred while adding the service: ${errorMessage}. Device ID received: ${params.deviceId}`,
				event_time: event_time_str,
				technician_id: technician_id_str,
				event_type,
				description
			});
		}

		return {
			success: 'Service added successfully.'
		};
	}
};
