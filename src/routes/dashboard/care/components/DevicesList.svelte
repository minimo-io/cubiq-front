<!-- src/lib/components/Dashboard/products/caresync-dash/CareSyncDashboardDevices.svelte -->
<script lang="ts">
	import { Check, Laptop, PcCase } from '@lucide/svelte';
	import {
		MachineStatus,
		MachineType,
		type Device,
		type Machine
	} from '$types/care/care.machines.types';
	import { onMount, onDestroy } from 'svelte';
	import { m } from '$paraglide/messages';
	import apiClient from '$lib/api';
	import CareSyncDashboardDevicesActions from '../../../../lib/components/Dashboard/products/caresync-dash/CareSyncDashboardDevicesActions.svelte';
	import { AppConfig } from '$lib/configs';
	import { localizeHref } from '$paraglide/runtime';
	import { machineTypeCode } from '$utils';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { userContextState } from '$stores/UserContext.state.svelte';
	import { page } from '$app/state';

	let user = $derived(page.data.user);
	let machines: Machine[] = $state([]);

	let isLoading = $state(true);
	let isRefreshing = $state(false);
	let error = $state<string | null>(null);
	let refreshInterval: any;
	let countdownInterval: any;
	let countdown = $state(AppConfig.care.deviceRefreshIntervalSeconds);

	const fetchDevices = async () => {
		try {
			const response = await apiClient.get(
				`/care/devices?company_id=${userContextState.active?.company_id}&user_id=${user.id}`
			);
			const apiData = response.data.data;
			if (!apiData) throw new Error('No API Data fetched!');

			machines = apiData.map((device: any): Machine => {
				const getStatus = (metrics: any, deviceStatus: MachineStatus): MachineStatus | string => {
					return deviceStatus;
				};

				const getMonthsActive = (installationDate: string): number => {
					const install = new Date(installationDate);
					const now = new Date();
					let months = (now.getFullYear() - install.getFullYear()) * 12;
					months -= install.getMonth();
					months += now.getMonth();
					return months <= 0 ? 0 : months;
				};

				return {
					id: device.id,
					device_id: device.deviceId,
					online: device.status === 'active',
					status: getStatus(device.metrics, device.status),
					type: device.type,
					isOwnedByContact: device.is_owned_by_contact,
					remoteAccess: device.remoteAccess,
					wasFirstPinged: device.was_first_pinged,
					organization: device.company?.name || 'N/A',
					user: {
						name: device.contact?.name || undefined,
						state: device.contact?.state || undefined,
						city: device.contact?.city || undefined,
						image: device.contact?.image || undefined,
						contact: {
							type: 'whatsapp',
							value: device.contact?.phone || undefined
						}
					},
					lastService: 'N/A',
					nextService: 'N/A',
					timeActive: device.deviceMetadata?.installation_date
						? getMonthsActive(device.deviceMetadata.installation_date)
						: 0,
					serialNumber: device.deviceMetadata?.serial_number || 'N/A',
					brand: device.deviceMetadata?.model ? device.deviceMetadata.model.split(' ')[0] : 'N/A',
					model: device.model_id || 'N/A'
				};
			});
		} catch (err: any) {
			error = err.message;
		}
	};

	const startCountdown = () => {
		countdownInterval = setInterval(() => {
			countdown--;
			if (countdown === 0) {
				countdown = AppConfig.care.deviceRefreshIntervalSeconds;
			}
		}, 1000);
	};

	onMount(async () => {
		await fetchDevices();
		isLoading = false;

		refreshInterval = setInterval(
			handleRefresh,
			AppConfig.care.deviceRefreshIntervalSeconds * 1000
		);
		startCountdown();
	});

	// Listen for changes in the change of contexts
	$effect(() => {
		if (userContextState.active?.company_id) {
			isLoading = true;
			fetchDevices().then(() => {
				isLoading = false;
			});
		}
	});

	onDestroy(() => {
		clearInterval(refreshInterval);
		clearInterval(countdownInterval);
	});

	const handleRefresh = async () => {
		isRefreshing = true;
		error = null;
		countdown = AppConfig.care.deviceRefreshIntervalSeconds;
		await fetchDevices();
		isRefreshing = false;
	};
</script>

