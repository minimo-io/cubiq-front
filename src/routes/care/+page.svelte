<script lang="ts">
	import TransparentButton from '$lib/components/Buttons/TransparentButton.svelte';
	import ServiceOrders from '$lib/components/caresync/ServiceOrders.svelte';
	import Slogan from '$lib/components/caresync/Slogan.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { Product } from '$types/products.types';
	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Clients from '$lib/components/Home/Clients.svelte';
	import { AppConfig } from '$lib';
	import TitleFullWidth from '$lib/components/TitleFullWidth.svelte';
	import Switcher from '$lib/components/Switcher.svelte';
	import CarePricing from '$lib/components/caresync/CarePricing.svelte';
	import CareCourses from '$lib/components/caresync/CareCourses.svelte';
	import DashboardImages from '$lib/components/DashboardImages.svelte';
	import DashboardImagesOnly from '$lib/components/DashboardImagesOnly.svelte';
	import {
		Activity,
		Calendar1,
		CircleGauge,
		Clock,
		DatabaseBackup,
		Headset,
		ListOrdered,
		MonitorCheck,
		PiggyBank,
		ShoppingCart,
		ToolCase,
		Truck,
		Wrench
	} from '@lucide/svelte';
	import type { Feature } from '$types/features.types';
	import Features from '$lib/components/Bagity/Features.svelte';
	import { conditionalSmoothScroll } from '$utils';
	import { type DashboardImageType } from '$types/dashboardImages.types';

	let isExpanded = $state(false);
	let currentSwitcherSelection = $state(m.careSyncAssetManagment());

	function handleSwitcherChange(option) {
		console.log('Selected:', option);
	}

	const careFeaturesAssetManagment: Feature[] = [
		{
			icon: ListOrdered,
			title: m.caresyncFeature01Title(),
			desc: m.caresyncFeature01Desc()
		},
		{
			icon: Headset,
			title: m.caresyncFeature02Title(),
			desc: m.caresyncFeature02Desc()
		},

		{
			icon: Calendar1,
			title: m.caresyncFeature03Title(),
			desc: m.caresyncFeature03Desc()
		},

		{
			icon: DatabaseBackup,
			title: m.caresyncFeature04Title(),
			desc: m.caresyncFeature04Desc()
		},

		{
			icon: CircleGauge,
			title: m.caresyncFeature1Title(),
			desc: m.caresyncFeature1Desc()
		},

		{
			icon: Activity,
			title: m.caresyncFeature4Title(),
			desc: m.caresyncFeature4Desc()
		}
	];

	const careFeaturesHaaS: Feature[] = [
		{
			icon: MonitorCheck,
			title: m.careHaaSFeature1Title(),
			desc: m.careHaaSFeature1Desc()
		},

		{
			icon: Truck,
			title: m.careHaaSFeature2Title(),
			desc: m.careHaaSFeature2Desc()
		},

		{
			icon: Wrench,
			title: m.careHaaSFeature3Title(),
			desc: m.careHaaSFeature3Desc()
		},

		{
			icon: Clock,
			title: m.careHaaSFeature4Title(),
			desc: m.careHaaSFeature4Desc()
		},

		{
			icon: ToolCase,
			title: m.careHaaSFeature5Title(),
			desc: m.careHaaSFeature5Desc()
		},

		{
			icon: PiggyBank,
			title: m.careHaaSFeature6Title(),
			desc: m.careHaaSFeature6Desc()
		}
	];

	const careFeaturesStore: Feature[] = [
		{
			icon: ShoppingCart,
			title: m.caresyncFeature8Title(),
			desc: m.caresyncFeature8Desc()
		},

		{
			icon: ShoppingCart,
			title: m.careStoreFeature2Title(),
			desc: m.careStoreFeature2Desc()
		}
	];

	const dashboardImages: DashboardImageType[] = $state([
		{
			src: '/products/care/cubiq-care-dashboard-1.webp',
			alt: 'A screenshot of the Cubiq dashboard',
			object: 'left'
		},
		{
			src: '/products/care/cubiq-care-dashboard-2.webp',
			alt: 'A screenshot of the Cubiq Care dashboard',
			object: 'right'
		}
		// {
		// 	src: '/products/pay/cubiq-pay-dashboard-3.webp',
		// 	alt: 'A screenshot of the Cubiq Care dashboard',
		// 	object: 'right'
		// }
	]);
</script>

<Meta title={m.metaCareSyncTitle()} description={m.metaCareSyncDescription()} />

<Header
	background="astronaut"
	opacity="0"
	titleLeft={'>'}
	slidedTitle={false}
	titleRight={Product.CARE}
	heroContent={m.heroContentCareSync()}
