<script lang="ts">
	import HeaderDefined from '$lib/components/Header/HeaderDefined.svelte';
	import Login from '$lib/components/Login/Login.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
	import type { PageProps } from './$types';

	// let { data, form }: PageProps = $props();
	let { form }: PageProps = $props();
</script>

<Meta title={m.metaLoginTitle()} description={m.metaLoginDescription()} />
<HeaderDefined headerButtons="login" />
<Login {form} />
