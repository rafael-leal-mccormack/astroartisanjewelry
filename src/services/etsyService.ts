export interface EtsyListing {
  listing_id: number;
  title: string;
  description: string;
  price: {
    amount: number;
    divisor: number;
    currency_code: string;
  };
  images: {
    url_570xN: string;
  }[];
  url: string;
  quantity: number;
  state: string;
}

interface EtsyResponse {
  count: number;
  results: EtsyListing[];
}

const mockListings: EtsyListing[] = [
  {
    listing_id: 1,
    title: "Celestial Moon Phase Necklace",
    description: "Handcrafted sterling silver moon phase necklace with crystal accents",
    price: {
      amount: 4500,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=570"
    }],
    url: "#",
    quantity: 5,
    state: "active"
  },
  {
    listing_id: 2,
    title: "Star Constellation Ring",
    description: "Gold-plated adjustable ring featuring your choice of constellation",
    price: {
      amount: 3200,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://images.unsplash.com/photo-1573408301185-9146fe634578?w=570"
    }],
    url: "#",
    quantity: 8,
    state: "active"
  },
  {
    listing_id: 3,
    title: "Galaxy Opal Earrings",
    description: "Stunning opal drop earrings with sterling silver backing",
    price: {
      amount: 6500,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=570"
    }],
    url: "#",
    quantity: 3,
    state: "active"
  },
  {
    listing_id: 4,
    title: "Cosmic Druzy Pendant",
    description: "Natural druzy crystal pendant with gold electroplating",
    price: {
      amount: 5500,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://images.unsplash.com/photo-1602752275174-ef42915f3685?w=570"
    }],
    url: "#",
    quantity: 4,
    state: "active"
  },
  {
    listing_id: 5,
    title: "Nebula Crystal Bracelet",
    description: "Adjustable bracelet featuring iridescent crystals in cosmic colors",
    price: {
      amount: 3800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=570"
    }],
    url: "#",
    quantity: 6,
    state: "active"
  },
  {
    listing_id: 6,
    title: "Astral Light Anklet",
    description: "Delicate sterling silver anklet with star and moon charms",
    price: {
      amount: 2900,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://images.unsplash.com/photo-1611652022419-a9419f74343p?w=570"
    }],
    url: "#",
    quantity: 10,
    state: "active"
  }
];

export const fetchEtsyListings = async (): Promise<EtsyListing[]> => {

// const response = await fetch(
//     `https://openapi.etsy.com/v3/application/shops/${process.env.REACT_APP_ETSY_SHOP_ID}/listings/active`,
//     {
//       headers: {
//         'x-api-key': process.env.REACT_APP_ETSY_API_KEY as string,
//         'Accept': 'application/json',
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error('Failed to fetch Etsy listings');
//   }

//   const data: EtsyResponse = await response.json();
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockListings;
}; 