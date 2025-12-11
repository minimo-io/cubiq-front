<!-- src/routes/dashboard/care/+page.svelte -->
<script lang="ts">
	import CareSyncDashboardDevices from '$dashboards/caresync-dash/CareSyncDashboardDevices.svelte';
	import { userContextState, saveContextToCookie } from '$stores/UserContext.state.svelte.js';

	let { data } = $props();

	// Set both contexts and active context from server data
	userContextState.contexts = data.contexts;
	userContextState.active = data.activeContext;

	// Ensure cookie is set on client side (in case it wasn't set yet)
	saveContextToCookie(data.activeContext);
</script>

<div class="flex flex-1">
	<CareSyncDashboardDevices />
</div>
