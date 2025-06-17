import { useState, useEffect } from 'react';
import VehicleCard from '../components/ui/VehicleCard';
import VehicleFilters from '../components/filters/VehicleFilters';
import { vehicles } from '../data/vehicles';

const UsedVehiclesPage = () => {
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  
  useEffect(() => {
    // Get only used vehicles
    const usedVehicles = vehicles.filter((vehicle) => !vehicle.isNew);
    setFilteredVehicles(usedVehicles);
  }, []);
  
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    
    // Apply filters to vehicles
    let filtered = vehicles.filter((vehicle) => !vehicle.isNew);
    
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
    
    if (filters.mileageRange) {
      filtered = filtered.filter(
        (vehicle) => 
          vehicle.mileage >= filters.mileageRange.min && 
          vehicle.mileage <= filters.mileageRange.max
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
            backgroundImage: `url('https://images.pexels.com/photos/3806881/pexels-photo-3806881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Vehículos de Ocasión
            </h1>
            <p className="text-white max-w-xl mx-auto">
              Encuentra el vehículo de ocasión perfecto para ti con las mejores garantías y al mejor precio.
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
              isUsedVehicles={true}
            />
            
            {/* Certified Used Vehicles */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="text-lg font-medium text-gray-800">Garantía de Calidad</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Todos nuestros vehículos de ocasión cuentan con:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Historial verificado y certificado
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Garantía mínima de 12 meses
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    150 puntos de inspección
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Prueba de conducción gratuita
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-2">✓</span>
                    Financiación a medida
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Vehicles (Right Side) */}
          <div className="lg:w-3/4 order-1 lg:order-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Vehículos de Ocasión
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
                    mileage={vehicle.mileage}
                    image={vehicle.image}
                    isNew={false}
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

export default UsedVehiclesPage;