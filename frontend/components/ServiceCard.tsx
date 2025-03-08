import { Car, Calendar, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  // Determine which icon to use based on the title
  const getIcon = () => {
    if (title.includes("luxe")) return <Car className="w-8 h-8 text-blue-600" />;
    if (title.includes("professionnel")) return <Calendar className="w-8 h-8 text-blue-600" />;
    if (title.includes("événementiel")) return <Users className="w-8 h-8 text-blue-600" />;
    return <Car className="w-8 h-8 text-blue-600" />; // Default icon
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {getIcon()}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}