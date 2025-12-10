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
					pattern: '/dashboard/care/alerts',
					localized: [
						['pt', '/dashboard/care/alertas'],
						['es', '/es/dashboard/care/alertas'],
						['en', '/en/dashboard/care/alerts']
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
				},
				{
					pattern: '/care/software-preditivo',
					localized: [
						['pt', '/care/software-preditivo'],
						['es', '/es/care/software-preditivo'],
						['en', '/en/care/predictive-software']
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
