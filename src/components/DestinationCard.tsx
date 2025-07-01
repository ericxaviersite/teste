
import { MapPin, Camera } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  highlights: string[];
}

const DestinationCard = ({ name, description, image, highlights }: DestinationCardProps) => {
  return (
    <div className="netflix-card group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
          <MapPin className="w-4 h-4" />
          <span className="font-semibold">{name}</span>
        </div>
        <div className="absolute top-3 right-3">
          <Camera className="w-5 h-5 text-white/80" />
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, index) => (
            <span
              key={index}
              className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
