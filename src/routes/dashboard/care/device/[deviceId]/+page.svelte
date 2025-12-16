<script lang="ts">
	import Actions from './components/Actions.svelte';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { formatEventTime, getDateTimeLocalString } from '$utils';
	import { Check, PencilLine } from '@lucide/svelte';
	import { m, select } from '$paraglide/messages';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { FwToast } from '$stores/Toast.state.svelte';
	import DeviceGallery from '../../components/DeviceGallery.svelte';
	import { getTranslationFromCode } from '$utils/translations.utils';
	import type { DeviceHistoryEvent } from '$types/care/care.devices.types';
	import ServiceStatusCodePill from '../../components/ServiceStatusCodePill.svelte';
	// import { onMount } from 'svelte';

	let selectedEvent = $state<DeviceHistoryEvent | null>(null);
	let editFinishTime = $state(getDateTimeLocalString());
	let isEditing = $state(false);
	let editingDescription = $state('');
	let modal = $state<HTMLDialogElement>();

	let { data } = $props();

	// onMount(() => {
	// 	console.log(data.serviceStatuses);
	// });
	function openModal(event: DeviceHistoryEvent) {
		selectedEvent = event;
		isEditing = false;
		if (modal) {
			modal.showModal();
		}
	}

	function startEditing() {
		isEditing = true;
		editingDescription = selectedEvent?.description || '';
	}

	function cancelEditing() {
		isEditing = false;
		editingDescription = '';
	}
</script>

