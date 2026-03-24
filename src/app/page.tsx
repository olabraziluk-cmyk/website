import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Beef, Coffee, Star, ArrowRight } from "lucide-react";
import { businessInfo, reviews } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";

const pillars = [
  {
    icon: ShoppingBag,
    title: "Shop",
    description:
      "Imported Brazilian goods — Guarana, Farofa, Acai, Pao de Queijo mix and more. A taste of home.",
    href: "/menu#shop",
    color: "from-green-bg to-primary",
    bgColor: "bg-primary",
  },
  {
    icon: Beef,
    title: "Butcher",
    description:
      "Premium Brazilian cuts — Picanha, Linguica, Fraldinha. Quality you can taste, cut fresh daily.",
    href: "/menu#butcher",
    color: "from-accent to-[#0040a0]",
    bgColor: "bg-accent",
  },
  {
    icon: Coffee,
    title: "Cafe",
    description:
      "Freshly made coxinhas, brigadeiros, pao de queijo, and rich Brazilian coffee.",
    href: "/menu#cafe",
    color: "from-[#b8860b] to-[#8B6914]",
    bgColor: "bg-[#8B6914]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Aurora gradient background with bold typography */}
      <section className="relative min-h-[90vh] flex items-center justify-center aurora-bg overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-[slide-up_0.8s_ease-out]">
          <Image
            src="/logo-tagline.jpeg"
            alt="Ola Brazil — Shop, Butcher, Cafe"
            width={180}
            height={180}
            className="rounded-full mx-auto mb-10 shadow-2xl ring-4 ring-white/20"
            priority
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            Authentic Brazilian
            <span className="block text-secondary">Flavours</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-normal mt-2 text-white/80">
              in Bournemouth
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto">
            Your local Brazilian shop, butcher, and cafe
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="group bg-secondary text-text px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffe033] hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg shadow-secondary/30"
            >
              View Our Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-200 cursor-pointer"
            >
              Find Us
            </Link>
          </div>
        </div>

        {/* Bottom yellow accent stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* Three Pillars — Bold color blocks */}
      <section className="section-block bg-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">What We Offer</span>
          </h2>
          <p className="text-center text-muted text-lg mb-16 max-w-xl mx-auto">
            Three pillars of Brazilian goodness under one roof
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Color block top */}
                <div
                  className={`${pillar.bgColor} p-10 flex flex-col items-center text-white`}
                >
                  <pillar.icon className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold tracking-wide">
                    {pillar.title}
                  </h3>
                </div>
                {/* Description block */}
                <div className="bg-white p-8">
                  <p className="text-muted leading-relaxed text-center">
                    {pillar.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-accent font-semibold group-hover:gap-3 transition-all duration-200">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                {/* Yellow accent bar */}
                <div className="h-1 bg-secondary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof — Full-width bold block */}
      <section className="section-block bg-accent relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-secondary text-secondary"
                />
              ))}
            </div>
            <p className="text-5xl md:text-6xl font-bold text-white mb-2">
              {businessInfo.googleRating}
            </p>
            <p className="text-xl text-white/70">
              {businessInfo.googleReviewCount} Google Reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Instagram Teaser — Grid with overlay */}
      <section className="section-block bg-bg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Follow Us</span>
          </h2>
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-primary font-semibold hover:underline cursor-pointer inline-block mb-12"
          >
            @{businessInfo.instagram}
          </a>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              "from-primary via-green-bg to-primary-light",
              "from-accent via-[#003399] to-accent",
              "from-[#b8860b] via-secondary to-[#b8860b]",
              "from-primary-light via-primary to-green-bg",
              "from-[#003399] via-accent to-[#001a4d]",
              "from-secondary via-[#b8860b] to-secondary",
            ].map((gradient, i) => (
              <a
                key={i}
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group aspect-square rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center cursor-pointer hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <svg
                  className="w-8 h-8 text-white/40 group-hover:text-white/80 transition-colors duration-300 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
