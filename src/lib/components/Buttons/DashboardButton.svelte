<!-- Buttons for the dashboard actions menues -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		type = 'transparent',
		href,
		onclick,
		disabled,
		isSubmit,
		submitForm,
		children,
		...restProps
	} = $props<{
		type?: 'transparent' | 'primary' | 'gray';
		href?: string;
		onclick?: () => void;
		disabled?: boolean;
		isSubmit?: boolean;
		submitForm?: string;
		children: Snippet;
		[key: string]: any;
	}>();

	// When there is a submit form associated to the submit then the button is always of type submit
	if (submitForm) {
		isSubmit = true;
	}
</script>

{#if href}
	<a
		{href}
		class={[
			'rounded-lg',
			type == 'transparent' &&
				'bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 border px-5 py-2 text-xs transition-all duration-300',
			type == 'primary' && 'btn btn-sm btn-primary tracking-wide"',
			type == 'gray' && 'btn btn-sm btn-secondary btn-outline',

			restProps.class && `${restProps.class}`
		]}
	>
		{@render children()}
	</a>
{:else}
	<button
		{disabled}
		{onclick}
		type={isSubmit ? 'submit' : 'button'}
		form={typeof submitForm === 'string' ? submitForm : undefined}
		class={[
			'rounded-lg',
			type == 'transparent' &&
				'bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary disabled:hover:bg-primary/10 flex items-center gap-2 border px-5 py-2 text-xs transition-all duration-300 hover:opacity-100 disabled:cursor-default disabled:opacity-40',
			type == 'primary' && 'btn btn-sm btn-primary hover:opacity-100" tracking-wide opacity-90',
			type == 'gray' &&
				'btn btn-sm btn-secondary btn-outline transition-50 !opacity-100 hover:!opacity-90',

			restProps.class && `${restProps.class}`
		]}
	>
		{@render children()}
	</button>
{/if}
