<script lang="ts">
	interface Commit {
		sha: string;
		repo: string;
		date: string;
		message?: string;
	}

	let { commits = [], monthKey = '' }: { commits: Commit[]; monthKey: string } = $props();

	const daysInMonth = $derived.by(() => {
		const [yearStr, monthStr] = monthKey.split('-');
		return new Date(parseInt(yearStr, 10), parseInt(monthStr, 10), 0).getDate();
	});

	const data = $derived.by(() => {
		const days = Array.from({ length: daysInMonth }, (_, i) => ({
			day: i + 1,
			agent: 0,
			human: 0
		}));

		for (const commit of commits) {
			const d = new Date(commit.date).getDate();
			const entry = days[d - 1];
			if (!entry) continue;
			if (commit.message?.startsWith('AGENT:')) {
				entry.agent++;
			} else {
				entry.human++;
			}
		}

		return days;
	});

	const maxVal = $derived.by(() => {
		const max = Math.max(1, ...data.map((d) => d.agent + d.human));
		if (max <= 5) return 5;
		if (max <= 10) return 10;
		if (max <= 20) return 20;
		return Math.ceil(max / 10) * 10;
	});

	const pad = { top: 12, right: 10, bottom: 22, left: 28 };
	const w = 800;
	const h = 130;
	const chartW = w - pad.left - pad.right;
	const chartH = h - pad.top - pad.bottom;

	const gap = $derived(chartW / data.length);
	const barW = $derived(Math.max(2, Math.min(14, gap * 0.6)));

	function barY(val: number) {
		return pad.top + chartH - (val / maxVal) * chartH;
	}
	function barHeight(val: number) {
		return (val / maxVal) * chartH;
	}

	function segPath(cx: number, yTop: number, height: number, roundTop: boolean) {
		if (height <= 0) return '';
		const x = cx - barW / 2;
		const r = roundTop ? Math.min(3, barW / 2, height) : 0;
		if (r <= 0) {
			return `M${x},${yTop} h${barW} v${height} h${-barW} Z`;
		}
		return `M${x},${yTop + height} L${x},${yTop + r} Q${x},${yTop} ${x + r},${yTop} L${x + barW - r},${yTop} Q${x + barW},${yTop} ${x + barW},${yTop + r} L${x + barW},${yTop + height} Z`;
	}

	const ticks = $derived.by(() => {
		const step = maxVal / 4;
		return [0, step, step * 2, step * 3, maxVal].map((v) => Math.round(v));
	});
</script>

<svg viewBox="0 0 {w} {h}" class="h-auto w-full" role="img" aria-label="Commits per day">
	{#each ticks as tick (tick)}
		<line
			x1={pad.left}
			y1={barY(tick)}
			x2={w - pad.right}
			y2={barY(tick)}
			stroke="currentColor"
			class="text-base-content/10"
			stroke-width="1"
		/>
		<text
			x={pad.left - 6}
			y={barY(tick) + 3}
			text-anchor="end"
			fill="currentColor"
			class="text-base-content/40"
			font-size="9"
		>
			{tick}
		</text>
	{/each}

	{#each data as d, i (d.day)}
		{@const cx = pad.left + i * gap + gap / 2}
		{@const humanH = barHeight(d.human)}
		{@const agentH = barHeight(d.agent)}
		{@const humanY = barY(d.human)}
		{@const agentY = humanY - agentH}
		<g class="transition-opacity hover:opacity-80">
			{#if d.human > 0}
				<path
					d={segPath(cx, humanY, humanH, d.agent === 0)}
					fill="currentColor"
					class="text-base-content/40"
				/>
			{/if}
			{#if d.agent > 0}
				<path d={segPath(cx, agentY, agentH, true)} fill="currentColor" class="text-[#F44018]" />
			{/if}
			<title>Day {d.day}: {d.human} human, {d.agent} agent</title>
		</g>
	{/each}

	{#each data as d, i (d.day)}
		{#if d.day === 1 || d.day % 5 === 0 || d.day === data.length}
			<text
				x={pad.left + i * gap + gap / 2}
				y={h - 6}
				text-anchor="middle"
				fill="currentColor"
				class="text-base-content/40"
				font-size="9"
			>
				{d.day}
			</text>
		{/if}
	{/each}
</svg>
