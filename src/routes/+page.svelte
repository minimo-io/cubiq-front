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
	import DashboardImagesOnly from '$lib/components/DashboardImagesOnly.svelte';
	import { type DashboardImageType } from '$types/dashboardImages.types';

	const dashboardImages: DashboardImageType[] = $state([
		{
			src: '/products/store/cubiq-store-dashboard-1.webp',
			alt: 'Cubiq Store Dashboard',
			object: 'left'
		},
		{
			src: '/products/care/cubiq-care-dashboard-2.webp',
			alt: 'A screenshot of the Cubiq Care dashboard',
			object: 'right'
		},
		{
			src: '/products/pay/cubiq-pay.webp',
			alt: 'A screenshot of the Cubiq dashboard',
			object: 'center'
		},

		{
			src: '/products/care/cubiq-care-dashboard-1.webp',
			alt: 'A screenshot of the Cubiq dashboard',
			object: 'left'
		},

		{
			src: '/products/pay/cubiq-pay-dashboard.webp',
			alt: 'A screenshot of the Cubiq Pay dashboard',
			object: 'left'
		},
		{
			src: '/products/pay/cubiq-pay-dashboard-2.webp',
			alt: 'A screenshot of the Cubiq Pay dashboard',
			object: 'right'
		}
	]);

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

<Header
	background="base"
	titleLeft={m.welcome()}
	titleRight={m.theFuture()}
	heroContent={m.heroContentHome()}
/>

<main class="font-sans-pro bg-base-100 text-base-content relative mx-(--cubiq-app-margin)">
	<div class="mb-[8px]">
		<Clients addDesktopPadding={true} />
	</div>
	<ProductsNew />
	<LabProducts />

	<Developers />

	<!-- Dashboards -->
	<section
		class="animate-slide-up-fade relative -top-9 mx-auto mt-0 flex h-[500px] max-w-full overflow-hidden sm:ml-auto sm:w-full sm:px-2 md:-top-8 md:mt-0 md:h-auto md:w-[100%] md:max-w-[80%]"
	>
		<!-- Payment image -->
		<DashboardImagesOnly images={dashboardImages} noMargins={true} />
	</section>
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
