<script lang="ts">
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { AppConfig } from '$lib';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { m } from '$paraglide/messages';
	import { FwToast } from '$stores/Toast.state.svelte';

	console.log('Client-side script loaded.');

	let { data, form }: PageProps = $props();

	const now = new Date();
	const year = now.getFullYear();
	const month = (now.getMonth() + 1).toString().padStart(2, '0');
	const day = now.getDate().toString().padStart(2, '0');
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	let eventTime = $state(`${year}-${month}-${day}T${hours}:${minutes}`);

	$effect(() => {
		if (form?.success) {
			FwToast.launch('Service added successfully!', 'success');

			setTimeout(() => {
				goto(`${AppConfig.dashboards.care.device}${data.deviceId}`);
			}, 1);
		} else if (form?.error) {
			FwToast.launch(form.error, 'error');
		}
	});
</script>

<div class="rounded-box text-base-content container mx-auto h-full max-w-xl p-8 text-left">
	<h1 class="text-base-content mb-6 text-center text-lg font-bold">
		Add Service for Device {data.deviceId}
	</h1>

	<form method="POST" action="?" use:enhance class="space-y-4">
		<div class="form-control">
			<label for="event_time" class="label">
				<span class="label-text">Event Time</span>
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

		<div class="form-control">
			<label for="technician_id" class="label">
				<span class="label-text">Technician</span>
			</label>
			<select
				id="technician_id"
				name="technician_id"
				class="select select-bordered w-full"
				required
			>
				<option value="" disabled selected>Select a technician</option>
				{#each data.technicians as technician}
					<option value={technician.id}>{technician.name}</option>
				{/each}
			</select>
		</div>

		<div class="form-control">
			<label for="event_type" class="label">
				<span class="label-text">Event Type</span>
			</label>
			<select id="event_type" name="event_type" class="select select-bordered w-full" required>
				<option value="" disabled selected>Select an event type</option>
				<option value="OS_RESET">OS Reset</option>
				<option value="OS_ERROR">OS Error</option>
				<option value="PERFORMANCE_ALERT">Performance Alert</option>
				<option value="CLEANUP">Cleanup</option>
				<option value="SCHEDULED_MAINTENANCE">Scheduled Maintenance</option>
				<option value="SOFTWARE_INSTALL_OR_UPDATE">Software Install/Update</option>
				<option value="HARDWARE_UPGRADE">Hardware Upgrade</option>
				<option value="SOUND_PROBLEM">Sound Problem</option>
				<option value="FIXING">Other Fixing</option>
			</select>
		</div>

		<div class="form-control">
			<label for="description" class="label">
				<span class="label-text">Description</span>
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
				onclick={() => goto(`${AppConfig.dashboards.care.device}${data.deviceId}`)}
			>
				{m.cancel()}
			</DashboardButton>
		</div>
	</form>
</div>
