interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  