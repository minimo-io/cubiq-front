<script>
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { Check } from '@lucide/svelte';
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
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">
						{m.storePricingStarter()}
					</h2>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">{m.storeStarterPrice()}</span>
						<span class="text-base-content/70 text-lg">{m.storePricingPerMonth()}</span>
					</div>

					<!-- Features -->
					<div class="flex-1 space-y-3">
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm font-bold"
								>{m.storeStarterUsers()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeStarterHosting()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeStarterMaintenance()}</span>
						</div>

						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeStarterSupport()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.storeStarterPaymentGateway()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm">
								<!-- <a href={localizeHref('/pay')} class="text-primary hover:underline">Cubiq Pay</a> -->
								{@html m.storeStarterCubiqPay()}
							</span>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6">
						<button class="btn btn-outline btn-md w-full">
							{m.contactSupport()}
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
					{m.storePricingRecommended()}
				</div>

				<div class="card-body p-6">
					<!-- Title -->
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">
						{m.storePricingPro()}
					</h2>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">{m.storeProPrice()}</span>
						<span class="text-base-content/70 text-lg">{m.storePricingPerMonth()}</span>
					</div>

					<!-- Features -->
					<div class="flex flex-col space-y-3">
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm font-bold">
								{m.storeProUsers()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm">
								{m.storeProInfrastructure()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm"
								>{m.storeProSupport()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm"
								>{m.storeProMaintenance()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm">{m.storeProSEO()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm">{m.storeProAI()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm">
								{@html m.storeProPaymentGateways()}
								<!-- <a href={localizeHref('/pay')} class="text-primary hover:underline">Cubiq Pay</a> -->
							</span>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6 md:mt-8">
						<button class="btn btn-primary btn-md w-full font-sans font-bold"
							>{m.contactSupport()}</button
						>
					</div>
				</div>
			</div>

			<!-- Enterprise Plan -->
			<div
				class="card bg-base-100 border-base-300 border-2 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
			>
				<div class="card-body p-6">
					<!-- Title -->
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">
						{m.storePricingEnterprise()}
					</h2>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">{m.storePricingTailorMade()}</span>
						<!-- <span class="text-base-content/70 text-lg">/mês</span> -->
					</div>

					<!-- Features -->
					<div class="flex-1 space-y-3">
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm font-bold"
								>{m.storeEnterpriseUsers()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm"
								>{m.storeEnterpriseArchitecture()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeEnterpriseSupport()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeEnterpriseTeam()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeEnterpriseAI()}</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content text-left font-sans text-sm"
								>{m.storeEnterpriseIntegrations()}</span
							>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">{m.storeEnterpriseMCP()}</span>
						</div>

						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm"
								>{m.storeEnterpriseConsulting()}</span
							>
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
			<div
				class="text-base-content/60 flex flex-wrap items-center justify-center gap-2 text-lg md:text-xl"
			>
				<Check class="h-4.5 text-green-500" />
				<span>{m.storePricingFooter()}</span>
			</div>
		</div>
	</div>
</div>
