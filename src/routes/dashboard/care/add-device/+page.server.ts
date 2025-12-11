import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { postgreService } from '$lib/databases/postgre.service';

export const load: PageServerLoad = async () => {
	try {
		const companies = await postgreService.execute(async (knex) => {
			return knex('CareSync_Companies').select('id', 'name');
		});

		const contacts = await postgreService.execute(async (knex) => {
			return knex('CareSync_Device_Contacts').select('id', 'name', 'company_id');
		});

		return { companies, contacts };
	} catch (error) {
		console.error('Error loading data:', error);
		return { companies: [], contacts: [] };
	}
};

export const actions: Actions = {
	addDevice: async ({ request }) => {
		const data = await request.formData();
		const device_id = data.get('device_id')?.toString();
		const status = data.get('status')?.toString();
		const device_type = data.get('device_type')?.toString();
		const remote_access = data.get('remote_access') === 'on';
		const company_id = data.get('company_id')?.toString();
		const contact_id = data.get('contact_id')?.toString();

		const os = data.get('os')?.toString();
		const hdd = data.get('hdd')?.toString();
		const ram = data.get('ram')?.toString();
		const model = data.get('model')?.toString();
		const bios_date = data.get('bios_date')?.toString();
		const processor = data.get('processor')?.toString();
		const serial_number = data.get('serial_number')?.toString();
		const installation_date = data.get('installation_date')?.toString();

		const device_metadata: Record<string, string> = {};
		if (os) device_metadata.os = os;
		if (hdd) device_metadata.hdd = hdd;
		if (ram) device_metadata.ram = ram;
		if (model) device_metadata.model = model;
		if (bios_date) device_metadata.bios_date = bios_date;
		if (processor) device_metadata.processor = processor;
		if (serial_number) device_metadata.serial_number = serial_number;
		if (installation_date) device_metadata.installation_date = installation_date;

		// Basic validation
		if (!device_id || !status || !company_id) {
			return fail(400, {
				message: 'Missing required fields: Device ID, Status, Company'
			});
		}

		try {
			await postgreService.execute(async (knex) => {
				await knex('CareSync_Reports').insert({
					device_id,
					status,
					remote_access,
					device_type: device_type || null,
					report_timestamp: new Date(), // Set current timestamp
					metrics: {}, // Empty JSONB object for now
					company_id,
					contact_id: contact_id || null,
					device_metadata: Object.keys(device_metadata).length > 0 ? device_metadata : null
				});
			});
			return { status: 200, message: 'Device added successfully!' };
		} catch (error: unknown) {
			console.error('Error adding device:', error);
			const errorMessage = error instanceof Error ? error.message : 'Failed to add device.';
			return fail(500, { message: errorMessage });
		}
	}
};
