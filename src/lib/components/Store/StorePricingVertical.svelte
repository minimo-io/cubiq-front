<script>
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
</script>

<div class="relative px-4 pt-4 md:pt-12">
	<div class="mx-auto max-w-7xl">
		<!-- Pricing Cards Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- Basic Plan -->
			<div
				class="card bg-base-100 border-base-300 border-2 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
			>
				<div class="card-body p-6">
					<!-- Title -->
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">Starter</h2>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">R$250</span>
						<span class="text-base-content/70 text-lg">/mês</span>
					</div>

					<!-- Features -->
					<div class="flex-1 space-y-3">
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Manutenção Preditiva com IA</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Custom brand templates</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Múltiplos usuários e acessos</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Premium AI enhancements</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Priority support</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Custom integrations</span>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6">
						<button class="btn btn-outline btn-md w-full">
							{m.requestQuotation()}
						</button>
					</div>
				</div>
			</div>

			<!-- Premium Plan (Featured) -->
			<div
				class="card bg-base-100 border-primary relative border-2 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:scale-105"
			>
				<div
					class="badge badge-primary badge-lg absolute -top-3 left-1/2 -translate-x-1/2 transform px-4 py-2 font-sans font-bold"
				>
					Recomnedado
				</div>

				<div class="card-body p-6">
					<!-- Title -->
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">Pro</h2>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">R$500</span>
						<span class="text-base-content/70 text-lg">/mês</span>
					</div>

					<!-- Features -->
					<div class="flex-1 space-y-3">
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Cuidamos do design</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content text-left font-sans text-sm"
								>Cuidamos das integrações</span
							>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content text-left font-sans text-sm"
								>Cuidamos dos servidores</span
							>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content text-left font-sans text-sm"
								>ERPs & APIs sob medida</span
							>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-base-content/30 mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content text-left font-sans text-sm"
								>Oferecemos suporte humanizado</span
							>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-base-content/30 mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content text-left font-sans text-sm"
								>Sem comissões por venda, custo fixo previsível</span
							>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6">
						<button class="btn btn-primary btn-md w-full">{m.requestQuotation()}</button>
					</div>
				</div>
			</div>

			<!-- Enterprise Plan -->
			<div
				class="card bg-base-100 border-base-300 border-2 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
			>
				<div class="card-body p-6">
					<!-- Title -->
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">Enterprise</h2>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">Sob medida</span>
						<!-- <span class="text-base-content/70 text-lg">/mês</span> -->
					</div>

					<!-- Features -->
					<div class="flex-1 space-y-3">
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Manutenção Preditiva com IA</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Custom brand templates</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Múltiplos usuários e acessos</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Premium AI enhancements</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Priority support</span>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="text-success mt-0.5 h-5 w-5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-base-content font-sans text-sm">Custom integrations</span>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6">
						<button class="btn btn-outline btn-md w-full">
							{m.requestQuotation()}
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div class="mt-15 text-center font-sans">
			<div class="text-base-content/60 flex flex-wrap justify-center gap-2 text-xs md:text-base">
				<span>✓ Atendimento humano, sempre.</span>
				<span>✓ Dashboards prontos.</span>
			</div>
		</div>
	</div>
</div>
