<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { capitalize } from '$utils';
	import { onMount } from 'svelte';

	interface Props {
		titleRight: string;
		titleLeft: string;
		forceFlexRow?: boolean;
		slidedTitle?: boolean;
	}

	let { titleRight, titleLeft, forceFlexRow = false, slidedTitle = true }: Props = $props();

	const capitalizedTitleRight = $derived(capitalize(titleRight));

	// Create a Tween instance for the width animation
	const backgroundWidth = new Tween(0, {
		duration: 500,
		easing: cubicOut
	});

	// Create the Tween instance with initial value and default options
	const rotation = new Tween(0, {
		duration: 500,
		easing: cubicOut
	});

	let spinning = $state(false);

	async function spin() {
		if (spinning) return;
		spinning = true;

		// Reset rotation to 0 instantly
		await rotation.set(0, { duration: 0 });

		// Phase 1: Acceleration
		const accelerationDegrees = 360 * 2; // Spin twice while accelerating
		const accelerationDuration = 1200;
		await rotation.set(accelerationDegrees, { duration: accelerationDuration, easing: cubicIn });

		// Phase 2: Deceleration
		const decelerationDegrees = accelerationDegrees + 360 * 1.5; // Add 1.5 more spins
		const decelerationDuration = 800;
		await rotation.set(decelerationDegrees, { duration: decelerationDuration, easing: cubicOut });

		spinning = false;
	}

	onMount(() => {
		spin(); // Spin on page load

		const intervalId = setInterval(() => {
			spin();
		}, 10000); // Spin every 10 seconds

		return () => {
			clearInterval(intervalId);
		};
	});

	// Trigger animation whenever the component loads or titleRight changes
	$effect(() => {
		// Reset to 0
		backgroundWidth.set(0);

		// Animate to 100% after a brief delay
		setTimeout(() => {
			backgroundWidth.set(100);
		}, 50);
	});
</script>

<!-- <i>{backgroundWidth.current}</i> -->
<div class="relative flex items-center md:-left-10">
	<!-- Square decorator -->
	<div
		style="transform: rotate({rotation.current}deg);"
		class="relative -left-4 mr-5 hidden opacity-0 md:block"
	>
		<img src="/bgs/square.svg" alt="square-decorator" class="h-4" />
	</div>

	<!-- Title -->
	<div>
		<h1
			class={[
				'relative flex gap-0 text-[30px] font-extralight tracking-wide md:flex-row md:gap-3 md:text-4xl',
				slidedTitle ? 'md:-left-10' : '',
				forceFlexRow ? 'gap-3 ' : 'flex-col'
			]}
		>
			<span>{titleLeft}</span>

			<!-- Right -->
			<div
				class={[
					'text-primary-content relative z-10 inline-block w-fit',
					forceFlexRow ? '-top-1' : '-top-2 left-5 md:-top-1 md:left-0'
				]}
			>
				<span
					class="font-pixel text-primary-content relative z-10 ml-2 bg-bottom text-[30px] tracking-widest md:text-[40px]"
				>
					{capitalizedTitleRight}
				</span>

				<!-- Text Right Colored Background with Animation -->
				<span
					class="bg-primary absolute top-[0px] -left-[1px] z-0 h-[80%] translate-y-1 md:-top-[2px] md:h-[90%]"
					style="width: {backgroundWidth.current + 2}%;"
				></span>
			</div>
		</h1>
	</div>
</div>
