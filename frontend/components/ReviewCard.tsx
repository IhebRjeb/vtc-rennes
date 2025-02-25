import Image from "next/image";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  image: string;
}

export default function ReviewCard({ name, review, rating, image }: ReviewCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white flex flex-col items-center text-center">
      {/* User Image */}
      <Image
        src={image}
        alt={`${name}'s photo`}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />

      {/* User Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Star Rating */}
      <div className="flex gap-1 my-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm">{review}</p>
    </div>
  );
}
