# Park Catering — Marketing Website

Family-owned catering company in Kalispell, MT. Fire-line credibility meets Flathead Valley hospitality.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for entrance animations and scroll reveals
- **Deployed on Vercel**

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Content Edit Map

All copy, colors, image filenames, and CTAs are centralized in two config files. Edit these and the entire site updates.

### `src/config/content.ts` — All copy and structure

| Section | What you'll find |
|---|---|
| `site` | Business name, phone, email, address, social links |
| `nav` | Navigation links and CTA |
| `hero` | Headline, subheadline, body text, video/image filenames |
| `story` | Story paragraphs, pull quote, image filename |
| `services` | Three service cards with titles, descriptions, CTAs |
| `menu` | Four menu categories with item lists |
| `gallery` | All gallery image filenames and alt text |
| `testimonials` | All quotes, attributions, roles |
| `faq` | All FAQ question/answer pairs |
| `contact` | Form labels, placeholders, submit text |
| `footer` | Footer nav, tagline, copyright |

### `src/config/theme.ts` — Colors and SEO

- `colors` — All palette tokens (forest, charcoal, cream, ember)
- `seo` — Meta title template, default title, OpenGraph image path, address, price range

### Image Assets — `/public/images/`

Drop your images here with these filenames:

| Filename | Where used |
|---|---|
| `hero-background.jpg` | Hero background (replace with your video poster) |
| `hero-poster.jpg` | Video poster frame |
| `story-family-kitchen.jpg` | Story section left panel |
| `service-firefighters.jpg` | Wildfire Crews card |
| `service-wedding.jpg` | Weddings card |
| `service-corporate.jpg` | Private & Corporate card |
| `menu-bbq.jpg` | BBQ menu category |
| `menu-plated.jpg` | Plated Dinners category |
| `menu-buffet.jpg` | Buffet category |
| `menu-hors-doevres.jpg` | Hors d'oeuvres category |
| `gallery-01.jpg` – `gallery-08.jpg` | Gallery grid |
| `og-image.jpg` | OpenGraph social share image (1200×630) |

Video placeholder: `/public/videos/hero-placeholder.mp4`

## Connecting Resend (Email)

1. Get an API key at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY=re_your_key` to `.env.local`
3. Uncomment the Resend block in `src/app/api/contact/route.ts`
4. Update the `from` address to your verified domain

## SEO Checklist

- [ ] Replace `og-image.jpg` with your actual OG image (1200×630)
- [ ] Add your actual phone number in `src/config/content.ts` → `site.phone`
- [ ] Add your actual address in `src/config/content.ts` → `site.address`
- [ ] Update geo coordinates in `src/app/layout.tsx` (search for `48.1958, -114.316`)
- [ ] Add Google Analytics or your preferred analytics (Vercel Analytics recommended)
- [ ] Set up a custom domain in Vercel project settings

## Accessibility

All interactive elements have:
- Keyboard navigation support
- Visible focus states (`outline-2 outline-ember-500`)
- ARIA labels and roles where needed
- Alt text scaffolded (edit with your actual image descriptions)

## Lighthouse Targets

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Tips for maintaining scores:
- All images use `next/image` with proper `sizes`
- Fonts loaded with `next/font` (swap display: 'swap')
- No layout shifts (all images have aspect ratios)
- Minimal JS on initial load — all sections above fold are server-rendered