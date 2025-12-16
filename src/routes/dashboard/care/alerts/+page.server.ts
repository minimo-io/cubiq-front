import { postgreService } from '$lib/databases/postgre.service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const alerts = await postgreService.execute((db) =>
		db
			.select(
				'CareSync_Device_Alerts.id',
				'CareSync_Device_Alerts.device_id',
				'CareSync_Device_Alerts.created_at',
				'CareSync_Device_Alerts.solved_at',
				'CareSync_Device_Alerts.description',
				'CareSync_Device_Alerts.status',
				'CareSync_Device_Alerts.severity',
				db.raw('"CareSync_Reports".device_id as device_report_id'),
				'CareSync_Reports.device_type',
				'CareSync_Reports.is_owned_by_contact',
				db.raw('"Caresync_Alert_Types".name as alert_type_name'),
				db.raw('"Cq_Care_Technicians".name as technician_name')
			)
			.from('CareSync_Device_Alerts')
			.leftJoin('CareSync_Reports', 'CareSync_Device_Alerts.device_id', 'CareSync_Reports.id')
			.leftJoin(
				'Caresync_Alert_Types',
				'CareSync_Device_Alerts.alert_type_id',
				'Caresync_Alert_Types.id'
			)
			.leftJoin(
				'Cq_Care_Technicians',
				'CareSync_Device_Alerts.technician_id',
				'Cq_Care_Technicians.id'
			).orderByRaw(`
				CASE
					WHEN "CareSync_Device_Alerts".status = 'OPEN' THEN 1
					ELSE 2
				END,
				"CareSync_Device_Alerts".created_at DESC
			`)
	);
	return {
		alerts
	};
};
