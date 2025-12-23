import { Star, Terminal, BrainCircuit } from '@lucide/svelte';

export const featuredPosts = {
	en: [
		{
			title: "Introducing the Cubiq Platform",
			image: "",
			excerpt: "A unified digital products platform, designed to transform the way businesses in Latin America handle e-commerce, payments, and IT.",
			content: "<p>SMEs and startups need to embrace digital transformation. It’s to support this transformation that we created Cubiq.</p>\n<p>Cubiq is more than just a collection of tools. It’s an <a href=\"https://www.cubiq.lat\">integrated ecosystem</a>, designed to deliver affordable, modular, and intelligent solutions for growing businesses.</p>\n<p>We began this journey inspired by companies like Every… and with an initial suite of products that will expand as our experiments are validated.</p>\n<p>We’re launching with 4 products:</p>\n<ul>\n<li><strong>CARE</strong>: IT asset management and leasing</li>\n<li><strong>STORE</strong>: Custom headless e-commerce</li>\n<li><strong>PAY</strong>: Cross-border BTC/USDT payments via Lightning</li>\n<li><strong>APIs</strong>: For startups who want to leverage the technologies powering our own products</li>\n</ul>\n<p>But there’s more in the experiment vault:</p>\n<ul>\n<li><strong>LAW</strong>: A micropayment-powered tool that instantly analyzes global contracts for $4.99, identifying risks and suggesting legal edits—eliminating the initial need for expensive lawyers.</li>\n</ul>\n<p><strong>Cubiq</strong><br><em>A unified digital products platform for Latin America.</em></p>\n",
			date: "December 4",
			slug: "/en/blog/introducing-the-cubiq-platform",
			isMain: true,
			icon: Star,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Claude AI",
					avatar: "/claude-logo.png"
				}
			]
		},
		{
			title: "Headless Authentication and Voting using Cubiq’s APIs",
			image: "",
			excerpt: "Our Betizen project just got re-written and relaunched, aiming to create a fairness community for iGaming, Forex, and Binary listings, and we used our Users/Voting API to build it.",
			content: "<p>En breve...</p>\n",
			date: "December 3",
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
			date: "September 4",
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
			title: "Presentando la Plataforma Cubiq",
			image: "",
			excerpt: "Una plataforma unificada de productos digitales, creada para transformar la forma en que los negocios de América Latina gestionan el comercio electrónico, los pagos y la TI.",
			content: "<p>Cubiq nació con la intención de apoyar empresas en crecimiento, PyMEs y Startups que necesitan un sócio tecnológico confiable y eficiente para acompañar su transformación.</p>\n<p>Cubiq es más que una empresa de desarrollo o una colección de herramientas. Somos una <span>Plataforma de Productos Digitales</span>, y un <a href=\"/es/lab\" class=\"text-primary\">Laboratório de Desarrollo</a> que diseña, crear y despliega productos próprios, y productos a medida, para terceros.</p>\n<p>Nuestro equipo provee el diseño y el desarrollo que alimenta las tres capas de servicios de nuestra oferta.</p>\n<p><strong class=\"text-primary\">//</strong> Acá podés conocer mas sobre <a href=\"/es/#more\">nuestro stack tecnológico</a>.</p>\n<h2>La plataforma</h2>\n<p>La <a href=\"https://www.cubiq.lat/es\">plataforma integrada</a> de Cubiq cuenta con una base de 4 productos digitales:</p>\n<ul>\n<li><strong><a href=\"/es/care\">CARE</a></strong>: Gestión y alquiler de activos de TI.</li>\n<li><strong><a href=\"/es/store\">STORE</a></strong>: E-commerce headless a medida.</li>\n<li><strong><a href=\"/es/pay\">PAY</a></strong>: Pagos BTC/USDT com settlement instantáneos e cross-border, vía Lightning.</li>\n<li><strong><a href=\"https://api.cubiq.lat/\">APIs</a></strong>: Para startups que quieran utilizar las tecnologías que impulsan nuestros propios productos.</li>\n</ul>\n<p>Pero hay más productos incubándose en el laboratório:</p>\n<ul>\n<li><strong>LAW</strong>: Una herramienta de micropago que analiza instantáneamente contratos globales, identificando riesgos y sugiriendo ediciones, eliminando la necesidad inicial de abogados costosos.</li>\n</ul>\n<p>Somos también un <a href=\"/es/lab\">DevLab</a>, ofreciendo desarrollos a medida y una serie de productos própios.</p>\n<h2>El laboratório</h2>\n<p>A través de su <a href=\"https://www.cubiq.lat\">Laboratório</a> Cubiq experimenta y crea productos própios como:</p>\n<ul>\n<li><strong><a href=\"https://www.betizen.org/\">BETIZEN</a></strong>: El primer sitio de listados de Casino, Binarias y Forex con los incentivos correctos: karma, mérito y proof-of-work.</li>\n<li><strong><a href=\"/es/blog/beer-app\">HOPCHAIN</a></strong> (antes Ln-Beer): HopChain conecta cervecerías y bitcoiners con pagos en satoshis sin fricción.</li>\n</ul>\n<p><img src=\"/products/project-lightning-beer.webp\" alt=\"HopChain\"></p>\n<p>Adicionalmente el mismo equipo de programación y diseño del laboratório crea desarrollos a medida para terceros.</p>\n<p>Desde sitios institucionales:</p>\n<p><img src=\"/clients/agf-splash.jpeg\" alt=\"AGF-Splash\"></p>\n<p>Hasta e-commerce a medida:\n<img src=\"/clients/braaay-splash.jpeg\" alt=\"Braaay-Splash\"></p>\n<p>Somos el socio tecnológico que permite a las empresas y startups centrarse en su negocio principal.\n<br>\nSi tenés una idea, entrá en contato y agendemos una charla.</p>\n",
			date: "4 de diciembre",
			slug: "/es/blog/presentando-la-plataforma-cubiq",
			isMain: true,
			icon: Star,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Claude AI",
					avatar: "/claude-logo.png"
				}
			]
		},
		{
			title: "Autenticación y Votación Headless usando APIs de Cubiq",
			image: "",
			excerpt: "Nuestro proyecto Betizen acaba de ser reescrito y relanzado, con el objetivo de crear una comunidad de transparencia para listados de iGaming, Forex y Binarias, y utilizamos nuestra API de Usuarios/Votación para construirlo.",
			content: "<p>Soon.</p>\n",
			date: "3 de diciembre",
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
			date: "4 de septiembre",
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
			title: "Apresentando a Plataforma Cubiq",
			image: "",
			excerpt: "Uma plataforma unificada de produtos digitais, criada para transformar a forma como negócios da América Latina lidam com e-commerce, pagamentos e TI.",
			content: "<p>Cubiq nasceu com a intenção de apoiar empresas em crescimento, PMEs e startups que precisam de um <strong>sócio tecnológico confiável e eficiente</strong> para acompanhar sua transformação.</p>\n<p>Cubiq é mais do que uma empresa de desenvolvimento ou uma coleção de ferramentas. Somos uma <span>Plataforma de Produtos Digitais</span> e um <a href=\"/lab\" class=\"text-primary\">Laboratório de Desenvolvimento</a> que projeta, cria e implanta produtos próprios e produtos sob medida para terceiros.</p>\n<p>Nossa equipe fornece o design e o desenvolvimento que sustentam as três camadas de serviços da nossa oferta.</p>\n<blockquote><strong class=\"text-primary\">//</strong> Aqui você pode conhecer mais sobre <a href=\"/#more\">nosso stack tecnológico</a>.</blockquote>\n\n<h2>A plataforma</h2>\n<p>A <a href=\"https://www.cubiq.lat\">plataforma integrada</a> da Cubiq conta com uma base de 4 produtos digitais:</p>\n<ul>\n<li><strong><a href=\"/care\">CARE</a></strong>: Gestão e locação de ativos de TI.</li>\n<li><strong><a href=\"/store\">STORE</a></strong>: E-commerce headless sob medida.</li>\n<li><strong><a href=\"/pay\">PAY</a></strong>: Pagamentos BTC/USDT com liquidação instantânea e cross-border, via Lightning.</li>\n<li><strong><a href=\"https://api.cubiq.lat/\">APIs</a></strong>: Para startups que desejam utilizar as tecnologias que impulsionam nossos próprios produtos.</li>\n</ul>\n<p>Mas há mais produtos sendo incubados no laboratório:</p>\n<ul>\n<li><strong>LAW</strong>: Uma ferramenta de micropagamentos que analisa instantaneamente contratos globais, identificando riscos e sugerindo edições, eliminando a necessidade inicial de advogados caros.</li>\n</ul>\n<p>Somos também um <a href=\"/lab\">DevLab</a>, oferecendo desenvolvimento sob medida e uma série de produtos próprios.</p>\n<h2>O laboratório</h2>\n<p>Por meio de seu <a href=\"https://www.cubiq.lat\">Laboratório</a>, a Cubiq experimenta e cria produtos próprios, como:</p>\n<ul>\n<li><strong><a href=\"https://www.betizen.org/\">BETIZEN</a></strong>: O primeiro site de listagens de Cassino, Binárias e Forex com os incentivos corretos: karma, mérito e proof-of-work.</li>\n<li><strong><a href=\"/blog/beer-app\">HOPCHAIN</a></strong> (antes Ln-Beer): A HopChain conecta cervejarias e bitcoiners com pagamentos em satoshis, sem fricção.</li>\n</ul>\n<p><img src=\"/products/project-lightning-beer.webp\" alt=\"HopChain\"></p>\n<p>Além disso, a mesma equipe de programação e design do laboratório desenvolve soluções sob medida para terceiros.</p>\n<p>Desde sites institucionais:</p>\n<p><img src=\"/clients/agf-splash.jpeg\" alt=\"AGF-Splash\"></p>\n<p>Até e-commerces sob medida:\n<img src=\"/clients/braaay-splash.jpeg\" alt=\"Braaay-Splash\"></p>\n<p>Somos o parceiro tecnológico que permite que empresas e startups se concentrem em seu negócio principal.\n<br>\nSe você tem uma ideia, entre em contato e vamos agendar uma conversa.</p>\n",
			date: "4 de dezembro",
			slug: "/blog/apresentando-a-plataforma-cubiq",
			isMain: true,
			icon: Star,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Claude AI",
					avatar: "/claude-logo.png"
				}
			]
		},
		{
			title: "Autenticação e Votação Headless usando as APIs de Cubiq",
			image: "",
			excerpt: "Nosso projeto Betizen acabou de ser reescrito e relançado, com o objetivo de criar uma comunidade de transparência para listagens de iGaming, Forex e Binárias, e usamos nossa API de Usuários/Votação para construí-lo.",
			content: "<p>Em breve...</p>\n",
			date: "3 de dezembro",
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
			date: "4 de setembro",
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