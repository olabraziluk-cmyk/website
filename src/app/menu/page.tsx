import type { Metadata } from "next";
import Image from "next/image";
import { ShoppingBag, Beef, Coffee } from "lucide-react";
import {
  shopProducts,
  butcherProducts,
  cafeProducts,
  stockImages,
} from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Products & Menu",
  description:
    "Explore our premium Brazilian meat cuts, imported goods, and cafe menu. Picanha, Guarana, Pao de Queijo and more.",
};

const categories = [
  { id: "shop", label: "Shop", icon: ShoppingBag, color: "bg-primary" },
  { id: "butcher", label: "Butcher", icon: Beef, color: "bg-accent" },
  { id: "cafe", label: "Cafe", icon: Coffee, color: "bg-warm" },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] max-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={stockImages.menuHero}
          alt="Brazilian food spread"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our Products <span className="text-secondary">&</span> Menu
          </h1>
          <p className="text-base text-white/70 max-w-md mx-auto">
            From premium meats to authentic Brazilian goods and fresh cafe
            treats
          </p>
        </div>
      </section>

      {/* Category Nav — Sticky */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-2 py-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-105 ${cat.color} text-white shadow-sm`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Shop Section */}
      <section id="shop" className="py-16 md:py-24 px-4 bg-bg scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text">
                  Brazilian Imported Goods
                </h2>
                <p className="text-muted text-sm">
                  Authentic products straight from Brazil
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shopProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  image={product.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Butcher Section */}
      <section
        id="butcher"
        className="py-16 md:py-24 px-4 bg-white scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Beef className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text">
                  Premium Meat Cuts
                </h2>
                <p className="text-muted text-sm">
                  Cut fresh daily by our expert butchers
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {butcherProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  image={product.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section id="cafe" className="py-16 md:py-24 px-4 bg-bg scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-warm flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text">
                  Cafe & Treats
                </h2>
                <p className="text-muted text-sm">
                  Freshly made every morning with love
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cafeProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  image={product.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
