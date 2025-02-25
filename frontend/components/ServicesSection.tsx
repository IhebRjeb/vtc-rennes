import ServiceCard from "./ServiceCard";

const services = [
  { title: "Transport de luxe", description: "Voyagez avec style dans nos véhicules haut de gamme" },
  { title: "Transport professionnel", description: "Service ponctuel pour vos déplacements d'affaires" },
  { title: "Transport événementiel", description: "Solutions sur mesure pour vos événements spéciaux" },
];

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Les meilleurs services VTC à Rennes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
