import type { Metadata } from "next";
import Image from "next/image";
import { Globe, Beef, Coffee, Star } from "lucide-react";
import { businessInfo, stockImages } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Ola Brazil — Our Story",
  description:
    "Bringing authentic Brazilian flavours to Bournemouth. Quality imported goods, premium butcher cuts, and freshly made cafe treats.",
};

const values = [
  {
    icon: Globe,
    title: "Authentic Imports",
    description:
      "We source directly from trusted suppliers in Brazil, bringing you genuine flavours. From Guarana to Farofa, every item is the real deal.",
    color: "bg-primary",
  },
  {
    icon: Beef,
    title: "Premium Cuts",
    description:
      "Our butcher counter offers the finest Brazilian cuts — Picanha, Linguica, Fraldinha. Each piece selected for quality, cut fresh for you.",
    color: "bg-accent",
  },
  {
    icon: Coffee,
    title: "Fresh Daily",
    description:
      "Every morning, fresh coxinhas, pao de queijo, brigadeiros and more. Paired with rich Brazilian coffee — a piece of Brazil in every bite.",
    color: "bg-warm",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] max-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={stockImages.aboutHero}
          alt="Inside a warm restaurant"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our <span className="text-secondary">Story</span>
          </h1>
          <p className="text-base text-white/70 max-w-md mx-auto">
            Bringing the warmth, flavour, and spirit of Brazil to Bournemouth
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-5 text-base text-muted leading-relaxed">
                <p className="text-lg text-text font-medium">
                  Ola Brazil was born from a simple dream — to bring the warmth,
                  flavour, and spirit of Brazil to Bournemouth.
                </p>
                <p>
                  What started as a passion for authentic Brazilian food has
                  grown into a beloved local destination where the Brazilian
                  community and curious food lovers come together.
                </p>
                <p>
                  We are more than just a shop. We are a butcher that takes
                  pride in every cut, a store filled with the tastes of home,
                  and a cafe where every bite tells a story. Whether you are
                  Brazilian missing the flavours of home or a local discovering
                  something new, you are always welcome here.
                </p>
                <p>
                  At Ola Brazil, every product is chosen with care, every recipe
                  is made with love, and every customer is treated like family.
                  That is the Brazilian way.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={stockImages.storeFront}
                  alt="Ola Brazil store"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 px-4 bg-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 text-center">
              What Makes Us Different
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Our Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-5`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              Our Community
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Part of Bournemouth
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              From our regulars who pop in for their weekly Picanha to
              first-time visitors discovering Pao de Queijo — every visit makes
              our day.
            </p>
            <div className="inline-flex flex-col items-center bg-bg rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-3xl font-bold mb-1">
                {businessInfo.googleRating}
              </p>
              <p className="text-muted text-sm">
                {businessInfo.googleReviewCount} Google Reviews
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
