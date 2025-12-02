<script lang="ts">
	import { AppConfig } from '$lib';
	import TopPosts from '$lib/components/blog/topPosts.svelte';
	import TopPostsCard from '$lib/components/blog/topPostsCard.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import LabProducts from '$lib/components/LabProducts.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import TitleSection from '$lib/components/TitleSection.svelte';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { conditionalSmoothScroll } from '$utils';
	import { Zap } from '@lucide/svelte';

	const labToolsAndProjects = [
		{
			title: 'Nostr Followback',
			github: '',
			description: 'Discover who follows you back on Nostr',
			href: '',
			tags: ['nostr', 'social']
		}
	];
</script>

<Meta title={m.metaLabTitle()} description={m.metaLabDescription()} />

<Header
	titleLeft={'Nosso'}
	titleRight={'LABORATÓRIO'}
	background="stars"
	heroContent={m.heroContentLab()}
>
	<div class=" mt-0 w-fit flex-col flex-wrap md:visible md:mt-8 md:flex md:gap-3">
		<div class="flex w-fit flex-row gap-3">
			<!-- Know more -->
			<a href={localizeHref('/#more')} class="fw-button fw-button-lg hidden! h-fit md:flex!">
				<span>{m.learnMore()}</span>
			</a>

			<!-- <div class="flex flex-col">
				<a
					href={localizeHref('/lab/hopchain')}
					class="fw-button fw-button-lg fw-button-outline font-sans"
				>
					<Zap class="h-3" />
					<span>{@html m.labLaunchText()} / {m.labLaunchSubText()}</span>
				</a>

			</div> -->
		</div>
	</div>
</Header>

<div class="relative -top-3">
	<LabProducts noSpaces={true} hideSlogan={true} experimentsTitle={m.experiments()} />
</div>

<section class="max-w-fw mx-(--cubiq-app-margin) mb-10 md:mx-auto">
	<!-- Section title -->
	<h2 class="mx-auto text-center font-sans text-3xl md:text-[33px]">
		<!-- Actual title -->
		<span>{@html m.labToolsTitle()}</span>

		<!-- Right -->
		<div
			class={[
				'text-primary-content relative z-10 mt-2 inline-block w-fit md:mt-0',
				'-top-2  md:-top-1 md:left-0'
			]}
		>
			<span
				class="text-primary-content font-pixel relative z-10 ml-2 bg-bottom text-[25px] font-normal tracking-widest md:text-[28px]"
			>
				Open-Source
			</span>

			<!-- Text Right Colored Background with Animation -->
			<span
				class="bg-primary absolute top-[1px] left-[1px] z-0 h-[80%] translate-y-1 md:h-[85%]"
				style="width: {100}%;"
			></span>
		</div>
	</h2>

	<!-- Sub-title -->
	<div
		class="text-accent mx-auto my-5 mt-3 mb-10 w-full text-center font-sans text-xl md:max-w-[80%] md:text-2xl"
	>
		Criamos experimentos, protótipos e ferramentas que exploram novas tecnologias, modelos
		descentralizados e experiências inovadoras.
	</div>

	<!-- Separator -->
	<div class="relative mb-8 block h-px md:mb-0">
		<Hr />
		<!-- <div
			class="absolute bottom-[-7px] left-1/2 h-[15px] w-[15px] -translate-x-1/2 bg-[url('/bgs/square.svg')] bg-contain bg-no-repeat"
		></div> -->
	</div>

	<!-- Projects & Tools -->
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-0 md:border-x"
	>
		<div class="border-base-200 relative grid grid-cols-1 gap-1 border-b md:grid-cols-3 md:gap-0">
			{#each labToolsAndProjects as item, i (i)}
				<a
					href={localizeHref(`${item.href}`)}
					class="group border-base-200 hover:text-secondary relative flex flex-col justify-start border-b p-(--cubiq-app-margin) pb-10 text-white transition-colors hover:bg-white md:border-r md:border-b-0 md:p-12 md:pb-12"
				>
					So...
				</a>
			{/each}
		</div>

		<!-- <div class="border-base-200 flex items-center justify-between border-b px-6 py-8 md:px-12">
			<div
				class="text-left font-sans text-[25px] leading-tight font-black md:text-[36px] md:leading-normal"
			>
				{m.latestNews()}
			</div>
			<div class="text-right font-sans text-sm md:text-base">
				{m.subscriveVia()} <a href="/#" class="text-primary font-bold">RSS</a>
				{m.or()}
				<a href="/#" class="text-primary font-bold">Email</a>
			</div>
		</div> -->

		<CtaContact />

		<!-- Decoration 1 -->
		<div class="absolute -top-[5%] right-[20%] z-10 scale-40 opacity-60 md:bottom-[10%]">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
		<!-- Decoration 2 -->
		<div class="absolute -top-[5%] -left-[10%] z-10 scale-40 opacity-80 md:bottom-[10%]">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</section>
