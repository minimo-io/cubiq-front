<!-- src/routes/dashboard/care/device/[deviceId]/+layout.svelte -->
<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { ChevronDown, ExternalLink, Eye, Image, Laptop, PcCase } from '@lucide/svelte';
	import type { Device } from '$types/care/care.devices.types';
	import { m } from '$paraglide/messages';
	import { formatPhoneNumberForWhatsapp } from '$utils/phone.utils';
	import DeviceScanCode from '../../components/DeviceScanCode.svelte';
	import { browser } from '$app/environment';
	import Actions from './components/Actions.svelte';
	import { page } from '$app/state';

	interface Props {
		children: Snippet<[]>;
		data: LayoutData;
	}

	let { children, data }: Props = $props();

	let device: Device = $state(data.device);
	let deviceId: string = $derived(device.id);

	let deviceName = $derived(`${device.device_id}`);

	let deviceCodeSelection = $state('qr-code');

	const pageRouteId = $derived(page.route.id);

	function connectDevice(deviceId: string) {
		if (browser) {
			alert('Conectar dispositivo...');
		}
	}
</script>

<div class="flex w-full flex-col">
	<!-- Actions -->
	<div class="">
		<Actions countdown={10} handleRefresh={() => {}} isRefreshing={false} />
	</div>

	<!-- Content -->
	<div class="flex flex-col border-b md:flex-row">
		<!-- Right column -->
		<div
			class="border-base-200 {pageRouteId == '/dashboard/care/device/[deviceId]/add-service'
				? 'order-1 md:order-0'
				: ''} flex w-full flex-col justify-between border-r md:w-1/4"
		>
			<!-- Device title -->
			<div class="flex w-full flex-wrap items-center justify-between gap-2 border-b p-5">
				<h1
					class="text-base-content flex items-center text-left text-xl font-bold whitespace-nowrap"
				>
					{#if device.device_type == 'NOTEBOOK'}
						<Laptop class="mr-[1px] aspect-square h-4" />
					{:else}
						<PcCase class="mr-[1px] aspect-square h-4" />
					{/if}
					{deviceName}
				</h1>
				<!-- Status -->
				<div>
					{#if data.device.was_first_pinged}
						<div
							class={[
								'badge text-base-100 border-0 text-xs font-bold uppercase',
								data.device.status == 'CRITICAL' &&
									'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
								data.device.status == 'HEALTHY' && 'badge-success',
								data.device.status == 'WARNING' && 'badge-warning',
								data.device.status == 'MONITORING' && 'badge-neutral',
								data.device.status == 'NO_DATA' && 'badge-info'
							]}
						>
							{data.device.status}
						</div>
					{:else}
						<button
							onclick={() => connectDevice(deviceId)}
							class={['badge text-base-100 btn badge-neutral border-0 text-xs font-bold uppercase']}
						>
							{m.notConfigured()}
						</button>
					{/if}
				</div>
			</div>

			<!-- Device details -->
			<div class="text-base-content flex-1">
				<!-- Contact -->
				<div class="border-base-200/60 flex flex-wrap justify-between border-b p-3">
					<div class="text-base-content/40 mr-3 self-center">{m.contact()}</div>
					<div class="text-right">
						<span class="text-base">{device.contact_name ?? 'N/A'}</span>
						{#if device.contact_email}
							<br />
							{device.contact_email}
						{/if}
						{#if device.contact_phone}
							<br />
							{#if formatPhoneNumberForWhatsapp(device.contact_phone)}
								<a
									href="https://wa.me/{formatPhoneNumberForWhatsapp(device.contact_phone)}"
									target="_blank"
									class="link-primary link"
								>
									{device.contact_phone}
								</a>
							{:else}
								{device.contact_phone}
							{/if}
						{/if}
					</div>
				</div>

				<!-- Scan code -->
				<div
					class={[
						'border-base-200/60 flex justify-between border-b p-3',
						deviceCodeSelection == 'qr-code' && 'items-center',
						deviceCodeSelection == 'bar-code' && 'flex-col justify-center'
					]}
				>
					<div class="{deviceCodeSelection == 'qr-code' ? 'mr-3' : ''} flex items-center">
						<select
							bind:value={deviceCodeSelection}
							class={['select select-sm w-full', deviceCodeSelection == 'bar-code' && 'mx-2']}
						>
							<option value="qr-code">{m.qrCode()}</option>
							<option value="bar-code">{m.barCode()}</option>
						</select>
					</div>
					<div class={deviceCodeSelection == 'qr-code' ? 'w-[130px]' : 'w-full'}>
						<!-- deviceCodeSelection -->
						<DeviceScanCode codeType={deviceCodeSelection} content={device.id} />
					</div>
					{#if deviceCodeSelection == 'bar-code'}
						<!-- Code id -->
						<div class="mt-1 text-center text-xs tracking-widest">
							{device.id}
						</div>
					{/if}
				</div>

				<!-- Serial number -->
				{#if device.serial_number}
					<div class="border-base-200/60 flex flex-wrap justify-between border-b p-3">
						<div class="text-base-content/40 mr-3">{m.serialNumber()}</div>

						{device.serial_number ?? 'N/A'}
					</div>
				{/if}

				<!-- Model -->
				<div class="border-base-200/60 flex flex-wrap justify-between border-b p-3">
					<div class="text-base-content/40 mr-3">{m.model()}</div>
					<span class="text-base-content text-base">
						{#if device.manufacturer_model_url}
							<a
								href={device.manufacturer_model_url}
								class="text-primary flex items-center hover:underline"
								target="_blank"
								rel="nofollow noreferrer noopener"
							>
								<ExternalLink class="h-3" />
								{device.manufacturer_name}
								{device.manufacturer_model}
							</a>
						{:else}
							{device.manufacturer_name}
							{device.manufacturer_model}
						{/if}
					</span>
				</div>

				{#if !device.was_first_pinged}
					<button
						onclick={() => connectDevice(deviceId)}
						class="btn btn-primary btn-lg w-full rounded-none"
					>
						{m.setupMonitoring()}
					</button>
				{/if}

				{#if device.was_first_pinged}
					<!-- Other serialized data -->
					<div class="border-base-200/60 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Procesador:</div>
						{data.device?.device_metadata?.processor}
					</div>
					<div class="border-base-200/60 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">HDD:</div>
						{data.device?.device_metadata?.hdd}
					</div>
					<div class="border-base-200/60 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">RAM:</div>
						{data.device?.device_metadata?.ram}
					</div>
					<!-- <div class="border-base-200 border-b p-4">
						<strong>Remote Access:</strong>
						{data.device.remote_access ? 'Enabled' : 'Disabled'}
					</div> -->
				{/if}
			</div>
		</div>

		<!-- Left column -->
		<div
			class="flex flex-col items-start justify-start {pageRouteId ==
			'/dashboard/care/device/[deviceId]/add-service'
				? 'order-0 md:order-1'
				: ''} order-0 md:w-3/4"
		>
			{@render children()}
		</div>
	</div>
</div>
