<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
	import { Circle } from '@lucide/svelte';

	let { allUp = true }: { allUp?: boolean } = $props();
</script>

<a
	href={AppConfig.status}
	target="_blank"
	rel="nofollow noreferrer"
	class="text-primary group mt-2 flex items-center text-sm text-[15px] leading-5"
>
	<div>
		<Circle class="group-hover:text-base-100 h-3 fill-current {allUp ? 'text-success' : 'text-error'}" />
	</div>
	<div class="group-hover:text-base-100 font-sans">
		{allUp ? m.allSystemsWorking() : m.systemsDegraded()}
	</div>
</a>
