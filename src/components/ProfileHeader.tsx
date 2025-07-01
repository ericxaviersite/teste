
import { MapPin, Star, Users } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-900/20 to-black p-8 rounded-xl border border-red-600/20 animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Guia de Turismo"
            className="w-32 h-32 rounded-full border-4 border-red-600 object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-red-600 text-white rounded-full p-2">
            <MapPin className="w-4 h-4" />
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl font-bold text-white mb-2">Carlos Silva</h1>
          <p className="text-red-400 text-lg font-semibold mb-3">Guia de Turismo Especializado</p>
          <p className="text-gray-300 text-lg mb-4 max-w-2xl">
            Descobra os segredos mais incríveis do Brasil com 8 anos de experiência em turismo de aventura e cultural.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.9/5.0</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Users className="w-5 h-5" />
              <span className="font-semibold">500+ Clientes</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Rio de Janeiro</span>
            </div>
          </div>
        </div>

        <button className="netflix-button text-lg px-8">
          Fale Comigo
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
