import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Besoin d'un chauffeur rapidement ?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous directement par téléphone pour une réservation immédiate
        </p>
        <a 
          href="tel:+33123456789" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
        >
          <Phone className="w-6 h-6" />
          <span>02 99 12 34 56</span>
        </a>
      </div>
    </div>
  );
}