
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TestimonialCard = ({ name, location, rating, comment, avatar }: TestimonialCardProps) => {
  return (
    <div className="netflix-card p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-red-600/50"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative">
        <Quote className="w-6 h-6 text-red-600/50 mb-2" />
        <p className="text-gray-300 italic leading-relaxed">{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
