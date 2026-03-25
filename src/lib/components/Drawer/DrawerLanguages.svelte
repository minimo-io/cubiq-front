<script lang="ts">
	import { locales } from '$paraglide/runtime';
	import { page } from '$app/state';
	import { redirectLocale, getLocaleName } from '$utils';
</script>

<div class="flex flex-1 flex-col px-0 text-xs">
	{#each locales as locale}
		<button
			type="button"
			onclick={() => redirectLocale(locale, page.url.href)}
			class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex items-center justify-center gap-2 self-center text-left align-middle">
				<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[17px]" />
				<span class="self-center font-semibold capitalize">{getLocaleName(locale)}</span>
			</div>
		</button>
	{/each}
</div>
