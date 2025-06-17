import { Link } from 'react-router-dom';
import type { VehicleModel } from '../../data/models';

interface ModelCardProps {
  model: VehicleModel;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  return (
    <Link 
      to={`/model/${model.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={model.image}
          alt={`${model.brand} ${model.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {model.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {model.description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">Desde</span>
            <div className="text-lg font-bold text-gold-600">
              {model.price.from.toLocaleString('es-ES')} €
            </div>
          </div>
          <span className="text-gold-600 font-medium text-sm group-hover:underline">
            Ver Detalles
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ModelCard;