<script lang="ts">
	// import { m } from '$paraglide/messages';
	import { onMount } from 'svelte';

	let displayText = $state('');
	let currentIndex = $state(0);
	let isVisible = $state(false);

	let { text } = $props();

	const fullText = text;
	const typingSpeed = 50; // milliseconds per character

	onMount(() => {
		// Small delay before starting the animation
		setTimeout(() => {
			isVisible = true;
			typeText();
		}, 500);
	});

	function typeText() {
		if (currentIndex < fullText.length) {
			displayText += fullText[currentIndex];
			currentIndex++;
			setTimeout(typeText, typingSpeed);
		} else {
			// After typing is complete, wait 3 seconds then restart
			setTimeout(restartAnimation, 3000);
		}
	}

	function restartAnimation() {
		displayText = '';
		currentIndex = 0;
		typeText();
	}
</script>

<div class="border-base-200 mx-(--cubiq-app-margin) h-fit min-h-[146px] border-t md:min-h-[146px]">
	<div class="mx-auto my-10 text-center">
		<h2 class="font-pixel text-2xl font-bold tracking-wider md:text-4xl md:leading-[45px]">
			<span class="text-primary font-black" class:animate-pulse={isVisible}>></span>
			<span class="typewriter-text">
				{#each displayText.split('\n') as line, i (i)}
					{#if i > 0}<br />{/if}
					{line}
				{/each}
				<span class="cursor">|</span>
			</span>
		</h2>
	</div>
</div>

<style>
	.typewriter-text {
		display: inline;
	}

	.cursor {
		animation: blink 1s infinite;
		color: #ff4016;
		/* font-weight: 900; */
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}
</style>
