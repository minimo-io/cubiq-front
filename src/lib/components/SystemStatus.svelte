<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
	import { Circle } from '@lucide/svelte';
</script>

<a
	href={AppConfig.status}
	target="_blank"
	rel="nofollow noreferrer"
	class="text-primary group mt-2 flex items-center text-sm text-[15px] leading-5"
>
	<div>
		<Circle class="group-hover:text-base-100 h-3 fill-current" />
	</div>
	<div class="group-hover:text-base-100 font-sans">{m.allSystemsWorking()}</div>
</a>

<!-- fill="#ff4016" -->
