interface ProductCardProps {
  name: string;
  description: string;
}

export default function ProductCard({ name, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-primary-light)]/20 via-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center">
        <span className="text-[var(--color-muted)] text-sm">Photo coming soon</span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-[var(--color-text)] mb-1">
          {name}
        </h3>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
