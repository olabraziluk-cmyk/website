import type { Metadata } from "next";
import { ShoppingBag, Beef, Coffee } from "lucide-react";
import { shopProducts, butcherProducts, cafeProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products & Menu",
  description:
    "Explore our premium Brazilian meat cuts, imported goods, and cafe menu. Picanha, Guarana, Pao de Queijo and more.",
};

const categories = [
  { id: "shop", label: "Shop", icon: ShoppingBag, color: "bg-primary" },
  { id: "butcher", label: "Butcher", icon: Beef, color: "bg-accent" },
  { id: "cafe", label: "Cafe", icon: Coffee, color: "bg-[#8B6914]" },
];

export default function MenuPage() {
  return (
    <>
      {/* Page Header — Bold gradient */}
      <section className="aurora-bg section-block text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Products <span className="text-secondary">&</span> Menu
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From premium meats to authentic Brazilian goods and fresh cafe treats
          </p>
        </div>
      </section>

      {/* Category Nav — Sticky */}
      <div className="sticky top-24 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-2 py-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-105 ${cat.color} text-white shadow-md`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Shop Section */}
      <section id="shop" className="section-block bg-bg scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <ShoppingBag className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Brazilian Imported Goods
              </h2>
              <p className="text-muted">Authentic products straight from Brazil</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                gradient="from-primary/15 via-primary-light/10 to-secondary/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Yellow divider */}
      <div className="accent-stripe" />

      {/* Butcher Section */}
      <section id="butcher" className="section-block bg-white scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
              <Beef className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Premium Meat Cuts
              </h2>
              <p className="text-muted">Cut fresh daily by our expert butchers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {butcherProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                gradient="from-accent/15 via-accent/10 to-primary/5"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Yellow divider */}
      <div className="accent-stripe" />

      {/* Cafe Section */}
      <section id="cafe" className="section-block bg-bg scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-[#8B6914] flex items-center justify-center shadow-lg shadow-[#8B6914]/30">
              <Coffee className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Cafe & Treats
              </h2>
              <p className="text-muted">Freshly made every morning with love</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafeProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                gradient="from-secondary/20 via-[#8B6914]/10 to-secondary/5"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
