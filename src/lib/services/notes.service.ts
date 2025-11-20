// src/lib/services/notes.service.ts
import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';
import type { Note } from '$types/notes.types';
import type { User } from './auth.service';
import { createCryptoService } from './crypto.service';

const notesStore = writable<Note[]>([]);
const cryptoService = createCryptoService();

export function createNotesService(user?: User) {
	const STORE_KEY = `fw-notes-${user?.id || 'anon'}`;
	const MAX_TITLE_LENGTH = 18;

	// Helper to update a single note in the localStorage array
	function updateNoteInStorage(note: Note) {
		if (!browser) return;

		try {
			const stored = localStorage.getItem(STORE_KEY);
			const notes: Note[] = stored ? JSON.parse(stored) : [];
			const index = notes.findIndex((n) => n.id === note.id);

			if (index > -1) {
				notes[index] = note;
			} else {
				notes.unshift(note);
			}

			notes.sort((a, b) => b.lastUpdated - a.lastUpdated);
			localStorage.setItem(STORE_KEY, JSON.stringify(notes));

			console.log(`Updated note ${note.id} in ${STORE_KEY}`);
		} catch (e) {
			console.error('NotesService: Failed to save note.', e);
		}
	}

	// Helper to delete a note from the localStorage array
	function deleteNoteFromStorage(id: string) {
		if (!browser) return;

		try {
			const stored = localStorage.getItem(STORE_KEY);
			const notes: Note[] = stored ? JSON.parse(stored) : [];
			const filtered = notes.filter((n) => n.id !== id);
			localStorage.setItem(STORE_KEY, JSON.stringify(filtered));

			console.log(`Deleted note ${id} from ${STORE_KEY}`);
		} catch (e) {
			console.error('NotesService: Failed to delete note.', e);
		}
	}

	// Load initial data
	if (browser) {
		try {
			const initialData: Note[] = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
			initialData.sort((a, b) => b.lastUpdated - a.lastUpdated);
			notesStore.set(initialData);
			console.log(`Loaded ${initialData.length} notes from ${STORE_KEY}`);
		} catch (e) {
			console.error('NotesService: Failed to load notes.', e);
			notesStore.set([]);
		}
	}

	return {
		// Expose the store for reactive subscriptions
		store: notesStore,

		get notes() {
			return get(notesStore);
		},

		update(id: string, content: string) {
			const currentNotes = get(notesStore);
			const index = currentNotes.findIndex((n) => n.id === id);

			const firstLine = content.split('\n')[0].trim();
			const derivedTitle =
				firstLine.length > 0
					? firstLine.length > MAX_TITLE_LENGTH
						? firstLine.substring(0, MAX_TITLE_LENGTH) + '...'
						: firstLine
					: 'Untitled Note';

			const noteToSave: Note = {
				id: id,
				title: derivedTitle,
				content: content,
				lastUpdated: Date.now(),
				encrypted: currentNotes[index]?.encrypted || false
			};

			// Update only this note in localStorage
			updateNoteInStorage(noteToSave);

			// Update the store
			let updatedNotes: Note[];
			if (index > -1) {
				updatedNotes = [...currentNotes];
				updatedNotes[index] = noteToSave;
				updatedNotes.sort((a, b) => b.lastUpdated - a.lastUpdated);
			} else {
				updatedNotes = [noteToSave, ...currentNotes];
			}

			notesStore.set(updatedNotes);
		},

		delete(id: string) {
			const currentNotes = get(notesStore);

			// Delete from localStorage
			deleteNoteFromStorage(id);

			// Update store
			notesStore.set(currentNotes.filter((note) => note.id !== id));
		},

		get(id: string): Note | undefined {
			const currentNotes = get(notesStore);
			return currentNotes.find((n) => n.id === id);
		},

		getSize(id: string): number {
			const note = this.get(id);
			if (!note) return 0;

			// Calculate size in KB (content + metadata)
			const noteString = JSON.stringify(note);
			const sizeInBytes = new Blob([noteString]).size;
			const sizeInKB = sizeInBytes / 1024;

			return parseFloat(sizeInKB.toFixed(2));
		},

		async encrypt(id: string, password: string): Promise<boolean> {
			if (!browser) return false;

			const note = this.get(id);
			if (!note) return false;
			if (note.encrypted) return false; // Already encrypted

			try {
				const encryptedContent = await cryptoService.encrypt(note.content, password);

				const encryptedNote: Note = {
					...note,
					content: encryptedContent,
					encrypted: true,
					lastUpdated: Date.now()
				};

				updateNoteInStorage(encryptedNote);

				const currentNotes = get(notesStore);
				const index = currentNotes.findIndex((n) => n.id === id);
				if (index > -1) {
					const updatedNotes = [...currentNotes];
					updatedNotes[index] = encryptedNote;
					notesStore.set(updatedNotes);
				}

				console.log(`Encrypted note ${id}`);
				return true;
			} catch (e) {
				console.error('NotesService: Failed to encrypt note.', e);
				return false;
			}
		},

		async decrypt(id: string, password: string): Promise<string | null> {
			if (!browser) return null;

			const note = this.get(id);
			if (!note) return null;
			if (!note.encrypted) return note.content; // Not encrypted, return as-is

			try {
				const decryptedContent = await cryptoService.decrypt(note.content, password);

				const decryptedNote: Note = {
					...note,
					content: decryptedContent,
					encrypted: false,
					lastUpdated: Date.now()
				};

				updateNoteInStorage(decryptedNote);

				const currentNotes = get(notesStore);
				const index = currentNotes.findIndex((n) => n.id === id);
				if (index > -1) {
					const updatedNotes = [...currentNotes];
					updatedNotes[index] = decryptedNote;
					notesStore.set(updatedNotes);
				}

				console.log(`Decrypted note ${id}`);
				return decryptedContent;
			} catch (e) {
				console.error('NotesService: Failed to decrypt note - wrong password?', e);
				return null;
			}
		}
	};
}
