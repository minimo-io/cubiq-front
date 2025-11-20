<script>
	import { Tween } from 'svelte/motion';
	import { cubicOut, cubicIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	// Create the Tween instance with initial value and default options
	const rotation = new Tween(0, {
		duration: 800,
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
</script>

<!-- Decoration 1 -->
<div
	style="transform: rotate({rotation.current}deg);"
	class="absolute top-[15%] right-[5%] scale-60 opacity-70 md:top-[30%] md:right-[25%] md:scale-100"
>
	<img src="/bgs/cross.svg" alt="cross" class="origin-center" />
</div>

<!-- Decoration 2 -->
<!-- <div
	style="transform: rotate({rotation.current}deg);"
	class="absolute bottom-[20%] left-[10%] scale-40 opacity-40"
>
	<img src="/bgs/cross.svg" alt="cross" class="origin-center" />
</div> -->

<!-- Decoration 3 -->
<!-- <div
	style="transform: rotate({rotation.current}deg);"
	class="absolute -bottom-[10%] left-[10%] scale-35 opacity-70 md:left-[25%]"
>
	<img src="/bgs/cross.svg" alt="cross" class="origin-center" />
</div> -->

<!-- Decoration 4 -->
<div
	class="absolute right-[40%] bottom-[0%] z-10 hidden scale-60 opacity-60 md:bottom-[10%] md:block"
>
	<img src="/bgs/cross.svg" alt="cross" class="origin-center" />
</div>
