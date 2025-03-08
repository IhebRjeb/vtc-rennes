import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Script from "next/script";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">VTC Rennes</h3>
              <p className="text-gray-400 mb-4">
                Service de chauffeur privé à Rennes et ses environs. Disponible 24/7 pour tous vos déplacements.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/vtcrennes" aria-label="Facebook" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/vtcrennes" aria-label="Twitter" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com/vtcrennes" aria-label="Instagram" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Services with location-specific keywords */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Nos services à Rennes</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/transport-luxe-rennes" className="text-gray-400 hover:text-white">
                    Transport de luxe à Rennes
                  </Link>
                </li>
                <li>
                  <Link href="/services/transport-aeroport-rennes" className="text-gray-400 hover:text-white">
                    Transfert aéroport Rennes
                  </Link>
                </li>
                <li>
                  <Link href="/services/transport-gare-rennes" className="text-gray-400 hover:text-white">
                    Transfert gare de Rennes
                  </Link>
                </li>
                <li>
                  <Link href="/services/transport-evenementiel-rennes" className="text-gray-400 hover:text-white">
                    Transport événementiel à Rennes
                  </Link>
                </li>
                <li>
                  <Link href="/services/transport-professionnel-rennes" className="text-gray-400 hover:text-white">
                    Transport professionnel à Rennes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Destinations - good for local SEO */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Destinations populaires</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/destinations/rennes-paris" className="text-gray-400 hover:text-white">
                    Rennes - Paris
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/rennes-nantes" className="text-gray-400 hover:text-white">
                    Rennes - Nantes
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/rennes-saint-malo" className="text-gray-400 hover:text-white">
                    Rennes - Saint-Malo
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/rennes-aeroport" className="text-gray-400 hover:text-white">
                    Rennes - Aéroport Rennes Saint-Jacques
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/rennes-mont-saint-michel" className="text-gray-400 hover:text-white">
                    Rennes - Mont Saint-Michel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact and Location Info - important for local SEO */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-400">
                    <Phone size={16} />
                    <a href="tel:+33299123456" className="hover:text-white">02 99 12 34 56</a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <Mail size={16} />
                    <a href="mailto:contact@vtc-rennes.fr" className="hover:text-white">contact@vtc-rennes.fr</a>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span>123 Rue de Rennes, 35000 Rennes, France</span>
                  </li>
                </ul>
              </address>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  SIRET: 123 456 789 00012
                </p>
              </div>
            </div>
          </div>

          {/* Additional links for SEO and user trust */}
          <div className="border-t border-gray-800 pt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">Informations légales</h4>
                <ul className="flex flex-wrap gap-4 text-xs text-gray-400">
                  <li>
                    <Link href="/mentions-legales" className="hover:text-white">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/politique-confidentialite" className="hover:text-white">
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="/conditions-generales" className="hover:text-white">
                      CGV
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="hover:text-white">
                      Plan du site
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Moyens de paiement</h4>
                <p className="text-xs text-gray-400">
                  Visa, Mastercard, American Express, PayPal, Espèces
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs pt-4">
            <p>© {currentYear} VTC Rennes. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data for Local Business - Great for SEO */}
      <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "VTC Rennes",
            "image": "https://www.vtc-rennes.fr/images/logo.jpg",
            "@id": "https://www.vtc-rennes.fr",
            "url": "https://www.vtc-rennes.fr",
            "telephone": "+33299123456",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Rue de Rennes",
              "addressLocality": "Rennes",
              "postalCode": "35000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.117266,
              "longitude": -1.677793
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/vtcrennes",
              "https://www.twitter.com/vtcrennes",
              "https://www.instagram.com/vtcrennes"
            ]
          }
        `}
      </Script>
    </>
  );
}