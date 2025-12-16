<!-- src/routes/dashboard/care/device/[deviceId]/+layout.svelte -->
<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { ChevronDown, Eye, Image, Laptop, PcCase } from '@lucide/svelte';
	import type { Device } from '$types/care/care.devices.types';
	import { m } from '$paraglide/messages';
	import { formatPhoneNumberForWhatsapp } from '$utils/phone.utils';
	import DeviceScanCode from '../../components/DeviceScanCode.svelte';
	import { browser } from '$app/environment';

	interface Props {
		children: Snippet<[]>;
		data: LayoutData;
	}

	let { children, data }: Props = $props();

	let device: Device = $state(data.device);
	let deviceId: string = $derived(device.id);

	let deviceName = $derived(`${device.device_id}`);

	function connectDevice(deviceId: string) {
		if (browser) {
			alert('Conectar dispositivo...');
		}
	}
</script>

{#snippet sevicesTitle()}
	<!-- Services title -->
	<div class="p-5 text-left md:w-3/4">
		<h2 class="text-base-content text-xl font-bold">{m.servicesHistory()}</h2>
	</div>
{/snippet}

<div class="flex w-full flex-col">
	<!-- Title -->
	<div class="flex flex-row border-r border-b">
		<div class="border-base-200 flex w-full justify-between border-r p-5 md:w-1/4">
			<h1 class="text-base-content mr-2 flex flex-1 items-center text-left text-xl font-bold">
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
							'badge text-base-100 border-0 text-xs font-bold  uppercase',
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
						class={['badge text-base-100 btn badge-neutral border-0  text-xs font-bold uppercase']}
					>
						{m.notConfigured()}
					</button>
				{/if}
			</div>
		</div>

		<div class="hidden w-3/4 md:inline">
			{@render sevicesTitle()}
		</div>
	</div>

	<!-- Main Box -->
	<div class="flex flex-col md:flex-row">
		<!-- Left -->
		<div class="border-base-200 border-r md:w-1/4">
			<div class="text-secondary flex flex-col justify-between text-left">
				<div class="fw-device-details flex-1">
					<!-- Contact -->
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">{m.contact()}:</div>
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
					<div class="border-base-200 flex items-center justify-between border-b p-3">
						<div class="mr-3 flex items-center">
							<!-- <button class="btn btn-outline border-base-200 btn-sm border">
								{m.qrCode()}
								<ChevronDown class="h-3" />
							</button> -->
							<div class="dropdown">
								<div
									tabindex="0"
									role="button"
									class="btn btn-outline border-base-200 btn-sm border"
								>
									{m.qrCode()}
									<ChevronDown class="h-3" />
								</div>
								<ul
									tabindex="-1"
									class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
								>
									<li><button>{m.qrCode()}</button></li>
									<li><button>{m.barCode()}</button></li>
								</ul>
							</div>
						</div>
						<div class="w-[100px]">
							<DeviceScanCode />
						</div>
					</div>

					{#if !device.was_first_pinged}
						<button
							onclick={() => connectDevice(deviceId)}
							class="btn btn-primary btn-lg w-full rounded-none"
						>
							{m.setupMonitoring()}
						</button>
					{/if}

					<!-- Serial number -->
					{#if device.serial_number}
						<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
							<div class="mr-3">{m.serialNumber()}:</div>

							{device.serial_number ?? 'N/A'}
						</div>
					{/if}

					<!-- Model -->
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">{m.model()}:</div>
						<span class="text-base-content text-base font-black">
							{device.manufacturer_name}
							{device.manufacturer_model}
						</span>
					</div>

					{#if device.was_first_pinged}
						<!-- Other serialized data -->
						<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
							<div class="mr-3">Procesador:</div>
							{data.device?.device_metadata?.processor}
						</div>
						<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
							<div class="mr-3">HDD:</div>
							{data.device?.device_metadata?.hdd}
						</div>
						<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
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
		</div>
		<!-- Right -->
		<div class="py-0 md:w-3/4">
			<div class="border-base-200 flex border-b md:hidden">
				{@render sevicesTitle()}
			</div>
			{@render children()}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	.fw-device-details {
		@apply text-sm;
	}
</style>
