// ============================================================
// PARK CATERING: Service Pages Configuration
// Each service page pulls its content from here
// ============================================================

import { site } from '@/config/site'

export interface ServiceEntry {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  whatIncluded: string[]
  process: { step: string; description: string }[]
  whyChooseUs: string
  testimonial: {
    quote: string
    attribution: string
    role: string
  }
  pricing: string
  faq: { question: string; answer: string }[]
  image: string
  imageAlt: string
}

export const services: ServiceEntry[] = [
  {
    slug: 'wedding-catering',
    title: 'Wedding Catering',
    metaTitle: 'Wedding Catering in Kalispell, MT | Park Catering',
    metaDescription: 'Wedding catering in Kalispell, MT. Rehearsal dinners, receptions, and post-event brunches. Fire-line standards applied to your special day. Call (406) 555-0100.',
    h1: 'Wedding Catering in Kalispell, MT',
    intro: 'Your wedding day deserves food that matches the setting. Park Catering brings fire-line standards to Flathead Valley weddings, from intimate lakeside ceremonies to large-scale receptions under the Mission Mountains. We built this operation to feed 500 people a hot meal in a dirt lot at the end of a fire road, on schedule, with no power and no kitchen. A wedding at a Montana venue is not harder than that. It is just prettier.',
    whatIncluded: [
      'Custom menu design tailored to your taste and dietary needs',
      'Rehearsal dinner service',
      'Wedding reception service (plated, buffet, or family-style)',
      'Post-event brunch catering',
      'Full setup, breakdown, and cleanup',
      'Professional service staff',
      'Dietary accommodation for vegetarian, vegan, gluten-free, and allergen-conscious guests',
    ],
    process: [
      { step: 'Initial Consultation', description: 'We talk through your vision, guest count, venue, and budget to understand what matters most to you.' },
      { step: 'Menu Design', description: 'Based on our conversation, we build a custom menu that reflects your taste, the season, and the Flathead Valley.' },
      { step: 'Day-Of Execution', description: 'Our team arrives early, sets up, serves, and handles everything so you can focus on your guests.' },
      { step: 'Cleanup', description: 'After the last dance, we take care of breakdown and cleanup.' },
    ],
    whyChooseUs: 'We built this operation to feed 500 people a hot meal in a dirt lot at the end of a fire road, on schedule, with no power and no kitchen. That capability translates directly to wedding catering: we can handle any venue, any guest count within our capacity, and any dietary requirement with the same precision. Every plate is made from scratch with fresh, locally sourced ingredients.',
    // TODO: Delete this fabricated testimonial. Never publish a testimonial without written permission from the actual customer.
    testimonial: {
      quote: '',
      attribution: '',
      role: '',
    },
    pricing: 'Wedding catering is priced per person based on your menu, service style, and event details. We provide a detailed quote after your consultation.',
    faq: [
      { question: 'How far in advance should I book my wedding?', answer: 'For weddings and large events, we recommend reaching out 6 to 12 months in advance, especially for peak summer and fall dates in the Flathead Valley.' },
      { question: 'Can you cater at outdoor venues?', answer: 'Absolutely. We regularly cater at lakeside venues, ranch properties, and mountain settings throughout the Flathead Valley. Our mobile kitchen setup means we can operate anywhere.' },
      { question: 'Can you accommodate dietary restrictions?', answer: 'We routinely cater for vegetarian, vegan, gluten-free, and allergen-conscious guests. Please share dietary needs at booking and we build them into the menu from the start.' },
    ],
    image: 'gallery-wedding-lake.jpg',
    imageAlt: 'Outdoor event setup by the lake at sunset',
  },
  {
    slug: 'corporate-event-catering',
    title: 'Corporate Event Catering',
    metaTitle: 'Corporate Event Catering in Kalispell, MT | Park Catering',
    metaDescription: 'Corporate event catering in Kalispell, MT. Retreats, galas, company picnics, and private dinners. Fire-line discipline applied to your event. Call (406) 555-0100.',
    h1: 'Corporate Event Catering in Kalispell, MT',
    intro: 'Corporate events need food that keeps people engaged and satisfied. Park Catering handles retreats, galas, company picnics, and private dinners across the Flathead Valley with full-service coordination. We built this operation to feed 500 people a hot meal in a dirt lot at the end of a fire road, on schedule, with no power and no kitchen. A corporate event at a Montana venue is not harder than that. It is just indoor.',
    whatIncluded: [
      'Custom menu design for your event type and audience',
      'Retreat and multi-day event catering',
      'Gala and formal dinner service',
      'Company picnic and casual event catering',
      'Private dinner parties',
      'Full setup, breakdown, and cleanup',
      'Professional service staff',
      'Dietary accommodation for all needs',
    ],
    process: [
      { step: 'Event Planning', description: 'We discuss your event goals, guest count, venue, and budget to build a catering plan that fits.' },
      { step: 'Menu Development', description: 'We create a menu that matches your event tone, from casual picnic spreads to formal plated dinners.' },
      { step: 'Coordination', description: 'We work with your event team on timing, logistics, and any special requirements.' },
      { step: 'Execution', description: 'Our team handles setup, service, and breakdown so your team can focus on the event itself.' },
    ],
    whyChooseUs: 'We understand that corporate events reflect on your organization. Our team delivers consistent, high-quality food and service that makes you look good. We built this operation to feed 500 people a hot meal in a dirt lot at the end of a fire road, on schedule, with no power and no kitchen. That capability translates directly to corporate catering: we can handle any venue, any guest count within our capacity, and any dietary requirement with the same precision.',
    // TODO: Delete this fabricated testimonial. Never publish a testimonial without written permission from the actual customer.
    testimonial: {
      quote: '',
      attribution: '',
      role: '',
    },
    pricing: 'Corporate catering is priced based on menu, headcount, service style, and event duration. Multi-day events and retreats receive custom pricing. We provide detailed quotes after an initial consultation.',
    faq: [
      { question: 'Can you handle multi-day events?', answer: 'Yes. We regularly cater multi-day corporate retreats and conferences. We handle menu variety across days and adjust service to match your schedule.' },
      { question: 'Can you accommodate dietary restrictions?', answer: 'Absolutely. We routinely handle vegetarian, vegan, gluten-free, and allergen-conscious diets for corporate groups. Share dietary needs during planning and we incorporate them from the start.' },
      { question: 'What is the minimum headcount?', answer: 'Our minimum for private events and weddings is typically 20 guests. For corporate events, we can discuss smaller gatherings on a case-by-case basis.' },
    ],
    image: 'gallery-wedding-indoor.jpg',
    imageAlt: 'Indoor event setup with floral arrangements',
  },
  {
    slug: 'wildfire-crew-catering',
    title: 'Wildfire Crew Catering',
    metaTitle: 'Wildfire Crew Catering in Montana | Park Catering',
    metaDescription: 'Type 3 kitchen for Montana wildfires. 400-500 personnel per meal service, scalable to 750 with advance planning. EERA available. Call (406) 555-0100.',
    h1: 'Wildfire Crew Catering in Montana',
    intro: 'Park Catering operates a Type 3 kitchen with a fleet of 3+ mobile trailers for wildland fire incidents across Montana and surrounding states. Consistent capacity of 400 to 500 personnel per meal service, scalable to 750 with advance planning. We mobilize to incidents and operate full food service camps under Emergency Equipment Rental Agreements (EERA). Our non-CDL equipment means we can deploy fast without waiting on a licensed driver.',
    whatIncluded: [
      'Type 3 kitchen with fleet of 3+ mobile trailers',
      'Consistent capacity: 400 to 500 personnel per meal service',
      'Scalable to 750 with advance planning',
      'Full setup: 3 to 4 hours on incident',
      'Demobilization: 3 to 4 hours',
      'Crew of 4 to 9 depending on incident size',
      'All units sized under 26,001 lbs combined (no CDL required)',
      'Onboard potable water: 320 gallons',
      'Gray water capacity: 400 gallons',
    ],
    process: [
      { step: 'Resource Ordering', description: 'Incidents order our unit through agency dispatch and resource ordering systems. We deploy when assigned.' },
      { step: 'Mobilization', description: 'We deploy our Type 3 kitchen trailer and fleet of support trailers: prep/serving trailer, refrigerated trailer, dry storage box truck, handwashing station, and crew quarters.' },
      { step: 'Setup', description: 'Full setup takes 3 to 4 hours. We establish a complete food service camp ready for meal service.' },
      { step: 'Meal Service', description: 'We operate according to the incident meal specification, providing nutritionally balanced meals on schedule.' },
      { step: 'Demobilization', description: 'When released, we demobilize in 3 to 4 hours and return to staging.' },
    ],
    whyChooseUs: 'Our Type 3 kitchen and fleet of 3+ mobile trailers deliver consistent capacity of 400 to 500 personnel per meal service, scalable to 750 with advance planning. All equipment is sized under 26,001 lbs combined, so no CDL is required to mobilize. We carry 320 gallons of potable water and 400 gallons of gray water capacity. This is a purpose-built mobile kitchen, not a delivery service.',
    // TODO: Delete this fabricated testimonial. Never publish a testimonial without written permission from the actual customer.
    testimonial: {
      quote: '',
      attribution: '',
      role: '',
    },
    pricing: 'Rates are set under our Emergency Equipment Rental Agreement (EERA) and available on request. Mobilization and travel are handled under the agreement.',
    faq: [
      { question: 'What is your unit type?', answer: 'We operate a Type 3 kitchen with a fleet of 3+ mobile trailers. Consistent capacity of 400 to 500 personnel per meal service, scalable to 750 with advance planning.' },
      { question: 'What is an EERA?', answer: 'An Emergency Equipment Rental Agreement is the contract vehicle for deploying mobile resources to fire incidents. Incidents order our unit through agency dispatch and resource ordering systems.' },
      { question: 'Do you require a CDL?', answer: 'No. All units are sized under 26,001 lbs combined, so no CDL is required to mobilize. This means we can deploy fast without waiting on a licensed driver.' },
      { question: 'What equipment do you bring?', answer: 'A fleet of 3+ trailers: Type 3 kitchen trailer, prep and serving trailer, refrigerated trailer, dry storage box truck, handwashing station trailer, and crew quarters camper. Plus three tow vehicles.' },
      { question: 'What is your water capacity?', answer: '320 gallons potable water, 400 gallons gray water. Water is typically supplied on incident.' },
      { question: 'How long does setup take?', answer: 'Full setup takes 3 to 4 hours. Demobilization is also 3 to 4 hours.' },
    ],
    image: 'gallery-chef-kitchen.jpg',
    // TODO: Replace with real photo of Park Catering units deployed at fire camp
    imageAlt: 'Park Catering mobile kitchen units deployed at Montana fire camp',
  },
]

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug)
}
