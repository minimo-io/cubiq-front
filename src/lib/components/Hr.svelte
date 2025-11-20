<script lang="ts">
	interface Props {
		bottom?: boolean;
		class?: string;
		halfWidth?: boolean;
	}

	let { bottom = true, class: className = '', halfWidth = false }: Props = $props();
</script>

<!-- New border -->
<div
	class={[
		'via-base-300 pointer-events-none absolute  h-[1px]  bg-gradient-to-r from-transparent to-transparent',
		halfWidth ? 'left-1/2  w-[50%] -translate-x-1/2' : 'left-0 w-full',
		bottom ? 'bottom-0' : 'top-0',
		className
	]}
></div>
