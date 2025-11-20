<!-- src/routes/dashboard/notes/components/ActionsNotes.svelte -->
<script lang="ts">
	import {
		ChevronDown,
		Circle,
		Clipboard,
		Code,
		Delete,
		Loader,
		Plus,
		Recycle,
		Share,
		X
	} from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import DashboardButton from '$lib/components/Buttons/DashboardButton.svelte';
	import { FwToast } from '$stores/Toast.state.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import { goto } from '$app/navigation';
	import { createNotesService } from '$services/notes.service';
	import { page } from '$app/state';
	import type { Note } from '$types/notes.types';
	import { browser } from '$app/environment';
	import { FwShare } from '$utils';

	let NotesService = createNotesService(page.data.user);
	let noteUuid = $derived(page.params.noteUuid!);
	let note = $derived(NotesService.get(noteUuid));

	$effect(() => {
		note = NotesService.get(noteUuid);
	});
</script>

<div class="border-base-200 flex flex-col justify-start border-b">
	<div class="flex items-center justify-start gap-2 p-4">
		<!-- Share -->
		<DashboardButton
			type="primary"
			onclick={async () => {
				if (FwShare.hasShareAPI) {
					FwShare.share({
						url: page.url.href,
						title: `${m.note()}: ${note?.title}`,
						text: ''
					});
				} else {
					try {
						await FwShare.copyToClipboard(page.url.href);
						FwToast.launch('Note url copied to clipboard', 'success', 'bottom', 4000);
					} catch (error) {
						FwToast.launch('Error copying note to clipboard', 'error', 'bottom');
					}
				}
			}}
		>
			<Share class="h-3 w-3" />
			{m.share()}
			<!-- {#if FwShare.hasShareAPI}{:else}
				<Clipboard class="h-3 w-3" />
				{m.copyToClipboard()}
			{/if} -->
		</DashboardButton>

		<!-- New note -->
		<DashboardButton
			onclick={() => {
				goto(localizeHref('/dashboard/notes'));
			}}
		>
			<Plus class="h-3 w-3" />
			{m.addNote()}
		</DashboardButton>

		<!-- Delete -->

		<DashboardButton
			onclick={() => {
				if (confirm(`${m.confirmDelete()}`)) {
					if (note?.id) NotesService.delete(note!.id);
					FwToast.launch(`${m.noteDeleted()}`, 'success', 'bottom');
					goto(localizeHref('/dashboard/notes'));
				}
			}}
		>
			<Delete class="h-3 w-3" />
			{m.delete()}
		</DashboardButton>

		<!-- Encrypt -->
		<DashboardButton
			onclick={() => {
				alert('soon');
			}}
		>
			<Code class="h-3 w-3" />
			{m.encrypt()}
		</DashboardButton>

		<!-- <button
			class="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary flex items-center gap-2 rounded-lg border px-5 py-2 text-xs transition-all duration-300"
		>
			{`${m.import()}/${m.export()}`}
			<ChevronDown class="mx-0 h-3 w-[10px] px-0" />
		</button> -->

		<!-- Sync -->
		<DashboardButton
			onclick={() => {
				alert('soon');
			}}
		>
			<Circle class="h-3 w-3" />
			{m.sync()}
		</DashboardButton>

		<div class="text-neutral ml-2 flex items-center text-sm">
			<X class="h-3" />
			<span> {m.notSynced()} </span>
		</div>
	</div>
</div>
<div class="border-base-200 border-b">
	<div role="alert" class="alert alert-error alert-soft">
		<span>
			{@html m.notesWarningUnencrypteed()}
		</span>
	</div>
</div>
