<!-- src/routes/dashboard/notes/[noteUuid]/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { Maximize } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import ActionsNotes from '../components/ActionsNotes.svelte';
	import { page } from '$app/state';
	import { createNotesService } from '$lib/services/notes.service';
	import { FwToast } from '$stores/Toast.state.svelte';

	let NotesService = $state(createNotesService(page.data.user));
	// alert(page.data.user);
	let noteUuid = $state(page.params.noteUuid!);
	let noteTextarea;
	let noteContent = $state('');
	let originalContent = $state(''); // To track changes to content
	let noteExists = $state(false); // Track if note already exists

	function loadNote(uuid: string) {
		const existingNote = NotesService.get(uuid);

		if (existingNote) {
			noteContent = existingNote.content;
			originalContent = existingNote.content;
			noteExists = true;
		} else {
			noteContent = '';
			originalContent = '';
			noteExists = false;
		}
	}

	async function triggerFullScreen(event) {
		event?.preventDefault();
		const elem = document.getElementById('note');
		if (elem?.requestFullscreen) {
			await elem.requestFullscreen();
			elem.focus();
		} else {
			alert('Sorry, your browser does not support full-screen');
		}
	}

	// function updateNote(){}

	onMount(() => {
		loadNote(noteUuid);
		noteTextarea.focus();
	});

	// Watch for URL changes and reload the note
	$effect(() => {
		const newUuid = page.params.noteUuid;
		if (newUuid && newUuid !== noteUuid) {
			noteUuid = newUuid;
			loadNote(newUuid);
		}
	});

	$effect(() => {
		// This effect fires any time noteContent or noteUuid changes.
		// It relies on manual actions (like onblur, or the manual save below)
		// to manage the saving, or you accept it saves on every keystroke.

		// This check is the most important part to prevent unnecessary *re-saves*
		// when the note is initially loaded or when an update has just finished.
		if (noteContent === originalContent) {
			return;
		}

		// --- Core Conditional Logic ---

		// Condition 1: Must have a UUID
		if (!noteUuid) return;

		// Condition 2: Must have content OR be an existing note
		if (noteContent.trim() === '' && !noteExists) {
			// New note that is empty, do nothing
			return;
		}

		// --- Auto-Save on Keystroke (Immediate) ---
		// If you absolutely must auto-save on change without a timer:
		NotesService.update(noteUuid, noteContent);

		// IMPORTANT: Update the original content immediately after the save
		// to prevent the effect from re-running and triggering an infinite loop.
		originalContent = noteContent;

		if (!noteExists && noteContent.trim() !== '') {
			noteExists = true;
		}
	});

	async function handleKeyDown(event) {
		// Check for CMD+S (Mac) or CTRL+S (Windows/Linux)
		if ((event.metaKey || event.ctrlKey) && event.key === 's') {
			event.preventDefault();
			if (noteUuid && (noteContent.trim() !== '' || noteExists)) {
				NotesService.update(noteUuid, noteContent);
				FwToast.launch(m.noteSaved(), 'success', 'bottom');
			}

			return;
		}
		// Check for CMD+F (Mac) or CTRL+F (Windows/Linux)
		if ((event.metaKey || event.ctrlKey) && event.key === 'f') {
			event.preventDefault();
			triggerFullScreen(event);
			return;
		}

		if (event.key === 'Tab') {
			event.preventDefault();

			const textarea = event.target;
			const start = textarea.selectionStart;
			const end = textarea.selectionEnd;

			// Insert tab character at cursor position
			noteContent = noteContent.substring(0, start) + '\t' + noteContent.substring(end);

			// Move cursor after the inserted tab
			setTimeout(() => {
				textarea.selectionStart = textarea.selectionEnd = start + 1;
			}, 0);
		}
	}
</script>

<div class="flex flex-1 flex-col justify-start">
	<ActionsNotes />

	<div class="relative flex h-full justify-start">
		<button id="btn-fullscreen" onclick={triggerFullScreen} class="absolute top-5 right-5 z-50">
			<Maximize class="text-neutral h-5" />
		</button>
		<textarea
			bind:this={noteTextarea}
			bind:value={noteContent}
			onkeydown={handleKeyDown}
			placeholder={m.addNotePlaceholder()}
			id="note"
			name="note"
			spellcheck="false"
			class="textarea textarea-neutral text-base-content h-full w-full border-0 font-mono text-xs font-light focus:outline-0"
		></textarea>
	</div>
</div>
