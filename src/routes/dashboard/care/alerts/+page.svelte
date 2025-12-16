<script lang="ts">
	import type { PageData } from './$types';
	import { localizeHref } from '$paraglide/runtime';
	import { formatEventTime } from '$utils/date.utils';
	import { AppConfig } from '$lib';
	import { m } from '$paraglide/messages';

	export let data: PageData;

	let descriptionModal: HTMLDialogElement;
	let selectedAlertDescription: string | null = null;

	const severityClasses = {
		HIGH: 'badge-error',
		NORMAL: 'badge-warning',
		LOW: 'badge-success'
	};

	function openDescriptionModal(description: string) {
		selectedAlertDescription = description;
		if (descriptionModal) {
			descriptionModal.showModal();
		}
	}
</script>

<div class="container mx-auto">
	<!-- <div class="border-base-200 border-b py-4">
		<h1 class="text-base-content text-2xl font-bold">CareSync Device Alerts</h1>
	</div> -->

	<div class="min-h-dvh overflow-x-auto">
		<table class="table w-full">
			<thead>
				<tr>
					<th class="text-base-content">Device</th>
					<th class="text-base-content">Created At</th>
					<th class="text-base-content">Solved At</th>
					<th class="text-base-content">Alert Type</th>
					<th class="text-base-content">Technician</th>
					<th class="text-base-content">Status</th>
					<th class="text-base-content">{m.severity()}</th>
					<th class="text-base-content">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#if data.alerts && data.alerts.length > 0}
					{#each data.alerts as alert}
						{@const deviceUrl = localizeHref(
							`${AppConfig.dashboards.care.device}${alert.device_id}`
						)}
						<tr>
							<td class="text-base-content">
								<a href={deviceUrl} class="text-primary">
									{alert.device_report_id}
								</a>
							</td>
							<td class="text-base-content">{formatEventTime(alert.created_at)}</td>
							<td class="text-base-content"
								>{alert.solved_at ? formatEventTime(alert.solved_at) : 'N/A'}</td
							>
							<td class="text-base-content">{alert.alert_type_name}</td>
							<td class="text-base-content">{alert.technician_name}</td>
							<td>
								<div class="badge badge-accent badge-outline">{alert.status}</div>
							</td>
							<td>
								<div class={`badge ${severityClasses[alert.severity] || 'badge-ghost'}`}>
									{alert.severity}
								</div>
							</td>
							<td>
								<button
									class="btn btn-sm btn-primary"
									on:click={() => openDescriptionModal(alert.description)}
								>
									{m.details()}
								</button>
							</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="8" class="text-base-content py-4 text-center">No alerts found.</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>

<dialog bind:this={descriptionModal} class="modal">
	<form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost text-base-content absolute top-2 right-2 z-10"
			>✕</button
		>
	</form>
	<div class="modal-box border-base-300 w-11/12 max-w-4xl border p-0">
		<div class="p-4 text-left">
			<h3 class="text-base-content text-lg font-bold">Alert Description</h3>
			<p class="text-base-content py-4 font-mono text-xs">{selectedAlertDescription}</p>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
