import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
}

export default function ProductCard({
  name,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <span className="text-muted/40 text-sm">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base text-text mb-1.5 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
