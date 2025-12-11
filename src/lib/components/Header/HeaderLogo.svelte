<!-- src/lib/components/Header/HeaderLogo.svelte -->
<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';
	import CubiqLogoWhite from '../logos/CubiqLogoWhite.svelte';
	import HeaderLogoDashboard from './HeaderLogoDashboard.svelte';
	interface Props {
		isDashboard?: boolean;
		isCollapsed?: boolean;
	}
	let { isDashboard = false, isCollapsed = false }: Props = $props();
</script>

{#if isDashboard}
	<HeaderLogoDashboard {isCollapsed} />
{:else}
	<div class="flex items-start justify-start">
		<a href={localizeHref('/')}>
			<div class="flex flex-row justify-start">
				<CubiqLogoWhite class="relative -left-6 h-[40px] self-start md:-left-7 md:h-[42px]" />
			</div>
		</a>
	</div>
{/if}
