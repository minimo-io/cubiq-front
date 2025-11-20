
import { postgreService } from '$lib/databases/postgre.service';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const technicians = await postgreService.execute(async (db) => {
    return db('CareSync_Technicians').select('id', 'name');
  });

  return {
    deviceId: params.deviceId,
    technicians,
  };
};

export const actions: Actions = {
  default: async ({ request, params }) => {
    console.log('params.deviceId at action start:', params.deviceId);
    const formData = await request.formData();
    const event_time_str = formData.get('event_time');
    const technician_id_str = formData.get('technician_id');
    const event_type = formData.get('event_type');
    const description = formData.get('description');

    if (!event_time_str || !technician_id_str || !event_type) {
      return fail(400, {
        error: 'Please fill out all required fields.',
        event_time: event_time_str,
        technician_id: technician_id_str,
        event_type,
        description,
      });
    }

    const event_time = new Date(event_time_str as string);
    const technician_id = technician_id_str as string;

    try {
      await postgreService.execute(async (db) => {
        await db('CareSync_Device_History').insert({
          report_id: params.deviceId,
          event_time,
          technician_id,
          event_type,
          description,
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
        description,
      });
    }

    return {
      success: 'Service added successfully.',
    };
  },
};
