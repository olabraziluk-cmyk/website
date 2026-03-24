import type { Metadata } from "next";
import { Globe, Beef, Coffee, Star } from "lucide-react";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Ola Brazil — Our Story",
  description:
    "Bringing authentic Brazilian flavours to Bournemouth. Quality imported goods, premium butcher cuts, and freshly made cafe treats.",
};

const values = [
  {
    icon: Globe,
    title: "Authentic Brazilian Imports",
    description:
      "We source our products directly from trusted suppliers in Brazil, bringing you the genuine flavours and quality you expect. From Guarana to Farofa, every item on our shelves is the real deal.",
  },
  {
    icon: Beef,
    title: "Premium Butcher Cuts",
    description:
      "Our butcher counter offers the finest Brazilian cuts — Picanha, Linguica, Fraldinha and more. Each piece is selected for quality and cut fresh for you.",
  },
  {
    icon: Coffee,
    title: "Fresh Cafe Treats Daily",
    description:
      "Every morning, we prepare fresh coxinhas, pao de queijo, brigadeiros and more. Paired with rich Brazilian coffee, it's a little piece of Brazil in every bite.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-8">
            Our Story
          </h1>
          <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed text-left md:text-center">
            <p>
              Ola Brazil was born from a simple dream — to bring the warmth,
              flavour, and spirit of Brazil to Bournemouth. What started as a
              passion for authentic Brazilian food has grown into a beloved local
              destination where the Brazilian community and curious food lovers
              come together.
            </p>
            <p>
              We are more than just a shop. We are a butcher that takes pride in
              every cut, a store filled with the tastes of home, and a cafe where
              every bite tells a story. Whether you are Brazilian missing the
              flavours of home or a local discovering something new, you are
              always welcome here.
            </p>
            <p>
              At Ola Brazil, every product is chosen with care, every recipe is
              made with love, and every customer is treated like family. That is
              the Brazilian way.
            </p>
          </div>
          <div className="mt-12 aspect-video rounded-xl bg-gradient-to-br from-[var(--color-primary-light)]/20 via-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center">
            <span className="text-[var(--color-muted)]">
              Shop photo coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-accent)] mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl hover:bg-[var(--color-bg)] transition-colors duration-200"
              >
                <value.icon className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-accent)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-[var(--color-green-bg)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Part of the Bournemouth Community
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            We are proud to serve the Bournemouth community with authentic
            Brazilian flavours. From our regular customers who pop in for their
            weekly Picanha to first-time visitors discovering Pao de Queijo —
            every visit makes our day.
          </p>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-[var(--color-secondary)] text-[var(--color-secondary)]"
              />
            ))}
          </div>
          <p className="text-white text-xl font-bold">
            {businessInfo.googleRating} — {businessInfo.googleReviewCount}{" "}
            Google Reviews
          </p>
        </div>
      </section>
    </>
  );
}
