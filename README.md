# Deodar Web Studio

Clean, conversion-ready website for Deodar Web Studio.

Positioning: clean websites for local businesses that need to look professional and get enquiries through WhatsApp.

## Contact configuration

Editable business details live in `src/config/site.ts`:

- `whatsAppNumber`: `919541206212`
- `email`: configurable through `NEXT_PUBLIC_DEODAR_EMAIL`
- `serviceArea`: `Based in India. Building clean websites for local businesses.`

The enquiry form generates a WhatsApp message from the contact form and opens a valid `wa.me` URL when `whatsAppNumber` is configured.
