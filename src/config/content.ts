// ============================================================
// PARK CATERING — Content Configuration
// Edit this file to update all copy, colors, images, and CTAs
// ============================================================

export const site = {
  name: 'Park Catering',
  tagline: 'Fed the front lines. Catering yours next.',
  description:
    'Family-owned catering in Kalispell, MT. High-volume, no-shortcuts cooking for wildland firefighter crews — now serving weddings, corporate events, and private gatherings across the Flathead Valley and Glacier region.',
  url: 'https://parkcateringmt.com',
  phone: '(406) 758-1234',
  email: 'hello@parkcateringmt.com',
  address: {
    street: '123 Main Street',
    city: 'Kalispell',
    state: 'MT',
    zip: '59901',
  },
  serviceArea: 'Flathead Valley & Glacier National Park Region',
  social: {
    instagram: 'https://instagram.com/parkcateringmt',
    facebook: 'https://facebook.com/parkcateringmt',
  },
} as const

export const nav = {
  items: [
    { label: 'Story', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Book a Tasting', href: '#contact' },
} as const

// -----------------------------------------------
// SECTION CONTENT — edit copy here
// -----------------------------------------------

export const hero = {
  headline: 'Fed the front lines.',
  subheadline: 'Catering yours next.',
  body: 'For years, we\'ve fed the crews holding the line on Montana\'s wildfires. Same standards — same care — now at your wedding, corporate event, or private gathering.',
  ctas: [
    { label: 'Book a Tasting', href: '#contact', variant: 'primary' as const },
    { label: 'See Our Work', href: '#gallery', variant: 'secondary' as const },
  ],
  videoPlaceholder: '/videos/montana-mountains.mp4',
  imageFilename: 'hero-background.jpg',
} as const

export const story = {
  eyebrow: 'Our Story',
  headline: 'Family roots. Fire-line standards.',
  paragraphs: [
    'Park Catering started the way many Montana businesses do: out of necessity, with no time for shortcuts. In 2004, the Park family began providing hot meals to wildland firefighter crews working the rugged terrain around Glacier National Park. When you\'re feeding people who\'ve been on the fire line for 16 hours, there\'s no room for "good enough."',
    'Two decades later, those same standards define everything we do. Our kitchen runs on the same discipline — fresh, locally sourced ingredients, high-volume execution without sacrificing quality, and food that people actually want to eat after a long, hard day.',
    'We\'re now bringing that commitment to the Flathead Valley\'s most meaningful gatherings: weddings under the Mission Mountains, corporate retreats near Whitefish, and private celebrations that deserve more than reheated catering.',
  ],
  pullQuote: {
    text: 'When you\'ve cooked 800 meals at 4,000 feet elevation for crews who can\'t afford a bad meal, your standards don\'t change — they just find a new audience.',
    attribution: '— The Park Family',
  },
  imageFilename: 'story-family-kitchen.jpg',
  imageAlt: 'The Park family in their Kalispell commercial kitchen',
} as const

export const services = {
  eyebrow: 'What We Cater',
  headline: 'Three kinds of work. One standard.',
  intro:
    'Every engagement starts the same way: a conversation about your event, your guests, and what matters most. From there, we build a menu and experience that fits.',
  cards: [
    {
      title: 'Wildfire Crews',
      description:
        'High-volume, field-ready meals for crews working the line in Montana\'s backcountry. We understand the logistics, the timing, and the nutritional needs. Hot food, delivered on schedule, every time.',
      imageFilename: 'gallery-chef-kitchen.jpg',
      imageAlt: 'Chef in commercial kitchen preparing meals',
      cta: { label: 'Inquire — Crew Catering', href: '#contact' },
    },
    {
      title: 'Weddings',
      description:
        'Rehearsal dinners, receptions, and post-event brunches. Plated, buffet, or family-style — we work with you to build a menu that reflects the Flathead Valley and the people getting married.',
      imageFilename: 'gallery-wedding-lake.jpg',
      imageAlt: 'Elegant outdoor wedding reception by the lake',
      cta: { label: 'Inquire — Weddings', href: '#contact' },
    },
    {
      title: 'Private & Corporate',
      description:
        'Retreats, galas, company picnics, and private dinners. We handle events from 20 to 400, with full setup, breakdown, and everything in between.',
      imageFilename: 'gallery-wedding-indoor.jpg',
      imageAlt: 'Elegant indoor event setup with floral arrangements',
      cta: { label: 'Inquire — Private & Corporate', href: '#contact' },
    },
  ],
} as const

export const menu = {
  eyebrow: 'Menu Snapshot',
  headline: 'Built for the field. Refined for your event.',
  intro:
    'This is a selection, not a full menu. We build every event menu around your guests, your venue, and your taste. Tell us what you\'re envisioning and we\'ll make it happen.',
  categories: [
    {
      name: 'BBQ & Smoked',
      items: ['Slow-smoked brisket', 'Pulled pork', 'Smoked ribs', 'BBQ chicken', 'Smoked sausage links'],
      imageFilename: 'menu-bbq.jpg',
      imageAlt: 'Slow-smoked brisket and pulled pork spread',
    },
    {
      name: 'Plated Dinners',
      items: ['Herb-crusted elk medallions', 'Seared salmon', 'Duck breast', 'Prime rib', 'Vegetarian Wellington'],
      imageFilename: 'menu-plated.jpg',
      imageAlt: 'Elegant plated dinner with seasonal vegetables',
    },
    {
      name: 'Buffet',
      items: ['Carved meats station', 'Seasonal salads', 'House-made sides', 'Bread selection', 'Dessert display'],
      imageFilename: 'menu-buffet.jpg',
      imageAlt: 'Buffet setup with carved meats and seasonal dishes',
    },
    {
      name: 'Hors d\'oeuvres',
      items: ['Elk chorizo bites', 'Bison carpaccio crostini', 'Smoked trout puffs', 'Wild mushroom tarts', 'Huckleberry Brie cups'],
      imageFilename: 'menu-hors-doevres.jpg',
      imageAlt: 'Artful hors d\'oeuvres display',
    },
  ],
  cta: { label: 'Request Full Menu', href: '#contact' },
} as const

export const gallery = {
  eyebrow: 'Gallery',
  headline: 'Moments from the kitchen to the event.',
  images: [
    { filename: 'gallery-wedding-lake.jpg', alt: 'Elegant outdoor wedding reception by the lake at sunset' },
    { filename: 'gallery-wedding-indoor.jpg', alt: 'Beautiful indoor wedding reception with floral arrangements' },
    { filename: 'gallery-wedding-reception.jpg', alt: 'Outdoor wedding reception tables during golden hour' },
    { filename: 'gallery-chef-kitchen.jpg', alt: 'Chef in commercial kitchen preparing gourmet meals' },
    { filename: 'gallery-event-prep.jpg', alt: 'Kitchen team preparing food for large event' },
    { filename: 'gallery-brisket.jpg', alt: 'Slow-smoked brisket being sliced for service' },
    { filename: 'gallery-smoked-meat.jpg', alt: 'Smoked beef brisket on wooden cutting board' },
    { filename: 'gallery-glacier.jpg', alt: 'Glacier National Park mountain landscape' },
    { filename: 'gallery-montana-landscape.jpg', alt: 'Montana mountains and open fields' },
  ],
} as const

export const testimonials = {
  eyebrow: 'Testimonials',
  headline: 'What our clients say.',
  items: [
    {
      quote:
        'Park Catering has been feeding our Type 1 hand crews for six seasons. When you\'re in the field for 16 hours, that hot meal at the end of the day isn\'t a luxury — it\'s everything. Their food has gotten us through some of the hardest fires in the Northern Rockies.',
      attribution: 'Crew Boss, Montana Department of Natural Resources',
      role: 'Wildland Fire Crew',
    },
    {
      quote:
        'We had 180 guests at our wedding at Flathead Lake. Every single person — from the vegetarian college roommate to the steak-and-potatoes uncle —raved about the food. Park treated our wedding like they treat the fire line: no shortcuts, no excuses.',
      attribution: 'Sarah & James K.',
      role: 'Wedding Client, August 2024',
    },
    {
      quote:
        'We hired Park for our company retreat up at Whitefish Mountain. 60 people, three days. They handled everything — setup, service, cleanup. The food was the one thing on the agenda that nobody complained about. Which, in corporate retreat terms, is a home run.',
      attribution: 'Director of Operations, Outdoor Recreation Company',
      role: 'Corporate Retreat',
    },
  ],
} as const

export const faq = {
  eyebrow: 'FAQ',
  headline: 'Common questions.',
  items: [
    {
      question: 'How far in advance should I book?',
      answer:
        'For weddings and large events, we recommend reaching out 6–12 months in advance, especially for peak summer and fall dates in the Flathead Valley. Smaller private events can often be accommodated with 4–6 weeks notice, depending on availability. Fire crew contracts are typically arranged seasonally.',
    },
    {
      question: 'Do you have minimum headcount requirements?',
      answer:
        'For private events and weddings, our minimum is typically 20 guests. For smaller gatherings, we\'re happy to discuss options — reach out and we\'ll figure out what works. Fire crew catering has no minimum; we feed whoever needs feeding.',
    },
    {
      question: 'What is your service area?',
      answer:
        'We\'re based in Kalispell and serve the greater Flathead Valley, including Whitefish, Bigfork, Lakeside, and the Glacier National Park corridor. For events outside this area, reach out — we can often make it work, and travel fees apply beyond 50 miles.',
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer:
        'Absolutely. We routinely cater for vegetarian, vegan, gluten-free, and allergen-conscious guests. We treat these with the same care as every other plate — not as an afterthought. Please share dietary needs at booking and we\'ll build them into the menu from the start.',
    },
    {
      question: 'Do you provide rentals, linens, and setup?',
      answer:
        'Yes. We offer full-service event coordination including rentals, linens, tables, and staffing. We partner with trusted local vendors for equipment and can recommend vendors we trust for anything beyond our own inventory.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Pricing is event-specific and depends on menu, headcount, service style, and logistics. Fire crew catering is typically priced per-person-per-day. Private events and weddings are quoted after a menu consultation. We\'re happy to share ballpark ranges over a call before a formal consultation.',
    },
  ],
} as const

export const contact = {
  eyebrow: 'Get in Touch',
  headline: 'Let\'s talk about your event.',
  intro:
    'Fill out the form below and we\'ll be in touch within one business day. For quicker response, call or email us directly.',
  formFields: {
    name: 'Your name',
    email: 'Email address',
    phone: 'Phone number',
    eventType: {
      label: 'Event type',
      options: ['Wedding', 'Corporate Event', 'Private Dinner', 'Fire Crew Catering', 'Other'],
    },
    date: 'Event date (if known)',
    headcount: 'Estimated headcount',
    message: 'Tell us about your event',
    messagePlaceholder:
      'Where is your venue? What\'s the vibe you\'re going for? Any dietary needs, menu ideas, or questions you have for us?',
    submit: 'Send Inquiry',
    submitting: 'Sending...',
    success: 'Thank you! We\'ll be in touch within one business day.',
    error: 'Something went wrong. Please try again or email us directly.',
  },
  note: `We serve the Flathead Valley and Glacier National Park corridor, including Kalispell, Whitefish, Bigfork, Lakeside, and Columbia Falls.`,
} as const

export const footer = {
  tagline: 'Family-owned catering in Kalispell, MT.',
  nav: [
    { label: 'Story', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright: `© ${new Date().getFullYear()} Park Catering. All rights reserved.`,
} as const