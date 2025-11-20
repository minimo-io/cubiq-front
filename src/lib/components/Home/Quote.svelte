<script>
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
</script>

<div class="relative pt-0 pb-5">
	<Hr />

	<section class="mx-auto max-w-full px-6 md:max-w-[65%] md:px-12 lg:px-16">
		<blockquote class="mt-10 mb-8 md:mt-10 md:mb-5">
			<div class="relative mb-2">
				<!-- Quote start -->
				<span class="absolute -top-7 -left-3 md:-top-1 md:-left-12">
					<img src="/quote-start.svg" alt="Quote start" />
				</span>
				<!-- Content -->
				<p class="font-sans text-[18px] font-light tracking-wide text-white md:text-[22px]">
					{@html m.quote()}
				</p>
				<!-- Quote end
				<span class="absolute -right-5 -bottom-1"><img src="/quote-end.svg" alt="Quote end" /></span
				> -->
			</div>
			<cite class="text-base-content text-left text-sm"
				>Fonte: <a
					class="text-primary relative underline hover:opacity-50"
					href="https://www.perplexity.ai/"
					target="_blank"
					rel="nofollow noopener">Perplexity</a
				></cite
			>
		</blockquote>
	</section>
</div>
