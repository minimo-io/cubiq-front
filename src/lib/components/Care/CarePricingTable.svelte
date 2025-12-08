<script>
	import { m } from '$paraglide/messages';
	import { Check } from '@lucide/svelte';
</script>

<div class="relative px-4 pt-4 md:pt-12">
	<div class="mx-auto max-w-7xl">
		<!-- Title Section -->
		<!-- <div class="mb-8 text-center">
			<h1 class="text-base-content mb-2 font-sans text-3xl font-black md:text-4xl">
				{m.carePricingTitle()}
			</h1>
			<p class="text-base-content/70 text-lg">
				{m.carePricingSubtitle()}
			</p>
		</div> -->

		<!-- Pricing Cards Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<!-- Essential Plan -->
			<div
				class="card bg-base-100 border-base-300 border-2 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
			>
				<div class="card-body p-6">
					<!-- Title -->
					<h2 class="card-title mb-2 justify-center font-sans text-2xl font-black">
						{m.careEssentialTitle()}
					</h2>
					<p class="text-base-content/70 mb-4 text-center text-sm">
						{m.careEssentialSubtitle()}
					</p>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">R$ 69,90</span>
						<span class="text-base-content/70 text-lg">{m.carePricingPerAsset()}</span>
					</div>

					<!-- Features -->
					<div class="flex-1 space-y-3">
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialMonitoring()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialPredictive()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialSupport()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialITAM()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialMaintenance()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialBackup()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careEssentialDashboard()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-base-content/60 font-sans text-sm">
								<strong>{m.careExtraSupportCost()}</strong> R$ 150,00
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

			<!-- Complete Plan (Featured) -->
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
						{m.careCompleteTitle()}
					</h2>
					<p class="text-base-content/70 mb-4 text-center text-sm">
						{m.careCompleteSubtitle()}
					</p>

					<!-- Price -->
					<div class="mt-0 mb-5 text-center">
						<span class="text-base-content text-4xl font-bold">R$ 109,90</span>
						<span class="text-base-content/70 text-lg">{m.carePricingPerAsset()}</span>
					</div>

					<!-- Features -->
					<div class="flex flex-col space-y-3">
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompleteProductivity()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompletePredictive()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompleteSupport()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompleteITAM()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompleteMaintenance()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompleteBackup()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<Check class="h-4.5 text-green-500" />
							<span class="text-base-content font-sans text-sm">
								{m.careCompleteDashboard()}
							</span>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-base-content/60 font-sans text-sm">
								<strong>{m.careExtraSupportCost()}</strong> R$ 90,00
							</span>
						</div>
					</div>

					<!-- Button -->
					<div class="mt-6">
						<button class="btn btn-primary btn-md w-full font-sans font-bold">
							{m.contactSupport()}
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
				<span>{m.carePricingFooter()}</span>
			</div>
		</div>
	</div>
</div>
