// ============================================================
// PARK CATERING - Content Configuration
// Edit this file to update all copy, colors, images, and CTAs
// ============================================================

export const site = {
  name: 'Park Catering',
  tagline: 'Fed the front lines.',
  description:
    'Family-owned catering in Kalispell, MT. High-volume, no-shortcuts cooking for wildland firefighter crews, now serving weddings, corporate events, and private gatherings across the Flathead Valley and Glacier region.',
  // TODO: Replace with real domain once registered. Currently deployed at park-catering.pages.dev
  url: 'https://park-catering.pages.dev',
  // TODO: Replace with real phone number
  phone: '(406) 758-1234',
  // TODO: Replace with real email address
  email: 'info@park-catering.pages.dev',
  address: {
    // TODO: Replace with real street address or remove if service-area-only
    street: '',
    city: 'Kalispell',
    state: 'MT',
    zip: '59901',
  },
  serviceArea: 'Flathead Valley & Glacier National Park Region',
  social: {
    // TODO: Verify these accounts exist before publishing
    instagram: 'https://instagram.com/parkcateringmt',
    facebook: 'https://facebook.com/parkcateringmt',
  },
} as const

export const nav = {
  items: [
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/', children: [
      { label: 'Wedding Catering', href: '/services/wedding-catering/' },
      { label: 'Corporate Event Catering', href: '/services/corporate-event-catering/' },
      { label: 'Wildfire Crew Catering', href: '/services/wildfire-crew-catering/' },
    ]},
    { label: 'Service Areas', href: '/service-areas/', children: [
      { label: 'Kalispell', href: '/service-areas/kalispell-mt/' },
      { label: 'Whitefish', href: '/service-areas/whitefish-mt/' },
      { label: 'Bigfork', href: '/service-areas/bigfork-mt/' },
      { label: 'Columbia Falls', href: '/service-areas/columbia-falls-mt/' },
      { label: 'Lakeside', href: '/service-areas/lakeside-mt/' },
    ]},
    { label: 'Menu', href: '/menu/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Contact', href: '/contact/' },
  ],
  cta: { label: 'Contact Us', href: '/contact/' },
} as const

// -----------------------------------------------
// SECTION CONTENT - edit copy here
// -----------------------------------------------

export const hero = {
  headline: 'Fed the front lines.',
  subheadline: 'Catering built for the field. Refined for your event.',
  body: 'We built this operation to feed 500 people a hot meal in a dirt lot at the end of a fire road, on schedule, with no power and no kitchen. We cook on-site at your venue using our Type 3 kitchen and fleet of mobile trailers. For larger events, we can pre-prep and transport. A wedding at a Montana venue is not harder than that. It is just prettier.',
  ctas: [
    { label: 'Get a Free Quote', href: '/contact/', variant: 'primary' as const },
    { label: 'See Our Menu', href: '/menu/', variant: 'secondary' as const },
  ],
  videoPlaceholder: '/videos/montana-mountains.mp4',
  imageFilename: 'hero-background.jpg',
} as const

