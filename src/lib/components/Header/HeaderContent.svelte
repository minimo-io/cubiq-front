<script lang="ts">
	import { m } from '$paraglide/messages';
	import TitleSection from '../TitleSection.svelte';
	import { conditionalSmoothScroll, smoothScroll } from '$utils';
	// import { localizeHref } from '$paraglide/runtime';
	import { AppConfig } from '$lib/configs';
	import type { Snippet } from 'svelte';
	import { Product } from '$types/products.types';

	const smoothAction = [conditionalSmoothScroll, '#more'] as const;

	let url = '#more';
	interface Props {
		titleRight: string;
		titleLeft: string;
		heroContent: string;
		buttons: boolean;
		slidedTitle?: boolean;
		buttonsSnippet?: Snippet;
	}
	let {
		titleRight,
		titleLeft,
		heroContent,
		buttons = true,
		slidedTitle = true,
		buttonsSnippet = undefined
	}: Props = $props();
</script>

<!-- Hero Section -->
<div class="relative mt-8 mb-10 max-w-4xl md:my-20">
	<!-- Section title -->
	<TitleSection {titleLeft} {titleRight} {slidedTitle} />

	<p
		class="text-secondary font-regular my-4 font-sans text-[20px] leading-[120%] font-normal tracking-wide md:my-6 md:text-[25px] md:leading-[118%]"
	>
		{@html heroContent}
	</p>

	{#if !buttonsSnippet}
		{#if buttons}
			<div class="mt-7 flex flex-wrap gap-2 md:mt-8 md:gap-3">
				<a href={url} use:conditionalSmoothScroll={url} class="fw-button fw-button-lg">
					<span>{m.learnMore()}</span>
				</a>
				<a
					href={AppConfig.calendar}
					target="_blank"
					rel="nofollow noopener	"
					class="fw-button fw-button-lg fw-button-outline"
				>
					<span>{m.scheduleMeeting()}</span>
				</a>
			</div>
		{/if}
	{:else}
		{@render buttonsSnippet()}
	{/if}
</div>
