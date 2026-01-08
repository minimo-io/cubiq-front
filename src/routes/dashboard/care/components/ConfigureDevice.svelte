<script>
	import { m } from '$paraglide/messages';
</script>

<div class="flex flex-col items-start justify-start gap-4">
	<h3 class="text-base-content text-left text-lg font-bold uppercase">
		{m.setupMonitoring()}
	</h3>
	<p class="text-sm">
		{m.setupMonitoringText()}
	</p>

	<h3 class="font-bold">{m.downloadSoftware()}</h3>

	<div class="flex flex-col items-start gap-1">
		<a
			class="text-primary"
			href="https://github.com/cubiq-lat/cubiq-care-monitor/releases/latest/download/cubiq-care-monitor-macos-arm64.dmg"
		>
			MacOS (arm64)
		</a>
		<a
			class="text-primary"
			href="https://github.com/cubiq-lat/cubiq-care-monitor/releases/latest/download/cubiq-care-monitor-windows-x64.exe"
		>
			Windows (x64)
		</a>
		<a
			class="text-primary"
			href="https://github.com/cubiq-lat/cubiq-care-monitor/releases/latest/download/cubiq-care-monitor-linux-amd64.deb"
		>
			Linux (amd64)
		</a>
	</div>
</div>
