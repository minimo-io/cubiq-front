<script lang="ts">
	import { m } from '$paraglide/messages';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import { page } from '$app/state';
	import Meta from '$lib/components/Meta.svelte';
	import HeaderDefined from '$lib/components/Header/HeaderDefined.svelte';
	import { browser } from '$app/environment';
	import { localizeHref } from '$paraglide/runtime';
	import { goto } from '$app/navigation';
	import CirclesDecorations from '$lib/components/decorations/CirclesDecorations.svelte';
	import { AppConfig } from '$lib';

	// Mensagens específicas por código de erro
	const errorMessages = {
		404: m.error404Title(),
		500: m.error500Title()
	};

	const errorTitle = $derived(errorMessages[page.status] || 'Erro');

	function goBack() {
		if (browser && window.history.length > 1) {
			window.history.back();
		} else {
			goto(localizeHref('/'));
		}
	}
</script>

<Meta title={`${m.metaErrorTitle()} ${page.status}`} description={m.metaErrorDescription()} />
<HeaderDefined />

<div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x">
	<div class="mx-(--cubiq-app-margin) flex h-[calc(80vh-90px)] flex-1 items-center justify-center">
		<div class="relative -top-8 w-[400px]">
			<h1 class="text-base-content font-sans text-7xl font-black md:text-8xl">{page.status}</h1>
			<h2 class="mb-4 text-2xl font-semibold text-gray-300 md:text-3xl">
				{page.error?.message || errorTitle}
			</h2>

			<!-- Buttons -->
			<div class="mt-5 flex flex-wrap justify-center gap-4">
				<a
					href="mailto:{AppConfig.cubiq.socials.email}"
					target="_blank"
					class="btn btn-primary btn-sm md:btn-md rounded-lg px-6 py-3 uppercase transition-all duration-200 hover:-translate-y-0.5"
				>
					{m.contactSupport()}
				</a>
				<button
					onclick={goBack}
					class="btn btn-sm md:btn-md rounded-lg bg-gray-100 px-6 py-3 text-gray-700 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-200"
				>
					{m.back()}
				</button>
			</div>
		</div>
	</div>

	<CtaContact />

	<CirclesDecorations />

	<!-- Decoration 1 -->
	<div class="absolute -top-[5%] right-[20%] z-10 scale-40 opacity-60 md:bottom-[10%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
	<!-- Decoration 2 -->
	<div class="absolute -top-[5%] -left-[10%] z-10 scale-40 opacity-80 md:bottom-[10%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
