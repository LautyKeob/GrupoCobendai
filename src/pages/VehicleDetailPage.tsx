import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Fuel, Gauge, Settings } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    const foundVehicle = vehicles.find(v => v.id === id);
    if (foundVehicle) {
      setVehicle(foundVehicle);
    }
  }, [id]);
  
  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Vehículo no encontrado
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar el vehículo que estás buscando.
        </p>
        <a href="/" className="btn-primary">
          Volver a Inicio
        </a>
      </div>
    );
  }
  
  // Mock images for the gallery
  const images = [
    vehicle.image,
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Vehicle Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {vehicle.brand} {vehicle.model}
          </h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            {vehicle.year}
            <span className="mx-3">•</span>
            <Fuel className="w-5 h-5 mr-2" />
            {vehicle.fuelType}
            <span className="mx-3">•</span>
            <Settings className="w-5 h-5 mr-2" />
            {vehicle.transmission}
            {vehicle.mileage && (
              <>
                <span className="mx-3">•</span>
                <Gauge className="w-5 h-5 mr-2" />
                {vehicle.mileage.toLocaleString('es-ES')} km
              </>
            )}
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gold-600' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${vehicle.brand} ${vehicle.model} - Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Vehicle Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm text-gray-500">Precio desde</span>
                  <div className="text-3xl font-bold text-gray-900">
                    {vehicle.price.toLocaleString('es-ES')} €
                  </div>
                </div>
                {vehicle.isNew ? (
                  <span className="bg-gold-600 text-white text-sm font-bold px-3 py-1 rounded">
                    NUEVO
                  </span>
                ) : (
                  <span className="bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded">
                    OCASIÓN
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                <button className="btn-primary w-full">
                  Solicitar Información
                </button>
                <button className="btn-secondary w-full">
                  Programar Prueba de Manejo
                </button>
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Características Principales
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Fuel className="w-5 h-5 mr-2 text-gold-600" />
                  <span>{vehicle.fuelType}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Settings className="w-5 h-5 mr-2 text-gold-600" />
                  <span>{vehicle.transmission}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-gold-600" />
                  <span>{vehicle.year}</span>
                </div>
                {vehicle.mileage && (
                  <div className="flex items-center text-gray-600">
                    <Gauge className="w-5 h-5 mr-2 text-gold-600" />
                    <span>{vehicle.mileage.toLocaleString('es-ES')} km</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Descripción
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            {/* Equipment */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Equipamiento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Confort
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-gold-600 mr-2">✓</span>
                      Climatizador automático
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold-600 mr-2">✓</span>
                      Asientos calefactables
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold-600 mr-2">✓</span>
                      Control de crucero adaptativo
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Seguridad
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-gold-600 mr-2">✓</span>
                      Frenada automática de emergencia
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold-600 mr-2">✓</span>
                      Control de carril
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold-600 mr-2">✓</span>
                      Sensores de aparcamiento
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Solicitar Información
            </h2>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-input"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;