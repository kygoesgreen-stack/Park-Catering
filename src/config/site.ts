export const site = {
  url: "https://parkcateringmt.com", // TODO: confirm final domain before launch
  name: "Park Catering",
  description: "Family-owned catering in Kalispell, MT. High-volume, no-shortcuts cooking for wildland firefighter crews, now serving weddings, corporate events, and private gatherings across the Flathead Valley and Glacier region.",
  phone: "+14067581234", // TODO: VERIFY. (406) 758-1234 looks like a placeholder. Must match GBP exactly.
  phoneDisplay: "(406) 758-1234", // TODO: verify
  email: "hello@parkcateringmt.com", // TODO: confirm this inbox exists and is monitored
  address: {
    street: "", // TODO: real street address, or leave empty and treat as service-area business
    city: "Kalispell",
    state: "MT",
    zip: "59901",
  },
  geo: { lat: 48.1958, lng: -114.3161 }, // Kalispell, MT
  hours: "Mon to Fri 8:00am to 5:00pm, Sat 9:00am to 2:00pm", // TODO: verify against GBP
  serviceArea: "Flathead Valley and Glacier National Park Region",
  social: {
    instagram: "https://instagram.com/parkcateringmt", // TODO: verify these accounts exist
    facebook: "https://facebook.com/parkcateringmt",
  },
  gbpUrl: "", // TODO: Google Business Profile / Maps link
  // Reviews: NO aggregateRating until a real Google review count exists.
  reviewCount: null,
  ratingValue: null,
} as const