<Actions countdown={10} handleRefresh={() => {}} isRefreshing={false} />

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>{m.serviceDate()}</th>
				<th>{m.finished()}</th>
				<th>{m.serviceType()}</th>
				<th>{m.serviceStatus()}</th>
				<th>{m.technician()}</th>
				<th>{m.actions()}</th>
			</tr>
		</thead>
		<tbody class="text-white">
			{#if data.deviceHistory && data.deviceHistory.length > 0}
				{#each data.deviceHistory as event, i (i)}
					<tr>
						<td>{formatEventTime(event.event_time)}</td>
						<td>
							<div
								class="tooltip tooltip-xs md:tooltip-right flex items-center"
								data-tip={`${event.finish_time || ''}`}
							>
								<Check
									class={[
										'mr-[1px] aspect-square h-4 ',
										event.finish_time ? 'text-green-500' : 'text-red-500'
									]}
								/>
								{#if event.finish_time}
									{m.yes()}
								{:else}
									{m.no()}
								{/if}
							</div>
						</td>
						<td>{getTranslationFromCode(event.event_type)}</td>
						<!-- <td>{getTranslationFromCode(event.status_code)}</td> -->
						<td>
							<ServiceStatusCodePill statusCode={event.status_code} />
						</td>
						<td>{event.technician_name}</td>
						<td>
							<DashboardButton type="primary" onclick={() => openModal(event)}>
								{m.details()}
							</DashboardButton>
						</td>
					</tr>
				{/each}
			{:else}
				<tr>
					<td colspan="4" class="text-secondary text-center">No history found for this device.</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>
<div class="border-base-200 border-t">
	<DeviceGallery />
</div>

<!-- Service Details Modal -->
<dialog bind:this={modal} class="modal modal-backdrop">
	<div class="modal-backdrop h-dvh bg-[rgba(0,0,0,0.8)]"></div>

	<form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-white">✕</button>
	</form>
	<div class="modal-box border-base-300 max-h-[90%] w-11/12 max-w-5xl border">
		<div class="border-base-200 flex items-center justify-between border-b pb-3">
			<!-- Title -->
			<div class="flex gap-3">
				<h3 class="text-base-content text-left text-lg font-bold uppercase">
					{m.serviceDetails()}
				</h3>
				{#if !isEditing && selectedEvent}
					<div>
						<ServiceStatusCodePill statusCode={selectedEvent.status_code} />
					</div>
				{/if}
			</div>

			<!-- Buttons -->
			{#if !isEditing}
				<DashboardButton onclick={startEditing} type="gray">
					<PencilLine class="mr-1 h-4 w-4" />
					{m.edit()}
				</DashboardButton>
			{:else}
				<div class="flex items-center gap-2">
					<!-- Cancel -->
					<DashboardButton onclick={cancelEditing} type="gray">
						{m.cancel()}
					</DashboardButton>

					<!-- Save Changes -->
					<DashboardButton type="primary" isSubmit={true} submitForm={'edit-service-form'}>
						{m.saveChanges()}
					</DashboardButton>
				</div>
			{/if}
		</div>

		{#if !isEditing}
			<!-- View Mode -->
			{#if selectedEvent}
				<div class=" py-4">
					<div
						class="text-secondary border-base-200 mb-5 flex border-b pb-4 text-left font-mono text-xs"
					>
						<!-- Data -->
						{formatEventTime(selectedEvent.event_time)} /
						<!-- Finished -->
						<div
							class="tooltip tooltip-xs md:tooltip-right"
							data-tip={`${selectedEvent.finish_time || ''}`}
						>
							<div class="flex items-center">
								<Check
									class={[
										'mr-[1px] aspect-square h-4 ',
										selectedEvent!.finish_time ? 'text-green-500' : 'text-red-500'
									]}
								/>
								{selectedEvent!.finish_time ? m.finished() : m.notFinished()}
							</div>
						</div>
						&nbsp;/
						{selectedEvent?.technician_name}
					</div>

					<p class="text-base-content mb-4 text-left font-mono text-xs whitespace-pre-wrap">
						{selectedEvent?.description || 'No description available'}
					</p>
				</div>
			{/if}
		{:else}
			<!-- Edit Mode -->
			<form
				method="POST"
				action="?/updateServiceHistory"
				id="edit-service-form"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'success') {
							isEditing = false;
							modal?.close();
							FwToast.launch('Service history updated successfully!', 'success', 'top', 2500);
							invalidateAll();
						} else if (result.type === 'error') {
							FwToast.launch('Failed to update service history.', 'error', 'top', 2500);
						}
					};
				}}
			>
				<!-- Service history id -->
				<input type="hidden" name="historyId" value={selectedEvent?.id} />
				<!-- Service end date -->
				<div class="form-control mt-3 flex flex-col text-left">
					<label for="finish_time" class="label">
						<span class="label-text text-base-content ml-1 text-sm">{m.finishServiceDate()}</span>
					</label>
					<input
						type="datetime-local"
						id="finish_time"
						name="finish_time"
						class="input input-bordered text-base-content mt-1 w-full"
						value={selectedEvent?.finish_time
							? getDateTimeLocalString(selectedEvent?.finish_time)
							: ''}
						required
					/>
				</div>
				<!-- Service status -->
				<div class="form-control mt-2 text-left">
					<label for="service_status" class="label ml-1">
						<span class="label-text text-base-content text-sm">{m.serviceStatus()}</span>
					</label>

					<!-- svelte-ignore component_name_lowercase -->
					<select
						id="service_status"
						name="service_status"
						class="select select-bordered text-base-content mt-1 w-full"
						required
					>
						<option value="" disabled selected class="text-base-content"
							>{m.selectServiceStatus()}</option
						>
						{#each data.serviceStatuses as service}
							<option value={service.service_status_code} class="text-base-content">
								{getTranslationFromCode(service.service_status_code)}
							</option>
						{/each}
					</select>
				</div>
				<!-- Service content -->
				<div class="mt-2 flex h-full flex-col">
					<label for="description" class="label">
						<span class="label-text text-base-content ml-1 text-sm">{m.details()}</span>
					</label>
					<textarea
						name="description"
						id="description"
						bind:value={editingDescription}
						class="textarea textarea-bordered text-base-content bg-base-100 mt-1 h-80 w-full font-mono text-xs md:h-96"
						placeholder="Enter service description..."
						required
					></textarea>
				</div>
			</form>
		{/if}
	</div>

	<form method="dialog">
		<button>{m.close()}</button>
	</form>
</dialog>
