interface ProductCardProps {
  name: string;
  description: string;
  gradient?: string;
}

export default function ProductCard({
  name,
  description,
  gradient = "from-primary-light/20 via-secondary/10 to-accent/10",
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-100">
      <div
        className={`aspect-[4/3] bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-current rounded-full" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-current rotate-45" />
        </div>
        <span className="text-muted/60 text-sm font-medium relative z-10">
          Photo coming soon
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
