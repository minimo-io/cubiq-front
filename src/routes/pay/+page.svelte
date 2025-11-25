<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';
	import Promo from '$lib/components/Pay/Promo.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Developers from '$lib/components/Home/Developers.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import TransparentButton from '$lib/components/Buttons/TransparentButton.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import { Product } from '$types/products.types';
	import DashboardImagesOnly from '$lib/components/DashboardImagesOnly.svelte';
	import type { DashboardImageType } from '$types/dashboardImages.types';
	// import StandardButton from '$lib/components/Buttons/StandardButton.svelte';
	// import Hr from '$lib/components/Hr.svelte';

	const dashboardImages: DashboardImageType[] = $state([
		{
			src: '/products/pay/cubiq-pay.webp',
			alt: 'A screenshot of the Cubiq dashboard',
			object: 'center'
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
</script>

<Meta title={m.metaFinxTitle()} description={m.metaFinxDescription()} />

<Header
	background="rocket"
	opacity="0"
	titleLeft={'>'}
	titleRight={Product.PAY}
	slidedTitle={false}
	heroContent={m.heroContentFinX()}
/>
<div>
	<Clients addDesktopPadding={true} />
</div>

<section
	class="animate-slide-up-fade md:max-ww-[82%] relative -top-9 mx-auto mt-0 flex h-[500px] max-w-full overflow-hidden sm:ml-auto sm:w-full sm:px-2 md:-top-8 md:h-auto md:w-[100%] md:max-w-[1250px]"
>
	<!-- Payment image -->
	<DashboardImagesOnly images={dashboardImages} />
</section>

<main class="max-w-fw border-x-base-200 mx-auto md:border-x">
	<div class=" relative mx-auto flex flex-col gap-0 md:flex-row">
		<div class="fw-cmp-box">
			<div class="fw-cmp-box-title">Enterprise</div>
			<div class="fw-cmp-box-content">
				<p>
					{@html m.finxEnterpriseText()}
				</p>
				<TransparentButton class="!mt-6" href={localizeHref('/soon')}>
					{m.startNow()}
				</TransparentButton>
			</div>
		</div>
		<div class="fw-cmp-box fw-border-t-divider-dot md:fw-cmp-box-with-dot">
			<div class="fw-cmp-box-title">Startups</div>
			<div class="fw-cmp-box-content">
				<p>
					{@html m.finxStartupsText()}
				</p>
				<TransparentButton class="!mt-6" href={localizeHref('/soon')}>
					{m.startNow()}
				</TransparentButton>
			</div>
		</div>
		<div class="fw-cmp-box border-r-0">
			<div class="fw-cmp-box-title">E-Commerce</div>
			<div class="fw-cmp-box-content">
				<p>
					{@html m.finxEcommerce()}
				</p>

				<TransparentButton class="!mt-6" href={localizeHref('/soon')}>
					{m.startNow()}
				</TransparentButton>
			</div>
		</div>
		<!-- Decorations -->
		<!-- Left -->
		<!-- <div
			class="border-r-base-200 absolute -bottom-[1px] left-0 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div> -->
		<!-- Right -->
		<div
			class="border-r-base-200 absolute -top-[1px] right-0 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div>
	</div>

	<Promo />
</main>
<div class="relative mx-(--cubiq-app-margin) mt-18 mb-20 md:mb-0">
	<Hr bottom={true} />
	<Developers />
</div>

<div class="mx-(--cubiq-app-margin)">
	<Faq project="finx" />
</div>

<CtaContact />
