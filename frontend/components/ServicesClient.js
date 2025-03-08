"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Car, Users, Clock, Shield, Star, Check, MapPin, Calendar } from 'lucide-react';
import FareCalculator from './FareCalculator';

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState('luxe');

  const services = [
    {
      id: 'luxe',
      title: 'Transport de luxe',
      description: 'Voyagez avec style et confort dans nos véhicules haut de gamme',
      icon: Car,
      image: '/images/luxe.jpg?height=300&width=500',
      features: [
        'Véhicules premium (Mercedes Classe S, BMW Série 7)',
        'Chauffeur en costume-cravate',
        'Eau minérale et magazines offerts',
        'WiFi gratuit à bord',
        'Sièges en cuir climatisés',
      ],
      price: 'À partir de 75€',
    },
    {
      id: 'groupe',
      title: 'Transport de groupe',
      description: 'Solutions sur mesure pour vos événements et déplacements en groupe',
      icon: Users,
      image: '/images/groupe.jpeg?height=300&width=500',
      features: [
        'Véhicules jusqu\'à 8 places',
        'Idéal pour séminaires et événements',
        'Transport de bagages',
        'Coordination multi-véhicules',
        'Devis personnalisé selon vos besoins',
      ],
      price: 'Sur devis',
    },
    {
      id: 'demande',
      title: 'Service à la demande',
      description: 'Un service flexible adapté à vos besoins spécifiques',
      icon: Clock,
      image: '/images/tad.jpg?height=300&width=500',
      features: [
        'Disponible 24h/24 et 7j/7',
        'Réservation à l\'avance ou immédiate',
        'Trajets personnalisés',
        'Attente sur place possible',
        'Options supplémentaires sur demande',
      ],
      price: 'À partir de 60€',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Nos Services VTC Premium
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Des solutions de transport personnalisées pour tous vos besoins, avec des chauffeurs professionnels et des véhicules haut de gamme à Rennes.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Sécurité & Confort',
                description: 'Véhicules récents et régulièrement entretenus pour votre sécurité et confort',
              },
              {
                icon: Clock,
                title: 'Disponible 24/7',
                description: 'Service continu, réservation possible à tout moment selon vos besoins',
              },
              {
                icon: Star,
                title: 'Excellence',
                description: 'Chauffeurs expérimentés et professionnels pour un service irréprochable',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Tabs */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-8 border-b">
            {services.map((service) => (
              <button
                key={service.id}
                className={`px-6 py-3 font-medium text-lg transition-colors ${
                  activeTab === service.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {services
            .filter((service) => service.id === activeTab)
            .map((service) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Caractéristiques</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto text-center">
                      Réserver maintenant
                    </button>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinations populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Aéroport de Rennes', price: 'À partir de 45€' },
              { name: 'Gare de Rennes', price: 'À partir de 35€' },
              { name: 'Saint-Malo', price: 'À partir de 90€' },
              { name: 'Mont Saint-Michel', price: 'À partir de 120€' },
              { name: 'Nantes', price: 'À partir de 150€' },
              { name: 'Paris', price: 'À partir de 450€' },
            ].map((destination, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-blue-600" />
                    <h3 className="font-semibold">{destination.name}</h3>
                  </div>
                  <span className="text-blue-600 font-bold">{destination.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fare Calculator Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Calculez votre tarif
          </h2>
          <div className="max-w-2xl mx-auto">
            <FareCalculator />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sophie L.',
                comment: 'Service impeccable pour mon transfert à l\'aéroport. Chauffeur ponctuel et très professionnel.',
                rating: 5,
              },
              {
                name: 'Marc D.',
                comment: 'J\'utilise régulièrement leurs services pour mes déplacements professionnels. Toujours satisfait !',
                rating: 5,
              },
              {
                name: 'Julie M.',
                comment: 'Véhicule luxueux et confortable. Une expérience très agréable pour notre soirée en ville.',
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl mb-8">
            Nos conseillers sont à votre disposition pour étudier vos besoins
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+33299123456"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              02 99 12 34 56
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}