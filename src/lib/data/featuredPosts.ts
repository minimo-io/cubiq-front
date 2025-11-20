import { Star, Terminal, BrainCircuit } from '@lucide/svelte';

export const featuredPosts = {
	en: [
		{
			title: "Introducing the Cubiq Platform",
			excerpt: "A unified digital products platform, designed to transform the way businesses in Latin America handle e-commerce, payments, and IT.",
			content: "<p>Cubiq is more than just a collection of tools. It’s an <a href=\"https://www.cubiq.lat\">integrated ecosystem</a>, designed to provide accessible, modular, and intelligent solutions for growing businesses — with a special focus on emerging markets in LATAM.</p>\n<p><strong>Cubiq</strong><br><em>A Unified Digital Products Platform for Latin America.</em></p>\n",
			date: "September 5",
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
			title: "Transformers.js: How We Used Client-Side Inference to Make Our E-Commerce Smarter",
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
		},
		{
			title: "Headless Authentication and Voting using Cubiq’s APIs",
			excerpt: "Our Betizen project just got re-written and relaunched, aiming to create a fairness community for iGaming, Forex, and Binary listings, and we used our Users/Voting API to build it.",
			content: "<p>En breve...</p>\n",
			date: "July 17",
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
		}
	],
	es: [
		{
			title: "Presentando la Plataforma Cubiq",
			excerpt: "Una plataforma unificada de productos digitales, creada para transformar la forma en que los negocios de América Latina gestionan el comercio electrónico, los pagos y la TI.",
			content: "<p>Cubiq es más que una simple colección de herramientas. Es un <a href=\"https://www.cubiq.lat\">ecosistema integrado</a>, diseñado para ofrecer soluciones accesibles, modulares e inteligentes para empresas en crecimiento, con un enfoque especial en los mercados emergentes de LATAM.</p>\n<p><strong>Cubiq</strong><br><em>Una Plataforma Unificada de Productos Digitales para América Latina.</em></p>\n",
			date: "5 de septiembre",
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
			title: "Transformers.js: Inferencia del lado del cliente para hacer nuestro e-commerce más inteligente",
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
		},
		{
			title: "Autenticación y Votación Headless usando APIs de Cubiq",
			excerpt: "Nuestro proyecto Betizen acaba de ser reescrito y relanzado, con el objetivo de crear una comunidad de transparencia para listados de iGaming, Forex y Binarias, y utilizamos nuestra API de Usuarios/Votación para construirlo.",
			content: "<p>Soon.</p>\n",
			date: "31 de agosto",
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
		}
	],
	pt: [
		{
			title: "Apresentando a Plataforma Cubiq",
			excerpt: "Uma plataforma unificada de produtos digitais, criada para transformar a forma como negócios da América Latina lidam com e-commerce, pagamentos e TI.",
			content: "<p>A Cubiq é mais do que uma simples coleção de ferramentas. É um <a href=\"https://www.cubiq.lat\">ecossistema</a> integrado, desenvolvido para oferecer soluções acessíveis, modulares e inteligentes para empresas em crescimento — com foco especial nos mercados emergentes da LATAM.</p>\n<p><strong>Cubiq</strong><br><em>Plataforma Unificada de Produtos Digitais para a América Latina.</em></p>\n",
			date: "5 de setembro",
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
			title: "Transformers.js: Inferência no lado do cliente para deixar nosso e-commerce mais inteligente",
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
		},
		{
			title: "Autenticação e Votação Headless usando as APIs de Cubiq",
			excerpt: "Nosso projeto Betizen acabou de ser reescrito e relançado, com o objetivo de criar uma comunidade de transparência para listagens de iGaming, Forex e Binárias, e usamos nossa API de Usuários/Votação para construí-lo.",
			content: "<p>Em breve...</p>\n",
			date: "31 de agosto",
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
		}
	]
};