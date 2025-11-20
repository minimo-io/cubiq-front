export interface Machine {
	id: string;
	device_id: string;
	online: boolean;
	status: MachineStatus | string;
	type: MachineType;
	remoteAccess: boolean;
	organization: string;
	user: MachineContact;
	isOwnedByContact: boolean;
	lastService: string;
	nextService: string;
	timeActive: number;
	serialNumber: string;
	brand: string;
	model: string;
}

export enum MachineStatus {
	ALERT = 'ALERT',
	BOM = 'FINE',
	PROBLEMS = 'PROBLEMS',
	MONITORING = 'MONITORING',
	NO_DATA = 'NO_DATA'
}

export enum MachineType {
	NOTEBOOK = 'NOTEBOOK',
	DESKTOP = 'DESKTOP',
	ALLINONE = 'ALLINONE'
}

export interface MachineContact {
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
	hostname: string;
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
}
