<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
</script>

<Meta title="Changelog" description="" />

<Header
	titleLeft={m.the()}
	titleRight="Changelog"
	background="rocket"
	heroContent={m.heroContentChangelog()}
	buttons={false}
/>

<div class="max-w-fw mx-(--cubiq-app-margin) my-20 md:mx-auto">
	<div class="flex min-h-[400px] items-center justify-center">
		<div class="text-center">
			<div class="font-pixel text-2xl font-black">{m.changelogPlaceholderTitle()}</div>
			<p class="mt-4 text-lg">{m.changelogPlaceholderDesc()}</p>
		</div>
	</div>
</div>
