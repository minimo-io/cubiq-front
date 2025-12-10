<script lang="ts">
	import CareSyncDashboardDevices from '$dashboards/caresync-dash/CareSyncDashboardDevices.svelte';
	import { userContextState } from '$stores/UserContext.state.svelte.js';

	let { data } = $props();

	userContextState.contexts = data.contexts;
</script>

<div class="flex flex-1">
	<CareSyncDashboardDevices />
</div>
