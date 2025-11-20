<script lang="ts">
	import type { ToastPosition, ToastType } from '$types/toast.types';
	import { fly } from 'svelte/transition';

	let {
		message,
		type,
		position = 'top',
		show = $bindable()
	}: { message: string; type: ToastType; position?: ToastPosition; show: boolean } = $props();

	const typeClasses = {
		success: 'alert-success',
		error: 'alert-error',
		warning: 'alert-warning',
		info: 'alert-info'
	};
</script>

{#if show}
	<div
		transition:fly={{ y: 20, duration: 300 }}
		class={[
			'toast toast-center z-50',
			position == 'top' && 'toast-top',
			position == 'bottom' && 'toast-bottom'
		]}
	>
		<div class="alert {typeClasses[type]}">
			<span>{message}</span>
		</div>
	</div>
{/if}
