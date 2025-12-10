<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
</script>

<Meta title={'Roadmap'} description={''} />

<Header
	titleLeft={m.the()}
	titleRight={'Roadmap'}
	background="rocket"
	heroContent={m.heroContentRoadmap()}
	buttons={false}
/>
<div class="max-w-fw mx-(--cubiq-app-margin) my-20 md:mx-auto">
	<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
		<li>
			<hr />
			<div class="timeline-middle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-5 w-5"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="timeline-start mb-10 space-x-2 md:text-end">
				<time class="font-mono text-sm italic">{m.timelineJan2025()}</time>
				<div class="font-pixel text-xl font-black">{m.timelineJan2025Item1()}</div>
				<div class="font-pixel text-xl font-black">{m.timelineJan2025Item2()}</div>
				<div class="font-pixel text-xl font-black">{m.timelineJan2025Item3()}</div>
			</div>
			<hr />
		</li>
		<li>
			<hr />
			<div class="timeline-middle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-5 w-5"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="timeline-end md:mb-10">
				<time class="font-mono text-sm italic">{m.timelineDec2024()}</time>

				<div class="font-pixel text-xl font-black">{m.timelineDec2024Item1Title()}</div>
				<p class="text-sm">{m.timelineDec2024Item1Desc()}</p>

				<div class="font-pixel text-xl font-black">{m.timelineDec2024Item2Title()}</div>
				<p class="text-sm">{m.timelineDec2024Item2Desc()}</p>

				<div class="font-pixel text-xl font-black">{m.timelineDec2024Item3Title()}</div>
				<p class="text-sm">{m.timelineDec2024Item3Desc()}</p>

				<div class="font-pixel mt-2 text-xl font-black">{m.timelineDec2024Item4Title()}</div>
				<p class="text-sm">{m.timelineDec2024Item4Desc()}</p>
			</div>
			<hr />
		</li>
		<li>
			<hr />
			<div class="timeline-middle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="text-primary h-5 w-5"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="timeline-start mb-10 space-x-2 md:text-end">
				<time class="font-mono text-sm italic">{m.timelineNov2024()}</time>
				<div class="font-pixel text-xl font-black">{m.timelineNov2024Title()}</div>
				<p class="text-sm">{@html m.timelineNov2024Desc()}</p>
			</div>
		</li>
	</ul>
</div>
