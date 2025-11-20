<script lang="ts">
	import TitleSection from './TitleSection.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { ChevronDown } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import type { Faq } from '$lib/type/faq.types';
	import { getLocale } from '$paraglide/runtime';

	export let project: string;

	let activeIndex = -1;
	let faqs: Faq[] = [];

	onMount(async () => {
		try {
			const faqModule = await import(`../data/faqs/${project}.ts`);
			const lang = getLocale();
			faqs = faqModule[`${project}Faqs`][lang] || faqModule[`${project}Faqs`]['en'];
		} catch (error) {
			console.error(`Error fetching FAQs for project ${project}:`, error);
		}
	});

	function toggleAccordion(index: number) {
		activeIndex = activeIndex === index ? -1 : index;
	}
</script>

<div class="max-w-fw relative -top-10 mb-10 md:mx-auto md:mt-28">
	<div class="relative scale-90">
		<TitleSection titleLeft="Perguntas" titleRight="Frequentes" forceFlexRow={true} />
	</div>

	<div class="mt-7">
		{#if faqs.length > 0}
			{#each faqs as faq, index}
				<div class="faq-item border-base-300 my-4 rounded-xl border bg-[#121212]">
					<button
						class="collapse-title text-secondary flex w-full items-center justify-between p-4 text-left"
						on:click={() => toggleAccordion(index)}
					>
						<span class="font-bold">{faq.question}</span>
						<ChevronDown
							class="arrow-icon transition-transform duration-300 {activeIndex === index
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>
					{#if activeIndex === index}
						<div
							class="text-base-content px-4 pb-4"
							transition:slide={{ duration: 300, easing: quintOut }}
						>
							{@html faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		{:else}
			<p>No FAQs available for this project.</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.faq-item {
		@apply my-4 bg-[#121212] md:rounded-xl;
	}
	.faq-item > button {
		@apply text-base md:text-lg;
	}
	.faq-item div {
		@apply text-[14px] opacity-100 md:text-[15px];
	}
</style>
