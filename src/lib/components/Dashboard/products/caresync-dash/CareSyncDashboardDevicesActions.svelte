<script lang="ts">
	import { RefreshCw } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { AppConfig } from '$lib/configs';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';

	const { handleRefresh, isRefreshing, countdown } = $props<{
		handleRefresh: () => unknown;
		isRefreshing: boolean;
		countdown: number;
	}>();
</script>

<div class="border-base-200 flex justify-start border-b">
	<div class="flex items-center justify-end gap-2 p-4">
		<!-- Add new device -->
		<DashboardButton href={localizeHref(AppConfig.dashboards.care.actions.addDevice)}>
			{m.addDevice()}
		</DashboardButton>

		<!-- Refresh -->
		<DashboardButton type="primary" onclick={handleRefresh} disabled={isRefreshing}>
			<RefreshCw class="h-4 w-4 {isRefreshing ? 'animate-spin' : ''}" />
			{m.refresh()}
		</DashboardButton>

		<div class="ml-4 text-sm text-gray-500">
			{m.refreshingIn({ seconds: countdown })}
		</div>
	</div>
</div>
