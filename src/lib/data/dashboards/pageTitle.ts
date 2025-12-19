// src/lib/config/pageTitles.ts
import { Product } from '$lib/type/products.types';
import { m } from '$paraglide/messages';

export interface BreadcrumbItem {
	label: string;
	path?: string; // Optional path for clickable breadcrumbs
}

export interface PageTitle {
	title: string;
	documentTitle?: string; // For <svelte:head><title>
	breadcrumb?: BreadcrumbItem[];
}

type RouteId = string;

export function getPageTitles(product: Product): Record<RouteId, PageTitle> {
	const productTitles: Record<Product, Record<RouteId, PageTitle>> = {
		[Product.CARE]: {
			'/dashboard/care': {
				title: m.dashboardCareOverview(),
				documentTitle: m.dashboardCare(),
				breadcrumb: [{ label: m.breadcrumbCare() }]
			},
			// '/dashboard/care/add-agent': {
			// 	title: m.dashboardCareAddAgent(),
			// 	documentTitle: m.dashboardCareAddAgentDoc(),
			// 	breadcrumb: [
			// 		{ label: m.breadcrumbCare(), path: '/dashboard/care' },
			// 		{ label: m.dashboardCareAddAgent() }
			// 	]
			// },
			'/dashboard/care/add-device': {
				title: m.dashboardCareAddDevice(),
				documentTitle: m.dashboardCareAddDeviceDoc(),
				breadcrumb: [
					{ label: m.breadcrumbCare(), path: '/dashboard/care' },
					{ label: m.dashboardCareAddDevice() }
				]
			},
			'/dashboard/care/alerts': {
				title: m.dashboardCareAlerts(),
				documentTitle: m.dashboardCareAlertsDoc(),
				breadcrumb: [
					{ label: m.breadcrumbCare(), path: '/dashboard/care' },
					{ label: m.dashboardCareAlerts() }
				]
			},
			'/dashboard/care/device': {
				title: m.dashboardCareDevices(),
				documentTitle: m.dashboardCareDevicesDoc(),
				breadcrumb: [
					{ label: m.breadcrumbCare(), path: '/dashboard/care' },
					{ label: m.breadcrumbDevices() }
				]
			},
			'/dashboard/care/device/[deviceId]': {
				title: m.dashboardCareDeviceDetails(),
				documentTitle: m.dashboardCareDeviceDetailsDoc(),
				breadcrumb: [
					{ label: m.breadcrumbCare(), path: '/dashboard/care' },
					{ label: m.breadcrumbDevices(), path: '/dashboard/care/device' },
					{ label: m.breadcrumbDetails() }
				]
			},
			'/dashboard/care/device/[deviceId]/add-service': {
				title: m.dashboardCareAddService(),
				documentTitle: m.dashboardCareAddServiceDoc(),
				breadcrumb: [
					{ label: m.breadcrumbCare(), path: '/dashboard/care' },
					{ label: m.breadcrumbDevices(), path: '/dashboard/care/device' },
					{ label: m.breadcrumbDetails() }, // No path since it's dynamic
					{ label: m.dashboardCareAddService() }
				]
			}
		},
		[Product.PAY]: {
			'/dashboard/pay': {
				title: m.dashboardPayOverview(),
				documentTitle: m.dashboardPay(),
				breadcrumb: [{ label: m.breadcrumbPay() }]
			}
		},
		[Product.STORE]: {
			'/dashboard/store': {
				title: m.dashboardStoreOverview(),
				documentTitle: m.dashboardStore(),
				breadcrumb: [{ label: m.breadcrumbStore() }]
			}
		},
		[Product.APIS]: {
			'/dashboard/apis': {
				title: m.dashboardApisOverview(),
				documentTitle: m.dashboardApis(),
				breadcrumb: [{ label: m.breadcrumbApis() }]
			}
		},
		[Product.NOTES]: {
			'/dashboard/notes': {
				title: m.dashboardNotesOverview(),
				documentTitle: m.dashboardNotes(),
				breadcrumb: [{ label: m.breadcrumbNotes() }]
			},
			'/dashboard/notes/[noteUuid]': {
				title: m.dashboardNoteDetails(),
				documentTitle: m.dashboardNoteDetailsDoc(),
				breadcrumb: [
					{ label: m.breadcrumbNotes(), path: '/dashboard/notes' },
					{ label: m.breadcrumbNote() }
				]
			}
		}
	};

	return productTitles[product];
}

// Helper function to get page title by route.id
export function getPageTitle(routeId: string | null, product: Product): PageTitle | null {
	if (!routeId) return null;

	const routes = getPageTitles(product);
	return routes[routeId] || null;
}
