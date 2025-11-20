<script lang="ts">
	import { fly } from 'svelte/transition';

	let { options = ['Autopilot', 'Copilot'], selected = $bindable(), onChange } = $props();

	function handleSelect(option) {
		selected = option;
		onChange?.(option);
	}
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

<div class="relative -top-8 mt-4 w-full px-4 md:-top-0 md:hidden">
	<select
		class="select select-lg bg-primary select-primary flex w-full justify-center rounded-xl text-center font-sans text-[18px] font-black"
		bind:value={selected}
		onchange={() => onChange?.(selected)}
	>
		{#each options as option}
			<option value={option} class="justify-center text-center font-normal">{option}</option>
		{/each}
	</select>
</div>
