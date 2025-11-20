<script lang="ts">
	import { page } from '$app/state';
	import * as m from '$paraglide/messages';
	// import { language } from '$paraglide/runtime';

	interface Props {
		title?: string;
		description?: string;
		noindex?: boolean;
		nofollow?: boolean;
		canonical?: string;
	}

	let { title, description, noindex = false, nofollow = false, canonical }: Props = $props();

	// Reactive computations using runes
	const pageTitle = $derived(() => {
		const baseTitle = m.metaBaseTitle(); // Your site title from Paraglide
		if (!title) return baseTitle;
		return `${title} - ${baseTitle}`;
	});

	const pageDescription = $derived(() => {
		return description || m.metaHomeDescription(); // Default description from Paraglide
	});

	const currentUrl = $derived(() => {
		return canonical || page.url.href;
	});

	const robotsContent = $derived(() => {
		const robots: string[] = [];
		if (noindex) robots.push('noindex');
		if (nofollow) robots.push('nofollow');
		return robots.length > 0 ? robots.join(', ') : 'index, follow';
	});
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{pageTitle()}</title>
	<meta name="description" content={pageDescription()} />
	<meta name="robots" content={robotsContent()} />
	<!-- <link rel="canonical" href={currentUrl()} /> -->
</svelte:head>
