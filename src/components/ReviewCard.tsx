import { Star } from "lucide-react";

interface ReviewCardProps {
  quote: string;
  author: string;
}

export default function ReviewCard({ quote, author }: ReviewCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-secondary text-secondary"
          />
        ))}
      </div>
      <p className="text-white/90 text-lg leading-relaxed italic mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
          {author[0]}
        </div>
        <p className="text-white font-bold">{author}</p>
      </div>
    </div>
  );
}
