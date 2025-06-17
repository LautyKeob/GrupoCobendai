import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface PriceRange {
  min: number;
  max: number;
}

interface VehicleFiltersProps {
  onFilterChange: (filters: any) => void;
  showBrandFilter?: boolean;
  isUsedVehicles?: boolean;
}

const VehicleFilters: React.FC<VehicleFiltersProps> = ({ 
  onFilterChange,
  showBrandFilter = true,
  isUsedVehicles = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 100000 });
  const [fuelType, setFuelType] = useState<string>('');
  const [yearRange, setYearRange] = useState<{ min: number; max: number }>({
    min: 2015,
    max: new Date().getFullYear()
  });
  const [mileageRange, setMileageRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 200000
  });
  
  const brands = ['Hyundai', 'Peugeot', 'MG', 'KGM', 'Subaru', 'Suzuki'];
  const fuelTypes = ['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico', 'GLP'];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onFilterChange({
      brand: selectedBrand,
      model: selectedModel,
      priceRange,
      fuelType,
      yearRange,
      mileageRange: isUsedVehicles ? mileageRange : undefined
    });
  };
  
  const handleReset = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setPriceRange({ min: 0, max: 100000 });
    setFuelType('');
    setYearRange({ min: 2015, max: new Date().getFullYear() });
    setMileageRange({ min: 0, max: 200000 });
    
    onFilterChange({});
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
        <div className="flex items-center">
          <Filter className="w-5 h-5 text-gray-700 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">Filtrar Vehículos</h3>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 hover:text-gray-900"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? 'max-h-[1000px]' : 'max-h-0'
      }`}>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Brand Filter */}
            {showBrandFilter && (
              <div className="form-group">
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Marca
                </label>
                <select
                  id="brand"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="form-select"
                >
                  <option value="">Todas las marcas</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            {/* Model Filter */}
            <div className="form-group">
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Modelo
              </label>
              <input
                type="text"
                id="model"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                placeholder="Cualquier modelo"
                className="form-input"
              />
            </div>
            
            {/* Fuel Type Filter */}
            <div className="form-group">
              <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
                Combustible
              </label>
              <select
                id="fuelType"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="form-select"
              >
                <option value="">Todos los tipos</option>
                {fuelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Precio (€)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  placeholder="Mínimo"
                  className="form-input"
                />
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  placeholder="Máximo"
                  className="form-input"
                />
              </div>
            </div>
            
            {/* Year Range Filter */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Año
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={yearRange.min}
                  onChange={(e) => setYearRange({ ...yearRange, min: Number(e.target.value) })}
                  placeholder="Desde"
                  className="form-input"
                />
                <input
                  type="number"
                  value={yearRange.max}
                  onChange={(e) => setYearRange({ ...yearRange, max: Number(e.target.value) })}
                  placeholder="Hasta"
                  className="form-input"
                />
              </div>
            </div>
            
            {/* Mileage Range Filter (Only for Used Vehicles) */}
            {isUsedVehicles && (
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kilometraje
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={mileageRange.min}
                    onChange={(e) => setMileageRange({ ...mileageRange, min: Number(e.target.value) })}
                    placeholder="Mínimo"
                    className="form-input"
                  />
                  <input
                    type="number"
                    value={mileageRange.max}
                    onChange={(e) => setMileageRange({ ...mileageRange, max: Number(e.target.value) })}
                    placeholder="Máximo"
                    className="form-input"
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
            >
              Limpiar
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleFilters;