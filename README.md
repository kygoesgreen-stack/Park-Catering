# Park Catering - Marketing Website

Family-owned catering company in Kalispell, MT. Fire-line credibility meets Flathead Valley hospitality.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v3** with custom design tokens
- **Framer Motion** for entrance animations and scroll reveals
- **Static export** deployed to **Cloudflare Pages**

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npx serve out
```

## Cloudflare Pages Settings

- **Build command:** `npx next build`
- **Build output directory:** `out`
- **Node.js version:** 22 (pinned by `.nvmrc` and `package.json` engines)

## Environment Variables

| Variable | Purpose |
|---|---|
| `N8N_WEBHOOK_URL` | Webhook URL for the contact form lead submission |

Set `N8N_WEBHOOK_URL` in the Cloudflare Pages dashboard under Settings > Environment variables.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with condensed sections linking to full pages |
| `/about/` | Company story and background |
| `/menu/` | Catering menu categories and items |
| `/gallery/` | Photo gallery of past events |
| `/contact/` | Contact form with service and city selection |
| `/services/wedding-catering/` | Wedding catering service page |
| `/services/corporate-event-catering/` | Corporate event catering service page |
| `/services/wildfire-crew-catering/` | Wildfire crew catering service page |
| `/service-areas/kalispell-mt/` | Kalispell city page |
| `/service-areas/whitefish-mt/` | Whitefish city page |
| `/service-areas/bigfork-mt/` | Bigfork city page |
| `/service-areas/columbia-falls-mt/` | Columbia Falls city page |
| `/service-areas/lakeside-mt/` | Lakeside city page |

## Content Edit Map

| File | What you'll find |
|---|---|
| `src/config/site.ts` | NAP (name, address, phone), SEO truth, social links |
| `src/config/content.ts` | Homepage copy, hero, story, services cards, menu, gallery, testimonials, FAQ, contact, footer |
| `src/config/services.ts` | Service page content (wedding, corporate, wildfire crew) |
| `src/config/service-areas.ts` | City page content (Kalispell, Whitefish, Bigfork, Columbia Falls, Lakeside) |
| `src/config/theme.ts` | Colors and SEO metadata template |

### `src/config/site.ts` - NAP and SEO Truth

Edit `site.ts` to update business name, phone, email, address, geo coordinates, hours, and social links. All other config files import from this single source.

### `src/config/services.ts` - Service Pages

Each service entry contains: slug, H1, meta title, meta description, intro, what's included, process steps, why choose us, testimonial, pricing, FAQ, and image.

### `src/config/service-areas.ts` - City Pages

Each city entry contains: slug, H1, meta title, meta description, intro, body paragraphs, local anchors (neighborhoods/landmarks), internal links to service pages, FAQ, and image.

## Image Assets

All images are in `/public/images/`. Use lowercase hyphenated filenames.

## Design Notes

The existing palette (forest, charcoal, cream, ember) and type pairing (Fraunces plus Inter) were preserved intentionally. Forest and cream read as Northwest Montana forest and mountain. Ember reads as smoke and fire line, tying to the wildfire-crew origin of the business. Fraunces gives editorial warmth suited to weddings while Inter keeps the body copy plainly readable. This was a preservation decision, not a fresh design derivation, because the owner approved the existing look.

## Deviations from House Standard

- **Tailwind v3 retained** instead of v4. This repo runs Tailwind v3.4 with a large custom token config that the approved design depends on, and static export works fine with v3.
- **PascalCase component filenames retained.** The existing components use PascalCase (Navbar.tsx, Hero.tsx, etc.). New components follow the same convention for consistency. These are never served as URLs.
- **`/menu/` page added** to the standard architecture. For a caterer, the menu is a primary decision-making page and a strong keyword target.
- **`/reviews/` page omitted.** Only three testimonials exist. Five or more real reviews are needed for a dedicated page.

## Launch Checklist

1. **Verify the business phone number.** `(406) 758-1234` in `src/config/site.ts` is a suspected placeholder and must be confirmed against the Google Business Profile before launch.
2. **Confirm or replace `site.url`** in `src/config/site.ts` with the final domain.
3. **Set `N8N_WEBHOOK_URL`** in the Cloudflare Pages dashboard and send a test lead end to end.
4. **Add the Google Search Console verification meta tag** in `src/app/layout.tsx` (look for the TODO comment), then submit `sitemap.xml` in GSC.
5. **Fill remaining TODOs:** street address (or confirm service-area-only), business hours, email inbox, Google Business Profile URL, geo coordinates.
6. **Confirm the Instagram and Facebook URLs resolve**, or remove the social links.
7. **Supply the real Google review count and average rating**, then enable `aggregateRating` in the business JSON-LD and the star display in the hero and trust bar (both marked with TODOs in the code).

## Accessibility

All interactive elements have:
- Keyboard navigation support
- Visible focus states (`outline-2 outline-ember-500`)
- ARIA labels and roles where needed
- Alt text on all images
- Minimum 44px tap targets on mobile
- Visible sticky call bar on mobile viewports

## Lighthouse Targets

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
