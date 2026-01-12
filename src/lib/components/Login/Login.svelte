<script lang="ts">
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import CtaContact from '../CtaContact.svelte';
	import { enhance } from '$app/forms';
	// import { enhance } from '$utils/enhance.utils';

	import type { ActionData } from '../../../routes/login/$types';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import { Eye, EyeOff } from '@lucide/svelte';
	interface Props {
		form: ActionData;
	}
	let { form }: Props = $props();

	let isSubmitting = $state(false);
	let showPassword = $state(false);
	let password = $state('');

	async function createUser() {}
</script>

<div class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-x">
	<div class="mx-(--cubiq-app-margin) flex h-[calc(100vh-90px)] flex-1 items-center justify-center">
		<div class="relative -top-8 w-[400px]">
			<h2 class="text-base-content font-sans text-3xl font-black">{m.login()}</h2>
			<div class="mx-auto">
				<form
					action="?/email"
					method="POST"
					use:enhance={() => {
						isSubmitting = true;
						toggleLoader();
						return async ({ update }) => {
							toggleLoader();
							isSubmitting = false;
							update();
						};
					}}
				>
					<!-- Email input -->
					<fieldset class="mt-5 mb-3">
						<label for="email" class="mb-2 ml-2 block text-left text-sm font-medium">Email</label>
						<input
							type="email"
							name="email"
							value={form?.email ?? ''}
							id="email"
							required={true}
							disabled={isSubmitting}
							placeholder={m.loginYourEmail()}
							class="focus:ring-primary w-full rounded-md border border-white bg-transparent px-4 py-2 text-white focus:ring-2 focus:outline-none"
						/>
					</fieldset>

					<fieldset class="mb-4">
						<label for="password" class="mb-2 ml-2 block text-left text-sm font-medium"
							>{m.loginPassword()}</label
						>
						<div class="relative mt-1">
							<input
								id="password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								bind:value={password}
								disabled={isSubmitting}
								required
								class="focus:ring-primary w-full rounded-md border border-white bg-transparent px-4 py-2 text-white focus:ring-2 focus:outline-none"
								placeholder={m.loginYourPassword()}
							/>
							<button
								type="button"
								class="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700 focus:outline-none"
								onclick={() => (showPassword = !showPassword)}
							>
								{#if showPassword}
									<EyeOff class="h-5" />
								{:else}
									<Eye class="h-5" />
								{/if}
							</button>
						</div>
					</fieldset>

					<!-- Continue button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="bg-primary mb-5 w-full rounded-md py-2 font-semibold text-white transition hover:opacity-50"
					>
						{isSubmitting ? m.loggingIn() : m.continue()}
					</button>

					{#if form?.missing === 'email'}
						<p class="fw-login-error">{m.loginEmailRequired()}</p>
					{/if}
					{#if form?.missing === 'password'}
						<p class="fw-login-error">{m.loginPasswordRequired()}</p>
					{/if}
					{#if form?.incorrect}
						<p class="fw-login-error">{m.loginInvalidCredentials()}</p>
					{/if}
					<!-- {#if form?.exists}
						<p class="fw-login-error">User already exists</p>
					{/if}
					{#if form?.weak}
						<p class="fw-login-error">Password must be at least 8 characters</p>
					{/if} -->

					<!-- Divider -->
					<div class="mb-5 flex items-center gap-2 text-sm text-gray-400">
						<div class="h-px flex-grow bg-gray-600"></div>
						<span class="uppercase">{m.or()}</span>
						<div class="h-px flex-grow bg-gray-600"></div>
					</div>

					<!-- Google button -->
					<!-- <button
						class="mb-3 flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 font-medium text-black shadow-sm transition hover:shadow-md"
					>
						<img
							src="https://www.svgrepo.com/show/475656/google-color.svg"
							alt="Google"
							class="h-5 w-5"
						/>
						{m.loginContinueWithGoogle()}
					</button> -->

					<!-- Google login -->
					<button
						onclick={() => {
							createUser();
							alert(`${m.soon()}`);
						}}
						type="button"
						class="mb-3 flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 font-medium text-black shadow-sm transition hover:shadow-md"
					>
						{m.loginContinueWithGoogle()}
					</button>

					<!-- Register prompt -->
					<p class="text-center text-sm">
						{m.loginDontHaveAccount()}
						<a
							href={localizeHref('/soon')}
							class="text-primary ml-1 font-bold uppercase hover:underline">{m.loginStartNow()}</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>

	<CtaContact />

	<!-- Decoration 1 -->
	<div class="absolute -top-[5%] right-[20%] z-10 scale-40 opacity-60 md:bottom-[10%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
	<!-- Decoration 2 -->
	<div class="absolute -top-[5%] -left-[10%] z-10 scale-40 opacity-80 md:bottom-[10%]">
		<img src="/bgs/cross.svg" alt="cross" />
	</div>
</div>
