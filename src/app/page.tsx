import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Beef, Coffee, Star } from "lucide-react";
import { businessInfo, reviews } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";

const pillars = [
  {
    icon: ShoppingBag,
    title: "Shop",
    description:
      "Imported Brazilian goods — from Guarana and Farofa to Acai and Pao de Queijo mix. A taste of home, right in Bournemouth.",
    href: "/menu#shop",
  },
  {
    icon: Beef,
    title: "Butcher",
    description:
      "Premium Brazilian meat cuts — Picanha, Linguica, Fraldinha and more. Quality you can taste, cut fresh daily.",
    href: "/menu#butcher",
  },
  {
    icon: Coffee,
    title: "Cafe",
    description:
      "Freshly made coxinhas, brigadeiros, pao de queijo, and rich Brazilian coffee. Come sit and enjoy.",
    href: "/menu#cafe",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#1a0e00] via-[#2d1800] to-[#0d1a00]">
        <div className="absolute inset-0 bg-[url('/logo.jpeg')] bg-center bg-no-repeat bg-contain opacity-10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Image
            src="/logo-tagline.jpeg"
            alt="Ola Brazil logo"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-8 shadow-xl"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Authentic Brazilian Flavours in Bournemouth
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Your local Brazilian shop, butcher, and cafe
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-accent)] mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center group"
              >
                <pillar.icon className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 group-hover:text-[var(--color-primary-light)] transition-colors duration-200" />
                <h3 className="text-xl font-bold text-[var(--color-accent)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                />
              ))}
            </div>
            <p className="text-white text-2xl font-bold">
              {businessInfo.googleRating} — {businessInfo.googleReviewCount}{" "}
              Google Reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard
                key={review.author}
                quote={review.quote}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Teaser */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-accent)] mb-8">
            Follow Us{" "}
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline cursor-pointer"
            >
              @{businessInfo.instagram}
            </a>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "from-amber-700 to-yellow-600",
              "from-green-700 to-emerald-500",
              "from-red-800 to-orange-600",
              "from-yellow-600 to-amber-500",
              "from-emerald-800 to-green-500",
              "from-orange-700 to-red-500",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg bg-gradient-to-br ${gradient} opacity-80 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center`}
              >
                <span className="text-white/60 text-sm">@olabraz</span>
              </div>
            ))}
          </div>
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[var(--color-primary)] font-semibold hover:underline cursor-pointer"
          >
            See more on Instagram
          </a>
        </div>
      </section>
    </>
  );
}
