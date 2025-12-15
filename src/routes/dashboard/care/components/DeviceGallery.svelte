<script lang="ts">
	import { m } from '$paraglide/messages';
	import { Eye, Image } from '@lucide/svelte';

	let imageModal = $state<HTMLDialogElement>();
	let selectedImage = $state<{ src: string; alt: string } | null>(null);

	function openImageModal(src: string, alt: string) {
		selectedImage = { src, alt };
		if (imageModal) {
			imageModal.showModal();
		}
	}
</script>

<div class="border-base-200 border-b">
	<!-- Gallery title -->
	<div class="border-b p-4">
		<h2 class="text-base-content mr-2 flex items-center text-left text-lg font-bold">
			<Image class="mr-[1px] aspect-square h-4" />
			{m.images()}
		</h2>
	</div>
	<!-- Gallery images -->
	<div class="flex flex-wrap gap-1">
		<button
			class="group relative h-[100px] w-[100px] overflow-hidden border-0 bg-transparent p-0"
			onclick={() => openImageModal('/devices/dell-vostro-3681.jpg', 'Dell Vostro 3681')}
		>
			<img
				src="/devices/dell-vostro-3681.jpg"
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
				alt="dell-vostro"
			/>
			<div
				class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
			>
				<Eye class="h-6 w-6 text-white" />
			</div>
		</button>
		<button
			class="group relative h-[100px] w-[100px] overflow-hidden border-0 bg-transparent p-0"
			onclick={() => openImageModal('/devices/vostro-2.jpg', 'Dell Vostro 2')}
		>
			<img
				src="/devices/vostro-2.jpg"
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
				alt="dell-vostro"
			/>
			<div
				class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
			>
				<Eye class="h-6 w-6 text-white" />
			</div>
		</button>
	</div>

	<!-- Image Modal -->
	<dialog bind:this={imageModal} class="modal">
		<div class="modal-box border-base-300 relative max-h-[90%] w-11/12 max-w-4xl border p-0">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 z-10 text-white"
					>✕</button
				>
			</form>
			{#if selectedImage}
				<img src={selectedImage.src} alt={selectedImage.alt} class="h-auto w-full object-contain" />
			{/if}
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</div>
