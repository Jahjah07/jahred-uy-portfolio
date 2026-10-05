# Jahred Uy Portfolio

Next.js portfolio with featured projects, source-reviewed project pages and a contact form.

```sh
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
node --test tests/contact.test.mjs
```

## Deployment

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to this deployment's public URL, without a trailing slash. Configure `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` on the server and hosting provider; the sender must be authorized by Resend. The contact recipient is fixed to khikho107@gmail.com. No secrets belong in NEXT_PUBLIC variables.

The contact form uses the [Resend REST API](https://resend.com/docs/api-reference/emails/send-email). Without configuration the Contact page hides the form and directs visitors to email, WhatsApp, or phone. After adding the mail settings, rebuild/redeploy to enable the form. A successful API response means provider acceptance, not confirmed inbox delivery. Check real delivery after deployment. Honeypot and same-origin checks are basic abuse controls; enable hosting/WAF rate limits before public launch.

Fonts are bundled locally from Next.js's Geist font assets so builds need no Google Fonts requests. See `public/fonts/OFL.txt`.

`docs/project-evidence.md` records source review and limitations. Supplied résumé/CV downloads and screenshots for SME Operations CRM, LandVault, Cozy Pantry, and April are included. DentalFlow screenshot evidence is included; workflow source remains pending. No invented screenshots or business outcomes are included.

## Browser verification

On Windows with Chrome and Python's websocket-client installed, start the production server on port 3012, then run `python scripts/verify-browser.py`. Checks cover 390/768/1024/1440/1895px layouts, horizontal overflow, landmarks, mobile menu Escape/focus behavior, and contact form validation or direct email access. Captures are written to ignored `artifacts/browser/`. Tests send no real email.
