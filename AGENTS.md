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
- **i18n**: inlang/paraglide-js
- **Icons**: @lucide/svelte
- **Fonts**: @fontsource-variable/fira-code, @fontsource/source-sans-pro, @fontsource/tiny5

# Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run check` - Run type checking
