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

	function handleBackdropClick(e: MouseEvent) {
		if (modalState.config?.closeOnBackdrop && e.target === dialogElement) {
			modalState.close();
		}
	}

	function handleEscape(e: KeyboardEvent) {
		if (e.key === 'Escape' && !modalState.config?.closeOnEscape) {
			e.preventDefault();
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
	onkeydown={handleEscape}
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
		>
			<form method="dialog">
				<button
					class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-white"
					onclick={() => modalState.close()}
				>
					✕
				</button>
			</form>

			{#if modalSnippet}
				{@render modalSnippet(modalState.config.props)}
			{:else if ModalContent}
				<ModalContent {...modalState.config.props} />
			{/if}
		</div>
	{/if}
</dialog>
