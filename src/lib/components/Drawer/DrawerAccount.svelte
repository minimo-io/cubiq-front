<script lang="ts">
	// import { page } from '$app/state';
	// import Button from '../buttons/Button.svelte';

	// import WhatsappButton from '$components/ui/buttons/WhatsappButton.svelte';
	import { slide } from 'svelte/transition';
	// import { login } from '$lib/graphql/auth';
	// import { redirectHref } from '$lib/utils';
	// import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { localizeHref } from '../../../paraglide/runtime';
	import { Eye, EyeOff } from '@lucide/svelte';
	// import SignupBenefits from '../SignupBenefits.svelte';
	// import { onMount } from 'svelte';

	let showReset = $state(false);

	let email = $state('');
	let password = $state('');
	let processing = $state(false);
	// let returnUrl = $derived(page.url.href);
	let error = $state('');
	let showPassword = $state(false);

	// Add this function to toggle password visibility
	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	interface Props {
		showBottomBorder?: boolean;
	}
	let { showBottomBorder = true }: Props = $props();

	// onMount(() => {
	// 	document.getElementById('username')?.focus();
	// });

	// Derived state with runes
	function toggleForms(e) {
		e.preventDefault();
		showReset = !showReset;
	}

	// Handle the login form submission
	// async function handleLogin(event) {
	// 	event.preventDefault();
	// 	processing = true;
	// 	toggleLoader();
	// 	document.body.classList.toggle('no-scroll');
	// 	try {
	// 		let loginResult = await login(email, password);
	// 		if (loginResult && loginResult.success) {
	// 			error = '';
	// 			const url = new URL(window.location.href);
	// 			const returnUrl = url.searchParams.get('returnUrl');
	// 			// if there is a return url then redirect there else to wines
	// 			if (returnUrl) {
	// 				// redirectHref(localizeHref(returnUrl));
	// 			} else {
	// 				// redirectHref(localizeHref('/vinhos/'));
	// 			}
	// 		} else {
	// 			error = loginResult.message;
	// 			processing = false;
	// 			toggleLoader();
	// 			document.body.classList.toggle('no-scroll');
	// 		}
	// 	} catch (error) {
	// 		processing = false;

	// 		toggleLoader();
	// 		document.body.classList.toggle('no-scroll');
	// 	}
	// }
</script>

{#if showReset}
	<form
		id="frm-reset-password"
		action=""
		class="border-grey-lighter my-5 border-b px-[30px] pb-8"
		in:slide={{ duration: 200 }}
	>
		<fieldset>
			<label for="username" class="text-sm font-bold">REDEFINIR SENHA</label>

			<input
				id="username"
				type="email"
				class="border-grey-light mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
				placeholder="contato@braaay.com"
			/>
		</fieldset>
		<div class="mt-3 flex justify-start gap-3">
			<button type="submit" class="btn form-btn mt-0 !text-xs">Redefinir</button>
			<button class="self-center pr-5 text-xs font-bold underline" onclick={toggleForms}
				>Voltar</button
			>
		</div>
	</form>
{:else}
	<div class="border-grey-lighter border-b pb-8">
		<form id="frm-login" method="POST" class="mt-5 px-[30px]" in:slide={{ duration: 200 }}>
			<fieldset>
				<label for="username" class="text-sm font-bold">Email</label>
				<input
					id="username"
					name="username"
					type="email"
					bind:value={email}
					disabled={processing}
					required
					class="border-grey-light mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="contato@braaay.com"
				/>
			</fieldset>
			<fieldset class="mt-3">
				<label for="password" class="text-sm font-bold">Senha</label>
				<div class="relative mt-1">
					<input
						id="password"
						name="password"
						type={showPassword ? 'text' : 'password'}
						bind:value={password}
						disabled={processing}
						required
						class="border-grey-light w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
						placeholder="123456789!"
					/>
					<button
						type="button"
						class="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700 focus:outline-none"
						onclick={togglePasswordVisibility}
					>
						{#if showPassword}
							<EyeOff class="h-5" />
						{:else}
							<Eye class="h-5" />
						{/if}
					</button>
				</div>
			</fieldset>
			<div class="mt-3 flex justify-start gap-3">
				<button type="submit" class="btn form-btn mt-0 !text-xs" disabled={processing}
					>Entrar</button
				>
				<button class="self-center pr-5 text-xs font-bold underline" onclick={toggleForms}
					>Esqueceu sua senha?</button
				>
			</div>
			{#if error}
				<div class="text-red-medium pt-4 text-left text-sm">{error}</div>
			{/if}
		</form>
	</div>
{/if}
<div
	class="border-grey-lighter w-full flex-row self-center border-b px-[35px] py-10 pb-7 text-center text-sm md:hidden md:h-full md:flex-1 md:justify-center"
>
	<div class="flex flex-col p-0 text-center font-bold md:p-10">
		<span class="mb-2 block">Não tem uma conta?</span>
		<!-- <Button shineEffect={false} title="Cadastre-se" type="sun" /> -->
		Cadastre-se
	</div>
	<div class="px-5">
		<!-- <SignupBenefits /> -->
		BENEFITS.
	</div>
</div>

<div
	class={[
		'border-grey-lighter mt-7 flex flex-col border-b-0  px-[35px] pb-6 text-xs',
		showBottomBorder && '!border-b'
	]}
>
	<strong class="uppercase">Precisar de ajuda?</strong>
	<span class="text-grey-medium-dark my-2"
		>Entre em contato com nossa equipe através do botão abaixo e nós o ajudaremos.</span
	>
	<div class="relative w-fit">Whatsapp button</div>
</div>
