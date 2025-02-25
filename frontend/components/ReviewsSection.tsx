import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Alice Dupont",
    review: "Excellent service ! Le chauffeur était à l'heure et très professionnel.",
    rating: 5,
    image: "/images/review.jpg",
  },
  {
    name: "Jean Martin",
    review: "Véhicule propre et confortable. Je recommande vivement.",
    rating: 4,
    image: "/images/review.jpg",
  },
  {
    name: "Sophie Bernard",
    review: "Réservation facile et chauffeur très aimable. Top !",
    rating: 5,
    image: "/images/review.jpg",
  },
];

export default function ReviewsSection() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Avis de nos clients
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
