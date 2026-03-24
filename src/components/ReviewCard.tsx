import { Star } from "lucide-react";

interface ReviewCardProps {
  quote: string;
  author: string;
}

export default function ReviewCard({ quote, author }: ReviewCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-200 hover:bg-white/15">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[var(--color-secondary)] text-[var(--color-secondary)]"
          />
        ))}
      </div>
      <p className="text-white/90 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-white font-bold text-sm">— {author}</p>
    </div>
  );
}
