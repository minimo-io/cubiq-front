<script lang="ts">
	import { m } from '$paraglide/messages';
	import { Check, Info } from '@lucide/svelte';

	let infoDialog = $state<HTMLDialogElement>();
	let modalContent = $state({ title: '', description: '' });

	function openInfoModal(title: string, description: string) {
		modalContent = { title, description };
		infoDialog?.showModal();
	}

	// Define your info content here
	const infoContent = {
		lifecycle: {
			description: m.careLifecycleManagementDescription()
		},
		backup: {
			description: m.careBackupRecoveryDescription()
		},
		monitoring: {
			description: m.careMonitoringDashboardsDescription()
		},
		emergency: {
			description: m.careEmergencyMaintenanceDescription()
		},
		extraSupport: {
			description: m.careExtraRemoteSupportHourCostDescription()
		}
	};
</script>

<div class="relative pt-4 font-sans md:px-4 md:pt-8">
	<div class="mx-auto max-w-5xl">
		<!-- Mobile: Cards View -->
		<div class="space-y-6 md:hidden">
			<!-- Essencial Card -->
			<div class="card bg-base-100 border-primary/30 border-2 shadow-lg">
				<div class="card-body p-4">
					<div class="mb-3 flex items-center gap-2">
						<div class="bg-primary h-3 w-3 rounded-full"></div>
						<h3 class="font-sans text-lg font-bold">{m.careEssentialPlanName()}</h3>
					</div>

					<div class="space-y-3 text-sm">
						<div>
							<p class="text-base-content/80">{m.careEssentialFocus()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">{m.careMonthlyPricePerAsset()}</p>
							<p class="text-primary text-2xl font-bold">{m.carePricingEssentiaPrice()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.carePredictiveMonitoring()}
							</p>
							<p class="text-base-content font-bold">{m.included()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.careRemotePreventiveMaintenance()}
							</p>
							<p class="text-base-content font-bold">{m.careOncePerMonth()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.carePhysicalMaintenanceCleaning()}
							</p>
							<p class="text-base-content font-bold">{m.careEvery6Months()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.careRemoteSupportHours()}
							</p>
							<p class="text-base-content font-bold">{m.careOneHour()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">
									{m.careLifecycleManagement()}
								</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careLifecycleManagement(), infoContent.lifecycle.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.included()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.careScheduledPreventiveMaintenance()}
							</p>
							<p class="text-base-content font-bold">{m.careQuarterly()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">
									{m.careBackupRecovery()}
								</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careBackupRecovery(), infoContent.backup.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careOptional()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">{m.careMonitoringDashboards()}</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careMonitoringDashboards(), infoContent.monitoring.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careBasicAccess()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">{m.careEmergencyMaintenance()}</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careEmergencyMaintenance(), infoContent.emergency.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careEmergencyEssentialPrice()}</p>
						</div>
						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">{m.careExtraSupportHourCost()}</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(
											m.careExtraSupportHourCost(),
											infoContent.extraSupport.description
										)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careExtraHourEssentialSupportCost()}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Completo Card -->
			<div class="card bg-base-100 border-success/30 border-2 shadow-lg">
				<div class="card-body p-4">
					<div class="mb-3 flex items-center gap-2">
						<div class="bg-success h-3 w-3 rounded-full"></div>
						<h3 class="font-sans text-lg font-bold">{m.careCompletePlanName()}</h3>
					</div>

					<div class="space-y-3 text-sm">
						<div>
							<p class="text-base-content/80">
								{m.careCompleteFocus()}
							</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">{m.careMonthlyPricePerAsset()}</p>
							<p class="text-success text-2xl font-bold">{m.carePricingCompletePrice()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.careRemotePreventiveMaintenance()}
							</p>
							<p class="text-base-content font-bold">{m.careEvery15Days()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.carePhysicalMaintenanceCleaning()}
							</p>
							<p class="text-base-content font-bold">{m.careEvery3Months()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.carePredictiveMonitoring()}
							</p>
							<p class="text-base-content font-bold">{m.included()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.careRemoteSupportHours()}
							</p>
							<p class="text-base-content font-bold">{m.careThreeHours()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">
									{m.careLifecycleManagement()}
								</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careLifecycleManagement(), infoContent.lifecycle.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.included()}</p>
						</div>

						<div>
							<p class="text-base-content/60 mb-1 font-semibold">
								{m.careScheduledPreventiveMaintenance()}
							</p>
							<p class="text-base-content font-bold">{m.careMonthly()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">
									{m.careBackupRecovery()}
								</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careBackupRecovery(), infoContent.backup.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careIncludedUpTo150GB()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">{m.careMonitoringDashboards()}</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careMonitoringDashboards(), infoContent.monitoring.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careCompleteAccess()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">{m.careEmergencyMaintenance()}</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careEmergencyMaintenance(), infoContent.emergency.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<p class="text-base-content font-bold">{m.careEmergencyCompletePrice()}</p>
						</div>

						<div>
							<div class="mb-1 flex items-center gap-1">
								<p class="text-base-content/60 font-semibold">{m.careExtraSupportHourCost()}</p>
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(
											m.careExtraSupportHourCost(),
											infoContent.extraSupport.description
										)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
							<!-- <p class="text-base-content/60 mb-1 font-semibold">{m.careExtraSupportHourCost()}</p> -->
							<p class="text-base-content font-bold">{m.careExtraHourCompleteSupportCost()}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Desktop: Table View -->
		<div
			class="border-base-300 bg-base-100 hidden overflow-x-auto rounded-lg border-2 shadow-xl md:block"
		>
			<table class="table w-full">
				<thead>
					<tr class="border-base-300 border-b-2">
						<th class="text-base-content text-left font-sans text-base font-bold">
							{m.careCharacteristic()}
						</th>
						<th class=" text-center">
							<div class="flex flex-col items-center gap-1 py-2">
								<div class="flex items-center gap-2">
									<div class="bg-primary h-3 w-3 rounded-full"></div>
									<span class="text-base-content font-sans text-base font-bold">
										{m.careEssentialPlanName()}
									</span>
								</div>
							</div>
						</th>
						<th class="text-center">
							<div class="flex flex-col items-center gap-1 py-2">
								<div class="flex items-center gap-2">
									<div class="bg-success h-3 w-3 rounded-full"></div>
									<span class="text-base-content font-sans text-base font-bold">
										{m.careCompletePlanName()}
									</span>
								</div>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">&nbsp;</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">
								{m.careEssentialFocus()}
							</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">
								{m.careCompleteFocus()}
							</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							{m.careMonthlyPricePerAsset()}
						</td>
						<td class="text-center">
							<span class="text-primary text-xl font-bold">{m.carePricingEssentiaPrice()}</span>
						</td>
						<td class="text-center">
							<span class="text-success text-xl font-bold">{m.carePricingCompletePrice()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							{m.carePredictiveMonitoring()}
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.included()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.included()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							{m.careRemoteSupportHoursPerAsset()}
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careOneHour()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careThreeHours()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							<div class="flex items-center gap-1">
								{m.careLifecycleManagement()}
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careLifecycleManagement(), infoContent.lifecycle.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.included()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.included()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							{m.careRemotePreventiveMaintenance()}
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careOncePerMonth()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careEvery15Days()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							{@html m.carePhysicalMaintenanceCleaning()}
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careEvery6Months()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careEvery3Months()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							<div class="flex items-center gap-1">
								{m.careBackupRecovery()}
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careBackupRecovery(), infoContent.backup.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careOptional()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careIncludedUpTo150GB()}</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							<div class="flex items-center gap-1">
								{m.careMonitoringDashboards()}
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careMonitoringDashboards(), infoContent.monitoring.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">{m.careBasicAccess()}</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm">
								{m.careCompleteAccess()}
							</span>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<td class="text-base-content font-sans text-sm font-semibold">
							<div class="flex items-center gap-1">
								{@html m.careEmergencyMaintenance()}
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(m.careEmergencyMaintenance(), infoContent.emergency.description)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm font-semibold"
								>{m.careEmergencyEssentialPrice()}</span
							>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm font-semibold"
								>{m.careEmergencyCompletePrice()}</span
							>
						</td>
					</tr>

					<tr class="border-base-300 hover:bg-base-200/50 border-b">
						<!-- <td class="text-base-content font-sans text-sm font-semibold">
							{m.careExtraRemoteSupportHourCost()}
						</td> -->
						<td class="text-base-content font-sans text-sm font-semibold">
							<div class="flex items-center gap-1">
								{m.careExtraRemoteSupportHourCost()}
								<button
									class="btn btn-ghost btn-xs btn-circle"
									onclick={() =>
										openInfoModal(
											m.careExtraRemoteSupportHourCost(),
											infoContent.extraSupport.description
										)}
								>
									<Info class="h-4 w-4" />
								</button>
							</div>
						</td>

						<td class="text-center">
							<span class="text-base-content/80 text-sm font-semibold">
								{m.careExtraHourEssentialSupportCost()}
							</span>
						</td>
						<td class="text-center">
							<span class="text-base-content/80 text-sm font-semibold">
								{m.careExtraHourCompleteSupportCost()}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<!-- Single Reusable Modal -->
<dialog bind:this={infoDialog} class="modal">
	<div class="modal-box border-base-300 border">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
		</form>
		<div class="flex flex-col py-3 text-left font-sans">
			<h3 class="mb-2 text-xl font-bold">{@html modalContent.title}</h3>
			<p class="text-base-content/80">{modalContent.description}</p>
		</div>
	</div>
</dialog>
