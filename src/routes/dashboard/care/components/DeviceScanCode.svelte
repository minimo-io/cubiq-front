<!-- src/routes/dashboard/care/components/DeviceScanCode.svelte -->
<script lang="ts">
	import { modalState } from '$stores/Modal.state.svelte';
	import { generate } from 'lean-qr';
	import JsBarcode from 'jsbarcode';
	import { page } from '$app/state';

	let { codeType, content }: { codeType: string; content: string } = $props();
	let canvas = $state<HTMLCanvasElement>();

	$effect(() => {
		// if (canvas) {
		// 	const code = generate(content);
		// 	// This auto-resizes the canvas to be tiny (e.g., 25x25px)
		// 	code.toCanvas(canvas, { pad: 1 });
		// }
		if (!canvas) return;

		if (canvas) {
			if (codeType === 'qr-code') {
				const urlBarcode = `${page.url}`;
				const code = generate(urlBarcode);
				code.toCanvas(canvas, { pad: 1 });
			} else {
				// Barcode implementation
				JsBarcode(canvas, content, {
					format: 'CODE128',
					displayValue: false, // We handle the text display manually below
					background: '#ffffff',
					lineColor: '#000000',
					margin: 10,
					height: 100 // Internal height resolution
				});
			}
		}
	});
</script>

<!-- QR code snippet -->
{#snippet qrModalBlock(props)}
	<div class="flex w-full flex-col justify-center">
		<div class=" flex w-full self-center bg-white p-1">
			<canvas
				bind:this={canvas}
				class={[
					'block [image-rendering:pixelated]',
					props.w == '100' && 'w-[100px]',
					props.w == '130' && 'w-[130px]',
					props.w == '200' && 'w-[200px]',
					props.w == '250' && 'w-[250px]'
				]}
			></canvas>
		</div>
		<!-- Code id -->
		<div class="mt-2 text-center text-xs tracking-widest">
			{#if props.showCode}
				{content}
			{/if}
		</div>
	</div>
{/snippet}

<!-- Bar code snippet -->
{#snippet barcodeSnippet(props)}
	<div class="flex w-full flex-col items-center justify-center p-2">
		<div class="flex w-full justify-center border border-gray-100 bg-white p-4 shadow-sm">
			<canvas bind:this={canvas} style="width: {props.width}px;" class="block h-auto max-w-full"
			></canvas>
		</div>
		{#if props.showCode}
			<span class="mt-2 font-mono text-xs tracking-[0.3em] uppercase opacity-60">{content}</span>
		{/if}
	</div>
{/snippet}

<!-- QR-Code -->
{#if codeType == 'qr-code'}
	<!-- QR code -->
	<button
		onclick={() =>
			modalState.open({
				snippet: qrModalBlock,
				props: { w: '250', showCode: true },
				size: 'auto',
				closeOnBackdrop: true
			})}
		class="flex flex-col items-center justify-center gap-4"
	>
		{@render qrModalBlock({ w: '130' })}
	</button>
{:else}
	<!-- Bar code -->
	<button
		onclick={() =>
			modalState.open({
				snippet: barcodeSnippet,
				props: { width: '450', showCode: true },
				size: 'auto',
				closeOnBackdrop: true
			})}
		class="w-full transition-transform active:scale-95"
	>
		{@render barcodeSnippet({ width: '200', showCode: false })}
	</button>
{/if}
