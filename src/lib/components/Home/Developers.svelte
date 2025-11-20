<script lang="ts">
	import { KeySquare } from '@lucide/svelte';
	import TitleSection from '../TitleSection.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { m } from '$paraglide/messages';
	import PillFlower from '../PillFlower.svelte';
	import DashboardImages from '../DashboardImages.svelte';
	import { AppConfig } from '$lib/configs';

	// backticks preserve newlines and braces
	const snippet = `// Get a user’s access token and profile data
import Cubiq from '@cubiq-lat/finx';
const cubiq = new Cubiq('sk_example_123456789');
const profile = await cubiq.getProfileAndToken({
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  clientID: 'client_123456789',
});`;
</script>

<section class="max-w-fw relative -top-8 mx-auto my-10 md:-top-1 md:my-10">
	<!-- Subtitle -->

	<TitleSection titleLeft="Developers" titleRight="First" forceFlexRow={true} />

	<div class="flex flex-col md:grid md:grid-cols-3">
		<!-- Right text -->
		<div class="mt-7 mr-9 md:col-span-1">
			<h3 class="mb-2 text-xl font-bold tracking-wider md:text-2xl">
				{@html m.devSlogan()}
			</h3>
			<div class="text-secondary mb-4 font-sans text-base leading-6 md:text-lg">
				{@html m.devText()}
			</div>
			<div class="mt-8 flex flex-row items-center md:mt-0">
				<a
					href={localizeHref(AppConfig.cubiq.docs)}
					target="_blank"
					rel="nofollow"
					class="fw-button !my-1 mr-4">{m.documentation()}</a
				>
				<a
					href={localizeHref('/login#signup')}
					class="text-primary border-base-content !my-1 flex flex-row items-center font-sans text-sm hover:!opacity-50 md:text-base"
				>
					<!-- <div class="hidden md:block">
						<KeySquare class="h-4" />
					</div> -->
					<div>{m.getYourAPIKey()}</div>
				</a>
			</div>
		</div>

		<!-- Code -->
		<div
			class="relative mt-8 rounded-md border md:-top-10 md:col-span-2 md:mt-0 md:ml-12"
			style="border-width:0.5px"
		>
			<div class=" mb-4 flex border-b px-3 py-[8px]">
				<button
					class="lang-selected text-primary mr-2 px-3 py-1 text-base font-bold tracking-wider md:text-[18px]"
				>
					Node.js
				</button>
				<button class="mr-2 px-3 py-1 text-base tracking-wider text-white md:text-[18px]"
					>Python</button
				>
				<button class="rounded-t-md px-3 py-1 text-base tracking-wider text-white md:text-[18px]"
					>Curl</button
				>
			</div>

			<code
				class="block overflow-x-auto rounded-lg p-4 font-mono text-xs whitespace-pre md:text-sm"
			>
				<span class="text-[#717AA8]">
					// Get a user’s access token and
					<br />// profile data from an Identity Provider
				</span>
				<br /><br />
				<span class="text-[#D272FF]">import</span>
				<span class="text-[#6B84FF]"> Cubiq </span>
				<span class="text-[#D272FF]">from</span>
				<span class="text-[#37F0C3]">'@cubiq-lat/finx'</span>;
				<br />
				<span class="text-[#D272FF]">const</span>
				<span class="text-[#6B84FF]"> cubiq </span> =
				<span class="text-[#D272FF]">new</span>
				<span class="text-[#6B84FF]"> Cubiq</span>(
				<span class="text-[#37F0C3]">'sk_example_123456789'</span>);
				<br /><br />
				<span class="text-[#D272FF]">const</span>
				<span class="text-[#6B84FF]"> profile </span>=
				<span class="text-[#D272FF]">await</span>
				<span class="text-[#6B84FF]"> cubiq.finx.payin.pix{'{'}</span>
				<br />
				<span class="relative pl-8">
					<span class="text-[#D272FF]">code</span>:
					<span class="text-[#37F0C3]">'01E2RJ4C05B52KKZ8FSRDAP23J',</span>
				</span>
				<br />
				<span class="relative pl-8"
					><span class="text-[#D272FF]">clientID</span>:
					<span class="text-[#37F0C3]">'client_123456789',</span>
				</span>

				<br />
				<span>{'}'});</span>
			</code>
		</div>
		<!-- Editors -->
		<div class="relative col-span-3 mt-5 pr-5 text-right font-sans text-base text-white md:-top-8">
			<span class="text-primary mr-2 text-sm font-bold md:text-lg">></span>
			<span class="text-sm md:text-base">{m.devConfira()}</span>
			<a href="/" class="text-primary font-pixel ml-1 underline hover:opacity-50">VSCode</a>
			{m.and()}
			<a href="/" class="text-primary font-pixel ml-1 underline hover:opacity-50">Zed</a>
		</div>
	</div>

	<!-- <DashboardImages /> -->

	<div class="absolute -top-[10%] -left-[12%] scale-75 opacity-30 md:-top-[15%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>

	<div class="absolute -right-[8%] bottom-[5%] hidden scale-85 opacity-80 md:block">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</section>
