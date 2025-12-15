// src/routes/dashboard/care/add-device/+page.server.ts
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
// import { postgreService } from '$lib/databases/postgre.service';
import { AuthService } from '$services/auth.service';
import { localizeHref } from '$paraglide/runtime';
import { Product } from '$types/products.types';
import apiClient from '$lib/api';
import type { Manufacturer } from '$types/care/care.manufacturers.types';

export const load: PageServerLoad = async (event) => {
	// const userOnCookie = cookies.get('user');
	const userData = event.locals.user;
	const origin = event.url.origin;

	if (!userData) {
		throw redirect(302, localizeHref('/login'));
	}

	try {
		// get companies for which the user has permission
		const contexts = await AuthService.getUserCompanyContexts(userData.id, Product.CARE);
		// get list of device manufacturers
		let manufacturersList: Manufacturer[] = [];
		try {
			const manufacturers = await apiClient.get(`/care/manufacturers`, {
				Origin: origin
			});
			manufacturersList = Array.isArray(manufacturers?.data?.data) ? manufacturers.data.data : [];
		} catch (err) {
			console.error(`Error fetching manufacturers`, err);
		}

		return { contexts, manufacturers: manufacturersList };
	} catch (error) {
		console.error('Error loading data:', error);
		return { companies: [], contacts: [] };
	}
};
export const actions: Actions = {
	addDevice: async ({ request, url }) => {
		const origin = url.origin;
		const data = await request.formData();

		const company_id = data.get('company_id')?.toString();
		const contact_id = data.get('contact_id')?.toString() || null;
		const status = data.get('status')?.toString();
		const device_type = data.get('device_type')?.toString() || null;
		const serial_number = data.get('serial_number')?.toString() || null;
		const manufacturer_id = data.get('manufacturer_id')?.toString() || null;
		const remote_access = data.get('remote_access') === 'on';
		const owned_by_contact = data.get('owned_by_contact') === 'on';

		if (!company_id || !status) {
			return fail(400, {
				message: 'Company and Status are required.'
			});
		}

		const payload = {
			company_id,
			contact_id,
			status,
			device_type,
			serial_number,
			remote_access,
			owned_by_contact,
			manufacturer_id
		};

		try {
			const { data } = await apiClient.post('/care/devices/add', payload, {
				Origin: origin
			});

			// If your API returns { success: true, message, device_id } on success
			if (!data?.success) {
				return fail(400, {
					message: data?.message || 'Failed to add device via API.'
				});
			}

			return {
				success: true,
				message: data.message || 'Device added successfully!',
				id: data.data.id
				// device_id: data.device_id
			};
		} catch (error: unknown) {
			console.error('API error while adding device:', error);
			let errorMessage = 'Failed to add device. Please try again.';
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			return fail(500, { message: errorMessage });
		}
	}
};
