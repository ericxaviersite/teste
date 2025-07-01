
interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  featured?: boolean;
}

const ServiceCard = ({ title, description, price, duration, image, featured }: ServiceCardProps) => {
  return (
    <div className={`netflix-card group cursor-pointer ${featured ? 'ring-2 ring-red-600' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            POPULAR
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm">
            Ver Detalhes
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-red-400 font-bold text-lg">{price}</span>
            <span className="text-gray-500 text-sm ml-2">{duration}</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
