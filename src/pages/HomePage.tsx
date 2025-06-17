import { useState, useEffect } from 'react';
import BrandButton from '../components/ui/BrandButton';
import ExhibitionButton from '../components/ui/ExhibitionButton';
import Slider from '../components/ui/Slider';
import { brands } from '../data/brands';
import { virtualExhibitions } from '../data/exhibitions';
import { newVehicleSlides, usedVehicleSlides } from '../data/sliders';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="pt-20">
      {/* Hero Section with Animation */}
      <section className="relative h-[70vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: `url('https://lifemadrid.com/wp-content/uploads/Gran-Via_Madrid.jpg')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-lg">
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              Descubre tu próximo vehículo
            </h1>
            <p 
              className={`text-xl text-white mb-8 transition-all duration-700 delay-300 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              En Grupo Cobendai encontrarás los mejores vehículos de las marcas más prestigiosas exclusivamente en Madrid.
            </p>
            <div 
              className={`flex space-x-4 transition-all duration-700 delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <a href="#brands" className="btn-primary-lg">
                Ver Marcas
              </a>
              <a href="#used-vehicles" className="btn-secondary-lg">
                Vehículos de Ocasión
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section id="brands" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
           CONSESIONARIOS Y <span className="text-gold-600"> SERVICIOS DE POSTVENTA</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {brands.map((brand) => (
              <BrandButton
                key={brand.id}
                name={brand.name}
                image={brand.logo}
                slug={brand.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Virtual Exhibitions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Exposiciones <span className="text-gold-600">Virtuales</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Explora nuestros vehículos desde la comodidad de tu hogar con nuestras exhibiciones virtuales detalladas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {virtualExhibitions.map((exhibition) => (
              <ExhibitionButton
                key={exhibition.id}
                id={exhibition.id}
                title={exhibition.title}
                image={exhibition.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* New Vehicles Slider */}
      <section id="new-vehicles" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Promociones <span className="text-gold-600">Vehículos Nuevos</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Descubre nuestras mejores ofertas en vehículos nuevos de todas las marcas.
          </p>
          <Slider slides={newVehicleSlides} />
        </div>
      </section>
      
      {/* Used Vehicles Slider */}
      <section id="used-vehicles" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Vehículos de <span className="text-gold-600">Ocasión</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Encuentra tu próximo vehículo seminuevo con las mejores garantías.
          </p>
          <Slider slides={usedVehicleSlides} />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas <span className="text-gold-600">Asesoramiento</span>?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Nuestro equipo de profesionales está listo para ayudarte a encontrar el vehículo perfecto para ti.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+34900123456" className="btn-gold-lg">
              Llámanos: 900 123 456
            </a>
            <a href="/contact" className="btn-white-outline-lg">
              Contactar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;