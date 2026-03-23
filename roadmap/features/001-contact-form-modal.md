# Issue #001: Contact form modal

## Context

The "Get in touch" button currently links to WhatsApp. We need a contact form modal using DaisyUI's modal structure (like the existing LLM/Bot button pattern).

## Requirements

1. Create a ContactForm modal component
2. Update CtaContact.svelte to open the modal instead of external link
3. Update Header CTA button to open the modal
4. Use existing modalState store and GlobalModal pattern

## Acceptance Criteria

- [ ] Contact form modal opens on button click
- [ ] Form has Name, Email, Subject, Message fields
- [ ] Modal uses DaisyUI styling consistent with existing modals
- [ ] Close button and backdrop click work

## Files to Modify/Create

- `src/lib/components/Modal/ContactForm.svelte` (new)
- `src/lib/components/CtaContact.svelte` (change)
- `src/lib/components/Header/HeaderContent.svelte` (change)
