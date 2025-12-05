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
	import { localizeHref, getLocale } from '$paraglide/runtime';
	import { conditionalSmoothScroll } from '$utils';
	import { Zap, Github, ExternalLink } from '@lucide/svelte';
	import { getLabToolsAndProjects } from '$lib/data/lab.data';

	// Get projects with current locale
	const labToolsAndProjects = getLabToolsAndProjects(getLocale());
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
		</div>
	</div>
</Header>

<div class="relative -top-3">
	<LabProducts noSpaces={true} hideSlogan={true} experimentsTitle={m.experiments()} />
</div>

<section class="max-w-fw mx-(--cubiq-app-margin) mb-10 md:mx-auto">
	<!-- Section title -->
	<h2 class="mx-auto mb-10 text-center font-sans text-3xl md:text-[33px]">
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
	<!-- <div
		class="text-accent mx-auto my-5 mt-3 mb-10 w-full text-center font-sans text-xl md:max-w-[80%] md:text-2xl"
	>
		Criamos experimentos, protótipos e ferramentas que exploram novas tecnologias, modelos
		descentralizados e experiências inovadoras.
	</div> -->

	<!-- Separator -->
	<div class="relative mb-8 block h-px md:mb-0">
		<Hr />
	</div>

	<!-- Projects & Tools -->
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-0 md:border-x"
	>
		<div class="border-base-200 relative flex flex-col">
			{#each labToolsAndProjects as item, i (i)}
				<div
					class="group border-base-200 hover:bg-base-100 relative flex flex-col justify-start border-b p-(--cubiq-app-margin) pb-10 transition-colors last:border-b-0 md:p-12 md:pb-12"
				>
					<!-- Badge if exists -->
					{#if item.badge}
						<div
							class="absolute top-4 right-4 bg-red-600 px-3 py-1 text-xs font-bold text-white md:top-6 md:right-6"
						>
							{item.badge}
						</div>
					{/if}

					<!-- Title with bullet -->
					<div class="mb-4 flex items-start gap-3 text-left">
						<span class="text-primary mt-1 text-xl">■</span>
						<h3 class="font-pixel text-2xl leading-tight tracking-wide md:text-3xl">
							{item.title}
						</h3>
					</div>

					<!-- Description -->
					<p class="mb-6 text-left text-sm leading-relaxed text-gray-300 md:text-base">
						{item.description}
					</p>

					<!-- Links -->
					<div class="mt-auto flex items-center gap-4 text-left">
						{#if item.github}
							<a
								href={item.github}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary hover:text-primary-focus flex items-center gap-2 text-sm transition-colors"
							>
								<Github class="h-4 w-4" />
								View on Github
							</a>
						{/if}
						{#if item.figma}
							<a
								href={item.figma}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary hover:text-primary-focus flex items-center gap-2 text-sm transition-colors"
							>
								<ExternalLink class="h-4 w-4" />
								Figma
							</a>
						{/if}
						<!-- <a
							href={localizeHref(`${item.href}`)}
							class="ml-auto text-xs text-gray-500 hover:text-gray-300"
						>
							Saiba mais.
						</a> -->
					</div>
				</div>
			{/each}
		</div>

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
