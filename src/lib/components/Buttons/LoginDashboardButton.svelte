<script lang="ts">
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { page } from '$app/state';
	import { productState } from '$stores/Product.state.svelte';

	let user = $state(page.data.user);

	let dashbardoProduct = $derived(
		productState.active ? `/${productState.active.toLowerCase()}` : ''
	);
</script>

<!-- Login/Dashboard Button -->
{#if user}
	<a
		href={localizeHref(`/dashboard${dashbardoProduct}`)}
		class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-6 md:text-[15px]"
	>
		<span class="relative top-[1px] flex items-center"> Dashboard </span>
	</a>
{:else}
	<a
		href={localizeHref('/login')}
		class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-6 md:text-[15px]"
	>
		<span class="relative top-[1px] flex items-center">
			<span class="mr-0">{m.login()}</span>
			<!-- <kbd class="kbd kbd-sm relative -top-[2px] hidden md:inline-block">
				<span>L</span>
			</kbd> -->
		</span>
	</a>
{/if}
