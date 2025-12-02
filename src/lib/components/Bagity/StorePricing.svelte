<script>
	import { m } from '$paraglide/messages';
</script>

<!-- Diferentials -->
<!-- <div class="border-base-200 mb-4 border-b">
	<section class="max-w-fw mx-auto">
		<div class="border-base-200 mt-5 mb-4 flex justify-center">
			<div
				class="bg-primary animate__animated animate__flash animate__infinite relative left-1 mr-4 block h-[20px] w-[5px] md:-top-1 md:h-[30px] md:w-[8px]"
			></div>
			<h2 class="font-pixel text-2xl tracking-wider md:text-3xl">{'Escolha seu plano'}</h2>
		</div>
	</section>
</div> -->

<div class="relative -top-5 px-4 pt-4 md:-top-14 md:pt-12">
	<div class="mx-auto max-w-6xl">
		<!-- <div class="flex justify-center">
			<TitleSection titleLeft="Escolha seu" titleRight="plano" forceFlexRow={true} />
		</div> -->

		<!-- Header -->
		<!-- <div class="mb-12 hidden text-center md:block">
			<h1 class="text-base-content mb-4 text-3xl font-bold md:text-4xl">Escolha seu plano</h1>
		</div> -->

		<!-- Pricing Cards -->
		<div class="space-y-6 md:space-y-0">
			<!-- Basic Plan -->
			<div
				class="card bg-base-100 border-base-300 hidden border-2 shadow-xl transition-all duration-300 hover:shadow-2xl md:hover:-translate-y-1"
			>
				<div class="card-body md:card-side p-6 md:p-8">
					<!-- Plan Info -->
					<div class="flex items-center text-center md:w-[25%] md:text-left">
						<!-- <h2
							class="card-title mb-2 justify-center font-sans text-2xl font-black md:justify-start"
						>
							Basic
						</h2> -->
						<div class="mb-6 md:mb-0">
							<span class="text-base-content text-3xl font-bold md:text-4xl">Gratuito</span>
							<!-- <span class="text-base-content/70 text-lg">/mes</span> -->
						</div>
					</div>

					<!-- Features -->
					<div class="md:w-1/2 md:pr-8">
						<div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
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
								<span class="text-base-content font-sans text-sm md:text-base">Até 20 produtos</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Ideal para testes</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Acesso a cursos gratuitos</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Suporte por email</span
								>
							</div>
							<!-- Grayed features -->
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
								<span class="text-base-content/40 font-sans text-sm line-through md:text-base"
									>Domínio próprio</span
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
								<span class="text-base-content/40 font-sans text-sm line-through md:text-base"
									>Até 20 produtos</span
								>
							</div>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6 flex flex-1 items-center justify-center md:mt-0 md:justify-end">
						<button class="btn btn-outline btn-md md:btn-lg w-full md:w-auto md:px-5"
							>{m.contactSupport()}</button
						>
					</div>
				</div>
			</div>

			<!-- Premium Plan -->
			<div
				class="card bg-base-100 border-primary relative z-50 border-2 shadow-xl transition-all duration-300 hover:shadow-2xl md:scale-105 md:hover:-translate-y-1"
			>
				<div
					class="badge badge-primary badge-lg absolute -top-3 left-1/2 -translate-x-1/2 transform px-4 py-2 font-sans font-bold md:left-6 md:translate-x-0"
				>
					E-Commerce
				</div>
				<div class="card-body md:card-side p-6 md:p-8">
					<!-- Plan Info -->
					<div class="text-center md:w-[25%] md:text-left">
						<!-- <h2
							class="card-title mb-2 justify-center font-sans text-2xl font-black md:justify-start"
						>
							Sob medida
						</h2> -->
						<div
							class="my-5 flex h-full items-center justify-center md:my-2 md:mb-0 md:justify-start"
						>
							<span class="text-base-content text-4xl font-bold md:text-[38px]"> Sob medida </span>
							<!-- <span class="text-base-content/70 text-lg">/mês</span> -->
						</div>
					</div>

					<!-- Features -->
					<div class="md:w-1/2 md:pr-8">
						<div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Cuidamos do design</span
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
								<span class="text-base-content text-left font-sans text-sm md:text-base"
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
								<span class="text-base-content text-left font-sans text-sm md:text-base"
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
								<span class="text-base-content text-left font-sans text-sm md:text-base"
									>ERPs & APIs sob medida</span
								>
							</div>
							<!-- Grayed features -->
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
								<span class="text-base-content text-left font-sans text-sm md:text-base"
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
								<span class="text-base-content text-left font-sans text-sm md:text-base"
									>Sem comissões por venda, custo fixo previsível</span
								>
							</div>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6 flex flex-1 items-center justify-center md:mt-0 md:w-1/6 md:justify-end">
						<button class="btn btn-primary btn-md md:btn-lg w-full md:w-auto md:px-5"
							>{m.requestQuotation()}</button
						>
					</div>
				</div>
			</div>

			<!-- Enterprise Plan -->
			<div
				class="card bg-base-100 border-base-300 relative hidden border-2 shadow-xl transition-all duration-300 hover:shadow-2xl md:hover:-translate-y-1"
			>
				<!-- <div
					class="badge badge-secondary badge-lg absolute -top-3 left-1/2 -translate-x-1/2 transform px-4 py-2 md:left-6 md:translate-x-0"
				>
					Best Value
				</div> -->
				<div class="card-body md:card-side p-6 md:p-8">
					<!-- Plan Info -->
					<div class="text-center md:w-1/3 md:text-left">
						<h2
							class="card-title mb-2 justify-center font-sans text-2xl font-black md:justify-start"
						>
							Enterprise
						</h2>
						<div class="mb-6 md:mb-0">
							<span class="text-base-content text-4xl font-bold md:text-5xl">R$199</span>
							<span class="text-base-content/70 text-lg">/mês</span>
						</div>
					</div>

					<!-- Features -->
					<div class="md:w-1/2 md:pr-8">
						<div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Manutenção Preditiva com IA</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Custom brand templates</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Múltiplos usuários e acessos</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Premium AI enhancements</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Seamless cloud integration</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Real-time collaboration tools</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Priority support</span
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
								<span class="text-base-content font-sans text-sm md:text-base"
									>Custom integrations</span
								>
							</div>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6 flex flex-1 items-center justify-center md:mt-0 md:w-1/6 md:justify-end">
						<button class="btn btn-outline btn-md md:btn-lg w-full md:w-auto md:px-8">
							{m.requestQuotation()}
						</button>
					</div>
				</div>
			</div>

			<!-- Footer -->
			<div class="mt-6 text-center font-sans md:mt-10">
				<!-- <p class="text-base-content/70 mb-4 md:text-xl">
					✅ All plans include a 14-day free trial. No credit card required.
				</p> -->
				<div class="text-base-content/60 flex justify-center gap-6 text-sm">
					<!-- <span>✓ Cancel anytime</span> -->
					<!-- <span>✓ 30-day money back guarantee</span> -->
					<span>✓ Suporte ao cliente humanizado</span>
				</div>
			</div>
		</div>
	</div>
</div>
