<script lang="ts">
	import { getTranslationFromCode } from '$utils/translations.utils';

	let { statusCode }: { statusCode: string } = $props();
</script>

<div
	class={[
		'badge text-base-100 border-0 text-xs font-bold uppercase',
		statusCode == 'CANCELED' && 'badge-error  bg-red-500',
		statusCode == 'COMPLETED_FAILURE' && 'badge-error  bg-red-500',

		statusCode == 'COMPLETED_SUCCESS' && 'badge-success',

		statusCode == 'ON_HOLD' && 'badge-warning',
		statusCode == 'PENDING_APPROVAL' && 'badge-warning',
		statusCode == 'IN_PROGRESS' && 'badge-warning',

		statusCode == 'MONITORING' && 'badge-neutral',
		statusCode == 'SCHEDULED' && 'badge-info'
	]}
>
	{getTranslationFromCode(statusCode)}
</div>
