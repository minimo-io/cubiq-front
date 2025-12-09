<script lang="ts">
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { Product } from '$types/products.types';
	import { fly } from 'svelte/transition';
	import Clients from '$lib/components/Home/Clients.svelte';
	import { AppConfig } from '$lib';
	import Switcher from '$lib/components/Switcher.svelte';
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
		Plug,
		ShoppingCart,
		Store,
		ToolCase,
		Truck,
		Wrench
	} from '@lucide/svelte';
	import type { Feature } from '$types/features.types';
	import Features from '$lib/components/Store/Features.svelte';
	import { conditionalSmoothScroll } from '$utils';
	import { type DashboardImageType } from '$types/dashboardImages.types';
	import CarePricingTable from '$lib/components/Care/CarePricingTable.svelte';

	let currentSwitcherSelection = $state(m.careSyncAssetManagment());

	function handleSwitcherChange(option) {
		console.log('Selected:', option);
	}

	const careFeaturesAssetManagment: Feature[] = [
		{
			icon: Activity,
			title: m.caresyncFeature4Title(),
			desc: m.caresyncFeature4Desc(),
			button: {
				text: m.downloadSoftware(),
				// href: localizeHref('/care/software-preditivo')
				href: localizeHref('/soon')
			}
		},
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
			icon: Plug,
			title: m.careStoreFeatureRent(),
			desc: m.careStoreFeatureRentDesc()
		},
		{
			icon: ShoppingCart,
			title: m.caresyncFeature8Title(),
			desc: m.caresyncFeature8Desc()
		},

		{
			icon: ShoppingCart,
			title: m.careStoreFeature2Title(),
			desc: m.careStoreFeature2Desc()
		},
		{
			icon: Store,
			title: m.careAccessStore(),
			desc: m.careAccessStoreDesc(),
			button: {
				text: m.visitStore(),
				href: localizeHref('/loja')
			}
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
	noMobileBorderBottom={true}
>
	<div class="mt-7 flex flex-wrap gap-2 md:mt-8 md:gap-3">
		<a href="#more" use:conditionalSmoothScroll={'#more'} class="fw-button fw-button-lg">
			<span>{m.learnMore()}</span>
		</a>
		<a
			href="#prices"
			use:conditionalSmoothScroll={'#prices'}
			class="fw-button fw-button-lg fw-button-outline hidden! md:flex!"
		>
			<span>{m.prices()}</span>
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
	<div id="more" class="border-base-200 md:mb-4 md:border-b">
		<section class="max-w-fw mx-auto">
			<div class=" mt-5 mb-5 flex justify-center">
				<div
					class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
				></div>
				<h2 class="relative -top-1 font-sans text-2xl font-bold tracking-wider md:text-3xl">
					{m.whyUseCare()}
				</h2>
			</div>
		</section>
	</div>

	<div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto">
		<!-- Switcher desktop -->
		<div class="max-w-fw relative -top-2 mx-auto pt-0 md:-top-10 md:block md:pt-4">
			<Switcher
				options={[m.careSyncAssetManagment(), m.rental(), m.careSyncMarketplace()]}
				bind:selected={currentSwitcherSelection}
				onChange={handleSwitcherChange}
			/>

			{#key currentSwitcherSelection}
				<div
					class="mx-auto mt-8 space-y-6 text-center md:mt-5"
					in:fly={{ y: -20, duration: 100, delay: 100 }}
				>
					<span class="text-secondary py-4 font-sans text-base font-semibold tracking-wide">
						<!-- Platform -->
						{#if currentSwitcherSelection == m.careSyncAssetManagment()}
							<div
								class="text-accent mx-auto mb-10 hidden py-5 font-sans text-xl font-medium md:mb-0 md:block md:max-w-[70%] md:text-2xl"
							>
								{@html m.careSyncFeaturedSlogan()}
							</div>
							<Features featuresList={careFeaturesAssetManagment} noPaddingMobile={true} />
						{/if}

						<!-- HaaS -->
						{#if currentSwitcherSelection == m.rental()}
							<div
								class="text-accent mx-auto mb-10 hidden py-5 font-sans text-xl font-medium md:mb-0 md:block md:max-w-[70%] md:text-2xl"
							>
								{@html m.careHaaSSlogan()}
							</div>
							<Features featuresList={careFeaturesHaaS} noPaddingMobile={true} />
						{/if}

						<!-- Store -->
						{#if currentSwitcherSelection == m.careSyncMarketplace()}
							<div
								class="text-accent mx-auto mb-10 hidden py-5 font-sans text-xl font-medium md:mb-0 md:block md:max-w-[70%] md:text-2xl"
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
		<DashboardImagesOnly images={dashboardImages} noMargins={true} />
	</section>

	<!-- <CareCourses /> -->

	<!-- Prices -->
	<section id="prices" class="mb-5">
		<div id="more" class="border-base-200 md:mb-4 md:border-b">
			<section class="max-w-fw mx-auto">
				<div class="mt-0 mb-5 flex justify-center pb-2">
					<div
						class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
					></div>
					<h2 class="relative -top-1 font-sans text-2xl font-bold tracking-wider md:text-3xl">
						{m.prices()}
					</h2>
				</div>
			</section>
		</div>

		<!-- Switcher -->
		<!-- <div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto"> -->
		<div
			class="max-w-fw f relative -top-2 mx-auto w-full pt-0 md:-top-10 md:block md:w-fit md:pt-4"
		>
			<Switcher
				options={[m.careSyncAssetManagment(), m.rental()]}
				bind:selected={currentSwitcherSelection}
				onChange={handleSwitcherChange}
				hideVisitStoreButton={true}
			/>
		</div>
		<!-- </div> -->

		{#if currentSwitcherSelection == m.careSyncAssetManagment()}
			<div class="z-50 md:scale-110">
				<CarePricingTable />
			</div>
			<!-- Slogan -->
			<section
				class="!relative z-10 mx-(--cubiq-app-margin) px-0 pt-8 pb-3 text-center md:mt-10 md:pb-0"
			>
				<h2 class="font-pixel mb-4 text-2xl font-bold tracking-wider uppercase md:text-3xl">
					{@html m.careCTA()}
				</h2>
				<a
					href={AppConfig.calendar}
					target="_blank"
					rel="nofollow noreferrer"
					class="font-pixel inline-block rounded-full bg-white px-6 py-2 text-black uppercase transition hover:bg-gray-200"
				>
					{m.contactSupport()}
				</a>
			</section>
		{:else if currentSwitcherSelection == m.rental()}
			<div class="flex flex-col items-center justify-center">
				<div
					class="text-accent mx-auto mt-2 mb-0 pb-8 text-center font-sans text-xl font-medium md:mt-0 md:mb-0 md:flex md:max-w-[50%] md:text-2xl"
				>
					{@html m.careAccessStoreDesc()}
				</div>
				<a
					href={localizeHref('/loja')}
					class="btn bg-primary/10 text-primary border-primary btn-md md:btn-lg hover:bg-primary mb-2 w-full rounded-full font-sans tracking-wide hover:text-white md:w-auto md:px-5"
				>
					<ShoppingCart class="h-4 md:h-5" />
					{m.visitStore()}
				</a>
				<!-- <strong class="font-sans">{@html m.storeBTCOnlyDiscount()}</strong> -->
			</div>
		{/if}
	</section>

	<!-- <CarePricing /> -->

	<!-- <Features product={Product.CARE} /> -->

	<!-- <ServiceOrders image="/caresync-dashboard-3.png" /> -->

	<div class="mt-20 font-sans md:mt-0">
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
