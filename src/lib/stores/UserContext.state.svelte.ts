// src/lib/stores/UserContext.state.svelte.ts
import type { CompanyContext } from '$types/caresync-machines.types';

// eslint-disable-next-line prefer-const
export let userContextState = $state<{ contexts: CompanyContext[] }>({
	contexts: []
});
