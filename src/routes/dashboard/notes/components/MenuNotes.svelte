<!-- src/routes/dashboard/notes/components/MenuNotes.svelte -->
<script lang="ts">
	import { AppConfig } from '$lib';
	import { localizeHref } from '$paraglide/runtime';
	import { dashboardLeftMenuState } from '$stores/DashboardLeftMenu.state.svelte';
	import { NotebookTabs, Settings, Trash2, Search, X } from '@lucide/svelte';
	import { createNotesService } from '$lib/services/notes.service';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { m } from '$paraglide/messages';

	interface Props {
		isDrawer?: boolean;
	}

	let { isDrawer = false }: Props = $props();

	let NotesService = createNotesService(page.data.user);
	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);
	let currentNoteId = $derived(page.params.noteUuid);

	// Subscribe to the store for reactivity
	let notesList = $state<any[]>([]);
	let searchQuery = $state('');

	$effect(() => {
		const unsubscribe = NotesService.store.subscribe((notes) => {
			notesList = notes;
		});

		return unsubscribe;
	});

	// Filter notes based on search query
	let filteredNotes = $derived(
		searchQuery.trim() === ''
			? notesList
			: notesList.filter(
					(note) =>
						note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						note.content.toLowerCase().includes(searchQuery.toLowerCase())
				)
	);

	function handleDelete(noteId: string, event: MouseEvent) {
		event.stopPropagation();

		if (confirm(m.confirmDelete())) {
			NotesService.delete(noteId);

			if (currentNoteId === noteId) {
				goto(localizeHref('/dashboard/notes'));
			}
		}
	}
</script>

{#if isDrawer}
	<!-- Drawer Mode: Simple list of links -->
	<!-- Search input -->
	<div class="border-base-300 border-b px-[30px] py-3">
		<div class="relative w-full">
			<Search
				class="text-base-content absolute top-1/2 left-3 z-50 h-3 w-3 -translate-y-1/2 opacity-50 focus:outline-0"
			/>
			<input
				type="text"
				bind:value={searchQuery}
				placeholder={m.searchNotes()}
				class="input input-bordered input-sm w-full pl-9 text-xs"
			/>
			{#if searchQuery}
				<X
					onclick={() => {
						searchQuery = '';
					}}
					class="text-base-content absolute top-1/2 right-3 z-50 h-3 w-3 -translate-y-1/2 cursor-pointer opacity-50 focus:outline-0"
				/>
			{/if}
		</div>
	</div>

	<a
		href={localizeHref('/dashboard/notes')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<NotebookTabs class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.notes()}</span>
		</div>
	</a>

	<!-- Notes list in drawer mode -->
	{#if filteredNotes.length === 0}
		<div class="border-base-300 border-b px-[30px] py-3 text-sm opacity-60">
			{searchQuery ? 'No notes found' : "You don't have any notes yet."}
		</div>
	{:else}
		{#each filteredNotes as note (note.id)}
			<div class="group border-base-300 relative border-b">
				<button
					onclick={() => goto(localizeHref(`/dashboard/notes/${note.id}`))}
					class="font-roboto text-grey-dark shine-effect flex w-full flex-col items-start gap-1 px-[30px] py-3 pr-[50px] text-left align-middle text-sm transition-colors {currentNoteId ===
					note.id
						? 'bg-primary/20 text-primary-content'
						: ''}"
				>
					<div class="w-full truncate font-semibold">
						{note.title}
					</div>
					<div class="flex items-center gap-2 text-xs opacity-60">
						<small>
							{new Date(note.lastUpdated).toLocaleDateString(undefined, {
								year: 'numeric',
								month: 'numeric',
								day: 'numeric',
								hour: '2-digit',
								minute: '2-digit'
							})}
						</small>
						<small>{NotesService.getSize(note.id)} KB</small>
					</div>
				</button>
				<button
					onclick={(e) => handleDelete(note.id, e)}
					class="hover:bg-error hover:text-error-content absolute top-1/2 right-[30px] -translate-y-1/2 rounded p-1 opacity-0 transition-all group-hover:opacity-100"
					title="Delete note"
				>
					<Trash2 class="h-3 w-3" />
				</button>
			</div>
		{/each}
	{/if}

	<a
		href="/"
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Settings class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.configurations()}</span>
		</div>
	</a>
{:else}
	<!-- Original Menu Structure -->
	<!-- Search input -->
	<div class="relative mb-2 w-full">
		<Search
			class="text-base-content absolute top-1/2 left-3 z-50 h-3 w-3 -translate-y-1/2 opacity-50 focus:outline-0"
		/>
		<input
			type="text"
			bind:value={searchQuery}
			placeholder={m.searchNotes()}
			class="input input-bordered input-sm w-full pl-9 text-xs"
		/>
		{#if searchQuery}
			<X
				onclick={() => {
					searchQuery = '';
				}}
				class="text-base-content absolute top-1/2 right-3 z-50 h-3 w-3 -translate-y-1/2 cursor-pointer opacity-50 focus:outline-0"
			/>
		{/if}
	</div>
	<li>
		<a href={localizeHref('/dashboard/notes')}>
			<NotebookTabs class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.notes()}</span>
		</a>
		<!-- Actual notes -->
		<ul
			class="hidden {isCollapsed
				? ''
				: 'md:block'} before:bg-primary pb-2 before:opacity-50 md:pl-4"
		>
			{#if filteredNotes.length === 0}
				<li class="px-4 py-2 text-sm opacity-60">
					{searchQuery ? 'No notes found' : "You don't have any notes yet."}
				</li>
			{:else}
				{#each filteredNotes as note (note.id)}
					<li class="group relative mb-1">
						<button
							onclick={() => goto(localizeHref(`/dashboard/notes/${note.id}`))}
							class="hover:bg-base-200 flex w-full flex-col items-start gap-0 rounded px-3 py-2 pr-8 text-left transition-colors {currentNoteId ===
							note.id
								? 'bg-primary/20 text-primary-content'
								: ''}"
						>
							<div class="w-full truncate text-sm font-medium">
								{note.title}
							</div>
							<div class="mt-0.5 flex items-center gap-2 text-xs opacity-60">
								<small>
									{new Date(note.lastUpdated).toLocaleDateString(undefined, {
										year: 'numeric',
										month: 'numeric',
										day: 'numeric',
										hour: '2-digit',
										minute: '2-digit'
									})}
								</small>
								<small>{NotesService.getSize(note.id)} KB</small>
							</div>
						</button>
						<button
							onclick={(e) => handleDelete(note.id, e)}
							class="hover:bg-error hover:text-error-content absolute top-1 right-1 rounded p-1 opacity-0 transition-all group-hover:opacity-100"
							title="Delete note"
						>
							<Trash2 class="h-3 w-3" />
						</button>
					</li>
				{/each}
			{/if}
		</ul>
	</li>
	<li class="border-base-200 mt-3 border-t border-b py-2">
		<a href="/">
			<Settings class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.configurations()}</span>
		</a>
	</li>
{/if}
