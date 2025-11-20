<script lang="ts">
	import { onMount } from 'svelte';
	import {
		commandPaletteState,
		closeCommandPalette,
		openCommandPalette
	} from '$lib/stores/CommandPallete.state.svelte';
	import { m } from '$paraglide/messages';

	let searchQuery = $state('');
	let selectedIndex = $state(0);

	// Example command items
	const commands = $state([
		{
			id: 'dashboard',
			label: 'Go to Dashboard',
			icon: '📊',
			action: () => navigateTo('/dashboard')
		},
		{ id: 'settings', label: 'Open Settings', icon: '⚙️', action: () => navigateTo('/settings') },
		{ id: 'profile', label: 'View Profile', icon: '👤', action: () => navigateTo('/profile') },
		{ id: 'logout', label: 'Logout', icon: '🚪', action: () => logout() },
		{ id: 'theme', label: 'Toggle Theme', icon: '🌓', action: () => toggleTheme() }
	]);

	let filteredCommands = $derived(
		searchQuery
			? commands.filter((cmd) => cmd.label.toLowerCase().includes(searchQuery.toLowerCase()))
			: commands
	);

	function open() {
		openCommandPalette(); // Call the global open function
		// Reset state when opening
		searchQuery = '';
		selectedIndex = 0;
		// Set focus on the input after a short delay
		setTimeout(() => {
			document.getElementById('command-input')?.focus();
		}, 10);
	}

	function close() {
		// console.log('Closing modal');
		closeCommandPalette(); // Call the global close function
	}

	// Key handler for the search input
	function handleKeydown(event: KeyboardEvent) {
		// console.log('Keydown event in input:', event.key);

		if (!commandPaletteState.open) return; // Access the reactive property

		switch (event.key) {
			case 'Escape':
				event.preventDefault();
				close();
				break;
			case 'ArrowDown':
				event.preventDefault();
				selectedIndex = (selectedIndex + 1) % filteredCommands.length;
				break;
			case 'ArrowUp':
				event.preventDefault();
				selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
				break;
			case 'Enter':
				event.preventDefault();
				if (filteredCommands[selectedIndex]) {
					executeCommand(filteredCommands[selectedIndex]);
				}
				break;
		}
	}

	function executeCommand(command: (typeof commands)[0]) {
		command.action();
		close();
	}

	// Mock functions (replace with your actual implementations)
	function navigateTo(path: string) {
		console.log(`Navigating to: ${path}`);
		// Implement your navigation logic here
	}

	function logout() {
		console.log('Logging out');
		// Implement your logout logic here
	}

	function toggleTheme() {
		console.log('Toggling theme');
		// Implement your theme toggle logic here
	}

	// Global keyboard shortcut handler
	function globalKeyHandler(event: KeyboardEvent) {
		// console.log('Global keydown:', event.key, 'Meta:', event.metaKey, 'Ctrl:', event.ctrlKey);

		// Command+K (Mac) or Ctrl+K (Windows/Linux)
		if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
			event.preventDefault();
			open();
		}

		// Add global escape key handler as a backup
		if (commandPaletteState.open && event.key === 'Escape') {
			// Access the reactive property
			event.preventDefault();
			close();
		}
	}

	onMount(() => {
		document.addEventListener('keydown', globalKeyHandler);

		return () => {
			document.removeEventListener('keydown', globalKeyHandler);
		};
	});
</script>

{#if commandPaletteState.open}
	<div class="modal modal-open">
		<div class="modal-box border-base-content/30 w-11/12 max-w-lg border">
			<div class="form-control">
				<div class="input-group">
					<input
						id="command-input"
						type="text"
						placeholder={m.searchPlaceholder()}
						class="input input-bordered w-full"
						bind:value={searchQuery}
						onkeydown={handleKeydown}
					/>
					<div class="mt-4 px-2 text-xs">
						Librarías e ferramentas desenvolvidas ou utilizadas por Cubiq
					</div>
				</div>
			</div>

			<div class="mt-4 max-h-64 overflow-y-auto">
				{#if filteredCommands.length === 0}
					<div class="text-base-content/60 py-4 text-center">No commands match your search</div>
				{:else}
					<ul class="menu bg-base-200 rounded-box">
						{#each filteredCommands as command, index}
							<li>
								<button
									aria-label="button"
									class="flex items-center {selectedIndex === index ? 'bg-primary/20' : ''}"
									onclick={() => executeCommand(command)}
								>
									<span class="mr-2">{command.icon}</span>
									{command.label}
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<div class="modal-action">
				<button class="btn" onclick={close}>Cancel</button>
			</div>
		</div>
		<div
			role="button"
			class="modal-backdrop bg-black/70"
			onclick={close}
			onkeydown={close}
			tabindex="0"
			aria-label="Close modal"
		></div>
	</div>
{/if}
