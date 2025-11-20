<!-- This page must be kept here so svelte undestand that the /dashboard is an existing page
 and passes the handling to our main +layout.serverAsyncLocalStorage.ts -->

<!-- This should never be used -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { localizeHref } from '$paraglide/runtime';
	import { onMount } from 'svelte';

	onMount(() => {
		goto(localizeHref('/'));
	});
</script>

DASHBOARD BLANK.
