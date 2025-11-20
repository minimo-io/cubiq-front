<!-- src/lib/components/Header/HeaderLogoDashboard.svelte -->
<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';

	interface Props {
		isCollapsed?: boolean;
	}
	let { isCollapsed = false }: Props = $props();
</script>

<div class="flex items-center">
	<a href={localizeHref('/')} class="">
		<!-- Desktop -->
		<div class="{isCollapsed ? 'hidden' : 'hidden md:flex'} flex-row items-center">
			<img
				src="/logos/cubiq-logo-complete-white.svg"
				alt="cubiq-logo"
				class="h-[42px] max-h-[42px] md:h-[42px]"
			/>
		</div>
		<!-- Mobile / Collapsed -->
		<div class="{isCollapsed ? 'flex' : 'flex md:hidden'} flex-row">
			<img
				src="/logos/cubiq-logo-square.svg"
				alt="cubiq-logo"
				class="!aspect-square !h-[65px] !max-h-none !w-[72px] !max-w-none object-cover"
			/>
		</div>
	</a>
</div>
