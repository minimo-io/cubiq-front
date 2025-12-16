<!-- src/lib/components/Dashboard/products/caresync-dash/CareSyncDashboardDevices.svelte -->
<script lang="ts">
	import { Check, Laptop, PcCase } from '@lucide/svelte';
	import {
		DeviceStatus,
		DeviceType,
		type Device,
		type DeviceForList
	} from '$types/care/care.devices.types';
	import { onMount, onDestroy } from 'svelte';
	import { m } from '$paraglide/messages';
	import apiClient from '$lib/api';
	import CareSyncDashboardDevicesActions from '../../../../lib/components/Dashboard/products/caresync-dash/CareSyncDashboardDevicesActions.svelte';
	import { AppConfig } from '$lib/configs';
	import { localizeHref } from '$paraglide/runtime';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { userContextState } from '$stores/UserContext.state.svelte';
	import { page } from '$app/state';
	import { getTranslationFromCode } from '$utils/translations.utils';

	let user = $derived(page.data.user);
	let devices: DeviceForList[] = $state([]);

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

			devices = apiData.map((device: any): DeviceForList => {
				const getStatus = (metrics: any, deviceStatus: DeviceStatus): DeviceStatus | string => {
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

				// console.log('DEVICE', device);

				return {
					id: device.id,
					device_id: device.deviceId,
					manufacturer: {
						name: device.manufacturer.name,
						model: device.manufacturer.model
					},
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
				{:else if devices.length <= 0}
					<tr><td colspan="9" class="text-center">{m.noDevicesConfigured()}</td></tr>
				{:else}
					{#each devices as device, i (i)}
						{@const deviceUrl = localizeHref(`/dashboard/care/device/${device.id}`)}
						<tr class={{ '': i == 0 }}>
							<!-- Id -->
							<td>
								<div class="flex items-center">
									<a href={deviceUrl} class="text-primary">
										{device.device_id}
									</a>
								</div>
							</td>
							<!-- Serial number  -->
							<td>
								<span class="badge badge-ghost badge-sm uppercase">{device.serialNumber}</span>
							</td>
							<!-- Manufacturer/Model -->
							<td>
								<!-- <span class="badge badge-ghost badge-sm uppercase"> -->
								{device.manufacturer.name}
								{device.manufacturer.model}
								<!-- </span> -->
							</td>
							<td>
								<div class="flex items-center gap-3">
									{#if device.user && device.user.name}
										{#if device.user.image}
											<div class="avatar">
												<div class="mask mask-squircle aspect-square h-8">
													<img src={device.user.image} alt="user" />
												</div>
											</div>
										{/if}
										<div>
											<div class="text-base font-bold">{device.user.name}</div>
											<div class=" text-xs opacity-50">
												{device.user.state}, {device.user.city}
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
									{#if device.type == 'NOTEBOOK'}
										<Laptop class="mr-[1px] aspect-square h-4" />
									{:else}
										<PcCase class="mr-[1px] aspect-square h-4" />
									{/if}
									{device.type}
								</div>
							</td>
							<td>
								<div class="flex items-center">
									<Check
										class={[
											'mr-[1px] aspect-square h-4 ',
											device.remoteAccess ? 'text-green-500' : 'text-red-500'
										]}
									/>
									{#if device.remoteAccess}
										{m.yes()}
									{:else}
										{m.no()}
									{/if}
								</div>
							</td>

							<td>
								<div class="flex items-center">
									{#if device.wasFirstPinged}
										<div
											class={[
												'badge badge-outline relative flex items-center text-xs',
												device.online ? 'badge-success' : 'badge-neutral'
											]}
										>
											{device.online ? 'Online' : 'Offline'}
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
											device.status == 'CRITICAL' &&
												'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
											device.status == 'HEALTHY' && 'badge-success',
											device.status == 'WARNING' && 'badge-warning',
											device.status == 'MONITORING' && 'badge-neutral',
											device.status == 'NO_DATA' && 'badge-info'
										]}
									>
										{getTranslationFromCode(device.status)}
									</div>
								</div>
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
