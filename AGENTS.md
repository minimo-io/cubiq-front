# About this repo

This is the Cubiq.lat front-end institutional website and platform repository hosted by Netlify at the moment and re-deployed via CI/CD on every push.
It is a private repository located at <https://github.com/minimo-io/cubiq-front>

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

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run check` - Run type checking

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
