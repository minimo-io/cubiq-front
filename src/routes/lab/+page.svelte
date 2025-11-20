<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';
</script>

<Meta title={m.metaLabTitle()} description={m.metaLabDescription()} />

<Header titleLeft={'O'} titleRight={'LABORATÓRIO'} heroContent={''} buttons={false} />

<div class="max-w-fw mx-(--cubiq-app-margin) my-20 md:mx-auto">
	<!-- <h2 class="text-primary font-pixel text-2xl font-bold">O Laboratório.</h2> -->
	<p class="text-lg">
		Os projetos da <span class="font-pixel">Cubiq</span> passam por várias etapas: de Ideação, Prototipagem,
		Experimentação, Lançamento(beta) e Maturidade.
	</p>

	<!-- <h2 class="text-primary font-pixel mt-5 text-2xl font-bold">O IdeaLab.</h2>
	<ul class="mt-2">
		<li class="text-lg">
			<span class="font-pixel text-primary text-lg">AutoCRM</span> - Automação de HelpDesk com IA - Chatbot
			de IA que sincroniza com seu CRM
		</li>
		<li class="text-lg">
			<span class="font-pixel text-primary text-lg">Delibra</span> - Fluxo Integrado de Envíos - Automação,
			rastreio e melhor preço
		</li>
	</ul> -->
</div>
