<!-- src/lib/components/CommandPalette.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import {
		commandPaletteState,
		closeCommandPalette,
		openCommandPalette
	} from '$lib/stores/CommandPallete.state.svelte';
	import { m } from '$paraglide/messages';
	import { posts } from '$lib/data/posts';
	import { featuredPosts } from '$lib/data/featuredPosts';
	import { getProducts, getProductsFromLab } from '$lib/data/products.data';
	import { getLocale } from '$paraglide/runtime';
	import { goto } from '$app/navigation';
	import type { Post } from '$lib/type/blog.types';
	import type { ProductsList } from '$lib/type/products.types';

	let searchQuery = $state('');
	let selectedIndex = $state(0);

	// Data containers
	let blogPosts: Post[] = $state([]);
	let products: ProductsList = $state([]);
	let labProducts: ProductsList = $state([]);

	// Define command type
	type Command = {
		id: string;
		label: string;
		icon?: string;
		iconComponent?: any;
		type: 'blog' | 'product' | 'lab-product';
		excerpt?: string;
		date?: string;
		badge?: string;
		action: () => void;
	};

	// Convert products to command items
	let productCommands = $derived(
		products.map(
			(product): Command => ({
				id: `product-${product.id}`,
				label: product.name,
				excerpt: product.sloganSimple || product.slogan,
				iconComponent: product.icon,
				type: 'product',
				badge: 'Product',
				action: () => {
					if (product.url) {
						navigateTo(product.url);
					}
				}
			})
		)
	);

	// Convert lab products to command items
	let labProductCommands = $derived(
		labProducts.map(
			(product): Command => ({
				id: `lab-${product.id}`,
				label: product.name,
				excerpt: product.sloganSimple || product.slogan,
				iconComponent: product.icon,
				type: 'lab-product',
				badge: 'Lab',
				action: () => {
					if (product.url) {
						window.open(product.url, '_blank');
					}
				}
			})
		)
	);

	// Convert blog posts to command items
	let blogCommands = $derived(
		blogPosts.map(
			(post): Command => ({
				id: `blog-${post.slug}`,
				label: post.title,
				excerpt: post.excerpt,
				icon: post.isMain ? '⭐' : '📝',
				type: 'blog',
				date: post.date,
				action: () => navigateTo(post.slug)
			})
		)
	);

	// Combine all commands with products first
	let allCommands = $derived([...productCommands, ...labProductCommands, ...blogCommands]);

	// Filter commands based on search query
	let filteredCommands = $derived(
		searchQuery
			? allCommands.filter((cmd) => {
					const query = searchQuery.toLowerCase();
					const matchesTitle = cmd.label.toLowerCase().includes(query);
					const matchesExcerpt = cmd.excerpt?.toLowerCase().includes(query);
					const matchesBadge = cmd.badge?.toLowerCase().includes(query);
					return matchesTitle || matchesExcerpt || matchesBadge;
				})
			: allCommands
	);

	//  function open() {
	// 	openCommandPalette();
	// 	// Load all data for current locale
	// 	const locale = getLocale() as 'pt' | 'en' | 'es';
	// 	const featured = featuredPosts[locale] ?? [];
	// 	const regular = posts[locale] ?? [];
	// 	blogPosts = [...featured, ...regular];
	// 	products = getProducts(locale);
	// 	labProducts = getProductsFromLab(locale);
	// 	// Reset state when opening
	// 	searchQuery = '';
	// 	selectedIndex = 0;
	// 	// Set focus on the input with requestAnimationFrame for better timing
	// 	requestAnimationFrame(() => {
	// 		const input = document.getElementById('command-input');
	// 		if (input) {
	// 			input.focus();
	// 		}
	// 	});
	// }

	function open() {
		openCommandPalette();
		// Set focus on the input with requestAnimationFrame for better timing
		requestAnimationFrame(() => {
			const input = document.getElementById('command-input');
			if (input) {
				input.focus();
			}
		});
	}

	// Load data whenever the palette opens
	$effect(() => {
		if (commandPaletteState.open) {
			const locale = getLocale() as 'pt' | 'en' | 'es';
			const featured = featuredPosts[locale] ?? [];
			const regular = posts[locale] ?? [];
			blogPosts = [...featured, ...regular];
			products = getProducts(locale);
			labProducts = getProductsFromLab(locale);
			searchQuery = '';
			selectedIndex = 0;
		}
	});

	function close() {
		closeCommandPalette();
	}

	// Key handler for the search input
	function handleKeydown(event: KeyboardEvent) {
		if (!commandPaletteState.open) return;

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

	function executeCommand(command: Command) {
		command.action();
		close();
	}

	// Navigation function using SvelteKit's goto
	function navigateTo(path: string) {
		goto(path);
	}

	// Global keyboard shortcut handler
	function globalKeyHandler(event: KeyboardEvent) {
		// Command+K (Mac) or Ctrl+K (Windows/Linux)
		if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
			event.preventDefault();
			open();
		}

		// Add global escape key handler as a backup
		if (commandPaletteState.open && event.key === 'Escape') {
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
		<div class="modal-box border-base-content/30 w-11/12 max-w-2xl border">
			<!-- Search Input -->
			<div class="form-control">
				<input
					id="command-input"
					type="text"
					placeholder={m.searchPlaceholder()}
					class="input input-bordered w-full"
					bind:value={searchQuery}
					onkeydown={handleKeydown}
					autofocus
				/>
				<div class="mt-2 px-2 text-xs opacity-60">
					Librarías e ferramentas desenvolvidas ou utilizadas por Cubiq
				</div>
			</div>

			<!-- Commands List -->
			<div class="mt-4 max-h-96 overflow-y-auto">
				{#if filteredCommands.length === 0}
					<div class="py-8 text-center opacity-60">No commands match your search</div>
				{:else}
					<ul class="menu rounded-box bg-base-200 p-2">
						{#each filteredCommands as command, index}
							<li>
								<button
									class="flex items-start gap-3 py-3 {selectedIndex === index ? 'active' : ''}"
									onclick={() => executeCommand(command)}
								>
									<!-- Icon -->
									<div class="mt-0.5 flex-shrink-0">
										{#if command.iconComponent}
											{@const IconComponent = command.iconComponent}
											<IconComponent class="h-5 w-5" />
										{:else if command.icon}
											<span class="text-lg">{command.icon}</span>
										{/if}
									</div>

									<!-- Content -->
									<div class="flex min-w-0 flex-1 flex-col items-start gap-1">
										<div class="flex w-full items-center gap-2">
											<span class="font-medium">{command.label}</span>
											{#if command.badge}
												<span
													class="badge badge-sm {command.type === 'product'
														? 'badge-primary'
														: command.type === 'lab-product'
															? 'badge-secondary'
															: 'badge-ghost'}"
												>
													{command.badge}
												</span>
											{/if}
											{#if command.date}
												<span class="badge badge-ghost badge-sm ml-auto">{command.date}</span>
											{/if}
										</div>
										{#if command.excerpt}
											<span class="line-clamp-2 text-left text-xs opacity-70">
												{command.excerpt}
											</span>
										{/if}
									</div>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<!-- Actions -->
			<div class="modal-action">
				<button class="btn btn-sm" onclick={close}>Cancel</button>
			</div>
		</div>
		<div
			role="button"
			class="modal-backdrop"
			onclick={close}
			onkeydown={close}
			tabindex="0"
			aria-label="Close modal"
		></div>
	</div>
{/if}
