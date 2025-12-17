export enum DeviceStatus {
	CRITICAL = 'CRITICAL',
	HEALTHY = 'HEALTHY',
	WARNING = 'WARNING',
	MONITORING = 'MONITORING',
	NO_DATA = 'NO_DATA'
}

export enum DeviceType {
	NOTEBOOK = 'NOTEBOOK',
	DESKTOP = 'DESKTOP',
	ALLINONE = 'ALLINONE',
	SERVER = 'SERVER'
}

export interface DeviceForList {
	id: string;
	device_id: string;
	online: boolean;
	status: DeviceStatus | string;
	type: DeviceType;
	remoteAccess: boolean;
	organization: string;
	user: DeviceContact;
	isOwnedByContact: boolean;
	lastService: string;
	nextService: string;
	timeActive: number;
	serialNumber: string;
	brand: string;
	model: string;
	wasFirstPinged: boolean;
	manufacturer: {
		name: string;
		model: string;
	};
}

export interface DeviceContact {
	name: string;
	state: string;
	city: string;
	image: string;
	contact: {
		type: 'whatsapp' | 'telephone' | 'email';
		value: string;
	};
}

export interface Device {
	id: string;
	device_id: string;
	serial_number: string;
	was_first_pinged: boolean;
	is_owned_by_contact: boolean;
	device_type: string;
	status: string;
	remote_access: boolean;
	company_id: string;
	contact_id: string;
	created_at: Date;
	updated_at: Date;
	report_timestamp: Date;
	contact_name: string;
	contact_email: string;
	contact_phone: string;
	manufacturer_name: string;
	manufacturer_model: string;
	manufacturer_model_url: string;

	device_metadata: {
		os: string;
		hdd: string;
		ram: string;
		model: string;
		hostname: string;
		bios_date: string;
		installation_date: string;
		processor: string;
		serial_number: string;
	};
	metrics: {
		basic: {
			battery: {
				percent: number;
				seconds_left: number;
				power_plugged: boolean;
			};
			cpu: {
				max: number;
				min: number;
				average: number;
				current: number;
			};
			disk: {
				percent: number;
				used_gb: number;
				total_gb: number;
				avg_read_mbps: number;
				avg_write_mbps: number;
			};
			memory: {
				used_mb: number;
				total_mb: number;
				average_percent: number;
				current_percent: number;
			};
			processes: {
				count: number;
				avg_count: number;
			};
			uptime_hours: number;
		};
	};
}

export interface DeviceHistoryEvent {
	id: string;
	report_id: string;
	event_time: string;
	technician_id: string;
	event_type: string;
	description: string;
	created_at: string;
	updated_at: string;
	technician_name: string;
	status_code: string;
	finish_time: string;
}

export interface CompanyContext {
	company_id: string;
	company_name: string;
	role: string;
	permissions: string[];
}
