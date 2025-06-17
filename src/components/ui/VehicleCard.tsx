import { Link } from 'react-router-dom';
import { Fuel, Calendar, Activity } from 'lucide-react';

interface VehicleCardProps {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuelType: string;
  transmission: string;
  price: number;
  mileage?: number;
  image: string;
  isNew?: boolean;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  brand,
  model,
  year,
  fuelType,
  transmission,
  price,
  mileage,
  image,
  isNew = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-48 object-cover"
        />
        {isNew ? (
          <div className="absolute top-3 left-3 bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">
            NUEVO
          </div>
        ) : (
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
            OCASIÓN
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{brand} {model}</h3>
            <span className="text-sm text-gray-600">
              {transmission} • {year}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-gold-600">
              {price.toLocaleString('es-ES')} €
            </span>
            <div className="text-xs text-gray-500">Precio sin impuestos</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
          <div className="flex items-center">
            <Fuel className="w-4 h-4 mr-1" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{year}</span>
          </div>
          {mileage && (
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-1" />
              <span>{mileage.toLocaleString('es-ES')} km</span>
            </div>
          )}
        </div>
        
        <Link 
          to={`/vehicle/${id}`}
          className="btn-primary w-full block text-center"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;