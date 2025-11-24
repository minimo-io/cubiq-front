<script lang="ts">
	import Features from '$lib/components/Bagity/Features.svelte';
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

	let isExpanded = $state(false);
	let currentSwitcherSelection = $state(m.careSyncAssetManagment());

	function handleSwitcherChange(option) {
		console.log('Selected:', option);
	}
	const autoGestaoInitialItems = 0;
	const gerenciadoInitialItems = 0;

	// References to title elements for scrolling
	let autoGestaoTitle: HTMLDivElement;
	let gerenciadoTitle: HTMLDivElement;

	// Monta os arrays diretamente com chamadas m.chave()
	const autoGestaoItems = [
		{ title: m.careSyncAutoItem0Title(), description: m.careSyncAutoItem0Desc() },
		{ title: m.careSyncAutoItem2Title(), description: m.careSyncAutoItem2Desc() },
		{ title: m.careSyncAutoItem3Title(), description: m.careSyncAutoItem3Desc() },
		{ title: m.careSyncAutoItem1Title(), description: m.careSyncAutoItem1Desc() },
		{ title: m.careSyncAutoItem4Title(), description: m.careSyncAutoItem4Desc() },
		{ title: m.careSyncAutoItem5Title(), description: m.careSyncAutoItem5Desc() },
		{ title: m.careSyncAutoItem6Title(), description: m.careSyncAutoItem6Desc() },
		{ title: m.careSyncAutoItem7Title(), description: m.careSyncAutoItem7Desc() },
		{ title: m.careSyncAutoItem8Title(), description: m.careSyncAutoItem8Desc() }
	];

	const gerenciadoItems = [
		{ title: m.careSyncManagedItem0Title(), description: m.careSyncManagedItem0Desc() },
		{ title: m.careSyncManagedItem1Title(), description: m.careSyncManagedItem1Desc() },
		{ title: m.careSyncManagedItem2Title(), description: m.careSyncManagedItem2Desc() },
		{ title: m.careSyncManagedItem3Title(), description: m.careSyncManagedItem3Desc() },
		{ title: m.careSyncManagedItem6Title(), description: m.careSyncManagedItem6Desc() },
		{ title: m.careSyncManagedItem5Title(), description: m.careSyncManagedItem5Desc() },
		{ title: m.careSyncManagedItem4Title(), description: m.careSyncManagedItem4Desc() },
		{ title: m.careSyncManagedItem7Title(), description: m.careSyncManagedItem7Desc() }
	];

	// Function to handle toggle with smooth scrolling
	// function toggleExpand() {
	// 	const wasExpanded = isExpanded;
	// 	isExpanded = !isExpanded;

	// 	// If we're collapsing, scroll back to the title
	// 	if (wasExpanded && !isExpanded) {
	// 		// Scroll to the auto-gestão title (you might want to adjust which title to scroll to)
	// 		autoGestaoTitle?.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'center'
	// 		});
	// 	}
	// }
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
	<!-- <div class="mt-7 flex flex-wrap gap-2 md:mt-8 md:gap-3">
		<a
			href={AppConfig.calendar}
			target="_blank"
			rel="nofollow noopener	"
			class="fw-button fw-button-lg"
		>
			<span>{m.careSyncAuto()}</span>
		</a>
		<a href={localizeHref('/soon')} class="fw-button fw-button-lg fw-button-outline">
			<span>{m.careSyncManaged()}</span>
		</a>
	</div> -->
</Header>

<div>
	<Clients addDesktopPadding={true} />
</div>

<main>
	<!-- <CarePricing /> -->

	<!-- Diferentials -->
	<div class="border-base-200 Xborder-t mb-4 border-b">
		<section class="max-w-fw mx-auto">
			<div class="border-base-200 mt-5 mb-5 flex justify-center">
				<div
					class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
				></div>
				<h2 class="font-pixel text-2xl tracking-wider md:text-3xl">{m.whyUseCare()}</h2>
			</div>
		</section>
	</div>

	<div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto">
		<!-- Switcher desktop -->
		<div class="max-w-fw relative -top-6 mx-auto pt-4 md:-top-10 md:block">
			<Switcher
				options={[
					m.careSyncAssetManagment(),
					'HaaS',
					// m.careSyncLearning(),
					m.careSyncPredictiveSoftware(),
					m.careSyncMarketplace()

					// m.careSyncAuto(),
					// m.careSyncManaged()
				]}
				bind:selected={currentSwitcherSelection}
				onChange={handleSwitcherChange}
			/>

			{#key currentSwitcherSelection}
				<div
					class="mx-auto mt-5 space-y-6 text-center"
					in:fly={{ y: -20, duration: 100, delay: 100 }}
				>
					<span class="text-secondary py-4 font-sans text-base font-semibold tracking-wide">
						<!-- Platform -->
						{#if currentSwitcherSelection == m.careSyncAssetManagment()}
							<!-- {@html m.careSyncAutoDesc()} -->
							<Features product={Product.CARE} noPaddingMobile={true} />
						{/if}

						<!-- HaaS -->
						{#if currentSwitcherSelection == 'HaaS'}
							<!-- {@html m.careSyncAutoDesc()} -->
							<Features product={Product.CARE} noPaddingMobile={true} />
						{/if}

						<!-- Learning -->
						<!-- {#if currentSwitcherSelection == m.careSyncLearning()}
							<Features product={Product.CARE} noPaddingMobile={true} />
						{/if} -->

						<!-- Predictive software -->
						{#if currentSwitcherSelection == m.careSyncPredictiveSoftware()}
							<!-- {@html m.careSyncAutoDesc()} -->
							<Features product={Product.CARE} noPaddingMobile={true} />
						{/if}

						<!-- Marketplace -->
						{#if currentSwitcherSelection == m.careSyncMarketplace()}
							<!-- {@html m.careSyncAutoDesc()} -->
							<Features product={Product.CARE} noPaddingMobile={true} />
						{/if}

						<!-- {#if currentSwitcherSelection == m.careSyncAuto()}
							{@html m.careSyncAutoDesc()}
							<Features product={Product.CARE} />
						{/if} -->

						<!-- {#if currentSwitcherSelection == m.careSyncManaged()}
							{@html m.careSyncManagedDesc()}
						{/if} -->
					</span>
				</div>
			{/key}
		</div>
	</div>

	<!-- Dashboards -->
	<section
		class="animate-slide-up-fade relative -top-9 mx-auto mt-0 flex h-[500px] max-w-full overflow-hidden sm:ml-auto sm:w-full sm:px-2 md:-top-8 md:h-auto md:w-[100%] md:max-w-[82%]"
	>
		<!-- Payment image -->
		<DashboardImagesOnly />
	</section>

	<!-- <CareCourses /> -->

	<!-- <Features product={Product.CARE} /> -->

	<!-- <ServiceOrders image="/caresync-dashboard-3.png" /> -->

	<div id="more" class="mt-10 font-sans md:mt-0">
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
