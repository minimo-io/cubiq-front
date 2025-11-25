<!-- src/lib/components/Switcher.svelte -->
<script lang="ts">
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { Info } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	let { options = ['Autopilot', 'Copilot'], selected = $bindable(), onChange } = $props();

	function handleSelect(option) {
		selected = option;
		onChange?.(option);
	}

	let isOpen = $state(false);
	let dialog = $state<HTMLDialogElement>();
	let dropdownRef = $state<HTMLDivElement>();

	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	$effect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div
	class="border-base-300 relative hidden items-center gap-0 rounded-full border bg-black p-1 md:inline-flex"
>
	{#each options as option, index}
		<button
			class="relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-100
             {selected === option
				? 'text-base-content'
				: 'text-base-content/60 hover:text-base-content/80'}"
			onclick={() => handleSelect(option)}
		>
			{#if selected === option}
				<div
					class="bg-primary/90 border-primary absolute inset-0 -z-10 rounded-full border shadow-sm"
					transition:fly={{ x: index === 0 ? 20 : -20, duration: 100 }}
				></div>
			{/if}
			<span class="font-sans text-lg font-bold">
				{option}
			</span>
		</button>
	{/each}
	<button
		class="btn btn-sm rounded-circle absolute -top-3 right-0 z-50 m-0 rounded-full bg-black p-0"
		onclick={() => dialog?.showModal()}
	>
		<Info />
	</button>
</div>

<div class="relative -top-8 mt-4 w-full px-4 md:-top-0 md:hidden" bind:this={dropdownRef}>
	<div class="dropdown dropdown-end w-full">
		<button
			class="select select-lg select-primary flex w-full items-center justify-between rounded-xl text-center font-sans text-[18px] font-black transition-colors {isOpen
				? 'bg-primary/30'
				: 'bg-primary/10'}"
			onclick={() => (isOpen = !isOpen)}
		>
			<span class="flex-1">{selected}</span>
		</button>
		<div class="relative -top-2 flex justify-end">
			<button class="btn btn-sm btn-primary rounded-full" onclick={() => dialog?.showModal()}>
				{m.learnMore()}
			</button>
		</div>
		{#if isOpen}
			<ul
				class="dropdown-content menu bg-base-100 rounded-box border-base-300 z-50 mt-2 w-full border shadow-lg"
			>
				{#each options as option}
					<li>
						<button
							class="hover:bg-primary/20 active:bg-primary/30 justify-center rounded-lg py-3 text-center font-sans text-lg font-normal {selected ===
							option
								? 'bg-primary/10 font-semibold'
								: ''}"
							onclick={() => {
								selected = option;
								isOpen = false;
								onChange?.(selected);
							}}
						>
							{option}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<dialog bind:this={dialog} class="modal">
	<div class="modal-box border-base-300 border">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
		</form>
		<!-- <h3 class="text-lg font-bold">Hello!</h3> -->
		<div class="flex flex-col py-3 text-left font-sans">
			<h3 class="mb-2 text-xl font-bold">{selected}</h3>

			{#if selected == m.careSyncAssetManagment()}
				{@html m.careSyncFeaturedSlogan()}
				<a href={localizeHref('/loja')} class="btn btn-sm btn-primary mt-3 w-fit rounded-full"
					>{m.contactSupport()}</a
				>
			{:else if selected == m.rental()}
				{@html m.careHaaSSlogan()}
				<a href={localizeHref('/loja')} class="btn btn-sm btn-primary mt-3 w-fit rounded-full"
					>{m.contactSupport()}</a
				>
			{:else if selected == m.careSyncMarketplace()}
				{@html m.careStoreSlogan()}
				<a href={localizeHref('/loja')} class="btn btn-sm btn-primary mt-3 w-fit rounded-full"
					>{m.goToStore()}</a
				>
			{/if}
		</div>
	</div>
</dialog>
