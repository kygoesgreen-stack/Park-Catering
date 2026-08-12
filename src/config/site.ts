export const site = {
  // TODO: Replace with real domain once registered. Currently deployed at park-catering.pages.dev
  url: "https://park-catering.pages.dev",
  name: "Park Catering",
  description: "Family-owned catering in Kalispell, MT. High-volume, no-shortcuts cooking for wildland firefighter crews, now serving weddings, corporate events, and private gatherings across the Flathead Valley and Glacier region.",
  // TODO: Replace with real phone number
  phone: "+14065550100",
  phoneDisplay: "(406) 555-0100",
  // TODO: Replace with real email address
  email: "info@park-catering.pages.dev",
  address: {
    street: "", // TODO: real street address, or leave empty and treat as service-area business
    city: "Kalispell",
    state: "MT",
    zip: "59901",
  },
  geo: { lat: 48.1958, lng: -114.3161 }, // Kalispell, MT
  // TODO: Remove or update business hours - during fire season everyone is on assignment
  hours: "",
  serviceArea: "Flathead Valley and Glacier National Park Region",
  social: {
    // TODO: Verify these accounts exist before publishing
    instagram: "https://instagram.com/parkcateringmt",
    facebook: "https://facebook.com/parkcateringmt",
  },
  gbpUrl: "", // TODO: Google Business Profile / Maps link
  // Reviews: NO aggregateRating until a real Google review count exists.
  reviewCount: null,
  ratingValue: null,
} as const
