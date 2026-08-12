// ============================================================
// PARK CATERING: Service Areas Configuration
// Each city page pulls its content from here
// ============================================================

import { site } from '@/config/site'

export interface CityEntry {
  slug: string
  city: string
  state: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  body: string[]
  localAnchors: string[]
  internalLinks: { label: string; href: string }[]
  faq: { question: string; answer: string }[]
  image: string
  imageAlt: string
}

export const serviceAreas: CityEntry[] = [
  {
    slug: 'kalispell-mt',
    city: 'Kalispell',
    state: 'MT',
    metaTitle: 'Catering Services in Kalispell, MT | Park Catering',
    metaDescription: 'Full-service catering in Kalispell, MT. Weddings, corporate events, and wildfire crew catering. Family-owned since 2004. Call (406) 758-1234.',
    h1: 'Catering Services in Kalispell, MT',
    intro: 'Park Catering is based in Kalispell, Montana, the heart of the Flathead Valley. From our home base, we serve weddings, corporate events, private gatherings, and wildfire crews across the region. Being based here means we know the venues, the vendors, and the logistics that make events work in this part of Montana.',
    body: [
      'Kalispell is where it all started. The Park family began feeding wildland firefighter crews here in 2004, and the city remains our home base. From downtown Main Street to the Buffalo Hill area, from the Flathead County Fairgrounds to Lawrence Park, we know this city and the venues that make events work here.',
      'We cater weddings at lakeside venues along Flathead Lake, corporate retreats at properties near Glacier Park International Airport, and private gatherings in homes and community spaces throughout the Kalispell area. Our team handles everything from intimate dinners to large-scale events for up to 400 guests.',
      'As a Kalispell-based caterer, we have relationships with local vendors, understand the seasonal rhythms of the Flathead Valley, and can respond quickly to last-minute needs. Whether you are planning a wedding, a corporate event, or a private celebration, we bring fire-line standards to every plate.',
    ],
    localAnchors: ['Downtown Main Street', 'Flathead County Fairgrounds', 'Lawrence Park', 'Buffalo Hill area', 'Glacier Park International Airport'],
    internalLinks: [
      { label: 'Wedding catering in Kalispell', href: '/services/wedding-catering/' },
      { label: 'Corporate event catering in Kalispell', href: '/services/corporate-event-catering/' },
      { label: 'Wildfire crew catering in Montana', href: '/services/wildfire-crew-catering/' },
    ],
    faq: [
      { question: 'Do you cater events at venues in downtown Kalispell?', answer: 'Yes. We cater at venues throughout Kalispell, including downtown Main Street area venues, community spaces, and private residences.' },
      { question: 'What is your service area around Kalispell?', answer: 'We serve Kalispell and the greater Flathead Valley, including Whitefish, Bigfork, Lakeside, and Columbia Falls. Travel fees apply beyond 50 miles from our Kalispell base.' },
      { question: 'Can you handle large events in Kalispell?', answer: 'Yes. We handle events from 20 to 400 guests. Our Kalispell kitchen and team are equipped for large-scale service.' },
    ],
    image: 'gallery-montana-landscape.jpg',
    imageAlt: 'Montana mountain landscape near Kalispell',
  },
  {
    slug: 'whitefish-mt',
    city: 'Whitefish',
    state: 'MT',
    metaTitle: 'Catering Services in Whitefish, MT | Park Catering',
    metaDescription: 'Premium catering in Whitefish, MT. Weddings at Whitefish Mountain Resort, corporate retreats, and private events. Call (406) 758-1234.',
    h1: 'Catering Services in Whitefish, MT',
    intro: 'Whitefish is the Flathead Valley\'s destination event market. From Whitefish Mountain Resort on Big Mountain to downtown Central Avenue, we cater weddings, corporate retreats, and private gatherings in one of Montana\'s most scenic settings. Park Catering brings fire-line standards to Whitefish events of every scale.',
    body: [
      'Whitefish draws visitors year-round for its mountain setting, lake access, and vibrant downtown. We cater weddings at venues near Whitefish Lake, corporate retreats at properties on Big Mountain, and private events along Central Avenue and the surrounding areas.',
      'The Whitefish Mountain Resort area is a popular choice for destination weddings and corporate retreats. Our team understands the logistics of mountain venues, from load-in access to weather contingencies. We coordinate with local rental vendors and handle all setup and breakdown.',
      'Whether you are planning a lakeside wedding, a corporate gala, or a private dinner party, we bring the same commitment to quality that has defined Park Catering since 2004. Every plate is made from scratch with fresh, locally sourced ingredients.',
    ],
    localAnchors: ['Whitefish Mountain Resort on Big Mountain', 'Downtown Central Avenue', 'Whitefish Lake', 'Whitefish Lake Golf Club area'],
    internalLinks: [
      { label: 'Wedding catering in Whitefish', href: '/services/wedding-catering/' },
      { label: 'Corporate event catering in Whitefish', href: '/services/corporate-event-catering/' },
      { label: 'Wildfire crew catering in Montana', href: '/services/wildfire-crew-catering/' },
    ],
    faq: [
      { question: 'Do you cater at Whitefish Mountain Resort?', answer: 'Yes. We regularly cater weddings, retreats, and events at Whitefish Mountain Resort and properties on Big Mountain.' },
      { question: 'What types of events do you cater in Whitefish?', answer: 'We cater weddings, corporate retreats, galas, private dinners, and group events throughout the Whitefish area.' },
      { question: 'Is there a travel fee for Whitefish events?', answer: 'Whitefish is within our standard service area. Travel fees apply for locations beyond 50 miles from our Kalispell base.' },
    ],
    image: 'gallery-glacier.jpg',
    imageAlt: 'Mountain landscape near Whitefish, Montana',
  },
  {
    slug: 'bigfork-mt',
    city: 'Bigfork',
    state: 'MT',
    metaTitle: 'Catering Services in Bigfork, MT | Park Catering',
    metaDescription: 'Catering in Bigfork, MT. Lakeside weddings, arts community events, and private gatherings. Family-owned since 2004. Call (406) 758-1234.',
    h1: 'Catering Services in Bigfork, MT',
    intro: 'Bigfork sits where the Swan River meets Flathead Lake, offering some of the most picturesque event settings in the Flathead Valley. Park Catering serves lakeside weddings, arts community events, and private gatherings in this charming Montana village.',
    body: [
      'Bigfork Village and Electric Avenue give this town its character. We cater events along the Swan River, at venues on Bigfork Bay, and at properties near Eagle Bend and the east shore of Flathead Lake. The village\'s arts community and lakeside setting make it a unique choice for weddings and private celebrations.',
      'Lakeside weddings are a specialty. We handle the logistics of waterfront venues, from catering setup to coordination with local rental vendors. Our team knows the area and the venues that work best for different event sizes and styles.',
      'Whether you are planning a lakeside wedding, a community gathering, or a private dinner, we bring the same discipline and quality that has defined Park Catering since 2004. Every plate is made from scratch with fresh, locally sourced ingredients.',
    ],
    localAnchors: ['Bigfork Village and Electric Avenue', 'Swan River', 'Bigfork Bay', 'Eagle Bend area', 'East shore of Flathead Lake'],
    internalLinks: [
      { label: 'Wedding catering in Bigfork', href: '/services/wedding-catering/' },
      { label: 'Corporate event catering in Bigfork', href: '/services/corporate-event-catering/' },
      { label: 'Wildfire crew catering in Montana', href: '/services/wildfire-crew-catering/' },
    ],
    faq: [
      { question: 'Do you cater lakeside weddings in Bigfork?', answer: 'Yes. Lakeside weddings are a specialty. We handle venues along Flathead Lake, the Swan River, and Bigfork Bay.' },
      { question: 'What is the minimum headcount for Bigfork events?', answer: 'Our minimum for private events and weddings is typically 20 guests. Contact us to discuss your specific needs.' },
      { question: 'Can you cater at private residences in Bigfork?', answer: 'Yes. We regularly cater at private residences and properties throughout the Bigfork area. We handle all logistics and cleanup.' },
    ],
    image: 'gallery-wedding-reception.jpg',
    imageAlt: 'Outdoor wedding reception near Bigfork, Montana',
  },
  {
    slug: 'columbia-falls-mt',
    city: 'Columbia Falls',
    state: 'MT',
    metaTitle: 'Catering Services in Columbia Falls, MT | Park Catering',
    metaDescription: 'Catering in Columbia Falls, MT. Glacier National Park gateway events, weddings, and group gatherings. Call (406) 758-1234.',
    h1: 'Catering Services in Columbia Falls, MT',
    intro: 'Columbia Falls is the gateway to Glacier National Park, hosting park-adjacent weddings, group events, and private gatherings. Park Catering serves this community with the same fire-line standards we have maintained since 2004.',
    body: [
      'Columbia Falls sits at the edge of Glacier National Park, making it a natural choice for events that want a mountain setting without the drive deep into the backcountry. We cater at venues along Nucleus Avenue, near Bad Rock Canyon, and in the Meadow Lake area.',
      'As the West Glacier gateway town, Columbia Falls sees group events tied to park visits, family reunions, and destination weddings. Our team understands the seasonal flow of the area and plans catering around your group\'s schedule and needs.',
      'Whether you are planning a park-adjacent wedding, a group dinner, or a private celebration, we bring fresh, locally sourced ingredients and fire-line discipline to every plate. Full setup, service, and cleanup are included.',
    ],
    localAnchors: ['Nucleus Avenue', 'Bad Rock Canyon', 'West Glacier gateway', 'Meadow Lake area'],
    internalLinks: [
      { label: 'Wedding catering in Columbia Falls', href: '/services/wedding-catering/' },
      { label: 'Corporate event catering in Columbia Falls', href: '/services/corporate-event-catering/' },
      { label: 'Wildfire crew catering in Montana', href: '/services/wildfire-crew-catering/' },
    ],
    faq: [
      { question: 'Do you cater events near Glacier National Park?', answer: 'Yes. Columbia Falls is the gateway to Glacier, and we regularly cater park-adjacent weddings, group events, and family gatherings.' },
      { question: 'Can you handle group events for park visitors?', answer: 'We cater group dinners, reunions, and events for visitors staying in the Columbia Falls and West Glacier area. Contact us with your group size and dates.' },
      { question: 'What is the minimum headcount?', answer: 'Our minimum for private events is typically 20 guests. For park-adjacent group events, contact us to discuss your needs.' },
    ],
    image: 'gallery-montana-landscape.jpg',
    imageAlt: 'Montana landscape near Columbia Falls and Glacier National Park',
  },
  {
    slug: 'lakeside-mt',
    city: 'Lakeside',
    state: 'MT',
    metaTitle: 'Catering Services in Lakeside, MT | Park Catering',
    metaDescription: 'Catering in Lakeside, MT. West shore Flathead Lake events, intimate gatherings, and private residence catering. Call (406) 758-1234.',
    h1: 'Catering Services in Lakeside, MT',
    intro: 'Lakeside sits on the west shore of Flathead Lake, offering intimate settings for private events and lakefront gatherings. Park Catering serves this community with fresh, locally sourced food and the discipline that has defined us since 2004.',
    body: [
      'Lakeside offers a quieter side of the Flathead Valley. The west shore of Flathead Lake provides a backdrop for intimate weddings, private residence events, and small gatherings. We cater at lakefront properties, in the Somers area just north, and near Blacktail Mountain.',
      'Private residence catering is a specialty here. Many Lakeside events take place at homes and properties along the lake. We handle all logistics, from portable kitchen setup to full cleanup, so you can host without the stress.',
      'Whether you are planning a lakeside dinner, a private wedding, or a small corporate retreat, we bring the same commitment to quality that has defined Park Catering since 2004. Every plate is made from scratch with fresh, locally sourced ingredients.',
    ],
    localAnchors: ['West shore of Flathead Lake', 'Blacktail Mountain', 'Somers area'],
    internalLinks: [
      { label: 'Wedding catering in Lakeside', href: '/services/wedding-catering/' },
      { label: 'Corporate event catering in Lakeside', href: '/services/corporate-event-catering/' },
      { label: 'Wildfire crew catering in Montana', href: '/services/wildfire-crew-catering/' },
    ],
    faq: [
      { question: 'Do you cater at private residences in Lakeside?', answer: 'Yes. Private residence catering is a specialty. We handle setup, service, and full cleanup at homes and properties along Flathead Lake.' },
      { question: 'What types of events do you cater in Lakeside?', answer: 'We cater intimate weddings, private dinners, small corporate retreats, and family gatherings throughout the Lakeside area.' },
      { question: 'Is there a minimum headcount for Lakeside events?', answer: 'Our minimum for private events is typically 20 guests. For smaller gatherings, contact us to discuss options.' },
    ],
    image: 'gallery-wedding-lake.jpg',
    imageAlt: 'Lakeside wedding venue on Flathead Lake',
  },
]

export function getCityBySlug(slug: string): CityEntry | undefined {
  return serviceAreas.find((c) => c.slug === slug)
}
