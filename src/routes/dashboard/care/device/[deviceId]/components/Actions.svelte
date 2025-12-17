<script lang="ts">
	import { RefreshCw, Share } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { page } from '$app/state';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { FwShare } from '$utils';
	import { FwToast } from '$stores/Toast.state.svelte';

	interface Props {
		handleRefresh: () => unknown;
		isRefreshing: boolean;
		countdown: number;
	}
	const { handleRefresh, isRefreshing, countdown }: Props = $props();

	let deviceId = page.params.deviceId;
</script>

<div class="border-base-200 flex justify-start border-b">
	<div class="flex items-center justify-end gap-2 p-4">
		<!-- Add service -->
		<DashboardButton href={localizeHref(`/dashboard/care/device/${deviceId}/add-service`)}>
			{m.addService()}
		</DashboardButton>

		<!-- Share -->
		<DashboardButton
			type="primary"
			onclick={async () => {
				if (FwShare.hasShareAPI) {
					FwShare.share({
						url: page.url.href,
						title: `Cubiq Care / ${m.share()} ${m.device()}: ${deviceId}`,
						text: ''
					});
				} else {
					try {
						await FwShare.copyToClipboard(page.url.href);
						FwToast.launch('Note url copied to clipboard', 'success', 'bottom', 4000);
					} catch (error) {
						FwToast.launch('Error copying note to clipboard', 'error', 'bottom');
					}
				}
			}}
		>
			<Share class="h-3 w-3" />
			{m.share()}
			<!-- {#if FwShare.hasShareAPI}{:else}
				<Clipboard class="h-3 w-3" />
				{m.copyToClipboard()}
			{/if} -->
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
