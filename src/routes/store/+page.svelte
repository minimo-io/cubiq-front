<script lang="ts">
	import Features from '$lib/components/Store/Features.svelte';
	import StorePricing from '$lib/components/Store/StorePricing.svelte';
	import TransparentButton from '$lib/components/Buttons/TransparentButton.svelte';
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
	import Slogan from '$lib/components/caresync/Slogan.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import DashboardImagesOnly from '$lib/components/DashboardImagesOnly.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { type DashboardImageType } from '$types/dashboardImages.types';
	import { type Feature } from '$types/features.types';
	import { Product } from '$types/products.types';
	import {
		Blocks,
		BrainCircuit,
		ChartNoAxesCombined,
		Cpu,
		Glasses,
		Layers,
		MessageCircleHeart,
		ShoppingCart
	} from '@lucide/svelte';
	import StoreCarrousel from '$lib/components/Store/StoreCarrousel.svelte';
	import StorePricingVertical from '$lib/components/Store/StorePricingVertical.svelte';
	import Hr from '$lib/components/Hr.svelte';

	// Define features based on product
	const bagityFeatures: Feature[] = [
		{
			icon: Cpu,
			title: m.bagityFeature1Title(),
			desc: m.bagityFeature1Desc(),
			pill: null
		},
		{
			icon: Glasses,
			title: m.bagityFeature2Title(),
			desc: m.bagityFeature2Desc(),
			pill: null
		},
		{
			icon: BrainCircuit,
			title: m.bagityFeature8Title(),
			desc: m.bagityFeature8Desc(),
			pill: {
				text: m.prototyping(),
				color: 'primary-transparent',
				customCss: '!px-3'
			}
		},
		{
			icon: MessageCircleHeart,
			title: m.bagityFeature5Title(),
			desc: m.bagityFeature5Desc(),
			pill: null
		},
		{
			icon: Layers,
			title: m.bagityFeature7Title(),
			desc: m.bagityFeature7Desc(),
			pill: null
		},
		{
			icon: ChartNoAxesCombined,
			title: m.bagityFeature4Title(),
			desc: m.bagityFeature4Desc(),
			pill: null
		},
		{
			icon: Blocks,
			title: m.bagityFeature3Title(),
			desc: m.bagityFeature3Desc(),
			pill: null
		},
		{
			icon: ShoppingCart,
			title: m.bagityFeature6Title(),
			desc: m.bagityFeature6Desc(),
			pill: null
		}
	];

	const dashboardImages: DashboardImageType[] = $state([
		{
			src: '/products/store/cubiq-store-dashboard-1.webp',
			alt: 'Cubiq Store Dashboard',
			object: 'left'
		}
		// {
		// 	src: '/products/pay/cubiq-pay-dashboard-3.webp',
		// 	alt: 'A screenshot of the Cubiq Care dashboard',
		// 	object: 'right'
		// }
	]);
</script>

<Meta title={m.metaStoreTitle()} description={m.metaStoreDescription()} />

<Header
	background="commerce"
	opacity="0"
	titleLeft={'>'}
	slidedTitle={false}
	titleRight={Product.STORE}
	heroContent={m.heroContentBagity()}
	noMobileBorderBottom={false}
	hideCube={true}
/>

<!-- <div>
	<Clients />
</div> -->
<div class="relative -top-4 md:-top-2">
	<div
		class="md:fw-border-t-divider md:fw-border-t-divider-dot fw-border-t-divider-dot-center md:border-t-base-300/50 relative md:border-t"
	>
		<StoreCarrousel />
	</div>

	<!-- Left gradient overlay -->
	<div
		class="pointer-events-none absolute top-0 left-0 h-px w-100 bg-gradient-to-r from-black to-transparent"
	></div>

	<!-- Right gradient overlay -->
	<div
		class="pointer-events-none absolute top-0 right-0 h-px w-120 bg-gradient-to-l from-black to-transparent"
	></div>
