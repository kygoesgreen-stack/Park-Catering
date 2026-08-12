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
    metaDescription: 'Elegant wedding catering in Kalispell, MT. Rehearsal dinners, receptions, and post-event brunches for 20 to 400 guests. Call (406) 758-1234 for a free consultation.',
    h1: 'Wedding Catering in Kalispell, MT',
    intro: 'Your wedding day deserves food that matches the setting. Park Catering brings fire-line standards to Flathead Valley weddings, from intimate lakeside ceremonies to large-scale receptions under the Mission Mountains. We handle rehearsal dinners, receptions, and post-event brunches with the same discipline we bring to every engagement.',
    whatIncluded: [
      'Custom menu design tailored to your taste and dietary needs',
      'Rehearsal dinner service',
      'Wedding reception service (plated, buffet, or family-style)',
      'Post-event brunch catering',
      'Full setup, breakdown, and cleanup',
      'Rental coordination for linens, tables, and serviceware',
      'Professional service staff',
      'Dietary accommodation for vegetarian, vegan, gluten-free, and allergen-conscious guests',
    ],
    process: [
      { step: 'Initial Consultation', description: 'We talk through your vision, guest count, venue, and budget to understand what matters most to you.' },
      { step: 'Menu Design', description: 'Based on our conversation, we build a custom menu that reflects your taste, the season, and the Flathead Valley.' },
      { step: 'Tasting', description: 'You and your partner sample the menu before committing. We refine until it is exactly right.' },
      { step: 'Day-Of Execution', description: 'Our team arrives early, sets up, serves, and handles everything so you can focus on your guests.' },
      { step: 'Cleanup', description: 'After the last dance, we take care of breakdown, cleanup, and rental returns.' },
    ],
    whyChooseUs: 'We have catered weddings across the Flathead Valley for over two decades. Our team understands the logistics of lakeside venues, ranch properties, and mountain settings. Every plate is made from scratch with fresh, locally sourced ingredients. We do not cut corners, and we do not treat your wedding like just another event.',
    testimonial: {
      quote: 'We had 180 guests at our wedding at Flathead Lake. Every single person, from the vegetarian college roommate to the steak-and-potatoes uncle, raved about the food. Park treated our wedding like they treat the fire line: no shortcuts, no excuses.',
      attribution: 'Sarah & James K.',
      role: 'Wedding Client, August 2024',
    },
    pricing: 'Wedding catering is priced per person based on your menu, service style, and event details. We provide a detailed quote after your consultation. Ballpark ranges are available over a phone call before a formal consultation.',
    faq: [
      { question: 'How far in advance should I book my wedding?', answer: 'For weddings and large events, we recommend reaching out 6 to 12 months in advance, especially for peak summer and fall dates in the Flathead Valley.' },
      { question: 'Can you cater at outdoor venues?', answer: 'Absolutely. We regularly cater at lakeside venues, ranch properties, and mountain settings throughout the Flathead Valley. We handle all logistics including power, water, and equipment.' },
      { question: 'Do you offer tastings?', answer: 'Yes. After our initial consultation, we schedule a tasting so you can sample the menu before committing. We refine the menu until it is exactly right.' },
      { question: 'Can you accommodate dietary restrictions?', answer: 'We routinely cater for vegetarian, vegan, gluten-free, and allergen-conscious guests. Please share dietary needs at booking and we build them into the menu from the start.' },
      { question: 'What is included in the service?', answer: 'Full service includes custom menu design, setup, staffing, service, breakdown, cleanup, and rental coordination for linens, tables, and serviceware.' },
    ],
    image: 'gallery-wedding-lake.jpg',
    imageAlt: 'Elegant outdoor wedding reception by the lake at sunset',
  },
  {
    slug: 'corporate-event-catering',
    title: 'Corporate Event Catering',
    metaTitle: 'Corporate Event Catering in Kalispell, MT | Park Catering',
    metaDescription: 'Professional corporate event catering in Kalispell, MT. Retreats, galas, company picnics, and private dinners for 20 to 400 guests. Call (406) 758-1234.',
    h1: 'Corporate Event Catering in Kalispell, MT',
    intro: 'Corporate events need food that keeps people engaged and satisfied. Park Catering handles retreats, galas, company picnics, and private dinners across the Flathead Valley with full-service coordination. We manage events from 20 to 400 guests with the same precision we bring to every engagement.',
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
    whyChooseUs: 'We understand that corporate events reflect on your organization. Our team delivers consistent, high-quality food and service that makes you look good. We handle the logistics so you can focus on your guests and your event goals.',
    testimonial: {
      quote: 'We hired Park for our company retreat up at Whitefish Mountain. 60 people, three days. They handled everything, setup, service, cleanup. The food was the one thing on the agenda that nobody complained about. Which, in corporate retreat terms, is a home run.',
      attribution: 'Director of Operations, Outdoor Recreation Company',
      role: 'Corporate Retreat',
    },
    pricing: 'Corporate catering is priced based on menu, headcount, service style, and event duration. Multi-day events and retreats receive custom pricing. We provide detailed quotes after an initial consultation.',
    faq: [
      { question: 'Can you handle multi-day events?', answer: 'Yes. We regularly cater multi-day corporate retreats and conferences. We handle menu variety across days and adjust service to match your schedule.' },
      { question: 'Do you provide rental equipment?', answer: 'We coordinate rentals for tables, linens, serviceware, and equipment through trusted local partners. This is included in our full-service offering.' },
      { question: 'Can you accommodate dietary restrictions?', answer: 'Absolutely. We routinely handle vegetarian, vegan, gluten-free, and allergen-conscious diets for corporate groups. Share dietary needs during planning and we incorporate them from the start.' },
      { question: 'What is the minimum headcount?', answer: 'Our minimum for private events and weddings is typically 20 guests. For corporate events, we can discuss smaller gatherings on a case-by-case basis.' },
    ],
    image: 'gallery-wedding-indoor.jpg',
    imageAlt: 'Elegant indoor event setup with floral arrangements',
  },
  {
    slug: 'wildfire-crew-catering',
    title: 'Wildfire Crew Catering',
    metaTitle: 'Wildfire Crew Catering in Montana | Park Catering',
    metaDescription: 'High-volume wildfire crew catering in Montana. Hot meals delivered on schedule for Type 1 hand crews and firefighting teams. No headcount minimum. Call (406) 758-1234.',
    h1: 'Wildfire Crew Catering in Montana',
    intro: 'This is where Park Catering started. In 2004, we began feeding wildland firefighter crews working the rugged terrain around Glacier National Park. Two decades later, we still understand the logistics, timing, and nutritional demands of fire-line catering better than anyone in the Northern Rockies.',
    whatIncluded: [
      'High-volume field-ready meals',
      'Hot food delivered on schedule, every time',
      'Nutritionally balanced meals for demanding physical work',
      'Flexible menu options for crew preferences',
      'On-site cooking and service capabilities',
      'No headcount minimum',
      'Seasonal contracting arrangements',
      'Accommodation for dietary restrictions',
    ],
    process: [
      { step: 'Seasonal Planning', description: 'We arrange contracts before fire season so your crews have guaranteed meal service when they need it.' },
      { step: 'Daily Coordination', description: 'Each day, we coordinate with crew bosses on headcount, timing, and any menu adjustments.' },
      { step: 'Preparation and Delivery', description: 'Our team prepares meals at the required volume and delivers them hot, on schedule, to wherever the crew is stationed.' },
      { step: 'Quality Control', description: 'We maintain consistent quality across hundreds of meals per service, because fire crews cannot afford a bad meal.' },
    ],
    whyChooseUs: 'We have fed Type 1 hand crews for six seasons through some of the hardest fires in the Northern Rockies. We understand that when crews come off the line after 16 hours, that hot meal is not a luxury, it is everything. Our logistics, timing, and quality are built for the demands of wildland firefighting.',
    testimonial: {
      quote: 'Park Catering has been feeding our Type 1 hand crews for six seasons. When you\'re in the field for 16 hours, that hot meal at the end of the day isn\'t a luxury, it\'s everything. Their food has gotten us through some of the hardest fires in the Northern Rockies.',
      attribution: 'Crew Boss, Montana Department of Natural Resources',
      role: 'Wildland Fire Crew',
    },
    pricing: 'Wildfire crew catering is priced per person per day. Seasonal contracts are arranged before fire season. Contact us to discuss your crew size and service needs.',
    faq: [
      { question: 'Do you have a minimum headcount?', answer: 'No. Fire crew catering has no minimum. We feed whoever needs feeding.' },
      { question: 'How far in advance do you book fire crew contracts?', answer: 'Seasonal contracts are typically arranged before fire season. Contact us early to guarantee availability.' },
      { question: 'Can you accommodate dietary restrictions for crews?', answer: 'Yes. We handle vegetarian, vegan, gluten-free, and allergen-conscious diets. Share dietary needs during contract planning.' },
      { question: 'What is your service area for fire crew catering?', answer: 'We serve the Flathead Valley, Glacier National Park corridor, and surrounding areas. Travel fees apply beyond 50 miles from Kalispell.' },
    ],
    image: 'gallery-chef-kitchen.jpg',
    imageAlt: 'Chef in commercial kitchen preparing meals for wildfire crews',
  },
]

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug)
}
