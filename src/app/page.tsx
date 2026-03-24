import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Beef,
  Coffee,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  ChevronDown,
} from "lucide-react";
import { businessInfo, reviews, stockImages } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    icon: ShoppingBag,
    title: "Shop",
    description:
      "Imported Brazilian goods — Guarana, Farofa, Acai, Pao de Queijo mix and more.",
    href: "/menu#shop",
    image: stockImages.shop,
    color: "bg-primary",
  },
  {
    icon: Beef,
    title: "Butcher",
    description:
      "Premium Brazilian cuts — Picanha, Linguica, Fraldinha. Cut fresh daily.",
    href: "/menu#butcher",
    image: stockImages.butcher,
    color: "bg-accent",
  },
  {
    icon: Coffee,
    title: "Cafe",
    description:
      "Freshly made coxinhas, brigadeiros, pao de queijo, and rich Brazilian coffee.",
    href: "/menu#cafe",
    image: stockImages.cafe,
    color: "bg-warm",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <Image
          src={stockImages.hero}
          alt="A spread of authentic Brazilian food"
          fill
          className="object-cover animate-[hero-zoom_20s_ease-in-out_infinite_alternate]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <Image
            src="/logo-tagline.jpeg"
            alt="Ola Brazil — Shop, Butcher, Cafe"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-8 shadow-2xl ring-4 ring-white/20"
            priority
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Authentic Brazilian
            <span className="block text-secondary">Flavours</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">
            Your local Brazilian shop, butcher, and cafe in Bournemouth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/menu"
              className="group bg-secondary text-text px-8 py-3 rounded-full font-semibold hover:bg-[#ffe033] transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg shadow-secondary/20"
            >
              View Our Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-200 cursor-pointer"
            >
              Find Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 animate-[bounce-gentle_2s_ease-in-out_infinite]">
          <ChevronDown className="w-5 h-5 text-white/50" />
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 text-center">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Three Pillars of Brazilian Goodness
            </h2>
            <p className="text-center text-muted mb-14 max-w-lg mx-auto">
              Everything you love about Brazil, under one roof
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 120}>
                <Link
                  href={pillar.href}
                  className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-gray-100"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-9 h-9 rounded-lg ${pillar.color} flex items-center justify-center`}
                      >
                        <pillar.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-text">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Bento Grid ── */}
      <section className="py-20 md:py-28 px-4 bg-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 text-center">
              A Taste of Brazil
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Fresh Every Day
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
                <Image
                  src={stockImages.meatGrill}
                  alt="Brazilian churrasco"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src={stockImages.cafe}
                  alt="Brazilian coffee"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src={stockImages.pastries}
                  alt="Fresh pastries"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src={stockImages.acaiBowl}
                  alt="Acai bowl"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src={stockImages.shop}
                  alt="Brazilian products"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
              >
                View our full menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col items-center mb-14">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-4xl font-bold mb-1">
                {businessInfo.googleRating}
              </p>
              <p className="text-muted text-sm">
                {businessInfo.googleReviewCount} reviews on Google
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.author} delay={i * 100}>
                <ReviewCard quote={review.quote} author={review.author} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit Us ── */}
      <section className="py-20 md:py-28 px-4 bg-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={stockImages.storeFront}
                  alt="Visit Ola Brazil"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
                  Visit Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Come Say Hello
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted">{businessInfo.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-muted hover:text-text transition-colors cursor-pointer"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted">
                      Mon–Sat 9am–6pm &middot; Sun 10am–4pm
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors duration-200 cursor-pointer"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Follow Us — Clean CTA ── */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              Follow Our Journey
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              @{businessInfo.instagram}
            </h2>
            <p className="text-muted mb-6 text-sm">
              See what&apos;s fresh today — follow us on Instagram
            </p>
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-text text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow Us
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
