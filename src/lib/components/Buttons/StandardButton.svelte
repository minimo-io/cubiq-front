<script lang="ts">
	let { href, onclick, children, ...restProps } = $props<{
		href?: string;
		onclick?: () => void;
		children: any;
		[key: string]: any;
	}>();
</script>

{#if href}
	<a
		{href}
		class={[
			'bg-primary text-base-200 font-pixel mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 text-base uppercase transition-all duration-300 hover:opacity-50 md:mt-auto md:mb-0',
			restProps.class && `${restProps.class}`
		]}
	>
		{@render children()}
	</a>
{:else}
	<button
		{onclick}
		class={[
			'bg-primary text-base-200 font-pixel mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 uppercase transition-all duration-300 hover:opacity-50 md:mt-auto md:mb-0',
			restProps.class && `${restProps.class}`
		]}
	>
		{@render children()}
	</button>
{/if}
