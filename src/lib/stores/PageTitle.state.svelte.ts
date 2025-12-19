// // src/lib/stores/PageTitle.state.svelte.ts
// import type { PageTitle } from '$lib/data/dashboards/pageTitle';

import type { BreadcrumbItem } from '$lib/data/dashboards/pageTitle';

// export const pageTitleState = $state<PageTitle>({
// 	title: 'Dashboard',
// 	documentTitle: 'Dashboard',
// 	breadcrumb: []
// });

// src/lib/stores/PageTitle.state.svelte.ts

export const pageTitleState = $state<{
	title: string;
	documentTitle: string;
	breadcrumb: BreadcrumbItem[];
}>({
	title: 'Dashboard',
	documentTitle: 'Dashboard',
	breadcrumb: []
});
