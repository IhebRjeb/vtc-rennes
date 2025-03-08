import Image from "next/image";
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  image: string;
}

export default function ReviewCard({ name, review, rating, image }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name}'s photo`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{review}"</p>
    </div>
  );
}