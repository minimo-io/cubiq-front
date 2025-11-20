export const dashboardLeftMenuState = $state({ collapsed: false });

export function toggleDashboardLeftMenuCollapse() {
	dashboardLeftMenuState.collapsed = !dashboardLeftMenuState.collapsed;
}
