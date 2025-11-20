<script lang="ts">
	import { BotMessageSquare } from '@lucide/svelte';
	import { getLocale } from '$paraglide/runtime';
	import { scale, fade, fly } from 'svelte/transition';

	let { showCheck = true }: { showCheck?: boolean } = $props();

	const locale = $state(getLocale());
	let isChatOpen = $state(false);

	function openChat() {
		isChatOpen = true;
	}

	function closeChat() {
		isChatOpen = false;
	}

	// Handle escape key
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeChat();
		}
	}

	$effect(() => {
		if (isChatOpen) {
			window.addEventListener('keydown', handleKeydown);
			return () => window.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

<!-- Chat button -->
<button
	class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden rounded-full px-3 py-3 md:block"
	onclick={openChat}
>
	{#if showCheck}
		<div
			class="badge badge-success absolute -top-2 -right-1 h-[22px] w-[22px] text-center font-sans text-xs font-bold text-white"
		>
			✔
		</div>
	{/if}
	<BotMessageSquare class="h-5" strokeWidth="1" />
</button>

<!-- Full screen chatbot modal -->
{#if isChatOpen}
	<div
		class="bg-base-100 fixed inset-0 z-50"
		in:scale={{ duration: 150 }}
		out:fade={{ duration: 150 }}
	>
		<!-- Chat header -->
		<div class="border-base-300 flex items-center justify-between border-b p-4">
			<h2 class="font-sans text-xl font-bold">AI Assistant</h2>
			<button class="btn btn-circle btn-ghost btn-sm" onclick={closeChat} aria-label="Close chat">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>

		<!-- Chat messages container -->
		<div class="flex-1 overflow-y-auto p-4" style="height: calc(100vh - 140px)">
			<div class="chat chat-end mb-4">
				<div class="chat-bubble">Olá, me pergunta tudo sobre computadores :)</div>
			</div>

			<!-- Add more chat messages here as needed -->
		</div>

		<!-- Chat input -->
		<div class="border-base-300 border-t p-4">
			<div class="flex gap-2">
				<input type="text" placeholder="Pergunte para IA" class="input input-bordered flex-1" />
				<button class="btn btn-primary"> Enviar </button>
			</div>
		</div>
	</div>
{/if}
