<!-- src/lib/components/Switcher.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';

	let { options = ['Autopilot', 'Copilot'], selected = $bindable(), onChange } = $props();

	function handleSelect(option) {
		selected = option;
		onChange?.(option);
	}

	let isOpen = $state(false);
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

<div class="bg-base-200 relative hidden items-center gap-0 rounded-full p-1 md:inline-flex">
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
					class="bg-primary absolute inset-0 -z-10 rounded-full shadow-sm"
					transition:fly={{ x: index === 0 ? 20 : -20, duration: 100 }}
				></div>
			{/if}
			<span class="font-sans text-lg font-bold">
				{option}
			</span>
		</button>
	{/each}
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
