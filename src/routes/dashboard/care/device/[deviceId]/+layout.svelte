<!-- src/routes/dashboard/care/device/[deviceId]/+layout.svelte -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { Eye, Image, Laptop, PcCase } from '@lucide/svelte';
	import { machineTypeCode } from '$utils';
	import type { Device } from '$types/caresync-machines.types';
	import { m } from '$paraglide/messages';
	import { formatPhoneNumberForWhatsapp } from '$utils/phone.utils';

	interface Props {
		children: Snippet<[]>;
		data: LayoutData;
	}

	let { children, data }: Props = $props();

	let device: Device = $state(data.device);
	let deviceName = $derived(
		`${machineTypeCode(device.device_type)}-${device.device_id}${
			device.is_owned_by_contact ? '-CP' : ''
		}`
	);

	let imageModal = $state<HTMLDialogElement>();
	let selectedImage = $state<{ src: string; alt: string } | null>(null);

	function openImageModal(src: string, alt: string) {
		selectedImage = { src, alt };
		if (imageModal) {
			imageModal.showModal();
		}
	}
</script>

<div class="flex w-full flex-col">
	<!-- Title -->
	<div class="flex flex-row border-r border-b">
		<div class="border-base-200 flex w-1/3 border-r p-5">
			<h1 class="text-base-content mr-2 flex items-center text-left text-xl font-bold">
				{#if device.device_type == 'NOTEBOOK'}
					<Laptop class="mr-[1px] aspect-square h-4" />
				{:else}
					<PcCase class="mr-[1px] aspect-square h-4" />
				{/if}
				{deviceName}
			</h1>
			<div>
				<div
					class={[
						'badge text-base-100 border-0 text-xs font-bold uppercase',
						data.device.status == 'ALERT' &&
							'badge-error animate__animated animate__pulse animate__infinite infinite bg-red-500',
						data.device.status == 'FINE' && 'badge-success',
						data.device.status == 'PROBLEMS' && 'badge-warning',
						data.device.status == 'MONITORING' && 'badge-neutral',
						data.device.status == 'NO_DATA' && 'badge-info'
					]}
				>
					{data.device.status}
				</div>
			</div>
		</div>

		<div class="w-2/3 p-5">
			<h2 class="text-base-content text-xl font-bold">{m.servicesHistory()}</h2>
		</div>
	</div>

	<!-- Main Box -->
	<div class="flex">
		<!-- Left -->
		<div class="border-base-200 w-1/3 border-r">
			<div class="text-secondary flex flex-col justify-between text-left">
				<div class="fw-device-details flex-1">
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Modelo:</div>
						<span class="text-base-content text-base font-black">
							{device.device_metadata.model ?? 'N/A'} / {data.device.device_type}
						</span>
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Contato:</div>
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

					<!-- <div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Nro Série:</div>
						<strong>{device. ?? 'N/A'}</strong>
					</div> -->

					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Nro Série:</div>
						{device.device_metadata.serial_number ?? 'N/A'}
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">Procesador:</div>
						{data.device.device_metadata.processor}
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">HDD:</div>
						{data.device.device_metadata.hdd}
					</div>
					<div class="border-base-200 flex flex-wrap justify-between border-b p-3">
						<div class="mr-3">RAM:</div>
						{data.device.device_metadata.ram}
					</div>
					<!-- <div class="border-base-200 border-b p-4">
						<strong>Remote Access:</strong>
						{data.device.remote_access ? 'Enabled' : 'Disabled'}
					</div> -->
				</div>

				<!-- Qr code -->
				<div class="my-10 flex justify-center">
					<img src="/qr-code.png" alt="device-qr-code" class="w-[80%]" />
				</div>

				<!-- Gallery title -->
				<div class="border-base-200 border-t border-b p-4">
					<h2 class="text-base-content mr-2 flex items-center text-left text-lg font-bold">
						<Image class="mr-[1px] aspect-square h-4" />
						Imagens
					</h2>
				</div>

				<!-- Gallery images -->
				<div class="fw-gallery">
					<button
						class="group fw-gallery-item h-[100px] w-[100px]"
						onclick={() => openImageModal('/devices/dell-vostro-3681.jpg', 'Dell Vostro 3681')}
					>
						<img
							src="/devices/dell-vostro-3681.jpg"
							class="h-full w-full object-cover"
							alt="dell-vostro"
						/>
						<div class="fw-gallery-overlay">
							<Eye class="h-6 w-6 text-white" />
						</div>
					</button>
					<button
						class="group fw-gallery-item h-[100px] w-[100px]"
						onclick={() => openImageModal('/devices/vostro-2.jpg', 'Dell Vostro 2')}
					>
						<img src="/devices/vostro-2.jpg" class="h-full w-full object-cover" alt="dell-vostro" />
						<div class="fw-gallery-overlay">
							<Eye class="text-base-content h-6 w-6" />
						</div>
					</button>
				</div>

				<!-- Image Modal -->
				<dialog bind:this={imageModal} class="modal">
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 z-10 text-white"
							>✕</button
						>
					</form>
					<div class="modal-box border-base-300 max-h-[90%] w-11/12 max-w-4xl border p-0">
						{#if selectedImage}
							<img
								src={selectedImage.src}
								alt={selectedImage.alt}
								class="h-auto w-full object-contain"
							/>
						{/if}
					</div>
					<form method="dialog" class="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
			</div>
		</div>
		<!-- Right -->
		<div class="w-2/3 py-0">
			{@render children()}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	.fw-device-details {
		@apply text-sm;
	}
	/* Styles for each gallery item */
	.fw-gallery {
		@apply flex flex-wrap gap-1;
	}
	.fw-gallery-item {
		@apply relative overflow-hidden border-0 bg-transparent p-0;
	}

	.fw-gallery-item img {
		@apply transition-all duration-300;
	}

	/* This rule applies directly to the item when hovered */
	.fw-gallery-item:hover img {
		@apply scale-110;
	}

	/* Styles for the overlay (default hidden state) */
	.fw-gallery-overlay {
		/* CORRECTED: Changed bg-black bg-opacity-40 to bg-black/40 */
		@apply pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300;
	}

	/* Styles for the overlay when the parent item is hovered */
	.fw-gallery-item:hover .fw-gallery-overlay {
		@apply pointer-events-auto opacity-100;
	}
</style>
