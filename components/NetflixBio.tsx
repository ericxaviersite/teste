
import ProfileHeader from './ProfileHeader';
import ServiceCard from './ServiceCard';
import DestinationCard from './DestinationCard';
import TestimonialCard from './TestimonialCard';
import { Instagram, Youtube, Link } from 'lucide-react';

const NetflixBio = () => {
  const services = [
    {
      title: "City Tour Rio de Janeiro",
      description: "Conheça os pontos turísticos mais famosos do Rio com um guia especializado",
      price: "R$ 150",
      duration: "6 horas",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
      featured: true
    },
    {
      title: "Trilha Pedra Bonita",
      description: "Aventura na natureza com vista panorâmica da cidade maravilhosa",
      price: "R$ 120",
      duration: "4 horas",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop"
    },
    {
      title: "Tour Gastronômico",
      description: "Saboreie a culinária local nos melhores restaurantes e botecos",
      price: "R$ 180",
      duration: "5 horas",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    }
  ];

  const destinations = [
    {
      name: "Cristo Redentor",
      description: "Uma das Sete Maravilhas do Mundo Moderno",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=250&fit=crop",
      highlights: ["Histórico", "Vista Panorâmica", "Imperdível"]
    },
    {
      name: "Pão de Açúcar",
      description: "Bondinho e vista espetacular da Baía de Guanabara",
      image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=250&fit=crop",
      highlights: ["Aventura", "Fotografia", "Romântico"]
    },
    {
      name: "Floresta da Tijuca",
      description: "A maior floresta urbana do mundo",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      highlights: ["Natureza", "Trilhas", "Cachoeiras"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Experiência incrível! Carlos conhece cada cantinho do Rio e tornou nossa viagem inesquecível.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Profissional excepcional, pontual e muito divertido. Recomendo sem dúvidas!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Services Section */}
        <section className="mt-12 animate-slide-in-right">
          <h2 className="section-title">Meus Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Destinations Section */}
        <section className="mt-12 animate-fade-in-up">
          <h2 className="section-title">Destinos Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12 animate-slide-in-right">
          <h2 className="section-title">O Que Dizem Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-12 animate-fade-in-up">
          <h2 className="section-title">Me Siga nas Redes</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@carlosguiario</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <Youtube className="w-5 h-5" />
              <span className="font-semibold">Carlos Guia RJ</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <Link className="w-5 h-5" />
              <span className="font-semibold">Site Oficial</span>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Sua Próxima Aventura?
            </h2>
            <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato comigo e vamos planejar uma experiência única e inesquecível no Rio de Janeiro!
            </p>
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Agendar Agora
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NetflixBio;
