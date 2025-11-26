// vite.config.ts
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { blogPosts } from './src/lib/data/blogPostsForVite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['pt', '/'],
						['en', '/en'],
						['es', '/es']
					]
				},
				// Blog
				...blogPosts,

				{
					pattern: '/blog/:id',
					localized: [
						['pt', '/blog/:id'],
						['en', '/en/blog/:id'],
						['es', '/es/blog/:id']
					]
				},

				{
					pattern: '/dashboard/notes/:id',
					localized: [
						['pt', '/dashboard/notes/:id'],
						['es', '/es/dashboard/notes/:id'],
						['en', '/en/dashboard/notes/:id']
					]
				},

				{
					pattern: '/invoice/:id',
					localized: [
						['pt', '/pt/fatura/:id'],
						['es', '/es/factura/:id'],
						['en', '/invoice/:id']
					]
				},

				{
					pattern: '/loja',
					localized: [
						['pt', '/loja'],
						['es', '/es/tienda'],
						['en', '/en/market']
					]
				},

				{
					pattern: '/blog',
					localized: [
						['pt', '/blog'],
						['es', '/es/blog'],
						['en', '/en/blog']
					]
				},

				{
					pattern: '/soon',
					localized: [
						['pt', '/em-breve'],
						['es', '/es/proximamente'],
						['en', '/en/soon']
					]
				},
				{
					pattern: '/login',
					localized: [
						['pt', '/entrar'],
						['es', '/es/entrar'],
						['en', '/en/login']
					]
				},
				// Roadmap
				{
					pattern: '/roadmap',
					localized: [
						['pt', '/roadmap'],
						['es', '/es/roadmap'],
						['en', '/en/roadmap']
					]
				},
				// Sign-up
				{
					pattern: '/sign-up',
					localized: [
						['pt', '/cadastro'],
						['es', '/es/registro'],
						['en', '/en/sign-up']
					]
				},

				// Dashboards
				{
					pattern: '/dashboard',
					localized: [
						['pt', '/dashboard'],
						['es', '/es/dashboard'],
						['en', '/en/dashboard']
					]
				},
				{
					pattern: '/dashboard/care',
					localized: [
						['pt', '/dashboard/care'],
						['es', '/es/dashboard/care'],
						['en', '/en/dashboard/care']
					]
				},
				{
					pattern: '/dashboard/pay',
					localized: [
						['pt', '/dashboard/pay'],
						['es', '/es/dashboard/pay'],
						['en', '/en/dashboard/pay']
					]
				},
				{
					pattern: '/dashboard/store',
					localized: [
						['pt', '/dashboard/store'],
						['es', '/es/dashboard/store'],
						['en', '/en/dashboard/store']
					]
				},
				{
					pattern: '/dashboard/apis',
					localized: [
						['pt', '/dashboard/apis'],
						['es', '/es/dashboard/apis'],
						['en', '/en/dashboard/apis']
					]
				},

				{
					pattern: '/dashboard/notes',
					localized: [
						['pt', '/dashboard/notes'],
						['es', '/es/dashboard/notes'],
						['en', '/en/dashboard/notes']
					]
				},

				{
					pattern: '/store',
					localized: [
						['pt', '/store'],
						['es', '/es/store'],
						['en', '/en/store']
					]
				},

				{
					pattern: '/lab',
					localized: [
						['pt', '/lab'],
						['es', '/es/lab'],
						['en', '/en/lab']
					]
				},
				// Products
				{
					pattern: '/pay',
					localized: [
						['pt', '/pay'],
						['es', '/es/pay'],
						['en', '/en/pay']
					]
				},
				{
					pattern: '/care',
					localized: [
						['pt', '/care'],
						['es', '/es/care'],
						['en', '/en/care']
					]
				}
			]
		}),
		tailwindcss(),
		sveltekit()
	],
	server: {
		// proxy: {
		// 	'/api': {
		// 		target: 'http://127.0.0.1:8080',
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/api/, '')
		// 	}
		// }
	}
});

// import { paraglideVitePlugin } from '@inlang/paraglide-js';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [
// 		sveltekit(),

// 		paraglideVitePlugin({
// 			project: './project.inlang',
// 			outdir: './src/lib/paraglide',

// 			strategy: ['url', 'cookie', 'baseLocale'],
// 			urlPatterns: [
// 				{
// 					pattern: '/',
// 					localized: [
// 						['pt', '/'],
// 						['uy', '/uy/']
// 					]
// 				},

// 				{
// 					pattern: '/blog/',
// 					localized: [
// 						['pt', '/blog/'],
// 						['uy', '/uy/blog/']
// 					]
// 				},

// 				// Club
// 				{
// 					pattern: '/club/',
// 					localized: [
// 						['pt', '/clube/'],
// 						['uy', '/uy/club/']
// 					]
// 				},

// 				// Account
// 				{
// 					pattern: '/account/',
// 					localized: [
// 						['pt', '/conta/'],
// 						['uy', '/uy/cuenta/']
// 					]
// 				},

// 				// Carrinho
// 				{
// 					pattern: '/cart/',
// 					localized: [
// 						['pt', '/carrinho/'],
// 						['uy', '/uy/carrito/']
// 					]
// 				},

// 				// Produtores de vinho
// 				{
// 					pattern: '/produtores-de-vinho/:id',
// 					localized: [
// 						['pt', '/produtores-de-vinho/:id'],
// 						['uy', '/uy/productores-de-vino/:id']
// 					]
// 				},

// 				// Harmonizacoes
// 				{
// 					pattern: '/harmonizacoes/:id',
// 					localized: [
// 						['pt', '/harmonizacoes/:id'],
// 						['uy', '/uy/maridajes/:id']
// 					]
// 				},

// 				// Uva
// 				{
// 					pattern: '/uva/:id',
// 					localized: [
// 						['pt', '/uva/:id'],
// 						['uy', '/uy/uva/:id']
// 					]
// 				},

// 				// Tag
// 				{
// 					pattern: '/tag/:id',
// 					localized: [
// 						['pt', '/tag/:id'],
// 						['uy', '/uy/tag/:id']
// 					]
// 				},

// 				// Blog
// 				{
// 					pattern: '/blog/:id',
// 					localized: [
// 						['pt', '/blog/:id(.*)?'],
// 						['uy', '/uy/blog/:id(.*)?']
// 					]
// 				},

// 				{
// 					pattern: '/produto/:id',
// 					localized: [
// 						['pt', '/produto/:id(.*)?'],
// 						['uy', '/uy/producto/:id(.*)?']
// 					]
// 				},

// 				// Category & Subcategory route – intended to match exactly one segment (e.g. "/cervezas/")
// 				{
// 					pattern: '/:path/',
// 					localized: [
// 						['pt', '/:path/'],
// 						['uy', '/uy/:path/']
// 					]
// 				}
// 			]
// 		})
// 	],
// 	build: {
// 		cssCodeSplit: true
// 	},
// 	server: {
// 		port: 4000
// 	}
// });
