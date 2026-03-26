<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$paraglide/messages';
	import { AppConfig } from '$lib/configs';
	import Header from '$lib/components/Header/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';

	const SWAGGER_URL = `${AppConfig.apiUrl}/docs-json`;

	type SchemaObject = {
		type?: string;
		properties?: Record<string, SchemaObject>;
		items?: SchemaObject;
		$ref?: string;
		example?: unknown;
		required?: string[];
		enum?: unknown[];
		format?: string;
		description?: string;
		minimum?: number;
		maximum?: number;
		default?: unknown;
		allOf?: SchemaObject[];
		oneOf?: SchemaObject[];
	};

	type Parameter = {
		name: string;
		in: string;
		required?: boolean;
		type?: string;
		schema?: SchemaObject;
		description?: string;
		example?: unknown;
	};

	type Operation = {
		summary?: string;
		description?: string;
		tags?: string[];
		parameters?: Parameter[];
		responses?: Record<
			string,
			{
				description?: string;
				content?: Record<string, { example?: unknown; schema?: SchemaObject }>;
			}
		>;
		requestBody?: unknown;
		security?: unknown[];
		operationId?: string;
	};

	type Endpoint = {
		path: string;
		method: string;
		op: Operation;
		tag: string;
	};

	type GroupedEndpoints = Record<string, Endpoint[]>;

	let spec: { components?: { schemas?: Record<string, SchemaObject> } } | null = $state(null);
	let grouped: GroupedEndpoints = $state({});
	let loading = $state(true);
	let fetchError = $state(false);
	let activePage = $state('quickstart');
	let openCards = $state(new Set<string>());
	let openTags = $state(new Set<string>());
	let search = $state('');
	let mobileNavOpen = $state(false);

	const METHOD_BADGE: Record<string, string> = {
		get: 'badge-success',
		post: 'badge-primary',
		put: 'badge-warning',
		delete: 'badge-error',
		patch: 'badge-info'
	};

	onMount(async () => {
		try {
			const res = await fetch(SWAGGER_URL);
			if (!res.ok) throw new Error('Failed to fetch');
			spec = await res.json();
			grouped = groupByTag(spec as Record<string, unknown>);
		} catch {
			fetchError = true;
		} finally {
			loading = false;
		}
	});

	function resolveRef(ref: string): SchemaObject | undefined {
		if (!spec?.components?.schemas) return undefined;
		const schemaName = ref.replace('#/components/schemas/', '');
		return spec.components.schemas[schemaName];
	}

	function generateExample(schema: SchemaObject | unknown, depth = 0): unknown {
		if (depth > 5) return null;
		const s = schema as SchemaObject;
		if (!s) return null;

		if (s.$ref) {
			const resolved = resolveRef(s.$ref);
			return resolved ? generateExample(resolved, depth + 1) : { $ref: s.$ref };
		}

		if (s.example !== undefined) return s.example;
		if (s.default !== undefined) return s.default;
		if (s.enum && s.enum.length > 0) return s.enum[0];

		if (s.type === 'object' && s.properties) {
			const obj: Record<string, unknown> = {};
			for (const [key, prop] of Object.entries(s.properties)) {
				obj[key] = generateExample(prop, depth + 1);
			}
			return obj;
		}

		if (s.type === 'array' && s.items) {
			return [generateExample(s.items, depth + 1)];
		}

		switch (s.type) {
			case 'string':
				if (s.format === 'date-time') return '2026-03-26T18:13:34.269Z';
				if (s.format === 'date') return '2026-03-26';
				if (s.format === 'email') return 'example@cubiq.lat';
				if (s.format === 'uuid') return '550e8400-e29b-41d4-a716-446655440000';
				if (s.description?.toLowerCase().includes('name')) return 'John Doe';
				if (s.description?.toLowerCase().includes('email')) return 'user@example.com';
				return 'string';
			case 'number':
			case 'integer':
				return s.minimum ?? 0;
			case 'boolean':
				return true;
			default:
				return null;
		}
	}

	function groupByTag(s: Record<string, unknown>): GroupedEndpoints {
		const groups: GroupedEndpoints = {};
		const paths = s.paths as Record<string, Record<string, Operation>> | undefined;
		if (!paths) return groups;

		for (const [path, methods] of Object.entries(paths)) {
			for (const [method, op] of Object.entries(methods)) {
				if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;
				const tags = op.tags ?? ['General'];
				for (const tag of tags) {
					groups[tag] ??= [];
					groups[tag].push({ path, method, op, tag });
				}
			}
		}
		return groups;
	}

	function toggleCard(id: string) {
		const next = new Set(openCards);
		next.has(id) ? next.delete(id) : next.add(id);
		openCards = next;
	}

	function toggleTag(tag: string) {
		const next = new Set(openTags);
		next.has(tag) ? next.delete(tag) : next.add(tag);
		openTags = next;
	}

	function goToEndpoint(method: string, path: string) {
		activePage = 'reference';
		const id = `${method}-${path}`;
		openCards = new Set([...openCards, id]);
		setTimeout(() => {
			const el = document.getElementById(id);
			el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 100);
	}

	function responseClass(code: string) {
		if (code.startsWith('2')) return 'text-success';
		if (code.startsWith('4')) return 'text-error';
		return 'text-warning';
	}

	function formatJson(obj: unknown): string {
		return JSON.stringify(obj, null, 2);
	}

	const filteredGrouped = $derived(
		search.trim()
			? Object.fromEntries(
					(Object.entries(grouped) as unknown as [string, Endpoint[]][])
						.map(([tag, eps]) => [
							tag,
							eps.filter(
								(e) =>
									e.path.toLowerCase().includes(search.toLowerCase()) ||
									e.method.toLowerCase().includes(search.toLowerCase()) ||
									e.op.summary?.toLowerCase().includes(search.toLowerCase())
							)
						])
						.filter(([, eps]) => eps.length > 0)
				)
			: grouped
	);

	const guides = $derived([
		{ id: 'quickstart', label: m.docsQuickstart() },
		{ id: 'authentication', label: m.docsAuthentication() },
		{ id: 'errors', label: m.docsErrorHandling() }
	]);
</script>

<Meta title="API Docs" description="Cubiq API Reference" />

<Header
	titleLeft="API"
	titleRight="Docs"
	background="rocket"
	heroContent={m.docsHeroContent()}
	buttons={false}
/>

<!-- Mobile Navigation -->
<nav class="docs-content max-w-fw mx-auto my-4 px-4 font-sans lg:hidden">
	<button
		class="bg-base-200 border-base-300 rounded-box flex w-full items-center justify-between border p-3 font-sans"
		onclick={() => (mobileNavOpen = !mobileNavOpen)}
	>
		<span class="font-semibold">
			{activePage === 'reference'
				? m.docsReference()
				: (guides.find((g) => g.id === activePage)?.label ?? m.docsQuickstart())}
		</span>
		<span class="transition-transform {mobileNavOpen ? 'rotate-180' : ''}">▾</span>
	</button>

	{#if mobileNavOpen}
		<div class="bg-base-200 border-base-300 rounded-box mt-2 border p-3">
			<div class="border-base-300 mb-3 border-b pb-3">
				<input
					bind:value={search}
					type="text"
					placeholder={m.docsSearch()}
					class="input input-sm input-bordered w-full font-sans"
				/>
			</div>

			<p
				class="text-base-content/40 px-2 pt-2 pb-1 text-xs font-semibold tracking-widest uppercase"
			>
				{m.docsGuides()}
			</p>

			{#each guides as guide}
				<button
					class="w-full border-l-2 px-3 py-2 text-left font-sans text-sm transition-colors
						{activePage === guide.id
						? 'border-primary bg-primary/10 text-primary font-medium'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300 border-transparent'}"
					onclick={() => {
						activePage = guide.id;
						mobileNavOpen = false;
					}}
				>
					{guide.label}
				</button>
			{/each}

			<p
				class="text-base-content/40 px-2 pt-4 pb-1 text-xs font-semibold tracking-widest uppercase"
			>
				{m.docsReference()}
			</p>

			{#if loading}
				<p class="text-base-content/40 px-2 py-2 font-sans text-sm">{m.docsLoading()}</p>
			{:else if fetchError}
				<p class="text-error px-2 py-2 font-sans text-sm">{m.docsFailedLoad()}</p>
			{:else}
				<button
					class="w-full border-l-2 px-3 py-2 text-left font-sans text-sm transition-colors
						{activePage === 'reference'
						? 'border-primary bg-primary/10 text-primary font-medium'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300 border-transparent'}"
					onclick={() => {
						activePage = 'reference';
						mobileNavOpen = false;
					}}
				>
					{m.docsAllEndpoints()}
				</button>

				{#each Object.entries(filteredGrouped) as unknown as [string, Endpoint[]][] as [tag, endpoints]}
					<button
						class="text-base-content/40 hover:text-base-content flex w-full items-center justify-between px-3 py-1.5 font-sans text-xs font-semibold tracking-wide uppercase transition-colors"
						onclick={() => toggleTag(tag)}
					>
						<span>{tag}</span>
						<span class="transition-transform {openTags.has(tag) ? 'rotate-90' : ''}">›</span>
					</button>
					{#if openTags.has(tag)}
						{#each endpoints as ep}
							<button
								class="w-full border-l-2 px-4 py-1.5 text-left font-sans text-sm transition-colors
									{activePage === 'reference' && openCards.has(`${ep.method}-${ep.path}`)
									? 'border-primary bg-primary/10 text-primary font-medium'
									: 'text-base-content/60 hover:text-base-content hover:bg-base-300 border-transparent'}"
								onclick={() => {
									goToEndpoint(ep.method, ep.path);
									mobileNavOpen = false;
								}}
							>
								<span class="badge {METHOD_BADGE[ep.method] ?? 'badge-ghost'} badge-xs mr-2">
									{ep.method.toUpperCase()}
								</span>
								<span class="font-mono text-xs">{ep.path}</span>
							</button>
						{/each}
					{/if}
				{/each}
			{/if}
		</div>
	{/if}
</nav>

<div class="max-w-fw docs-content mx-auto my-10 flex items-start gap-8 font-sans">
	<!-- SIDEBAR -->
	<aside
		class="bg-base-200 rounded-box border-base-300 sticky top-6 hidden w-60 shrink-0 overflow-hidden border lg:block"
	>
		<div class="border-base-300 border-b p-3">
			<input
				bind:value={search}
				type="text"
				placeholder={m.docsSearch()}
				class="input input-sm input-bordered w-full"
			/>
		</div>

		<nav class="max-h-[calc(100vh-200px)] overflow-y-auto py-2">
			<p
				class="text-base-content/40 px-4 pt-2 pb-1 text-xs font-semibold tracking-widest uppercase"
			>
				{m.docsGuides()}
			</p>

			{#each guides as guide}
				<button
					class="w-full border-l-2 px-4 py-1.5 text-left text-sm transition-colors
						{activePage === guide.id
						? 'border-primary bg-primary/10 text-primary font-medium'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300 border-transparent'}"
					onclick={() => (activePage = guide.id)}
				>
					{guide.label}
				</button>
			{/each}

			<p
				class="text-base-content/40 px-4 pt-4 pb-1 text-xs font-semibold tracking-widest uppercase"
			>
				{m.docsReference()}
			</p>

			{#if loading}
				<p class="text-base-content/40 px-4 py-2 text-sm">{m.docsLoading()}</p>
			{:else if fetchError}
				<p class="text-error px-4 py-2 text-sm">{m.docsFailedLoad()}</p>
			{:else}
				<button
					class="w-full border-l-2 px-4 py-1.5 text-left text-sm transition-colors
						{activePage === 'reference'
						? 'border-primary bg-primary/10 text-primary font-medium'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300 border-transparent'}"
					onclick={() => (activePage = 'reference')}
				>
					{m.docsAllEndpoints()}
				</button>

				{#each Object.entries(filteredGrouped) as unknown as [string, Endpoint[]][] as [tag, endpoints]}
					<button
						class="text-base-content/40 hover:text-base-content flex w-full items-center justify-between px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors"
						onclick={() => toggleTag(tag)}
					>
						<span>{tag}</span>
						<span class="transition-transform {openTags.has(tag) ? 'rotate-90' : ''}">›</span>
					</button>

					{#if openTags.has(tag)}
						{#each endpoints as endpoint}
							{@const { path, method, op } = endpoint}
							<button
								class="text-base-content/50 hover:text-base-content hover:bg-base-300 flex w-full items-center gap-2 py-1 pr-3 pl-5 text-left text-xs transition-colors"
								onclick={() => goToEndpoint(method, path)}
							>
								<span class="badge badge-xs {METHOD_BADGE[method] ?? 'badge-ghost'} shrink-0">
									{method.toUpperCase()}
								</span>
								<span class="truncate font-mono">{path}</span>
							</button>
						{/each}
					{/if}
				{/each}
			{/if}
		</nav>
	</aside>

	<!-- MAIN CONTENT -->
	<main class="min-w-0 flex-1">
		{#if activePage === 'quickstart'}
			<div class="prose prose-sm dark:prose-invert max-w-none">
				<h1>{m.docsQuickstartTitle()}</h1>
				<p class="font-sans">{m.docsQuickstartDesc()}</p>
				<div class="alert alert-info alert-soft not-prose border">
					<span class="font-bold">💡 {m.docsApiKeyNote()}</span>
				</div>
				<p class="font-sans">
					<a
						href="https://documenter.getpostman.com/view/44402542/2sBXVhBqLM"
						target="_blank"
						class="link link-primary"
					>
						Postman Documentation
					</a>
					<span class="mx-2">·</span>
					<a href="https://api.cubiq.lat/docs" target="_blank" class="link link-primary">
						Swagger UI
					</a>
				</p>
				<h2>1. {m.docsGetApiKey()}</h2>
				<p class="font-sans">{m.docsBearerToken()}</p>
				<h2>2. {m.docsMakeRequest()}</h2>
				<pre class="bg-base-300 overflow-x-auto rounded-lg p-4"><code class="text-sm"
						>curl -X GET https://api.cubiq.lat/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"</code
					></pre>
				<h2>3. {m.docsParseResponse()}</h2>
				<pre class="bg-base-300 overflow-x-auto rounded-lg p-4"><code class="text-sm"
						>{`{
  "success": true,
  "code": 10000,
  "timestamp": 1774550277013,
  "responseTime": 0.005,
  "data": {...}
}`}</code
					></pre>
				<h2>{m.docsNextSteps()}</h2>
				<ul class="font-sans">
					<li>
						<button class="link link-primary" onclick={() => (activePage = 'authentication')}>
							{m.docsAuthGuide()}
						</button>
					</li>
					<li>
						<button class="link link-primary" onclick={() => (activePage = 'reference')}>
							{m.docsBrowseReference()}
						</button>
					</li>
					<li>
						<button class="link link-primary" onclick={() => (activePage = 'errors')}>
							{m.docsErrorHandling()}
						</button>
					</li>
				</ul>
			</div>
		{:else if activePage === 'authentication'}
			<div class="prose prose-sm dark:prose-invert max-w-none">
				<h1>{m.docsAuthenticationTitle()}</h1>
				<p class="font-sans">{m.docsAuthenticationDesc()}</p>
				<h2>{m.docsBearerTokenTitle()}</h2>
				<pre class="bg-base-300 overflow-x-auto rounded-lg p-4"><code class="text-sm"
						>Authorization: Bearer YOUR_API_KEY</code
					></pre>
				<h2>{m.docsLoginJwt()}</h2>
				<pre class="bg-base-300 overflow-x-auto rounded-lg p-4"><code class="text-sm"
						>{`POST /auth/login
Content-Type: application/json

{
  "email": "you@example.com",
  "password": "your-password"
}`}</code
					></pre>
				<div class="alert alert-warning alert-soft not-prose border">
					<span>🔒 {m.docsTokenExpiry()}</span>
				</div>
			</div>
		{:else if activePage === 'errors'}
			<div class="prose prose-sm dark:prose-invert max-w-none">
				<h1>{m.docsErrorHandlingTitle()}</h1>
				<p class="font-sans">{m.docsErrorHandlingDesc()}</p>
				<div class="not-prose mt-4 overflow-x-auto">
					<table class="table-sm table">
						<thead><tr><th>Code</th><th>Meaning</th></tr></thead>
						<tbody>
							{#each [['200', 'Success'], ['201', 'Created'], ['400', 'Bad request'], ['401', 'Unauthorized — invalid or missing token'], ['403', 'Forbidden — insufficient permissions'], ['404', 'Not found'], ['422', 'Validation error'], ['500', 'Internal server error']] as [code, meaning]}
								<tr>
									<td><code>{code}</code></td>
									<td>{meaning}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<h2>Error format</h2>
				<pre class="bg-base-300 overflow-x-auto rounded-lg p-4"><code class="text-sm"
						>{`{
  "statusCode": 422,
  "message": ["email must be an email"],
  "error": "Unprocessable Entity"
}`}</code
					></pre>
			</div>
		{:else if activePage === 'reference'}
			{#if loading}
				<div class="text-base-content/50 mt-20 flex items-center gap-3">
					<span class="loading loading-spinner"></span> Loading spec...
				</div>
			{:else if fetchError}
				<div class="alert alert-error">
					Failed to load Swagger JSON from <code>{SWAGGER_URL}</code>
				</div>
			{:else}
				{@const info = spec as {
					info?: { title?: string; description?: string; version?: string };
				}}
				{@const host = spec as { host?: string; basePath?: string }}
				<div class="border-base-300 mb-8 border-b pb-6">
					<h1 class="text-3xl font-bold tracking-tight">{info.info?.title ?? 'API Reference'}</h1>
					{#if info.info?.description}
						{@const cleanDesc = info.info.description
							.replace(
								/\[Postman Documentation\]\(https:\/\/documenter\.getpostman\.com\/view\/44402542\/2sBXVhBqLM\)/g,
								''
							)
							.trim()}
						<p class="text-base-content/60 mt-2 font-sans text-sm whitespace-pre-line">
							{cleanDesc}
						</p>
					{/if}
					<div class="mt-3 flex flex-wrap gap-2">
						<span class="badge badge-outline font-mono">v{info.info?.version}</span>
						{#if host.host}
							<span class="badge badge-outline font-mono">{host.host}{host.basePath ?? ''}</span>
						{/if}
					</div>
				</div>

				{#each Object.entries(filteredGrouped) as unknown as [string, Endpoint[]][] as [tag, endpoints]}
					<h2 class="mt-8 mb-3 flex items-center gap-3 text-xl font-bold">
						{tag}
						<span class="bg-base-300 h-px flex-1"></span>
					</h2>

					{#each endpoints as endpoint}
						{@const { path, method, op } = endpoint}
						{@const id = `${method}-${path}`}
						{@const isOpen = openCards.has(id)}
						{@const pathParams = (op.parameters ?? []).filter((p) => p.in === 'path')}
						{@const queryParams = (op.parameters ?? []).filter((p) => p.in === 'query')}
						{@const headerParams = (op.parameters ?? []).filter((p) => p.in === 'header')}
						{@const hasAuth = op.security && op.security.length > 0}

						<div {id} class="card card-bordered bg-base-200 mb-3 overflow-hidden">
							<button
								class="hover:bg-base-300 flex w-full items-center gap-3 p-4 text-left transition-colors"
								onclick={() => toggleCard(id)}
							>
								<span
									class="badge {METHOD_BADGE[method] ??
										'badge-ghost'} w-16 shrink-0 justify-center font-mono text-xs"
								>
									{method.toUpperCase()}
								</span>
								<span class="flex-1 font-mono text-sm">{path}</span>
								{#if op.summary}
									<span class="text-base-content/50 hidden text-xs sm:block">{op.summary}</span>
								{/if}
								<span
									class="text-base-content/30 text-xs transition-transform {isOpen
										? 'rotate-180'
										: ''}">▾</span
								>
							</button>

							{#if isOpen}
								<div class="border-base-300 border-t px-5 pb-5">
									{#if op.description}
										<p class="text-base-content/60 mt-4 font-sans text-sm">{op.description}</p>
									{/if}

									{#if hasAuth}
										<div class="alert alert-warning alert-soft mt-4 border py-2">
											<span class="text-xs">{m.docsAuthRequired()}</span>
										</div>
									{/if}

									{#if pathParams.length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsPathParameters()}
										</p>
										<div class="overflow-x-auto">
											<table class="table-xs table">
												<thead
													><tr
														><th>{m.docsName()}</th><th>{m.docsType()}</th><th
															>{m.docsRequired()}</th
														><th>{m.docsDescription()}</th></tr
													></thead
												>
												<tbody>
													{#each pathParams as p}
														<tr>
															<td class="font-mono">{p.name}</td>
															<td
																><span class="badge badge-ghost badge-sm font-mono"
																	>{p.type ?? p.schema?.type ?? 'any'}</span
																></td
															>
															<td
																class="{p.required ? 'text-error' : 'text-base-content/30'} text-xs"
																>{p.required ? m.docsRequiredLabel() : m.docsOptionalLabel()}</td
															>
															<td class="text-base-content/60">{p.description ?? '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}

									{#if queryParams.length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsQueryParameters()}
										</p>
										<div class="overflow-x-auto">
											<table class="table-xs table">
												<thead
													><tr
														><th>{m.docsName()}</th><th>{m.docsType()}</th><th
															>{m.docsRequired()}</th
														><th>{m.docsDescription()}</th></tr
													></thead
												>
												<tbody>
													{#each queryParams as p}
														<tr>
															<td class="font-mono">{p.name}</td>
															<td
																><span class="badge badge-ghost badge-sm font-mono"
																	>{p.type ?? p.schema?.type ?? 'any'}</span
																></td
															>
															<td
																class="{p.required ? 'text-error' : 'text-base-content/30'} text-xs"
																>{p.required ? m.docsRequiredLabel() : m.docsOptionalLabel()}</td
															>
															<td class="text-base-content/60">{p.description ?? '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}

									{#if headerParams.length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsHeaderParameters()}
										</p>
										<div class="overflow-x-auto">
											<table class="table-xs table">
												<thead
													><tr
														><th>{m.docsName()}</th><th>{m.docsType()}</th><th
															>{m.docsRequired()}</th
														><th>{m.docsDescription()}</th></tr
													></thead
												>
												<tbody>
													{#each headerParams as p}
														<tr>
															<td class="font-mono">{p.name}</td>
															<td
																><span class="badge badge-ghost badge-sm font-mono"
																	>{p.type ?? p.schema?.type ?? 'any'}</span
																></td
															>
															<td
																class="{p.required ? 'text-error' : 'text-base-content/30'} text-xs"
																>{p.required ? m.docsRequiredLabel() : m.docsOptionalLabel()}</td
															>
															<td class="text-base-content/60">{p.description ?? '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}

									{#if op.responses && Object.keys(op.responses).length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsResponses()}
										</p>
										<div class="overflow-x-auto">
											<table class="table-xs table">
												<thead
													><tr
														><th>{m.docsName()}</th><th>{m.docsType()}</th><th
															>{m.docsRequired()}</th
														><th>{m.docsDescription()}</th></tr
													></thead
												>
												<tbody>
													{#each pathParams as p}
														<tr>
															<td class="font-mono">{p.name}</td>
															<td
																><span class="badge badge-ghost badge-sm font-mono"
																	>{p.type ?? p.schema?.type ?? 'any'}</span
																></td
															>
															<td
																class="{p.required ? 'text-error' : 'text-base-content/30'} text-xs"
																>{p.required ? m.docsRequiredLabel() : m.docsOptionalLabel()}</td
															>
															<td class="text-base-content/60">{p.description ?? '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}

									{#if queryParams.length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsQueryParameters()}
										</p>
										<div class="overflow-x-auto">
											<table class="table-xs table">
												<thead
													><tr
														><th>{m.docsName()}</th><th>{m.docsType()}</th><th
															>{m.docsRequired()}</th
														><th>{m.docsDescription()}</th></tr
													></thead
												>
												<tbody>
													{#each queryParams as p}
														<tr>
															<td class="font-mono">{p.name}</td>
															<td
																><span class="badge badge-ghost badge-sm font-mono"
																	>{p.type ?? p.schema?.type ?? 'any'}</span
																></td
															>
															<td
																class="{p.required ? 'text-error' : 'text-base-content/30'} text-xs"
																>{p.required ? m.docsRequiredLabel() : m.docsOptionalLabel()}</td
															>
															<td class="text-base-content/60">{p.description ?? '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}

									{#if headerParams.length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsHeaderParameters()}
										</p>
										<div class="overflow-x-auto">
											<table class="table-xs table">
												<thead
													><tr
														><th>{m.docsName()}</th><th>{m.docsType()}</th><th
															>{m.docsRequired()}</th
														><th>{m.docsDescription()}</th></tr
													></thead
												>
												<tbody>
													{#each headerParams as p}
														<tr>
															<td class="font-mono">{p.name}</td>
															<td
																><span class="badge badge-ghost badge-sm font-mono"
																	>{p.type ?? p.schema?.type ?? 'any'}</span
																></td
															>
															<td
																class="{p.required ? 'text-error' : 'text-base-content/30'} text-xs"
																>{p.required ? m.docsRequiredLabel() : m.docsOptionalLabel()}</td
															>
															<td class="text-base-content/60">{p.description ?? '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}

									{#if op.responses && Object.keys(op.responses).length}
										<p
											class="text-base-content/40 mt-4 mb-2 text-xs font-semibold tracking-widest uppercase"
										>
											{m.docsResponses()}
										</p>
										<div class="space-y-3">
											{#each Object.entries(op.responses) as unknown as [string, { description?: string; content?: Record<string, { example?: unknown; schema?: unknown }> }][] as [code, resp]}
												{@const jsonContent = resp.content?.['application/json']}
												{@const example = jsonContent?.example}
												{@const schema = jsonContent?.schema}
												{@const resolvedExample =
													example ?? (schema ? generateExample(schema) : null)}
												<div class="bg-base-300 rounded-lg p-3">
													<div class="flex items-center gap-3">
														<span
															class="font-mono font-semibold {responseClass(code)} w-12 shrink-0"
															>{code}</span
														>
														<span class="text-base-content/80 text-sm"
															>{resp.description ?? ''}</span
														>
													</div>
													{#if resolvedExample || schema}
														<div class="mt-2">
															{#if resolvedExample}
																<p class="text-base-content/40 mb-1 text-xs">{m.docsExample()}</p>
																<pre class="bg-base-100 overflow-x-auto rounded p-2 text-xs"><code
																		>{formatJson(resolvedExample)}</code
																	></pre>
															{:else if schema}
																<p class="text-base-content/40 mb-1 text-xs">{m.docsSchema()}</p>
																<pre class="bg-base-100 overflow-x-auto rounded p-2 text-xs"><code
																		>{formatJson(schema)}</code
																	></pre>
															{/if}
														</div>
													{/if}
												</div>
											{/each}
										</div>
									{/if}
								</div>
							{/if}
						</div>
					{/each}
				{/each}
			{/if}
		{/if}
	</main>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(.docs-content h2),
	:global(.docs-content h3),
	:global(.docs-content h4) {
		font-family: theme('fontFamily.sans');
	}
	:global(.docs-content .alert) {
		font-family: theme('fontFamily.sans');
	}
	:global(.docs-content table th),
	:global(.docs-content table td) {
		font-family: theme('fontFamily.sans');
	}
</style>
