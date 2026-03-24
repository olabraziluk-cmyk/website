import type { Metadata } from "next";
import { ShoppingBag, Beef, Coffee } from "lucide-react";
import {
  shopProducts,
  butcherProducts,
  cafeProducts,
} from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products & Menu",
  description:
    "Explore our premium Brazilian meat cuts, imported goods, and cafe menu. Picanha, Guarana, Pao de Queijo and more.",
};

const categories = [
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "butcher", label: "Butcher", icon: Beef },
  { id: "cafe", label: "Cafe", icon: Coffee },
];

export default function MenuPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
          Our Products & Menu
        </h1>
        <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
          From premium meats to authentic Brazilian goods and fresh cafe treats
        </p>
      </section>

      {/* Category Nav */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-8 py-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer"
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4 scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              Brazilian Imported Goods
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Butcher Section */}
      <section id="butcher" className="py-16 px-4 bg-white scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Beef className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              Premium Meat Cuts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {butcherProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section id="cafe" className="py-16 px-4 scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Coffee className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              Cafe & Treats
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafeProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
