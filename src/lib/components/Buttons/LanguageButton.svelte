<script lang="ts">
	import { getLocaleName, redirectLocale } from '$utils';
	import { Globe } from '@lucide/svelte';
	import { getLocale, locales } from '$paraglide/runtime';
	import { page } from '$app/state';

	let locale = $state(getLocale());
</script>

<div class="dropdown dropdown-end">
	<button
		class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden rounded-full px-3 py-3 md:block"
	>
		<img src="/flags/{locale}.png" alt="flag" class="absolute -top-2 -right-1 h-[22px] w-[22px]" />
		<Globe class="h-5" strokeWidth="1" />
	</button>

	<ul class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
		{#each locales as locale, i (locale)}
			<li>
				<button
					id="locale-{i}"
					class="capitalize"
					onclick={() => redirectLocale(locale, page.url.href)}
				>
					<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[17px]" />
					<span class="self-center font-semibold tracking-wider capitalize"
						>{getLocaleName(locale)}</span
					>
				</button>
			</li>
		{/each}
	</ul>
</div>
