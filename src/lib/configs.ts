export const AppConfig = {
	apiUrl: import.meta.env.DEV ? 'http://127.0.0.1:8085' : 'https://api.cubiq.lat',
	calendar: 'https://calendar.app.google/PFL1kPtd8VYFaXzc6',
	status: 'https://stats.uptimerobot.com/pPaLEt4eBM',
	care: {
		deviceRefreshIntervalSeconds: 30
	},
	toast: {
		duration: 2500
	},
	cubiq: {
		founded: '2025-11-20',
		socials: {
			// Used for error pages
			telegram: 'https://t.me/cubiq_lat',
			email: 'nicolas@cubiq.lat',
			github: 'https://github.com/minimo-io',
			huggingface: 'https://huggingface.co/cubiqlabs',
			npm: 'https://npmjs.com',
			linkedin: 'https://www.linkedin.com/in/nicolas-erramuspe/',
			nostr: 'https://primal.net/p/npub1wujhdsytm3w6g0mpsqh8v7ezx83jcm64dlkwuqgm5v8lv0pds55ssudkw0'
		},
		docs: 'https://api.cubiq.lat/docs'
	},

	dashboards: {
		care: {
			base: '/dashboard/care',
			alerts: '/dashboard/care/alerts',
			services: '/dashboard/care/services',
			device: '/dashboard/care/device/',
			actions: {
				addAgent: '/dashboard/care/add-agent',
				addDevice: '/dashboard/care/add-device'
			}
		},
		notes: {
			base: '/dashboard/notes'
		}
	}
};
