import Image from "next/image";
import SearchForm from "./SearchForm";

export default function HeroSection() {
  return (
    <div className="relative h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/vtc-background.jpg"
          alt="BLUE LUXURY VTC background"
          fill
          className="object-cover brightness-50"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-blue-600/70">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 text-center">
            BLUE LUXURY VTC - Réservez votre chauffeur
          </h1>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-white mb-8">
            {[
              "Annulation gratuite sur la plupart des réservations",
              "Service disponible 24/7",
              "Support client en français et en anglais",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-lg bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-white">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Search Form */}
          <SearchForm />
        </div>
      </div>
    </div>
  );
}