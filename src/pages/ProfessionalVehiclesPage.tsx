import { useState, useEffect } from 'react';
import VehicleCard from '../components/ui/VehicleCard';
import VehicleFilters from '../components/filters/VehicleFilters';
import { vehicles } from '../data/vehicles';

const ProfessionalVehiclesPage = () => {
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  
  useEffect(() => {
    // Get only professional vehicles (for demo, we'll use new vehicles)
    const professionalVehicles = vehicles.filter((vehicle) => vehicle.isNew);
    setFilteredVehicles(professionalVehicles);
  }, []);
  
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    
    // Apply filters to vehicles
    let filtered = vehicles.filter((vehicle) => vehicle.isNew);
    
    if (filters.brand) {
      filtered = filtered.filter(
        (vehicle) => vehicle.brand === filters.brand
      );
    }
    
    if (filters.model) {
      filtered = filtered.filter((vehicle) =>
        vehicle.model.toLowerCase().includes(filters.model.toLowerCase())
      );
    }
    
    if (filters.priceRange && (filters.priceRange.min > 0 || filters.priceRange.max < 100000)) {
      filtered = filtered.filter(
        (vehicle) => 
          vehicle.price >= filters.priceRange.min && 
          vehicle.price <= filters.priceRange.max
      );
    }
    
    if (filters.fuelType) {
      filtered = filtered.filter(
        (vehicle) => vehicle.fuelType === filters.fuelType
      );
    }
    
    if (filters.yearRange) {
      filtered = filtered.filter(
        (vehicle) => 
          vehicle.year >= filters.yearRange.min && 
          vehicle.year <= filters.yearRange.max
      );
    }
    
    setFilteredVehicles(filtered);
  };
  
  return (
    <div className="pt-20 pb-16">
      {/* Hero */}
      <div className="relative h-64 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Vehículos Profesionales
            </h1>
            <p className="text-white max-w-xl mx-auto">
              Descubre nuestra gama de vehículos diseñados para profesionales y empresas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters and Vehicles */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters (Left Side) */}
          <div className="lg:w-1/4 order-2 lg:order-1">
            <VehicleFilters 
              onFilterChange={handleFilterChange}
            />
            
            {/* Professional Benefits */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="text-lg font-medium text-gray-800">Ventajas Profesionales</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Descuentos especiales para empresas
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Financiación adaptada a profesionales
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Servicio prioritario en taller
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Vehículo de sustitución garantizado
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Asesoramiento fiscal personalizado
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Vehicles (Right Side) */}
          <div className="lg:w-3/4 order-1 lg:order-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Vehículos Profesionales
              </h2>
              <div className="text-gray-600">
                {filteredVehicles.length} {filteredVehicles.length === 1 ? 'resultado' : 'resultados'}
              </div>
            </div>
            
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    id={vehicle.id}
                    brand={vehicle.brand}
                    model={vehicle.model}
                    year={vehicle.year}
                    fuelType={vehicle.fuelType}
                    transmission={vehicle.transmission}
                    price={vehicle.price}
                    image={vehicle.image}
                    isNew={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  No se encontraron vehículos
                </h3>
                <p className="text-gray-600 mb-4">
                  No hay vehículos que coincidan con tus criterios de búsqueda.
                </p>
                <button
                  onClick={() => handleFilterChange({})}
                  className="btn-secondary"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalVehiclesPage;