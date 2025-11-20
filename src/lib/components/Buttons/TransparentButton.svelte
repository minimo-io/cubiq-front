<script lang="ts">
	let {
		href,
		onclick,
		children,
		size = '',
		...restProps
	} = $props<{
		href?: string;
		onclick?: () => void;
		size?: 'lg' | 'sm' | 'md' | 'xs' | '';
		children: any;
		[key: string]: any;
	}>();
</script>

{#if href}
	<a
		{href}
		class={[
			'bg-primary/10 hover:bg-primary hover:text-base-200 border-primary/30 text-primary font-pixel mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 text-base uppercase transition-all duration-300 hover:opacity-100 md:mt-auto md:mb-0',
			size == 'lg' && 'bg-2xl',
			restProps.class && `${restProps.class}`
		]}
	>
		{@render children()}
	</a>
{:else}
	<button
		{onclick}
		class="bg-primary/10 hover:bg-primary hover:text-base-200 border-primary/30 text-primary font-pixel mt-3 mb-2 flex w-[90%] items-center justify-center gap-2 self-center rounded-2xl border px-5 py-2 text-base uppercase transition-all duration-300 hover:opacity-100 md:mt-auto md:mb-0"
	>
		{@render children()}
	</button>
{/if}
