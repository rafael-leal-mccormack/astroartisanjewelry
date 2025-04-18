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
  tags: string[];
}

interface EtsyResponse {
  count: number;
  results: EtsyListing[];
}

export const mockListings: EtsyListing[] = [
  {
    listing_id: 1,
    title: "Head in the Clouds",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Head in the clouds adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/c6b25e/6627592103/il_1588xN.6627592103_r9k4.jpg"
    }],
    url: "https://www.etsy.com/listing/979361103/handmade-polymer-clay-earrings-head-in?ref=shop_home_feat_1&logging_key=7c386ba0e9a5621bcb8a112a9323ab09d792d165%3A979361103",
    quantity: 20,
    state: "active",
    tags: ["earrings", "polymer clay", "clouds"]
  },
  {
    listing_id: 2,
    title: "Bloom",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Bloom adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/72b219/6701482128/il_1588xN.6701482128_fasb.jpg"
    }],
    url: "https://www.etsy.com/listing/1870921880/handmade-polymer-clay-earrings-bloom?ref=shop_home_active_1&logging_key=2bad5ffd0f4746402cbce7006a2f596455f4169e%3A1870921880",
    quantity: 7,
    state: "active",
    tags: ["earrings", "polymer clay", "floral", "bloom"]
  },
  {
    listing_id: 3,
    title: "Stardew",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Stardew adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2300,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/bda5b9/6749511815/il_1588xN.6749511815_cd99.jpg"
    }],
    url: "https://www.etsy.com/listing/1870918690/handmade-polymer-clay-earrings-stardew?ref=shop_home_active_2&logging_key=984a55be71cc58b0e61ac508fa19d52084be6d6a%3A1870918690",
    quantity: 7,
    state: "active",
    tags: ["earrings", "polymer clay", "stars", "dew"]
  },
  {
    listing_id: 4,
    title: "Lucky",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Lucky design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1700,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/507d3d/6700064634/il_1588xN.6700064634_od3m.jpg"
    }],
    url: "https://www.etsy.com/listing/1885106387/handmade-polymer-clay-earrings-lucky?ref=shop_home_active_3&logging_key=d853aa4fbd5dbba909906d18fafebb30993ffd59%3A1885106387",
    quantity: 20,
    state: "active",
    tags: ["earrings", "polymer clay", "lucky", "charm"]
  },
  {
    listing_id: 5,
    title: "Spring Earrings Collection",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Spring Earrings Collection adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1700,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/157ce2/6722561463/il_1588xN.6722561463_4xx5.jpg"
    }],
    url: "https://www.etsy.com/listing/1865968364/handmade-polymer-clay-earrings-spring?ref=shop_home_active_4&crt=1&logging_key=36f232cbef7269ce94ee7fb10b0208632d17022c%3A1865968364",
    quantity: 20,
    state: "active",
    tags: ["earrings", "polymer clay", "spring", "collection", "floral"]
  },
  {
    listing_id: 6,
    title: "Cloud Nine",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Cloud Nine adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2000,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/1e8ddf/6627883807/il_1588xN.6627883807_objt.jpg"
    }],
    url: "https://www.etsy.com/listing/1214983682/handmade-polymer-clay-earrings-cloud?ref=shop_home_active_6&logging_key=272e8a8732015e40f63d7f6278f3eb3b5ed5a76d%3A1214983682",
    quantity: 20,
    state: "active",
    tags: ["earrings", "polymer clay", "clouds", "celestial"]
  },
  {
    listing_id: 7,
    title: "Stormy",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Stormy design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2500,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/f479fb/6627626133/il_1588xN.6627626133_fup9.jpg"
    }],
    url: "https://www.etsy.com/listing/1002985328/handmade-polymer-clay-earrings-stormy?ref=shop_home_active_7&logging_key=968209a867c75345f816c00e5978446ec80d983d%3A1002985328",
    quantity: 8,
    state: "active",
    tags: ["earrings", "polymer clay", "stormy", "clouds"]
  },
  {
    listing_id: 8,
    title: "Starry Night",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Starry Night design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1600,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/d763bd/6655325017/il_1588xN.6655325017_8p2k.jpg"
    }],
    url: "https://www.etsy.com/listing/1082698913/handmade-charm-earrings-starry-night?ref=shop_home_active_8&logging_key=89689175bf776c3a3fb9ccdddb2a6f91befd51b5%3A1082698913",
    quantity: 7,
    state: "active",
    tags: ["earrings", "charm", "stars", "night", "celestial"]
  },
  {
    listing_id: 9,
    title: "Golden Hour",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Golden Hour design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1400,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/a0b44e/6579767112/il_1588xN.6579767112_oyg3.jpg"
    }],
    url: "https://www.etsy.com/listing/998100365/handmade-polymer-clay-earrings-golden?ref=shop_home_active_9&logging_key=8af83fc73f2064840c62ea4d14ae3c8da333d273%3A998100365",
    quantity: 6,
    state: "active",
    tags: ["earrings", "polymer clay", "golden hour", "sun", "celestial"]
  },
  {
    listing_id: 10,
    title: "Day Dream",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Day Dream design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2500,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/653c8b/6627883365/il_1588xN.6627883365_km7u.jpg"
    }],
    url: "https://www.etsy.com/listing/1070198631/handmade-charm-earrings-day-dream-charm?ref=shop_home_active_10&logging_key=ba04109166c6732cc7ad095a72cf811ae0575ce4%3A1070198631",
    quantity: 6,
    state: "active",
    tags: ["earrings", "charm", "daydream", "clouds", "celestial"]
  },
  {
    listing_id: 11,
    title: "Witchy",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Witchy design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/ac8c21/6627620811/il_1588xN.6627620811_fy29.jpg"
    }],
    url: "https://www.etsy.com/listing/965397482/handmade-polymer-clay-earrings-witchy?ref=shop_home_active_11&logging_key=ba488f31f6ae0d2591173f4323461d9face4d992%3A965397482",
    quantity: 8,
    state: "active",
    tags: ["earrings", "polymer clay", "witchy", "moon", "celestial"]
  },
  {
    listing_id: 12,
    title: "Moonlight Rebels",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Moonlight Rebels design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1500,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/054163/6579766936/il_1588xN.6579766936_jip8.jpg"
    }],
    url: "https://www.etsy.com/listing/1001167912/handmade-polymer-clay-earrings-moonlight?ref=shop_home_active_12&logging_key=e05df943f4cfdee15dcbb2de483d4f9debf72762%3A1001167912",
    quantity: 5,
    state: "active",
    tags: ["earrings", "polymer clay", "moonlight", "moon", "celestial"]
  },
  {
    listing_id: 13,
    title: "Mariposa",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Mariposa design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/1ab2c5/6627638615/il_1588xN.6627638615_9r2i.jpg"
    }],
    url: "https://www.etsy.com/listing/1049407185/handmade-polymer-clay-earrings-mariposa?ref=shop_home_active_13&logging_key=7371fd5a5699ba376170db9a37f3cc9cbae28693%3A1049407185",
    quantity: 8,
    state: "active",
    tags: ["earrings", "polymer clay", "mariposa", "butterfly"]
  },
  {
    listing_id: 14,
    title: "Pearl Swirl",
    description: "These handmade polymer clay earrings are a stunning statement piece for any outfit. Pearl Swirl design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 1800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/b5db9c/6655323887/il_1588xN.6655323887_o18j.jpg"
    }],
    url: "https://www.etsy.com/listing/1063855634/handmade-charm-earrings-pearl-swirl?ref=shop_home_active_14&logging_key=8b307826d44c87715652e27d50c535ba5c67a432%3A1063855634",
    quantity: 20,
    state: "active",
    tags: ["earrings", "charm", "pearl", "swirl"]
  },
  {
    listing_id: 15,
    title: "Stellar",
    description: "These handmade polymer clay necklaces are a stunning statement piece for any outfit. Stellar design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/847aa0/6719852832/il_1588xN.6719852832_t1tt.jpg"
    }],
    url: "https://www.etsy.com/listing/1874840166/handmade-gold-charm-necklace-stellar?ref=shop_home_active_1&logging_key=05a06e9a7ce92b55827e630d29167552694de0d3%3A1874840166",
    quantity: 3,
    state: "active",
    tags: ["necklace", "charm", "gold", "stellar", "celestial"]
  },
  {
    listing_id: 16,
    title: "Twilight",
    description: "These handmade polymer clay necklaces are a stunning statement piece for any outfit. Twilight design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/7710cf/6719840714/il_1588xN.6719840714_kcls.jpg"
    }],
    url: "https://www.etsy.com/listing/1874838908/handmade-gold-charm-necklace-twilight?ref=shop_home_active_2&logging_key=e6e5d611cda6409a3ece9d1ac8a763e9d8a8f107%3A1874838908",
    quantity: 20,
    state: "active",
    tags: ["necklace", "charm", "gold", "twilight", "celestial"]
  },
  {
    listing_id: 17,
    title: "Cosmic",
    description: "These handmade polymer clay necklaces are a stunning statement piece for any outfit. Cosmic design adds a touch of elegance, making them perfect for everyday wear or special occasions.",
    price: {
      amount: 2800,
      divisor: 100,
      currency_code: "USD"
    },
    images: [{
      url_570xN: "https://i.etsystatic.com/28023775/r/il/f9161d/6767849131/il_1588xN.6767849131_fapg.jpg"
    }],
    url: "https://www.etsy.com/listing/1874837800/handmade-gold-charm-necklace-cosmic?ref=shop_home_active_3&logging_key=de4da181d44296a9476ce6a7a4c131695eee5c9c%3A1874837800",
    quantity: 20,
    state: "active",
    tags: ["necklace", "charm", "gold", "cosmic", "celestial"]
  },
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