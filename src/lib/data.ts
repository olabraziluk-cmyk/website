/* ───────── Stock images (Unsplash — free, replace with real photos later) ───────── */

export const stockImages = {
  // Hero & section backgrounds (all verified HTTP 200)
  hero: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80",
  menuHero:
    "https://images.unsplash.com/photo-1689774504345-6cf299b0b312?auto=format&fit=crop&w=1920&q=80",
  aboutHero:
    "https://images.unsplash.com/photo-1749871615234-98bff62995ba?auto=format&fit=crop&w=1920&q=80",
  contactHero:
    "https://images.unsplash.com/photo-1759301495161-31027c795358?auto=format&fit=crop&w=1920&q=80",

  // Pillar / category images
  shop: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80",
  butcher:
    "https://images.unsplash.com/photo-1558030137-d464dd688b00?auto=format&fit=crop&w=800&q=80",
  cafe: "https://images.unsplash.com/photo-1426174840074-541ae41efdb9?auto=format&fit=crop&w=800&q=80",

  // Gallery images
  meatGrill:
    "https://images.unsplash.com/photo-1558030137-d464dd688b00?auto=format&fit=crop&w=800&q=80",
  pastries:
    "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
  acaiBowl:
    "https://images.unsplash.com/photo-1534533783939-127a70e7babe?auto=format&fit=crop&w=800&q=80",
  storeFront:
    "https://images.unsplash.com/photo-1757010055832-de355d2f8f06?auto=format&fit=crop&w=1200&q=80",

  // Product-level images (verified)
  steak:
    "https://images.unsplash.com/photo-1625144093498-bf62fca631c5?auto=format&fit=crop&w=600&q=80",
  sausages:
    "https://images.unsplash.com/photo-1768962286432-cf190fecb2e2?auto=format&fit=crop&w=600&q=80",
  ribs: "https://images.unsplash.com/photo-1558030137-d464dd688b00?auto=format&fit=crop&w=600&q=80",
  coffeeBeans:
    "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&w=600&q=80",
  dessert:
    "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?auto=format&fit=crop&w=600&q=80",
  cheeseBread:
    "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80",
  drinks:
    "https://images.unsplash.com/photo-1524904237821-786af6d620ca?auto=format&fit=crop&w=600&q=80",
  friedSnack:
    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
};

/* ───────── Business info ───────── */

export const businessInfo = {
  name: "Olá Brazil",
  tagline: "SHOP | BUTCHER | CAFE",
  address: "339 Wimborne Rd, Bournemouth BH9 2AD",
  phone: "01202 023216",
  whatsapp: "+447487288855",
  whatsappLink: "https://wa.me/447487288855",
  instagram: "olabraz",
  instagramUrl: "https://www.instagram.com/olabraz",
  facebook: "olabrazltd",
  facebookUrl: "https://www.facebook.com/olabrazltd",
  googleRating: 5.0,
  googleReviewCount: 237,
  coordinates: { lat: 50.7384, lng: -1.8547 },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.5!2d-1.8547!3d50.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s339+Wimborne+Rd%2C+Bournemouth+BH9+2AD!5e0!3m2!1sen!2suk!4v1",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const reviews = [
  {
    quote: "Lovely homemade food and great service from the staff!",
    author: "Carol Romo",
  },
  {
    quote:
      "A great variety of Brazilian products and amazing customer service.",
    author: "Bia Goncalves",
  },
  {
    quote: "Excellent place for meats and groceries, lots of options.",
    author: "FLT TV",
  },
];

/* ───────── Products ───────── */

export const shopProducts = [
  {
    id: "guarana",
    name: "Guarana Antarctica",
    description:
      "Brazil's favourite soft drink — a sweet, fruity fizz made from Amazonian guarana berries.",
    image: stockImages.drinks,
  },
  {
    id: "farofa",
    name: "Farofa",
    description:
      "Toasted cassava flour seasoned with garlic and herbs — the essential side for any Brazilian meal.",
    image: stockImages.shop,
  },
  {
    id: "pao-de-queijo-mix",
    name: "Pao de Queijo Mix",
    description:
      "Ready-to-bake cheese bread mix. Just add eggs and oil for authentic, chewy Brazilian cheese rolls.",
    image: stockImages.cheeseBread,
  },
  {
    id: "acai-pulp",
    name: "Acai Pulp",
    description:
      "Frozen pure acai berry pulp straight from the Amazon — blend into bowls or smoothies.",
    image: stockImages.acaiBowl,
  },
  {
    id: "brazilian-coffee",
    name: "Brazilian Coffee",
    description:
      "Premium ground coffee from Minas Gerais — rich, smooth, and full-bodied.",
    image: stockImages.coffeeBeans,
  },
  {
    id: "leite-moca",
    name: "Leite Moca (Condensed Milk)",
    description:
      "The iconic Brazilian condensed milk — essential for brigadeiros, puddings, and desserts.",
    image: stockImages.dessert,
  },
];

export const butcherProducts = [
  {
    id: "picanha",
    name: "Picanha",
    description:
      "The king of Brazilian cuts — tender rump cap with a rich fat layer, perfect for churrasco.",
    image: stockImages.steak,
  },
  {
    id: "linguica",
    name: "Linguica",
    description:
      "Traditional Brazilian pork sausage seasoned with garlic and paprika — ideal for grilling.",
    image: stockImages.sausages,
  },
  {
    id: "fraldinha",
    name: "Fraldinha",
    description:
      "Bottom sirloin flap — a juicy, flavourful cut loved for barbecues and slow roasting.",
    image: stockImages.steak,
  },
  {
    id: "costela",
    name: "Costela",
    description:
      "Beef ribs slow-cooked to perfection — fall-off-the-bone tender with deep, smoky flavour.",
    image: stockImages.ribs,
  },
  {
    id: "alcatra",
    name: "Alcatra",
    description:
      "Top sirloin — a versatile, lean cut great for grilling, roasting, or slicing thin for steak.",
    image: stockImages.steak,
  },
  {
    id: "cupim",
    name: "Cupim",
    description:
      "Beef hump — a uniquely Brazilian cut that's incredibly tender when slow-roasted for hours.",
    image: stockImages.meatGrill,
  },
];

export const cafeProducts = [
  {
    id: "coxinha",
    name: "Coxinha",
    description:
      "Crispy fried dough filled with shredded chicken and cream cheese — Brazil's favourite snack.",
    image: stockImages.friedSnack,
  },
  {
    id: "pao-de-queijo",
    name: "Pao de Queijo",
    description:
      "Warm, chewy cheese bread rolls made with tapioca flour — gluten-free and irresistible.",
    image: stockImages.cheeseBread,
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro",
    description:
      "Rich chocolate truffles rolled in sprinkles — the classic Brazilian party sweet.",
    image: stockImages.dessert,
  },
  {
    id: "pastel",
    name: "Pastel",
    description:
      "Light, crispy pastry pockets filled with meat, cheese, or palm hearts — a street food staple.",
    image: stockImages.friedSnack,
  },
  {
    id: "cafe-coffee",
    name: "Fresh Brazilian Coffee",
    description:
      "Freshly brewed single-origin coffee — strong, smooth, and served the Brazilian way.",
    image: stockImages.cafe,
  },
  {
    id: "acai-bowl",
    name: "Acai Bowl",
    description:
      "Thick, frozen acai blended and topped with granola, banana, and honey — pure energy.",
    image: stockImages.acaiBowl,
  },
];

export const openingHours = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
  { day: "Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
];