export const story = {
  eyebrow: 'Our Story',
  headline: 'Family roots. Fire-line standards.',
  paragraphs: [
    'Park Catering started the way many Montana businesses do: out of necessity, with no time for shortcuts. The Park family began providing hot meals to wildland firefighter crews working the rugged terrain around Glacier National Park. When you\'re feeding people who\'ve been on the fire line for 16 hours, there\'s no room for "good enough."',
    'That same discipline defines everything we do. Our Type 3 kitchen and fleet of mobile trailers operate on the same standards: fresh, locally sourced ingredients, high-volume execution without sacrificing quality, and food that people actually want to eat after a long, hard day.',
    'We cook on-site at your venue, bringing our kitchen to you. For larger events, we can pre-prep and transport meals to ensure everything arrives hot and ready. We\'re now bringing that commitment to the Flathead Valley\'s most meaningful gatherings: weddings under the Mission Mountains, corporate retreats near Whitefish, and private celebrations that deserve more than reheated catering.',
  ],
  pullQuote: {
    // TODO: Replace with real quote from family member
    text: 'We cook on-site at your venue. For larger events, we can pre-prep and transport. That\'s the advantage.',
    attribution: 'The Park Family',
  },
  imageFilename: 'story-family-kitchen.jpg',
  // TODO: Replace with real photo of mobile kitchen units
  imageAlt: 'Park Catering Type 3 kitchen trailer and support trailers staged for deployment',
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
        'Full food service camps for wildland fire incidents under Emergency Equipment Rental Agreements.',
      highlights: [
        'Type 3 kitchen + 3+ mobile trailers',
        '400-500 personnel per meal, up to 750',
        'Non-CDL equipment — deploys fast',
        'Full setup in 3-4 hours',
      ],
      imageFilename: 'gallery-chef-kitchen.jpg',
      // TODO: Replace with real photo of fire camp setup
      imageAlt: 'Park Catering Type 3 kitchen trailer deployed at fire camp',
      cta: { label: 'Inquire - Crew Catering', href: '/services/wildfire-crew-catering/' },
    },
    {
      title: 'Weddings',
      description:
        'Fresh, on-site cooking at your Montana venue. We build a menu that reflects the Flathead Valley and the people getting married.',
      highlights: [
        'Cook on-site at your venue',
        'Plated, buffet, or family-style',
        'Rehearsal dinners through brunch',
        'Custom tasting before your event',
      ],
      imageFilename: 'gallery-wedding-lake.jpg',
      imageAlt: 'Elegant outdoor wedding reception by the lake',
      cta: { label: 'Inquire - Weddings', href: '/services/wedding-catering/' },
    },
    {
      title: 'Private & Corporate',
      description:
        'Retreats, galas, company picnics, and private dinners across the Flathead Valley.',
      highlights: [
        '20 to 400 guests, up to 750',
        'Full setup, service, and breakdown',
        'Dietary accommodations included',
        'Coordinators, planners welcome',
      ],
      imageFilename: 'gallery-wedding-indoor.jpg',
      imageAlt: 'Elegant indoor event setup with floral arrangements',
      cta: { label: 'Inquire - Private & Corporate', href: '/services/corporate-event-catering/' },
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
      // TODO: Verify wild game items with Montana DPHHS before publishing
      items: ['Seared salmon', 'Prime rib', 'Chicken breast', 'Vegetarian Wellington'],
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
      // TODO: Verify wild game items with Montana DPHHS before publishing
      items: ['Bruschetta', 'Caprese skewers', 'Stuffed mushrooms', 'Wild mushroom tarts', 'Huckleberry Brie cups'],
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
    // TODO: Replace all stock photos with real photos of Park Catering units and events
    { filename: 'gallery-wedding-lake.jpg', alt: 'Outdoor event setup by the lake at sunset' },
    { filename: 'gallery-wedding-indoor.jpg', alt: 'Indoor event setup with floral arrangements' },
    { filename: 'gallery-wedding-reception.jpg', alt: 'Outdoor event tables during golden hour' },
    { filename: 'gallery-chef-kitchen.jpg', alt: 'Kitchen team preparing food for large event' },
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
  // TODO: All previous testimonials were fabricated. Delete this section or add real testimonials only.
  // Never publish a testimonial without written permission from the actual customer.
  items: [] as { quote: string; attribution: string; role: string }[],
}

export const faq = {
  eyebrow: 'FAQ',
  headline: 'Common questions.',
  items: [
    {
      question: 'How far in advance should I book?',
      answer:
         'For weddings and large events, we recommend reaching out 6 to 12 months in advance, especially for peak summer and fall dates in the Flathead Valley. Smaller private events can often be accommodated with 4 to 6 weeks notice, depending on availability. Fire crew catering is dispatched through agency resource ordering systems.',
    },
    {
      question: 'Do you have minimum headcount requirements?',
      answer:
         'For private events and weddings, our minimum is typically 20 guests. For smaller gatherings, we\'re happy to discuss options: reach out and we\'ll figure out what works.',
    },
    {
      question: 'What is your service area?',
      answer:
         'We\'re based in Kalispell and serve the greater Flathead Valley, including Whitefish, Bigfork, Lakeside, and the Glacier National Park corridor. For events outside this area, reach out: we can often make it work.',
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer:
         'Absolutely. We routinely cater for vegetarian, vegan, gluten-free, and allergen-conscious guests. We treat these with the same care as every other plate, not as an afterthought. Please share dietary needs at booking and we\'ll build them into the menu from the start.',
    },
    {
      question: 'Do you provide rentals, linens, and setup?',
      answer:
        'We handle setup and service. For rentals, linens, and tables, we can help you source from local vendors we trust.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Pricing is event-specific and depends on menu, headcount, service style, and logistics. Fire crew catering rates are set under our Emergency Equipment Rental Agreement (EERA) and available on request. Private events and weddings are quoted after a menu consultation.',
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
    service: {
      label: 'Event type',
      options: ['Wedding', 'Corporate Event', 'Private Dinner', 'Fire Crew Catering', 'Other'],
    },
    city: {
      label: 'City',
      options: ['Kalispell', 'Whitefish', 'Bigfork', 'Columbia Falls', 'Lakeside', 'Other'],
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