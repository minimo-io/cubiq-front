// src/routes/sitemap.xml/+server.ts
import { locales } from '$paraglide/runtime';
import { featuredPosts } from '$lib/data/featuredPosts';
import { posts } from '$lib/data/posts';

export const prerender = true;

export async function GET({ url }) {
	// Use actual production domain instead of prerender URL
	const baseUrl = url.origin.includes('sveltekit-prerender') ? 'https://www.cubiq.lat' : url.origin;

	const routes = await getRoutes();

	// Get all blog post slugs directly
	const allBlogPosts = [...Object.values(featuredPosts).flat(), ...Object.values(posts).flat()];

	// Use slugs exactly as they are
	const blogUrls: string[] = allBlogPosts.map((post) => post.slug);

	// Combine static routes with blog URLs
	const staticUrls: string[] = [];
	routes.forEach((route) => {
		locales.forEach((lang) => {
			const isDefault = lang === locales[0];
			let path;
			if (route === '/') {
				path = isDefault ? '' : `/${lang}`;
			} else {
				path = isDefault ? route : `/${lang}${route}`;
			}
			staticUrls.push(`${baseUrl}${path}`);
		});
	});

	const allUrls: string[] = [...staticUrls, ...blogUrls.map((slug) => `${baseUrl}${slug}`)];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(fullUrl) => `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml' }
	});
}

async function getRoutes(): Promise<string[]> {
	const fs = await import('fs/promises');
	const path = await import('path');

	const findRoutes = async (dir: string, base = ''): Promise<string[]> => {
		const routes: string[] = [];
		try {
			const entries = await fs.readdir(dir, { withFileTypes: true });

			for (const entry of entries) {
				if (entry.isDirectory()) {
					if (
						entry.name.startsWith('[') ||
						entry.name.startsWith('(') ||
						entry.name === 'sitemap.xml' ||
						entry.name.startsWith('api') ||
						entry.name === 'dashboard'
					) {
						continue;
					}

					const subRoutes = await findRoutes(path.join(dir, entry.name), `${base}/${entry.name}`);
					routes.push(...subRoutes);
				} else if (
					entry.name === '+page.svelte' ||
					entry.name === '+page.ts' ||
					entry.name === '+page.js'
				) {
					routes.push(base || '/');
				}
			}
		} catch {
			console.warn('Could not read routes directory');
		}

		return routes;
	};

	return findRoutes('src/routes');
}