>
	<div class="mt-7 flex flex-wrap gap-2 md:mt-8 md:gap-3">
		<a href="#more" use:conditionalSmoothScroll={'#more'} class="fw-button fw-button-lg">
			<span>{m.learnMore()}</span>
		</a>
		<a
			href="mailto:{AppConfig.cubiq.socials.email}"
			class="fw-button fw-button-lg fw-button-outline"
		>
			<span>{m.requestQuotation()}</span>
		</a>
	</div>
</Header>

<div>
	<Clients addDesktopPadding={true} />
</div>

<main>
	<!-- <CarePricing /> -->

	<!-- Diferentials -->
	<div id="more" class="border-base-200 Xborder-t mb-4 md:border-b">
		<section class="max-w-fw mx-auto">
			<div class=" mt-5 mb-5 flex justify-center">
				<div
					class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
				></div>
				<h2 class="font-pixel text-2xl tracking-wider md:text-3xl">{m.whyUseCare()}</h2>
			</div>
		</section>
	</div>

	<div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto">
		<!-- Switcher desktop -->
		<div class="max-w-fw relative -top-2 mx-auto pt-4 md:-top-10 md:block">
			<Switcher
				options={[m.careSyncAssetManagment(), m.rental(), m.careSyncMarketplace()]}
				bind:selected={currentSwitcherSelection}
				onChange={handleSwitcherChange}
			/>

			{#key currentSwitcherSelection}
				<div
					class="mx-auto space-y-6 text-center md:mt-5"
					in:fly={{ y: -20, duration: 100, delay: 100 }}
				>
					<span class="text-secondary py-4 font-sans text-base font-semibold tracking-wide">
						<!-- Platform -->
						{#if currentSwitcherSelection == m.careSyncAssetManagment()}
							<div
								class="mx-auto mb-10 hidden font-sans text-xl md:mb-0 md:block md:max-w-[70%] md:text-2xl"
							>
								{@html m.careSyncFeaturedSlogan()}
							</div>
							<Features featuresList={careFeaturesAssetManagment} noPaddingMobile={true} />
						{/if}

						<!-- HaaS -->
						{#if currentSwitcherSelection == m.rental()}
							<div
								class="mx-auto mb-10 hidden font-sans text-xl md:mb-0 md:block md:max-w-[70%] md:text-2xl"
							>
								{@html m.careHaaSSlogan()}
							</div>
							<Features featuresList={careFeaturesHaaS} noPaddingMobile={true} />
						{/if}

						<!-- Store -->
						{#if currentSwitcherSelection == m.careSyncMarketplace()}
							<div
								class="mx-auto mb-10 hidden font-sans text-xl md:mb-0 md:block md:max-w-[70%] md:text-2xl"
							>
								{@html m.careStoreSlogan()}
							</div>
							<Features featuresList={careFeaturesStore} noPaddingMobile={true} />
						{/if}
					</span>
				</div>
			{/key}
		</div>
	</div>

	<!-- Dashboards -->
	<section
		class="animate-slide-up-fade relative -top-9 mx-auto mt-4 flex h-[500px] max-w-full overflow-hidden sm:ml-auto sm:w-full sm:px-2 md:-top-8 md:mt-0 md:h-auto md:w-[100%] md:max-w-[82%]"
	>
		<!-- Payment image -->
		<DashboardImagesOnly images={dashboardImages} />
	</section>

	<!-- Slogan -->
	<section
		class="border-base-200 fw-border-t-divider fw-border-t-divider-dot !relative mx-(--cubiq-app-margin) border-t px-0 py-16 text-center"
	>
		<h2 class="font-pixel mb-4 text-2xl font-bold tracking-wider uppercase md:text-3xl">
			{m.careSyncSlogan()}
		</h2>
		<p class="text-secondary mx-auto mb-6 max-w-3xl font-sans text-lg md:text-xl">
			{m.ctaText()}
		</p>
		<a
			href={AppConfig.calendar}
			target="_blank"
			rel="nofollow noreferrer"
			class="font-pixel inline-block rounded-full bg-white px-6 py-2 text-black uppercase transition hover:bg-gray-200"
		>
			{m.contactSupport()}
		</a>

		<!-- Decoration -->
		<div
			class="absolute -top-[5%] -left-[10%] z-50 scale-35 opacity-50 md:top-[5%] md:left-[20%] md:scale-90"
		>
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</section>

	<!-- <CareCourses /> -->

	<!-- <Features product={Product.CARE} /> -->

	<!-- <ServiceOrders image="/caresync-dashboard-3.png" /> -->

	<div class="mt-10 font-sans md:mt-0">
		<Faq project="caresync" />
	</div>

	<CtaContact />
</main>

<style lang="postcss">
	@reference "tailwindcss";
	/* li {
		@apply text-lg;
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	} */
</style>