</div>

<!-- Main -->
<main class="relative -top-10 md:-top-2">
	<!-- Title -->
	<h2
		class="text-base-content mx-10 mb-15 text-center font-sans text-3xl font-bold md:mx-0 md:text-4xl"
	>
		{m.storeImplementationStep()}
	</h2>

	<div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto">
		<StorePricing />
	</div>

	<!-- <div class="relative block h-px md:mb-0">
		<Hr />
		<div
			class="absolute bottom-[-7px] left-1/2 h-[15px] w-[15px] -translate-x-1/2 bg-[url('/bgs/square.svg')] bg-contain bg-no-repeat"
		></div>
	</div> -->

	<!-- Title -->
	<h2
		class="text-base-content mx-10 mt-0 mb-5 text-center font-sans text-3xl font-bold md:mx-0 md:text-4xl"
	>
		{m.storeMaintenanceStep()}
	</h2>
	<div class="max-w-fw border-x-base-200 relative container my-0 mb-17 text-center md:mx-auto">
		<StorePricingVertical />
	</div>

	<div class="max-w-fw border-x-base-200 relative container my-0 mt-20! text-center md:mx-auto">
		<!-- Dashboards -->
		<section
			class="animate-slide-up-fade relative -top-9 mx-auto mt-10 flex h-[500px] max-w-full justify-start overflow-hidden sm:ml-auto sm:w-full sm:px-2 md:-top-10 md:mt-0 md:h-auto md:w-[100%] md:max-w-full"
		>
			<!-- Payment image -->
			<DashboardImagesOnly images={dashboardImages} noMargins={true} />
		</section>

		<div class="hidden flex-col justify-center md:flex-1 md:flex-row md:items-stretch">
			<!-- Você no controle -->
			<div
				class="border-r-base-200 flex w-full flex-col py-5 text-center md:w-1/2 md:border-r md:px-20 md:py-10"
			>
				<div class="flex flex-grow flex-col">
					<div class="fw-cmp-box-content !px-7 !py-2 !pb-3 md:!pb-10">
						{@html m.bagityBasicDescription()}
					</div>
					<TransparentButton href={localizeHref('/sign-up')}>{m.startNow()}</TransparentButton>
				</div>
			</div>

			<!-- Nós cuidamos de tudo -->
			<div class="mb-7 flex w-full flex-col items-start md:mb-0 md:w-1/2 md:px-20 md:py-10">
				<!-- Title for mobile -->
				<div class="border-base-200 w-full border-t py-3 text-xl md:hidden md:w-1/2">
					<div class="mb-3 text-2xl">
						{@html m.bagityPro()}
					</div>
					<div
						class="border-base-200 text-primary mt-1 border-t border-b pt-2 pb-2 font-sans text-lg font-bold md:border-b-0 md:pb-0"
					>
						{m.bagityProPrice()}
					</div>
				</div>

				<div class="flex w-full flex-grow flex-col">
					<div class="fw-cmp-box-content !px-7 !py-2">
						{@html m.bagityProDescription()}
					</div>

					<TransparentButton href={localizeHref('/sign-up')}>{m.startNow()}</TransparentButton>
				</div>
			</div>
		</div>
	</div>

	<!-- Common features -->
	<div class="border-base-200 border-t border-b">
		<section class="max-w-fw mx-auto">
			<div class="border-base-200 mt-5 mb-4 flex justify-center">
				<div
					class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
				></div>
				<h2 class="font-pixel text-2xl tracking-wider md:text-3xl">{m.bagityDifferentials()}</h2>
			</div>
		</section>
	</div>

	<Features featuresList={bagityFeatures} />

	<Slogan text={m.bagitySlogan()} />

	<!-- <ServiceOrders /> -->
	<div id="more" class="border-base-200 mt-15 font-sans md:border-t">
		<Faq project="bagity" />
	</div>
	<CtaContact />
</main>
