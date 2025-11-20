// src/routes/robots.txt/+server.ts
export const prerender = true;

export async function GET({ url }) {
	// Use actual production domain instead of prerender URL
	const baseUrl = url.origin.includes('sveltekit-prerender') ? 'https://www.cubiq.lat' : url.origin;

	const robotsTxt = `User-agent: *
Allow: /

# Block dashboard and admin areas
Disallow: /dashboard/
Disallow: /*/dashboard/

# Block API endpoints
Disallow: /api/
Disallow: /*/api/

# Reference sitemap
Sitemap: ${baseUrl}/sitemap.xml`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
