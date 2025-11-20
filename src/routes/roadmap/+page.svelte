<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
</script>

<Meta title={'Roadmap'} description={''} />

<Header
	titleLeft={'O'}
	titleRight={'Roadmap'}
	background="rocket"
	heroContent={m.heroContentRoadmap()}
	buttons={false}
/>

<div class="max-w-fw mx-(--cubiq-app-margin) my-20 md:mx-auto">
	<!-- <h2 class="text-primary font-pixel text-2xl font-bold">O Laboratório.</h2> -->

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
			<div class="timeline-end md:mb-10">
				<time class="font-mono text-sm italic">Novembro, 2025</time>
				<div class="font-pixel mt-2 text-xl font-black">API: Auth & Voting</div>
				<p class="text-sm">
					Serviço de Autenticação e Registro de Votos otimizado para alto desempenho otimizado com
					proba de persistência via SQLite (WAL mode). Desenvolvida inicialmente para Betizen.org e
					generalizada como produto API de User Management essencial e APIs de votação de baixa
					latência.
				</p>
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
				<time class="font-mono text-sm italic">Outubro, 2025</time>
				<div class="font-pixel text-xl font-black">Lançamento da Cubiq</div>
				<p class="text-sm">
					Cubiq iça as velas com o objetivo de oferecer soluções tecnológicas avançadas para PMEs
					como foco em <a class="text-primary hover:underline" href="https://www.cubiq.lat/#more"
						>protocolos abertos e <i>permissionless</i></a
					>. Primeiro Figma, Front-end e APIs em infraestrutura <i>self-hosted</i>
					via Cloudflare Argo/Tunnels, com uma documentação básica em Swagger/OpenAPI. Artigo apresentando
					o projecto
					<a
						class="text-primary hover:underline"
						href="https://www.cibiq.lat/blog/apresentando-a-plataforma-cubiq"
						>Apresentando a Plataforma Cubiq</a
					> é publicado no blog.
				</p>
			</div>
		</li>
	</ul>
</div>
