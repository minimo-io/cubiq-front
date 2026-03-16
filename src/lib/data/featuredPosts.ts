import { Server, Terminal, BrainCircuit } from '@lucide/svelte';

export const featuredPosts = {
	en: [
		{
			title: "Tailscale — Our Secret Weapon for Clean, Secure Infra at Cubiq.lat",
			image: "",
			excerpt: "We replaced VPN headaches with Tailscale’s Zero Trust magic. Servers stay invisible to the world, devs stay productive, and life gets noticeably better.",
			content: "<h1>Tailscale — Our Secret Weapon for Clean, Secure Infra at Cubiq.lat</h1>\n<p>Let’s not sugarcoat it: the classic ways of giving developers access to servers are a special kind of torture.</p>\n<p>Open SSH to the internet? Congratulations, you now host the world’s most popular brute-force target.<br>Roll a traditional VPN? Prepare for endless onboarding sessions, NAT traversal prayers, and the inevitable “it connects but nothing works” ticket.</p>\n<p>At <strong>Cubiq.lat</strong> we decided we’d rather spend our energy building than babysitting network configs. So we brought in <strong>Tailscale</strong> — and it quietly changed everything.</p>\n<p>Our servers now live in a private, encrypted mesh that’s completely invisible from the outside. Authorized team members connect from anywhere (Montevideo cafés, random co-working spaces, actual beaches) as if everything were sitting on localhost. No drama, just smooth.</p>\n<h2>Why We Actually Like Tailscale (and Keep It Around)</h2>\n<p>We were chasing three non-negotiables: real security, zero onboarding friction, and the freedom to ship fast without firewall begging rituals.</p>\n<p>Tailscale checks every box while making legacy solutions look like museum pieces.</p>\n<h3>Security That Doesn’t Require Constant Vigilance</h3>\n<p>Publicly exposed ports are how companies end up in headlines we’d rather not star in.</p>\n<p>Tailscale builds a proper <strong>Zero Trust</strong> overlay (WireGuard underneath, naturally). Every connection is end-to-end encrypted and gated by <em>identity</em> — not IP addresses that can be spoofed, shared, or coffee-shop-rotated.</p>\n<p>No public endpoints. No bastion hosts collecting dust and CVEs. Just “you’re in the tailnet → here’s your server.” Attack surface shrinks dramatically. The 2026 peer-relay and workload-identity features only make it cleaner for pipelines and edge workloads.</p>\n<h3>Developer Happiness We Didn’t Know Was Possible</h3>\n<p>Remember spending half a day walking a new teammate through VPN profiles, config files, and why their ISP hates them?</p>\n<p>We don’t do that anymore.</p>\n<p>One binary, one login (Google, GitHub, whatever works), join the tailnet — and suddenly friendly hostnames just work: <code>db-primary</code>, <code>staging-api</code>, <code>rabbitmq-nightmare</code>. No VPN toggle. No split-tunnel roulette. No firewall-rule diplomacy.</p>\n<p>NAT traversal is automatic. Multi-cloud is trivial. Dev on spotty 4G in the countryside? Still works.</p>\n<p>Onboarding went from “please survive this afternoon” to “welcome, you’re already connected.” People ship faster because they’re not fighting the network.</p>\n<h3>Control That Actually Stays Manageable</h3>\n<p>Access rules live as code (GitOps fans, rejoice). Need to limit the intern to staging only? One policy. Someone leaves the company? Revoke in seconds from the dashboard.</p>\n<p>Centralized audit logs, role-based permissions, and a single pane of glass mean we actually know who touched what — no more mystery SSH sessions.</p>\n<h2>The Part Where We Brag (Because It’s Earned)</h2>\n<p>Tailscale let us:</p>\n<ul>\n<li>Practically eliminate our public attack surface  </li>\n<li>Turn developer connectivity into a non-issue  </li>\n<li>Get enterprise-grade control without enterprise-grade bureaucracy</li>\n</ul>\n<p>In a sea of “secure because it’s complicated” tools, Tailscale stands out by being secure <em>and</em> simple. We’re not sponsored — we’re just fans of anything that stops wasting our time.</p>\n<p>If your infra still feels like it’s running on 2010 networking logic, give Tailscale a spin. Join the tailnet, watch the nonsense disappear, and get back to building.</p>\n<p>Got questions? Ping us — we love this topic way too much.</p>\n<p>Stay sharp, stay invisible.<br>— The Cubiq.lat crew</p>\n",
			date: "March 12",
			slug: "/en/blog/tailscale-for-infraestructure-managment",
			isMain: true,
			icon: Server,
			authors: [
				{
					fullName: "Grok",
					avatar: "/grok-logo.png"
				}
			]
		},
		{
			title: "Headless Authentication and Voting using Cubiq’s APIs",
			image: "",
			excerpt: "Our Betizen project just got re-written and relaunched, aiming to create a fairness community for iGaming, Forex, and Binary listings, and we used our Users/Voting API to build it.",
			content: "<p>En breve...</p>\n",
			date: "December 4",
			slug: "/en/blog/auth-and-voting-using-cubiq-apis",
			isMain: false,
			icon: Terminal,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				}
			]
		},
		{
			title: "Transformers.js: How We Used Client-Side Inference to Make Our E-Commerce Smarter",
			image: "",
			excerpt: "Soon...",
			content: "<p>Soon...</p>\n",
			date: "September 5",
			slug: "/en/blog/transformers-js-ecommerce-experiment",
			isMain: false,
			icon: BrainCircuit,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		}
	],
	es: [
		{
			title: "Tailscale — Nuestra arma secreta para una infraestructura limpia y segura en Cubiq.lat",
			image: "",
			excerpt: "Cambiamos los dolores de cabeza de las VPN por la magia Zero Trust de Tailscale. Los servidores quedan invisibles al mundo, los devs siguen productivos y la vida mejora notablemente.",
			content: "<h1>Tailscale — Nuestra arma secreta para una infraestructura limpia y segura en Cubiq.lat</h1>\n<p>No nos andemos con rodeos: las formas clásicas de dar acceso a los desarrolladores a los servidores son una tortura especial.</p>\n<p>¿Abrir SSH a internet? Felicitaciones, ahora alojas el objetivo de fuerza bruta más popular del mundo.<br>¿Montar una VPN tradicional? Prepárate para sesiones eternas de onboarding, plegarias por traversal de NAT y el inevitable ticket de “se conecta pero no funciona nada”.</p>\n<p>En <strong>Cubiq.lat</strong> decidimos que preferimos gastar nuestra energía construyendo en lugar de cuidar configuraciones de red. Así que trajimos a <strong>Tailscale</strong>… y silenciosamente cambió todo.</p>\n<p>Nuestros servidores ahora viven en una malla privada y encriptada que es completamente invisible desde afuera. Los miembros autorizados del equipo se conectan desde cualquier lugar (cafés de Montevideo, espacios de coworking random, playas reales) como si todo estuviera en localhost. Sin dramas, solo fluidez.</p>\n<h2>Por qué realmente nos gusta Tailscale (y lo mantenemos)</h2>\n<p>Buscábamos tres cosas irrenunciables: seguridad real, cero fricción en el onboarding y libertad para entregar rápido sin rituales de pedir reglas de firewall.</p>\n<p>Tailscale cumple con las tres mientras hace que las soluciones legacy parezcan piezas de museo.</p>\n<h3>Seguridad que no requiere vigilancia constante</h3>\n<p>Los puertos expuestos públicamente son la forma en que las empresas terminan en titulares que preferimos evitar.</p>\n<p>Tailscale construye una superposición <strong>Zero Trust</strong> propiamente dicha (con WireGuard debajo, naturalmente). Cada conexión está encriptada de extremo a extremo y controlada por <em>identidad</em> —no por direcciones IP que se pueden falsificar, compartir o rotar en un café.</p>\n<p>Sin endpoints públicos. Sin hosts bastión acumulando polvo y vulnerabilidades. Solo “estás en el tailnet → aquí tienes tu servidor”. La superficie de ataque se reduce drásticamente. Las funciones de 2026 como peer-relay y workload identity lo hacen aún más limpio para pipelines y cargas de trabajo en el edge.</p>\n<h3>Felicidad para desarrolladores que ni sabíamos que era posible</h3>\n<p>¿Te acordás de pasar medio día explicándole a un nuevo compañero perfiles de VPN, archivos de configuración y por qué su ISP lo odia?</p>\n<p>Ya no hacemos eso.</p>\n<p>Un solo binario, un solo login (Google, GitHub, lo que funcione), unirse al tailnet… y de repente los nombres amigables simplemente funcionan: <code>db-primary</code>, <code>staging-api</code>, <code>rabbitmq-nightmare</code>. Sin toggle de VPN. Sin ruleta de split-tunnel. Sin diplomacia de reglas de firewall.</p>\n<p>El traversal de NAT es automático. Multi-cloud es trivial. ¿Dev en 4G irregular en el campo? Sigue funcionando.</p>\n<p>El onboarding pasó de “por favor sobreviví esta tarde” a “bienvenido, ya estás conectado”. La gente entrega más rápido porque no está peleando con la red.</p>\n<h3>Control que realmente se mantiene manejable</h3>\n<p>Las reglas de acceso viven como código (fans de GitOps, regocíjense). ¿Necesitás limitar al pasante solo a staging? Una política. ¿Alguien deja la empresa? Revocás en segundos desde el dashboard.</p>\n<p>Logs de auditoría centralizados, permisos basados en roles y un único panel de vidrio significan que realmente sabemos quién tocó qué… sin más sesiones SSH misteriosas.</p>\n<h2>La parte donde nos jactamos (porque nos lo ganamos)</h2>\n<p>Tailscale nos permitió:</p>\n<ul>\n<li>Eliminar prácticamente nuestra superficie de ataque pública  </li>\n<li>Convertir la conectividad de desarrolladores en algo que no es un problema  </li>\n<li>Obtener control de nivel enterprise sin la burocracia de nivel enterprise</li>\n</ul>\n<p>En un mar de herramientas “seguras porque son complicadas”, Tailscale destaca por ser seguro <em>y</em> simple. No estamos patrocinados —solo somos fans de todo lo que deja de hacernos perder tiempo.</p>\n<p>Si tu infraestructura todavía se siente como si estuviera corriendo con lógica de red de 2010, probá Tailscale. Unite al tailnet, mirá cómo desaparece el sinsentido y volvé a construir.</p>\n<p>¿Preguntas? Escribinos —nos encanta demasiado este tema.</p>\n<p>Mantente atento, mantente invisible.<br>— El equipo de Cubiq.lat</p>\n",
			date: "12 de marzo",
			slug: "/es/blog/tailscale-for-infraestructure-managment",
			isMain: true,
			icon: Server,
			authors: [
				{
					fullName: "Grok",
					avatar: "/grok-logo.png"
				}
			]
		},
		{
			title: "Autenticación y Votación Headless usando APIs de Cubiq",
			image: "",
			excerpt: "Nuestro proyecto Betizen acaba de ser reescrito y relanzado, con el objetivo de crear una comunidad de transparencia para listados de iGaming, Forex y Binarias, y utilizamos nuestra API de Usuarios/Votación para construirlo.",
			content: "<p>Soon.</p>\n",
			date: "4 de diciembre",
			slug: "/es/blog/autenticacion-y-votacion-usando-apis-de-cubiq",
			isMain: false,
			icon: Terminal,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				}
			]
		},
		{
			title: "Transformers.js: Inferencia del lado del cliente para hacer nuestro e-commerce más inteligente",
			image: "",
			excerpt: "En breve...",
			content: "<p>En breve...</p>\n",
			date: "5 de septiembre",
			slug: "/es/blog/transformers-js-experimento-ecommerce",
			isMain: false,
			icon: BrainCircuit,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		}
	],
	pt: [
		{
			title: "Tailscale — Nossa arma secreta para uma infra limpa e segura na Cubiq.lat",
			image: "",
			excerpt: "Trocamos as dores de cabeça das VPNs pela mágica Zero Trust do Tailscale. Servidores ficam invisíveis para o mundo, devs seguem produtivos e a vida melhora bastante.",
			content: "<h1>Tailscale — Nossa arma secreta para uma infra limpa e segura na Cubiq.lat</h1>\n<p>Sem rodeios: as formas clássicas de dar acesso aos desenvolvedores aos servidores são uma tortura especial.</p>\n<p>Abrir SSH para a internet? Parabéns, agora você hospeda o alvo de força bruta mais popular do mundo.<br>Montar uma VPN tradicional? Prepare-se para sessões eternas de onboarding, rezas por NAT traversal e o inevitável ticket “conecta mas não funciona nada”.</p>\n<p>Na <strong>Cubiq.lat</strong> decidimos que preferimos gastar nossa energia construindo do que cuidando de configs de rede. Então trouxemos o <strong>Tailscale</strong>… e ele mudou tudo silenciosamente.</p>\n<p>Nossos servidores agora vivem em uma malha privada e criptografada que é completamente invisível do lado de fora. Os membros autorizados do time se conectam de qualquer lugar (cafés em Montevidéu, coworkings aleatórios, praias de verdade) como se tudo estivesse rodando em localhost. Sem drama, só fluidez.</p>\n<h2>Por que a gente realmente gosta do Tailscale (e continua usando)</h2>\n<p>Estávamos atrás de três coisas inegociáveis: segurança de verdade, zero fricção no onboarding e liberdade para entregar rápido sem rituais de pedir regras de firewall.</p>\n<p>O Tailscale entrega as três enquanto faz as soluções legadas parecerem relíquias de museu.</p>\n<h3>Segurança que não exige vigilância constante</h3>\n<p>Portas expostas publicamente são o caminho para as empresas acabarem em manchetes que preferimos evitar.</p>\n<p>O Tailscale constrói uma sobreposição <strong>Zero Trust</strong> de verdade (com WireGuard por baixo, claro). Toda conexão é criptografada ponta a ponta e controlada por <em>identidade</em> — não por IPs que podem ser falsificados, compartilhados ou trocados num café.</p>\n<p>Sem endpoints públicos. Sem bastions acumulando poeira e CVEs. Só “você está no tailnet → aqui está seu servidor”. A superfície de ataque encolhe drasticamente. As features de 2026 como peer-relay e workload identity deixam tudo ainda mais limpo para pipelines e workloads na borda.</p>\n<h3>Felicidade para devs que nem sabíamos que era possível</h3>\n<p>Lembra de passar meio dia explicando pra um novo colega perfis de VPN, arquivos de config e por que o ISP dele odeia ele?</p>\n<p>A gente não faz mais isso.</p>\n<p>Um único binário, um único login (Google, GitHub, o que funcionar), entrar no tailnet… e de repente os nomes amigáveis simplesmente funcionam: <code>db-primary</code>, <code>staging-api</code>, <code>rabbitmq-nightmare</code>. Sem toggle de VPN. Sem roleta de split-tunnel. Sem diplomacia de regras de firewall.</p>\n<p>NAT traversal é automático. Multi-cloud é trivial. Dev no 4G ruim no interior? Continua funcionando.</p>\n<p>O onboarding passou de “por favor sobreviva essa tarde” para “bem-vindo, você já está conectado”. O pessoal entrega mais rápido porque não está brigando com a rede.</p>\n<h3>Controle que realmente continua gerenciável</h3>\n<p>As regras de acesso vivem como código (amantes de GitOps, alegrem-se). Precisa limitar o estagiário só ao staging? Uma policy. Alguém sai da empresa? Revoga em segundos no dashboard.</p>\n<p>Logs de auditoria centralizados, permissões baseadas em papéis e um único painel de vidro significam que a gente realmente sabe quem tocou em quê… sem mais sessões SSH misteriosas.</p>\n<h2>A parte em que a gente se gaba (porque merecemos)</h2>\n<p>O Tailscale nos permitiu:</p>\n<ul>\n<li>Eliminar praticamente nossa superfície de ataque pública  </li>\n<li>Transformar a conectividade dos devs em algo que não é problema  </li>\n<li>Conseguir controle nível enterprise sem a burocracia nível enterprise</li>\n</ul>\n<p>Num mar de ferramentas “seguras porque são complicadas”, o Tailscale se destaca por ser seguro <em>e</em> simples. Não somos patrocinados — somos só fãs de tudo que para de fazer a gente perder tempo.</p>\n<p>Se a sua infra ainda parece estar rodando com lógica de rede de 2010, experimente o Tailscale. Entre no tailnet, veja a bagunça sumir e volte a construir.</p>\n<p>Dúvidas? Manda mensagem — a gente ama demais esse assunto.</p>\n<p>Fique esperto, fique invisível.<br>— A equipe Cubiq.lat</p>\n",
			date: "12 de março",
			slug: "/blog/tailscale-for-infraestructure-managment",
			isMain: true,
			icon: Server,
			authors: [
				{
					fullName: "Grok",
					avatar: "/grok-logo.png"
				}
			]
		},
		{
			title: "Autenticação e Votação Headless usando as APIs de Cubiq",
			image: "",
			excerpt: "Nosso projeto Betizen acabou de ser reescrito e relançado, com o objetivo de criar uma comunidade de transparência para listagens de iGaming, Forex e Binárias, e usamos nossa API de Usuários/Votação para construí-lo.",
			content: "<p>Em breve...</p>\n",
			date: "4 de dezembro",
			slug: "/blog/autenticacao-e-votacao-headless-usando-apis-da-cubiq",
			isMain: false,
			icon: Terminal,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "ChatGPT",
					avatar: "/chatgpt-logo.png"
				}
			]
		},
		{
			title: "Transformers.js: Inferência no lado do cliente para deixar nosso e-commerce mais inteligente",
			image: "",
			excerpt: "En breve...",
			content: "<p>Em breve...</p>\n",
			date: "5 de setembro",
			slug: "/blog/transformers-js-experimento-ecommerce",
			isMain: false,
			icon: BrainCircuit,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		}
	]
};