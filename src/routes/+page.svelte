<script lang="ts">
	// import Clients from '$lib/components/Home/Clients.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Products from '$lib/components/Home/Products.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import TitleFullWidth from '$lib/components/TitleFullWidth.svelte';
	import Quote from '$lib/components/Home/Quote.svelte';
	import About from '$lib/components/Home/About.svelte';
	import { m } from '$paraglide/messages';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { smoothScroll } from '$utils';
	import { onMount } from 'svelte';
	import CirclesDecorations from '$lib/components/decorations/CirclesDecorations.svelte';
	import LabProducts from '$lib/components/LabProducts.svelte';
	import ProductsNew from '$lib/components/Home/ProductsNew.svelte';

	onMount(async () => {
		const pageHash = page.url.hash ?? false;
		if (pageHash && pageHash === '#more') {
			setTimeout(() => {
				smoothScroll(pageHash);
			}, 200);
		}
		// Close drawer if active
		// closeDrawer();
	});
	afterNavigate(() => {});
</script>

<Meta title={m.metaHomeTitle()} description={m.metaHomeDescription()} />

<Header titleLeft={m.welcome()} titleRight={m.theFuture()} heroContent={m.heroContentHome()} />

<main class="font-sans-pro bg-base-100 text-base-content relative mx-(--cubiq-app-margin)">
	<div class="mb-[8px]">
		<Clients />
	</div>
	<ProductsNew />
	<LabProducts />
	<Developers />
</main>

<!-- Lab Section Title -->
<TitleFullWidth
	breadcrumb={m.aboutUs()}
	titleLeft={m.aboutUsTitleLeft()}
	titleRight={m.aboutUsTitleRight()}
/>

<div class="2xl:px-[10%]">
	<!-- Quote Section -->
	<Quote />

	<!-- About Section -->
	<About />
</div>

<!-- <div class="border-base-200 mx-(--cubiq-app-margin) mb-12 md:mx-0">
	<ServiceOrders />
</div> -->

<CirclesDecorations />

<!-- Cta -->
<CtaContact />
