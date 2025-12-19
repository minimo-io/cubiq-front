<!-- src/routes/dashboard/care/+page.svelte -->
<script lang="ts">
	import DevicesList from './components/DevicesList.svelte';
	import { userContextState, saveContextToCookie } from '$stores/UserContext.state.svelte.js';

	let { data } = $props();

	// Use $effect to reactively update when data changes
	// This ensures the state is updated after data is fully loaded
	$effect(() => {
		if (data?.contexts && data?.activeContext) {
			userContextState.contexts = data.contexts;
			userContextState.active = data.activeContext;
			saveContextToCookie(data.activeContext);
		}
	});
</script>

<div class="flex flex-1">
	<DevicesList />
</div>
