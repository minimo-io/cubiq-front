<!-- src/routes/dashboard/care/device/[deviceId]/add-service/+page.svelte -->
<script lang="ts">
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { AppConfig } from '$lib';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { m } from '$paraglide/messages';
	import { FwToast } from '$stores/Toast.state.svelte';
	import { getTranslationFromCode } from '$utils/translations.utils';
	import { localizeHref } from '$paraglide/runtime';
	import { getDateTimeLocalString } from '$utils';

	let { data, form }: PageProps = $props();

	let eventTime = $state(getDateTimeLocalString());
	let finishTime = $state(getDateTimeLocalString());
	let showFinishTime = $state(false);

	const serviceTypes = data.serviceTypes;
	const serviceStatuses = data.serviceStatuses;

	$effect(() => {
		if (form?.success) {
			FwToast.launch('Service added successfully!', 'success');
			// Redirect
			setTimeout(() => {
				goto(localizeHref(`${AppConfig.dashboards.care.device}${data.deviceId}`));
			}, 1);
		} else if (form?.error) {
			FwToast.launch(form.error, 'error');
		}
	});
</script>

<div class="rounded-box text-base-content container mx-auto h-full max-w-xl p-4 text-left md:p-8">
	<h1 class="text-base-content mb-6 text-left text-lg font-bold md:text-center">
		{m.addService()}
		<!-- {data.deviceId} -->
	</h1>

	<form method="POST" action="?" use:enhance class="space-y-4">
		<!-- Date -->
		<div class="form-control">
			<label for="event_time" class="label">
				<span class="label-text">{m.serviceDate()}</span>
			</label>
			<input
				type="datetime-local"
				id="event_time"
				name="event_time"
				class="input input-bordered w-full"
				bind:value={eventTime}
				required
			/>
		</div>

		<!-- Checkbos for finish toggle -->
		<div class="form-control mb-4">
			<label for="finish_time_toggle" class="label cursor-pointer">
				<span class="label-text text-gray-300">{m.isServiceFinished()}</span>
				<input
					type="checkbox"
					name="finish_time_toggle"
					id="finish_time_toggle"
					class="checkbox checkbox-primary"
					bind:checked={showFinishTime}
				/>
			</label>
		</div>

		<!-- Finish date if any -->
		{#if showFinishTime}
			<div class="form-control">
				<label for="finish_time" class="label">
					<span class="label-text">{m.finishServiceDate()}</span>
				</label>
				<input
					type="datetime-local"
					id="finish_time"
					name="finish_time"
					class="input input-bordered w-full"
					bind:value={finishTime}
					required
				/>
			</div>
		{/if}

		<!-- Technician -->
		<div class="form-control">
			<label for="technician_id" class="label">
				<span class="label-text">{m.technician()}</span>
			</label>
			<select
				id="technician_id"
				name="technician_id"
				class="select select-bordered w-full"
				required
			>
				<option value="" disabled selected>{m.selectTechnician()}</option>
				{#each data.technicians as technician}
					<option value={technician.id}>{technician.name}</option>
				{/each}
			</select>
		</div>

		<div class="form-control">
			<label for="event_type" class="label">
				<span class="label-text">{m.serviceType()}</span>
			</label>
			<select id="event_type" name="event_type" class="select select-bordered w-full" required>
				<option value="" disabled selected>{m.selectServiceType()}</option>
				{#each serviceTypes as service}
					<option value={service.service_type_code}>
						<!-- {service.service_type_code} -->
						{getTranslationFromCode(service.service_type_code)}
					</option>
				{/each}
			</select>
		</div>

		<!-- Service status -->
		<div class="form-control">
			<label for="service_status" class="label">
				<span class="label-text">{m.serviceStatus()}</span>
			</label>
			<select
				id="service_status"
				name="service_status"
				class="select select-bordered w-full"
				required
			>
				<option value="" disabled selected>{m.selectServiceStatus()}</option>
				{#each serviceStatuses as service}
					<option value={service.service_status_code}>
						{getTranslationFromCode(service.service_status_code)}
					</option>
				{/each}
			</select>
		</div>

		<div class="form-control">
			<label for="description" class="label">
				<span class="label-text">{m.description()}</span>
			</label>
			<textarea
				id="description"
				name="description"
				class="textarea textarea-bordered w-full"
				rows="4"
			></textarea>
		</div>

		<div class="flex justify-between gap-4">
			<DashboardButton type="primary" class="flex-1" isSubmit={true}>
				{m.addService()}
			</DashboardButton>
			<DashboardButton
				type="gray"
				onclick={() => goto(localizeHref(`${AppConfig.dashboards.care.device}${data.deviceId}`))}
			>
				{m.cancel()}
			</DashboardButton>
		</div>
	</form>
</div>
