<!-- src/routes/dashboard/care/components/DeviceGallery.svelte -->
<script lang="ts">
	import { m } from '$paraglide/messages';
	import { Eye, Image } from '@lucide/svelte';
	import { modalState } from '$stores/Modal.state.svelte';

	function openImage(src: string, alt: string) {
		modalState.open({
			snippet: imageModal,
			props: { src, alt },
			size: 'xl',
			closeOnBackdrop: true
		});
	}
</script>

{#snippet imageModal(props)}
	<div class="p-0">
		{#if props?.src}
			<img src={props.src} alt={props.alt || ''} class="h-auto w-full object-contain" />
		{:else}
			<p>No image</p>
		{/if}
	</div>
{/snippet}

<div class="border-base-200 border-b">
	<div class="border-b p-4">
		<h2 class="text-base-content mr-2 flex items-center text-left text-lg font-bold">
			<Image class="mr-[1px] aspect-square h-4" />
			{m.images()}
		</h2>
	</div>
	<div class="flex flex-wrap gap-1">
		<button
			class="group relative h-[100px] w-[100px] overflow-hidden border-0 bg-transparent p-0"
			onclick={() => openImage('/devices/dell-vostro-3681.jpg', 'Dell Vostro 3681')}
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
			onclick={() => openImage('/devices/vostro-2.jpg', 'Dell Vostro 2')}
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
</div>
