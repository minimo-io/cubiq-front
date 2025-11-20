<script lang="ts">
	import { enhance } from '$app/forms';
	import { m } from '$paraglide/messages';
	import { MachineType } from '$lib/type/caresync-machines.types';

	// export let data;

	let { data } = $props();

	let formMessage: string | null = $state(null);
	let isSuccess: boolean = $state(false);

	let selectedCompanyId: string | undefined;
	let filteredContacts = $derived(
		selectedCompanyId
			? data.contacts.filter(
					(contact: { company_id: string }) => contact.company_id === selectedCompanyId
				)
			: []
	);
</script>

<div class="container mx-auto p-4 text-white">
	<form
		method="POST"
		action="?/addDevice"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.type === 'success') {
					formMessage = m.deviceAddedSuccess();
					isSuccess = true;
				} else if (result.type === 'error') {
					formMessage = result.error?.message || m.deviceAddedError();
					isSuccess = false;
				} else if (result.type === 'failure') {
					const data = result.data as { message?: string } | undefined;
					formMessage = data?.message || m.deviceAddedFailure();
					isSuccess = false;
				}
			};
		}}
		class="card bg-base-200 p-6 shadow-xl"
	>
		<div class="form-control mb-4">
			<label for="company_id" class="label">
				<span class="label-text text-gray-300">Company</span>
			</label>
			<select
				id="company_id"
				name="company_id"
				required
				class="select select-bordered w-full"
				onchange={(e) => (selectedCompanyId = (e.target as HTMLSelectElement).value)}
			>
				<option value="">Select a company</option>
				{#each data.companies as company}
					<option value={company.id}>{company.name}</option>
				{/each}
			</select>
		</div>

		<div class="form-control mb-4">
			<label for="contact_id" class="label">
				<span class="label-text text-gray-300">Contact</span>
			</label>
			<select id="contact_id" name="contact_id" class="select select-bordered w-full">
				<option value="">Select a contact (optional)</option>
				{#each filteredContacts as contact}
					<option value={contact.id}>{contact.name}</option>
				{/each}
			</select>
		</div>

		<div class="form-control mb-4">
			<label for="device_id" class="label">
				<span class="label-text text-gray-300">Device ID</span>
			</label>
			<input
				type="text"
				id="device_id"
				name="device_id"
				required
				placeholder="Enter device ID"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="hostname" class="label">
				<span class="label-text text-gray-300">Hostname</span>
			</label>
			<input
				type="text"
				id="hostname"
				name="hostname"
				required
				placeholder="Enter hostname"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="status" class="label">
				<span class="label-text text-gray-300">Status</span>
			</label>
			<select id="status" name="status" required class="select select-bordered w-full">
				<option value="active">Active</option>
				<option value="inactive">Inactive</option>
				<option value="maintenance">Maintenance</option>
			</select>
		</div>

		<div class="form-control mb-4">
			<label for="device_type" class="label">
				<span class="label-text text-gray-300">Device Type</span>
			</label>
			<select id="device_type" name="device_type" class="select select-bordered w-full">
				<option value="">Select device type (optional)</option>
				{#each Object.values(MachineType) as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
		</div>

		<div class="form-control mb-4">
			<label class="label cursor-pointer">
				<span class="label-text text-gray-300">Remote Access</span>
				<input
					type="checkbox"
					id="remote_access"
					name="remote_access"
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<div class="form-control mb-4">
			<label for="os" class="label">
				<span class="label-text text-gray-300">Operating System</span>
			</label>
			<input
				type="text"
				id="os"
				name="os"
				placeholder="e.g., Windows 10 Pro"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="hdd" class="label">
				<span class="label-text text-gray-300">HDD/SSD</span>
			</label>
			<input
				type="text"
				id="hdd"
				name="hdd"
				placeholder="e.g., 512 GB SSD"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="ram" class="label">
				<span class="label-text text-gray-300">RAM</span>
			</label>
			<input
				type="text"
				id="ram"
				name="ram"
				placeholder="e.g., 12GB"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="model" class="label">
				<span class="label-text text-gray-300">Model</span>
			</label>
			<input
				type="text"
				id="model"
				name="model"
				placeholder="e.g., MacBookX Air 16"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="bios_date" class="label">
				<span class="label-text text-gray-300">BIOS Date</span>
			</label>
			<input type="date" id="bios_date" name="bios_date" class="input input-bordered w-full" />
		</div>

		<div class="form-control mb-4">
			<label for="processor" class="label">
				<span class="label-text text-gray-300">Processor</span>
			</label>
			<input
				type="text"
				id="processor"
				name="processor"
				placeholder="e.g., Intel Core i7-8650U"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="serial_number" class="label">
				<span class="label-text text-gray-300">Serial Number</span>
			</label>
			<input
				type="text"
				id="serial_number"
				name="serial_number"
				placeholder="e.g., ABC123456"
				class="input input-bordered w-full"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="installation_date" class="label">
				<span class="label-text text-gray-300">Installation Date</span>
			</label>
			<input
				type="date"
				id="installation_date"
				name="installation_date"
				class="input input-bordered w-full"
			/>
		</div>

		<button type="submit" class="btn btn-primary mt-4"> Add Device </button>

		{#if formMessage}
			<div role="alert" class="alert mt-4 {isSuccess ? 'alert-success' : 'alert-error'}">
				<span>{formMessage}</span>
			</div>
		{/if}
	</form>
</div>
