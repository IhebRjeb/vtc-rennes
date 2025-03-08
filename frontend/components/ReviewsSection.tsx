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
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Avis de nos clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a 
            href="/reviews" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Voir tous les avis
          </a>
        </div>
      </div>
    </div>
  );
}