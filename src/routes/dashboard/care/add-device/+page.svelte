<!-- src/routes/dashboard/care/add-device/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { m } from '$paraglide/messages';
	import { MachineType } from '$lib/type/caresync-machines.types';
	import { goto } from '$app/navigation';
	import apiClient from '$lib/api.js';
	import { FwToast } from '$stores/Toast.state.svelte.js';
	import { page } from '$app/state';

	let { data } = $props();

	let formMessage: string | null = $state(null);
	let isSuccess: boolean = $state(false);

	// Company & contacts
	let selectedCompanyId: string | undefined = $state(undefined);
	let selectedContactId: string | undefined = $state(undefined);
	// let deviceID: string = $state('NT-0032');

	let filteredContacts = $state<any[]>([]);
	let nextDeviceId = $state<any>(null);
	let isContactsLoading = $state(false);

	let user = $derived(page.data.user);

	// Reactive effect: load contacts when companyId changes
	$effect(() => {
		if (!selectedCompanyId) {
			filteredContacts = [];
			nextDeviceId = null;
			return;
		}

		isContactsLoading = true;
		const currentCompanyId = selectedCompanyId; // capture for stale-check

		// Start the async flow
		apiClient
			.get(`/care/contacts?company_id=${currentCompanyId}&user_id=${user.id}`)
			.then((response) => {
				// Only proceed if selection hasn't changed
				if (selectedCompanyId !== currentCompanyId) return;

				const contacts = Array.isArray(response?.data?.data) ? response.data.data : [];
				filteredContacts = contacts;
			})

			.catch((error) => {
				// Only show error if still on the same company
				if (selectedCompanyId === currentCompanyId) {
					console.error('Failed to load contacts or next device id:', error);
					FwToast.launch('Failed to load contacts or next device id', 'error');
					filteredContacts = [];
					nextDeviceId = null;
				}
			})
			.finally(() => {
				if (selectedCompanyId === currentCompanyId) {
					isContactsLoading = false;
				}
			});
	});
</script>

<div class="flex w-full flex-col justify-start border">
	<!-- Title -->
	<div class="border-base-200 flex w-full border-b p-5">
		<h1 class="text-base-content mr-2 flex items-center text-left text-xl font-bold">
			{m.addDevice()}
		</h1>
	</div>

	<div class=" p-4 text-left text-white md:max-w-1/2">
		<form
			method="POST"
			action="?/addDevice"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						const data = result.data as { id?: string };

						formMessage = m.deviceAddedSuccess();
						FwToast.launch(m.deviceAddedSuccess(), 'success');
						isSuccess = true;
						// EOY
						if (data?.id) {
							setTimeout(() => {
								goto(`/dashboard/care/device/${data.id}`);
							}, 1500);
						} else {
							// Fallback if no ID (shouldn't happen)
							setTimeout(() => {
								goto('/dashboard/care');
							}, 1500);
						}
					} else if (result.type === 'error') {
						formMessage = result.error?.message || m.deviceAddedError();
						FwToast.launch(m.deviceAddedError(), 'error');
						isSuccess = false;
					} else if (result.type === 'failure') {
						const data = result.data as { message?: string } | undefined;
						formMessage = data?.message || m.deviceAddedFailure();
						FwToast.launch(m.deviceAddedFailure(), 'error');
						isSuccess = false;
					}
				};
			}}
			class="card shadow-xl"
		>
			<div class="form-control mb-4">
				<label for="company_id" class="label">
					<span class="label-text text-gray-300">{m.organization()}</span>
				</label>
				<select
					id="company_id"
					name="company_id"
					required
					class="select select-bordered w-full"
					onchange={(e) => (selectedCompanyId = (e.target as HTMLSelectElement).value)}
				>
					<option value="">{m.selectOrganization()}</option>
					<!-- {#each data.companies as company}
						<option value={company.id}>{company.name}</option>
					{/each} -->
					{#each data.contexts as context}
						<option value={context.company_id}>{context.company_name}</option>
					{/each}
				</select>
			</div>

			<!-- Contact -->
			<div class="form-control mb-4">
				<label for="contact_id" class="label">
					<span class="label-text text-gray-300">Contact</span>
				</label>
				<select
					id="contact_id"
					name="contact_id"
					class="select select-bordered w-full"
					onchange={(e) => (selectedContactId = (e.target as HTMLSelectElement).value)}
				>
					{#if !selectedContactId && isContactsLoading}
						<option value="">{m.loadingContacts()}</option>
					{:else}
						<option value="">{m.selectContact()}</option>
					{/if}

					{#if isContactsLoading}
						<!-- <option disabled>Loading contacts...</option> -->
					{:else}
						{#each filteredContacts as contact}
							<option value={contact.id}>{contact.name}</option>
						{/each}
					{/if}
				</select>
			</div>

			<div class="form-control mb-4">
				<label for="status" class="label">
					<span class="label-text text-gray-300">{m.status()}</span>
				</label>
				<select id="status" name="status" required class="select select-bordered w-full">
					<option value="HEALTHY">{m.statusHealthy()}</option>
					<option value="WARNING">{m.statusWarning()}</option>
					<option value="CRITICAL">{m.statusCritical()}</option>
					<option value="MONITORING">{m.statusMonitoring()}</option>
				</select>
			</div>

			<div class="form-control mb-4">
				<label for="device_type" class="label">
					<span class="label-text text-gray-300">{m.deviceType()}</span>
				</label>
				<select id="device_type" name="device_type" class="select select-bordered w-full">
					<option value="">Select device type (optional)</option>
					{#each Object.values(MachineType) as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</div>

			<div class="form-control mb-4">
				<label for="serial_number" class="label">
					<span class="label-text text-gray-300">{m.serialNumber()}</span>
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
				<label class="label cursor-pointer">
					<span class="label-text text-gray-300">{m.remoteAccess()}</span>
					<input
						type="checkbox"
						id="remote_access"
						name="remote_access"
						class="checkbox checkbox-primary"
					/>
				</label>
			</div>

			<div class="form-control mb-4">
				<label class="label cursor-pointer">
					<span class="label-text text-gray-300">{m.ownedByContact()}</span>
					<input
						type="checkbox"
						id="owned_by_contact"
						name="owned_by_contact"
						class="checkbox checkbox-primary"
					/>
				</label>
			</div>

			<!-- <div class="form-control mb-4">
				<label for="device_id" class="label">
					<span class="label-text text-gray-300">{m.deviceID()}</span>
				</label>
				<input
					value={nextDeviceId}
					type="text"
					disabled
					id="device_id"
					name="device_id"
					required
					placeholder="Enter device ID"
					class="input input-bordered w-full"
				/>
			</div> -->

			<!-- <div class="form-control mb-4">
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
			</div> -->

			<!-- <div class="form-control mb-4">
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
			</div> -->
			<!-- 
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
			</div> -->

			<!-- <div class="form-control mb-4">
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
			</div> -->

			<!-- <div class="form-control mb-4">
				<label for="bios_date" class="label">
					<span class="label-text text-gray-300">BIOS Date</span>
				</label>
				<input type="date" id="bios_date" name="bios_date" class="input input-bordered w-full" />
			</div> -->

			<!-- <div class="form-control mb-4">
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
			</div> -->

			<button type="submit" class="btn btn-primary mt-4"> {m.addDevice()} </button>
		</form>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	label {
		@apply mb-1 pl-1;
	}
</style>
