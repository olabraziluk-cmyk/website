import { businessInfo, openingHours } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Restaurant", "GroceryStore"],
    name: businessInfo.name,
    description:
      "Authentic Brazilian butcher shop, imported goods store, and cafe in Bournemouth.",
    url: "https://ola-brazil.co.uk",
    telephone: businessInfo.phone,
    image: "/logo-tagline.jpeg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "339 Wimborne Rd",
      addressLocality: "Bournemouth",
      postalCode: "BH9 2AD",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng,
    },
    openingHoursSpecification: openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.hours.split(" – ")[0],
      closes: h.hours.split(" – ")[1],
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.googleRating,
      reviewCount: businessInfo.googleReviewCount,
      bestRating: 5,
    },
    sameAs: [businessInfo.instagramUrl, businessInfo.facebookUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
