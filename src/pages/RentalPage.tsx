import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VehicleCard from '../components/ui/VehicleCard';
import VehicleFilters from '../components/filters/VehicleFilters';
import { vehicles } from '../data/vehicles';

const RentalPage = () => {
  const { type } = useParams<{ type: string }>();
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles.filter(v => v.isNew));
  
  const isShortTerm = type === 'short-term';
  const title = isShortTerm ? 'Alquiler a Corto Plazo' : 'Alquiler a Largo Plazo';
  const description = isShortTerm
    ? 'Alquila un vehículo por días o semanas con todo incluido'
    : 'Disfruta de un vehículo nuevo con cuota mensual todo incluido';
  
  const handleFilterChange = (filters) => {
    let filtered = vehicles.filter(v => v.isNew);
    
    if (filters.brand) {
      filtered = filtered.filter(v => v.brand === filters.brand);
    }
    
    if (filters.model) {
      filtered = filtered.filter(v => 
        v.model.toLowerCase().includes(filters.model.toLowerCase())
      );
    }
    
    if (filters.priceRange) {
      filtered = filtered.filter(v => 
        v.price >= filters.priceRange.min && v.price <= filters.priceRange.max
      );
    }
    
    if (filters.fuelType) {
      filtered = filtered.filter(v => v.fuelType === filters.fuelType);
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
              {title}
            </h1>
            <p className="text-white max-w-xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <VehicleFilters onFilterChange={handleFilterChange} />
            
            {/* Rental Benefits */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="text-lg font-medium text-gray-800">
                  {isShortTerm ? 'Ventajas del Alquiler' : 'Renting Todo Incluido'}
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-gray-600">
                  {isShortTerm ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Seguro a todo riesgo incluido
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Kilometraje ilimitado
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Asistencia 24/7
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Sin permanencia mínima
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Mantenimiento incluido
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Seguro a todo riesgo
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Impuestos incluidos
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">✓</span>
                        Vehículo de sustitución
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Vehicle List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Vehículos Disponibles
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
                    {...vehicle}
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

export default RentalPage;