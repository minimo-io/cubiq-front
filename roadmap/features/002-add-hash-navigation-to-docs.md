# Issue #002: Add hash navigation to custom docs page

## Context

Our custom `/docs` page doesn't support hash-based section navigation like the external Swagger UI does (e.g., `/docs#/Pay`, `/docs#/AI`, `/docs#/Users`). Product links in `products.data.ts` currently point to external Swagger because our custom page lacks this functionality.

## Requirements

1. Parse URL hash on page load and scroll to the corresponding API section/tag
2. Update browser hash when clicking on API tag groups in the sidebar/mobile nav
3. Update product links in `products.data.ts` to use `/docs#/...` instead of external URL
4. Update config in `configs.ts` to use `/docs` instead of external URL

## Acceptance Criteria

- [ ] Visiting `/docs#/Pay` scrolls to the Pay endpoint section
- [ ] Clicking a tag in sidebar updates URL hash
- [ ] Product links point to our custom docs with proper hash

## Files to Modify/Create

- `src/routes/docs/+page.svelte` — Add hash parsing and navigation logic
- `src/lib/data/products.data.ts` — Update URLs to use `/docs#/...`
- `src/lib/configs.ts` — Update `docs` URL to `/docs`
