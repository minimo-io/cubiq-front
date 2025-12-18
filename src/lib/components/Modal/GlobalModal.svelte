<!-- src/lib/components/Modal/GlobalModal.svelte -->
<script lang="ts">
	import { modalState } from '$stores/Modal.state.svelte';
	import { onMount } from 'svelte';

	let dialogElement = $state<HTMLDialogElement>();

	// Derive the component for Svelte 5 dynamic components
	const ModalContent = $derived(modalState.config?.component);
	const modalSnippet = $derived(modalState.config?.snippet);

	$effect(() => {
		if (modalState.isOpen && dialogElement && !dialogElement.open) {
			dialogElement.showModal();
		} else if (!modalState.isOpen && dialogElement?.open) {
			dialogElement.close();
		}
	});

	function handleClose() {
		// Sync state when dialog closes by any method (ESC, close button, etc)
		if (modalState.isOpen) {
			modalState.close();
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (modalState.config?.closeOnBackdrop && e.target === dialogElement) {
			modalState.close();
		}
	}

	function handleCancel(e: Event) {
		// Handle ESC key press
		if (!modalState.config?.closeOnEscape) {
			e.preventDefault();
		} else {
			modalState.close();
		}
	}

	onMount(() => {
		return () => {
			if (dialogElement?.open) {
				dialogElement.close();
			}
		};
	});
</script>

<dialog
	bind:this={dialogElement}
	class="modal"
	onclick={handleBackdropClick}
	onclose={handleClose}
	oncancel={handleCancel}
>
	<div class="modal-backdrop h-dvh bg-[rgba(0,0,0,0.8)]"></div>

	{#if modalState.config && (ModalContent || modalSnippet)}
		<div
			class="modal-box border-base-300 max-h-[90%] w-11/12 border"
			class:max-w-md={modalState.config.size === 'sm'}
			class:max-w-2xl={modalState.config.size === 'md'}
			class:max-w-5xl={modalState.config.size === 'lg' || !modalState.config.size}
			class:max-w-7xl={modalState.config.size === 'xl'}
			class:max-w-full={modalState.config.size === 'full'}
			class:max-w-fit={modalState.config.size === 'auto'}
		>
			{#if modalSnippet}
				{@render modalSnippet(modalState.config.props)}
			{:else if ModalContent}
				<ModalContent {...modalState.config.props} />
			{/if}

			<!-- Close button -->
			<form method="dialog">
				<button
					class="btn btn-sm btn-circle btn-ghost absolute top-1 right-1 z-50 text-white"
					onclick={() => modalState.close()}
				>
					✕
				</button>
			</form>
		</div>
	{/if}
</dialog>
