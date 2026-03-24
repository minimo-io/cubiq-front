<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
	import { getLocale } from '$paraglide/runtime';
	import { modalState } from '$stores/Modal.state.svelte';
	import { FwToast } from '$stores/Toast.state.svelte';
	import { MessageCircle, Send } from '@lucide/svelte';

	const locale = getLocale();

	let formData = $state({
		name: '',
		email: '',
		interest: '',
		message: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		// TODO: Add actual form submission logic
		console.log('Form submitted:', formData);
		FwToast.launch(m.contactFormSuccess(), 'success', 'top');
		modalState.close();
	}
</script>

<div class="p-6 md:p-8">
	<!-- Title -->
	<h2 class="font-pixel mb-6 text-xl font-bold">{m.contactFormTitle()}</h2>

	<div class="flex flex-col md:flex-row">
		<!-- Form Section -->
		<div class="flex-1 md:pr-8">
			<form onsubmit={handleSubmit}>
				<!-- Name -->
				<div class="form-control mb-4">
					<label class="label" for="contact-name">
						<span class="label-text">{m.contactFormName()}</span>
					</label>
					<input
						type="text"
						id="contact-name"
						name="name"
						bind:value={formData.name}
						class="input input-bordered w-full"
						placeholder={m.contactFormNamePlaceholder()}
						required
					/>
				</div>

				<!-- Email -->
				<div class="form-control mb-4">
					<label class="label" for="contact-email">
						<span class="label-text">{m.contactFormEmail()}</span>
					</label>
					<input
						type="email"
						id="contact-email"
						name="email"
						bind:value={formData.email}
						class="input input-bordered w-full"
						placeholder={m.contactFormEmailPlaceholder()}
						required
					/>
				</div>

				<!-- Interest -->
				<div class="form-control mb-4">
					<label class="label" for="contact-interest">
						<span class="label-text">{m.contactFormInterest()}</span>
					</label>
					<select
						id="contact-interest"
						name="interest"
						bind:value={formData.interest}
						class="select select-bordered w-full"
						required
					>
						<option value="" disabled>{m.contactFormInterestPlaceholder()}</option>
						<option value="software">{m.contactFormInterestSoftware()}</option>
						<option value="baas">{m.contactFormInterestBaaS()}</option>
						<option value="payments">{m.contactFormInterestPayments()}</option>
						<option value="partnerships">{m.contactFormInterestPartnerships()}</option>
						<option value="inquiry">{m.contactFormInterestInquiry()}</option>
					</select>
				</div>

				<!-- Message -->
				<div class="form-control mb-6">
					<label class="label" for="contact-message">
						<span class="label-text">{m.contactFormMessage()}</span>
					</label>
					<textarea
						id="contact-message"
						name="message"
						bind:value={formData.message}
						class="textarea textarea-bordered w-full"
						placeholder={m.contactFormMessagePlaceholder()}
						rows="4"
						required
					></textarea>
				</div>

				<!-- Submit -->
				<button type="submit" class="btn btn-primary w-full">
					<Send class="mr-2 h-4 w-4" />
					{m.contactFormSend()}
				</button>
			</form>
		</div>

		<!-- Contact Links Section -->
		<div
			class="border-base-300 mt-6 border-t pt-6 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-8"
		>
			<h3 class="mb-4 text-lg font-semibold">{m.contactFormContactUs()}</h3>

			<div class="space-y-4">
				<!-- WhatsApp -->
				<a
					href={AppConfig.cubiq.socials.whatsapp[locale]}
					target="_blank"
					rel="nofollow noreferrer"
					class="btn btn-outline btn-sm w-full justify-start"
				>
					<img src="/whatsapp.png" alt="WhatsApp" class="mr-2 h-4 w-4" />
					{m.contactFormWhatsapp()}
				</a>

				<!-- Telegram -->
				<a
					href={AppConfig.cubiq.socials.telegram}
					target="_blank"
					rel="nofollow noreferrer"
					class="btn btn-outline btn-sm w-full justify-start"
				>
					<MessageCircle class="mr-2 h-4 w-4" />
					{m.contactFormTelegram()}
				</a>
			</div>
		</div>
	</div>
</div>
