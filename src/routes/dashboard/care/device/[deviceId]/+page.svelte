<!-- src/routes/dashboard/care/device/[deviceId]/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { formatEventTime, getDateTimeLocalString } from '$utils';
	import { Check, PencilLine } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { FwToast } from '$stores/Toast.state.svelte';
	import DeviceGallery from '../../components/DeviceGallery.svelte';
	import { getTranslationFromCode } from '$utils/translations.utils';
	import type { DeviceHistoryEvent } from '$types/care/care.devices.types';
	import ServiceStatusCodePill from '../../components/ServiceStatusCodePill.svelte';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import { modalState } from '$stores/Modal.state.svelte';

	let { data } = $props();

	let isEditing = $state(false);
	let editingDescription = $state('');
	let currentEvent = $state<DeviceHistoryEvent | null>(null);

	function openServiceModal(event: DeviceHistoryEvent) {
		currentEvent = event;
		isEditing = false;
		editingDescription = event.description || '';

		modalState.open({
			snippet: serviceDetailsModal,
			props: { event },
			size: 'lg',
			closeOnBackdrop: false,
			closeOnEscape: false
		});
	}

	function startEditing() {
		isEditing = true;
		editingDescription = currentEvent?.description || '';
	}

	function cancelEditing() {
		isEditing = false;
		editingDescription = currentEvent?.description || '';
	}
</script>

{#snippet serviceDetailsModal(props)}
	{@const event = props?.event as DeviceHistoryEvent}

	<div
		class="border-base-200 flex flex-col border-b pb-3 md:flex-row md:items-center md:justify-between"
	>
		<!-- Title -->
		<div class="flex flex-col gap-1 md:flex-row md:gap-3">
			<h3 class="text-base-content text-left text-lg font-bold uppercase">
				{m.serviceDetails()}
			</h3>
			{#if !isEditing && event}
				<div>
					<ServiceStatusCodePill statusCode={event.status_code} />
				</div>
			{/if}
		</div>

		<!-- Buttons -->
		<div class="border-base-200 mt-2 border-t pt-3 md:mt-0 md:border-none md:pt-0">
			{#if !isEditing}
				<DashboardButton onclick={startEditing} type="gray">
					<PencilLine class="mr-1 h-4 w-4" />
					{m.edit()}
				</DashboardButton>
			{:else}
				<div class="flex items-center gap-2">
					<DashboardButton onclick={cancelEditing} type="gray">
						{m.cancel()}
					</DashboardButton>
					<DashboardButton type="primary" isSubmit={true} submitForm={'edit-service-form'}>
						{m.saveChanges()}
					</DashboardButton>
				</div>
			{/if}
		</div>
	</div>

	{#if !isEditing}
		<!-- View Mode -->
		{#if event}
			<div class="py-4">
				<div
					class="text-secondary border-base-200 mb-5 flex flex-col border-b pb-4 text-left font-mono text-xs md:flex-row"
				>
					<!-- Event time -->
					<div class="flex w-fit flex-row">
						<div class="w-fit">
							{formatEventTime(event.event_time)}
						</div>
						<span class="hidden md:flex">&nbsp;/</span>
						<!-- Is finished -->
						<div
							class="tooltip tooltip-xs md:tooltip-right"
							data-tip={`${event.finish_time || ''}`}
						>
							<div class="flex items-center">
								<Check
									class={[
										'mr-[1px] aspect-square h-4 ',
										event.finish_time ? 'text-green-500' : 'text-red-500'
									]}
								/>
								{event.finish_time ? m.finished() : m.notFinished()}
							</div>
						</div>
						<span class="hidden md:flex">&nbsp;/&nbsp;</span>
					</div>

					<!-- Technician -->
					<div>
						{event.technician_name}
					</div>
				</div>

				<p class="text-base-content mb-4 text-left font-mono text-xs whitespace-pre-wrap">
					{event.description || 'No description available'}
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
					toggleLoader();
					if (result.type === 'success') {
						isEditing = false;
						modalState.close();
						FwToast.launch(m.serviceHistoryUpdatedOk(), 'success', 'top', 2500);
						invalidateAll();
					} else if (result.type === 'error') {
						FwToast.launch(m.serviceHistoryUpdateFailed(), 'error', 'top', 2500);
					}
					toggleLoader();
				};
			}}
		>
			<input type="hidden" name="historyId" value={event?.id} />

			<!-- Service status -->
			<div class="form-control mt-2 text-left">
				<label for="service_status" class="label ml-1">
					<span class="label-text text-base-content text-sm">{m.serviceStatus()}</span>
				</label>
				<select
					id="service_status"
					name="service_status_code"
					class="select select-bordered text-base-content mt-1 w-full"
					required
				>
					<option value="" disabled selected class="text-base-content">
						{m.selectServiceStatus()}
					</option>
					{#each data.serviceStatuses as service}
						<option
							selected={service.service_status_code == event?.status_code}
							value={service.service_status_code}
							class="text-base-content"
						>
							{getTranslationFromCode(service.service_status_code)}
						</option>
					{/each}
				</select>
			</div>

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
					value={event?.finish_time ? getDateTimeLocalString(event.finish_time) : ''}
				/>
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
{/snippet}

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th class="hidden md:table-cell">{m.serviceDate()}</th>
				<th class="hidden md:table-cell">{m.finished()}</th>
				<th>{m.serviceType()}</th>
				<th>{m.serviceStatus()}</th>
				<th class="hidden md:table-cell">{m.technician()}</th>
				<th>{m.actions()}</th>
			</tr>
		</thead>
		<tbody class="text-white">
			{#if data.deviceHistory && data.deviceHistory.length > 0}
				{#each data.deviceHistory as event, i (i)}
					<tr>
						<td class="hidden md:table-cell">{formatEventTime(event.event_time)}</td>
						<td class="hidden md:table-cell">
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
						<td>
							<ServiceStatusCodePill statusCode={event.status_code} />
						</td>
						<td class="hidden md:table-cell">{event.technician_name}</td>
						<td>
							<DashboardButton type="primary" onclick={() => openServiceModal(event)}>
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
