export const GET = () => {
	// @ts-ignore - injected at build time via vite.config.ts
	const version =
		typeof process !== 'undefined' && process.env.PACKAGE_VERSION
			? process.env.PACKAGE_VERSION
			: '0.0.0';
	return Response.json({ version });
};