<div class="flex flex-1 flex-col">
	<CareSyncDashboardDevicesActions {handleRefresh} {isRefreshing} {countdown} />

	<div class="w-full min-w-0 overflow-x-auto">
		<table class=" table border-t-0 border-l-0 md:w-full">
			<thead>
				<tr>
					<th>ID</th>
					<th>{m.serialNumber()}</th>
					<th>{m.model()}</th>
					<th>{m.model()}</th>
					<th>{m.type()}</th>
					<th>{m.rAccess()}</th>
					<th>{m.connected()}</th>
					<th>{m.status()}</th>
					<!-- <th>Org</th> -->

					<!-- <th>Última/Próxima Manutenção</th> -->
					<!-- <th>Tempo Ativo</th> -->

					<th>{m.manufacturer()}</th>
					<th>{m.actions()}</th>
				</tr>
			</thead>

			<tbody>
				{#if isLoading}
					<tr>
						<td colspan="11" class="text-center"
							>{m.loading({ something: ` ${userContextState.active?.company_name}` })}</td
						>
					</tr>
				{:else if error}
					<tr>
						<td colspan="11" class="text-error text-center">{error}</td>
					</tr>
				{:else if machines.length <= 0}
					<tr><td colspan="9" class="text-center">{m.noDevicesConfigured()}</td></tr>
				{:else}
					{#each machines as machine, i (i)}
						{@const deviceUrl = localizeHref(`/dashboard/care/device/${machine.id}`)}
						<tr class={{ '': i == 0 }}>
							<td>
								<div class="flex items-center">
									<a href={deviceUrl} class="text-primary">
										{machine.device_id}
									</a>
								</div>
							</td>
							<td>
								<span class="badge badge-ghost badge-sm uppercase">{machine.serialNumber}</span>
							</td>
							<td>
								<span class="badge badge-ghost badge-sm uppercase">{machine.model}</span>
							</td>
							<td>
								<div class="flex items-center gap-3">
									{#if machine.user && machine.user.name}
										{#if machine.user.image}
											<div class="avatar">
												<div class="mask mask-squircle aspect-square h-8">
													<img src={machine.user.image} alt="user" />
												</div>
											</div>
										{/if}
										<div>
											<div class="text-base font-bold">{machine.user.name}</div>
											<div class=" text-xs opacity-50">
												{machine.user.state}, {machine.user.city}
											</div>
										</div>
									{:else}
										<div
											class={[
												'badge text-base-100 badge-success border-0 text-xs font-bold uppercase'
											]}
										>
											Disponível
										</div>
									{/if}
								</div>
							</td>
							<td>
								<div class="flex items-center">
									{#if machine.type == 'NOTEBOOK'}
										<Laptop class="mr-[1px] aspect-square h-4" />
									{:else}
										<PcCase class="mr-[1px] aspect-square h-4" />
									{/if}
									{machine.type}
								</div>
							</td>
							<td>
								<div class="flex items-center">
									<Check
										class={[
											'mr-[1px] aspect-square h-4 ',
											machine.remoteAccess ? 'text-green-500' : 'text-red-500'
										]}
									/>
									{#if machine.remoteAccess}
										{m.yes()}
									{:else}
										{m.no()}
									{/if}
								</div>
							</td>

							<td>
								<div class="flex items-center">
									{#if machine.wasFirstPinged}
										<div
											class={[
												'badge badge-outline relative flex items-center text-xs',
												machine.online ? 'badge-success' : 'badge-neutral'
											]}
										>
											{machine.online ? 'Online' : 'Offline'}
										</div>
									{:else}
										<button
											onclick={() => alert('Configure device...')}
											class="btn badge badge-outline badge-neutral relative flex items-center text-xs"
										>
											{m.notConfigured()}
										</button>
									{/if}
								</div>
							</td>
							<td>
								<div class="flex items-center">
									<div
										class={[
											'badge text-base-100 border-0 text-xs font-bold uppercase',
											machine.status == 'CRITICAL' &&
												'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
											machine.status == 'HEALTHY' && 'badge-success',
											machine.status == 'WARNING' && 'badge-warning',
											machine.status == 'MONITORING' && 'badge-neutral',
											machine.status == 'NO_DATA' && 'badge-info'
										]}
									>
										{machine.status}
									</div>
								</div>
							</td>
							<!-- <td>{machine.organization}</td> -->

							<!-- <td>
						<span class="text-neutral">
							{machine.lastService}
						</span>
						<span class="mx-2"> › </span>
						{machine.nextService}
					</td> -->
							<!-- <td>{machine.timeActive} meses</td> -->

							<td class="uppercase">
								{machine.model}
							</td>
							<th>
								<DashboardButton type="primary" href={deviceUrl}>
									{m.open()}
								</DashboardButton>

								<!-- <a href={deviceUrl} class="btn btn-sm btn-primary">Abrir</a> -->
							</th>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	td {
		color: #e7e9ea;
	}
	th {
		@apply text-white;
	}
</style>
