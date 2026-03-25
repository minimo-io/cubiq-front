<script lang="ts">
	import * as m from '$paraglide/messages';

	interface Props {
		title?: string;
		description?: string;
		noindex?: boolean;
		nofollow?: boolean;
	}

	let { title, description, noindex = false, nofollow = false }: Props = $props();

	// Reactive computations using runes
	const pageTitle = $derived(() => {
		const baseTitle = m.metaBaseTitle(); // Your site title from Paraglide
		if (!title) return baseTitle;
		if (title.includes('-')) {
			return title;
		} else {
			return `${title} - ${baseTitle}`;
		}
	});

	const pageDescription = $derived(() => {
		return description || m.metaHomeDescription(); // Default description from Paraglide
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
