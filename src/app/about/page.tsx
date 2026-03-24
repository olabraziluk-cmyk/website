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
      "We source directly from trusted suppliers in Brazil, bringing you genuine flavours. From Guarana to Farofa, every item is the real deal.",
    color: "bg-primary",
  },
  {
    icon: Beef,
    title: "Premium Butcher Cuts",
    description:
      "Our butcher counter offers the finest Brazilian cuts — Picanha, Linguica, Fraldinha. Each piece selected for quality, cut fresh for you.",
    color: "bg-accent",
  },
  {
    icon: Coffee,
    title: "Fresh Cafe Treats Daily",
    description:
      "Every morning, fresh coxinhas, pao de queijo, brigadeiros and more. Paired with rich Brazilian coffee — a piece of Brazil in every bite.",
    color: "bg-[#8B6914]",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-block relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-secondary">Story</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Bringing the warmth, flavour, and spirit of Brazil to Bournemouth
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-block bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              <span className="text-3xl font-bold text-primary float-left mr-3 mt-1 leading-none">O</span>
              la Brazil was born from a simple dream — to bring the warmth,
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

          {/* Placeholder image */}
          <div className="mt-12 aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center border-2 border-dashed border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-8 right-8 w-32 h-32 border-4 border-current rounded-full" />
              <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-current rotate-45" />
            </div>
            <span className="text-muted font-medium relative z-10">Shop photo coming soon</span>
          </div>
        </div>
      </section>

      {/* Values — Bold color blocks */}
      <section className="section-block bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">What Makes Us Different</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group text-center rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                <div className={`${value.color} p-10`}>
                  <value.icon className="w-14 h-14 text-white mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="bg-white p-8 border border-gray-100 border-t-0">
                  <h3 className="text-xl font-bold text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="h-1 bg-secondary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community — Green block */}
      <section className="section-block bg-green-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Part of the Bournemouth Community
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            From our regulars who pop in for their weekly Picanha to first-time
            visitors discovering Pao de Queijo — every visit makes our day.
          </p>
          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7 fill-secondary text-secondary"
                />
              ))}
            </div>
            <p className="text-4xl font-bold text-white mb-1">
              {businessInfo.googleRating}
            </p>
            <p className="text-white/60">
              {businessInfo.googleReviewCount} Google Reviews
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
