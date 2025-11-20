<script lang="ts">
	import { page } from '$app/state';
	import HeaderButtons from './HeaderButtons.svelte';
	import HeaderContent from './HeaderContent.svelte';
	import HeaderDecorations from './HeaderDecorations.svelte';
	import HeaderDots from './HeaderDots.svelte';
	import HeaderLogo from './HeaderLogo.svelte';
	import { fade } from 'svelte/transition';
	import { deLocalizeUrl } from '$paraglide/runtime';
	import HeaderMenu from './HeaderMenu.svelte';
	import type { Snippet } from 'svelte';

	// let currentPath = $derived(page.url.pathname);
	const delocalizedPath = deLocalizeUrl(page.url).pathname;

	interface Props {
		background?: 'space' | 'rocket' | 'astronaut' | 'commerce' | 'construction';
		opacity?: '0' | '40';

		titleRight: string;
		titleLeft: string;
		heroContent: string;
		buttons?: boolean;

		children?: Snippet;
	}

	let {
		background = 'space',
		opacity = '40',
		titleLeft,
		titleRight,
		heroContent,
		buttons = true,
		children
	}: Props = $props();
</script>

<header
	in:fade={{ duration: 150 }}
	class="border-base-200 fw-border-b-divider-dot fw-border-b-divider-dot-center md:fw-border-b-divider-dot-none relative border-b px-(--cubiq-app-margin) md:border-b-0 md:px-0"
>
	<!-- Bg image -->
	<div
		class={[
			'absolute inset-0 z-0 h-full bg-cover bg-center',
			opacity == '0' && 'opacity-none',
			opacity == '40' && 'opacity-40',

			background == 'space' && 'fw-bg-space',
			background == 'astronaut' && 'fw-bg-astronaut',
			background == 'construction' && 'fw-bg-construction',
			background == 'commerce' && 'fw-bg-bagity',
			background == 'rocket' && 'fw-bg-rocket scale-x-[-1] bg-right md:scale-x-100 md:bg-center'
		]}
	></div>

	<!-- Actual hero -->
	<div class="max-w-fw container mx-auto pt-5 pb-1">
		<nav class="sticky top-0 z-50 flex items-center justify-between">
			<!-- Logos -->
			<HeaderLogo />

			<!-- Menus -->
			<HeaderMenu />

			<!-- Buttons -->
			<HeaderButtons />
		</nav>

		<HeaderContent {titleLeft} {titleRight} {heroContent} {buttons} buttonsSnippet={children} />
	</div>
	<!-- Navigation Dots -->
	<HeaderDots />
	<!-- Decorations -->
	<HeaderDecorations />
</header>
