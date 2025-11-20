<script lang="ts">
	import { RefreshCw } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { page } from '$app/state';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';

	interface Props {
		handleRefresh: () => unknown;
		isRefreshing: boolean;
		countdown: number;
	}
	const { handleRefresh, isRefreshing, countdown }: Props = $props();

	let deviceId = page.params.deviceId;
</script>

<div class="border-base-200 flex justify-start border-b">
	<div class="flex items-center justify-end p-4">
		<DashboardButton href={localizeHref(`/dashboard/care/device/${deviceId}/add-service`)}>
			{m.addService()}
		</DashboardButton>

		<!-- <a
			href={localizeHref(`/dashboard/care/device/${deviceId}/add-service`)}
			class="btn btn-sm btn-primary mr-2 tracking-wide"
		>
			{m.addService()}
		</a> -->
		<!-- <button class="btn btn-primary" onclick={handleRefresh} disabled={isRefreshing}>
			<RefreshCw class="h-4 w-4 {isRefreshing ? 'animate-spin' : ''}" />
			{m.refresh()}
		</button>
        -->
		<!-- <div class="ml-4 text-sm text-gray-500">
			{m.refreshingIn({ seconds: countdown })}
		</div> -->
	</div>
</div>
