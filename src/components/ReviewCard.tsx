import { Star } from "lucide-react";

interface ReviewCardProps {
  quote: string;
  author: string;
}

export default function ReviewCard({ quote, author }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-text leading-relaxed mb-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
          {author[0]}
        </div>
        <p className="text-sm font-semibold text-text">{author}</p>
      </div>
    </div>
  );
}
