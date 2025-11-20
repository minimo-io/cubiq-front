<!-- src/lib/components/Pill.svelte -->
<script lang="ts">
	interface Props {
		color: 'light' | 'primary' | 'dark' | 'primary-transparent' | 'accent';
		text: string;
		customCss?: string;
		pulseColor?: boolean;
	}
	let { color, text, customCss = '', pulseColor = false }: Props = $props();
</script>

<div
	class={[
		'fw-pill tracking-widest',
		color == 'light' && 'fw-pill-light',
		color == 'primary' && 'fw-pill-primary',
		color == 'primary-transparent' && 'fw-pill-primary-transparent',
		color == 'accent' && !pulseColor && 'fw-pill-accent',
		// color == 'accent' && pulseColor && 'fw-pill-accent-pulse',
		customCss
	]}
>
	{text}
</div>
