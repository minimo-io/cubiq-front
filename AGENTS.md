# About this repo

This is the Cubiq.lat front-end institutional website and platform repository hosted by Netlify at the moment and re-deployed via CI/CD on every push.
It is a private repository located at <https://github.com/minimo-io/cubiq-front>

## Company Context

Cubiq is a product-led software factory based in Uruguay, building digital products and a Backend-as-a-Service platform for LATAM startups. They are an AI-driven company, managed by humans: they create, operate, and scale digital businesses in LATAM.

- Institutional site: https://www.cubiq.lat
- API: https://api.cubiq.lat
- API docs: https://api.cubiq.lat/docs — JSON format: https://api.cubiq.lat/docs-json

## Agent Guidelines

1. **git pull first** - At the start of each session or before beginning a new implementation, run `git pull` to fetch the latest changes.
2. **Bump version BEFORE creating each commit** - If a `package.json` exists, bump the patch version by 1 (e.g. `0.7.80` → `0.7.81`) BEFORE creating the commit. This applies to ALL commits — code changes, documentation, refactoring, etc. NEVER create a commit without first bumping the version. If committing code changes separately from the version bump, ensure both commits are pushed together in a single push operation.
3. **Commit format** - Use commit messages starting with `"AGENT:"` prefix. Confirm what will be committed before committing.
4. **Never push automatically** - Always ask before pushing.
5. **Don't expose secrets** - Never commit `.env` files, credentials, API keys, or any secrets to the repository.
6. **Don't run Docker commands locally** - Running `docker compose up` or `docker compose build` locally will deploy to production (api.cubiq.lat). Only run Docker commands when explicitly instructed. Most of the time this should be done on the development server (100.69.199.77 via Tailscale). Running locally is a temporary fallback only when the development server is offline.
7. **Ask before destructive commands** - Confirm with the user before running commands like `docker compose down -v`, database truncations, or force pushes.
8. **Don't kill processes blindly** - Never kill processes by port number without first checking what is running on that port. The server runs multiple applications. Always use `lsof -i :PORT` or `netstat -tlnp | grep PORT` to identify the process first.
9. **Don't make assumptions** - Ask for clarification when requirements are unclear rather than guessing.
10. **Never install packages without confirmation** - Always ask before installing new dependencies.
11. **Verify with tests** - Run relevant tests when possible to verify solutions work correctly.
12. **Be concise** - Keep responses short and to the point.

# Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **UI**: Tailwind CSS 4, DaisyUI
- **Database**: PostgreSQL (via Knex)
- **Authentication**: JWT, bcrypt
- **Email**: Mailgun
- **QR Codes**: jsbarcode, lean-qr
- **Markdown**: marked, gray-matter
- **Icons**: @lucide/svelte
- **Fonts**: @fontsource-variable/fira-code, @fontsource/source-sans-pro, @fontsource/tiny5

# Commands

- `npm run dev` - Start dev server (local only)
- `npm run dev -- --host` - Start dev server with network access
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run check` - Run type checking
- `npm run format` - Auto-fix formatting

# Project Structure

- `src/routes/` - SvelteKit page routes
- `src/lib/components/` - Svelte components
- `src/lib/components/Drawer/` - Mobile drawer/navigation components
- `messages/` - Translation source files

# Code Style

- Uses **Svelte 5** with runes: `$state`, `$derived`, `$effect`
- UI components use **DaisyUI** classes
- Custom pixel font styling: `fw-pixel` class
- Dark theme via `data-theme="cubiq-dark"`

# Translations

Uses **inlang/paraglide-js** for i18n.

## Files

- `messages/` - source translation files: `pt.json`, `en.json`, `es.json`
- `src/paraglide/` - generated runtime (do not edit)
- `project.inlang/settings.json` - locale config

## Finding translations

Search in `messages/{locale}.json`. Base locale is `pt`.

## Adding translations

1. Add key to all 3 files: `messages/pt.json`, `messages/en.json`, `messages/es.json`
2. Import: `import { m } from '$paraglide/messages'`
3. Use: `m.yourKeyName()`
4. For URLs: `import { localizeHref } from '$paraglide/runtime'`

## Example

```svelte
<script>
	import { m } from '$paraglide/messages';
</script>

<span>{m.welcome()}</span>
```

# Blog Posts

Blog posts are stored as Markdown files in `src/lib/data/posts/`. The build process automatically generates `posts.ts` and `featuredPosts.ts` from these files.

## Adding a new blog post

1. **Create MD files** for each language:
   - `src/lib/data/posts/{number}-{slug}-en.md` (English)
   - `src/lib/data/posts/{number}-{slug}-es.md` (Spanish)
   - `src/lib/data/posts/{number}-{slug}-pt.md` (Portuguese)

2. **Frontmatter format**:

   ```yaml
   ---
   title: 'Post Title'
   excerpt: 'Short description'
   date: 2026-03-25
   featured: false
   isMain: false
   image: /path/to/image.png
   authors:
     - name: Author Name
       avatar: /avatar.png
   ---
   ```

3. **Run the build script**:
   ```bash
   npm run process:posts
   ```

## Notes

- The `number` prefix determines processing order (e.g., `16-` comes after `15-`)
- The `slug` in the filename becomes the URL slug
- Slug format generated: `/blog/{slug}` (pt), `/en/blog/{slug}` (en), `/es/blog/{slug}` (es)
- Do NOT edit `posts.ts` or `featuredPosts.ts` manually - they are auto-generated
- The `icon` field is optional and only used for featured posts (use icon name like `Beer`, `Terminal`, etc.)
