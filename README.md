# Deodar Web Studio

Founder-led website, commerce and business-system studio site for Deodar Web Studio.

Positioning: websites and business systems built to generate enquiries, enable transactions and simplify operations for Indian and international clients.

## Contact configuration

Editable business details live in `src/config/site.ts`:

- `whatsAppNumber`: `919541206212`
- `email`: configurable through `NEXT_PUBLIC_DEODAR_EMAIL`
- `locationLine`: `Based in India, working remotely with businesses and product teams across India and internationally.`

The enquiry form prepares the same structured project brief for WhatsApp, email draft when `NEXT_PUBLIC_DEODAR_EMAIL` is configured, or copy-to-clipboard fallback.

## Production URL

Public URLs are resolved through `NEXT_PUBLIC_SITE_URL` when configured, then Vercel's production URL, then a local-development fallback.
