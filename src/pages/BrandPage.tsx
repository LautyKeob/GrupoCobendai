import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { brands } from '../data/brands';
import { modelsByBrand } from '../data/models';
import ModelCard from '../components/ui/ModelCard';

const BrandPage = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const [brand, setBrand] = useState(null);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!brandId) return;

    const foundBrand = brands.find((b) => b.slug === brandId);
    if (foundBrand) {
      setBrand(foundBrand);
      setModels(modelsByBrand[foundBrand.name] || []);
    }
  }, [brandId]);

  const getGridLayout = (brandName: string, modelCount: number) => {
    switch (brandName) {
      case 'Hyundai': // 19 models: 4-4-4-4-3
        if (modelCount <= 16) return 'grid-cols-4';
        return 'grid-cols-1';
      case 'Peugeot': // 16 models: 4-4-4-4
        return 'grid-cols-4';
      case 'MG': // 10 models: 4-4-2
        if (modelCount <= 8) return 'grid-cols-4';
        return 'grid-cols-1';
      case 'KGM': // 7 models: 4-3
        if (modelCount <= 4) return 'grid-cols-4';
        return 'grid-cols-1';
      case 'Subaru': // 4 models: 4
        return 'grid-cols-4';
      case 'Suzuki': // 8 models: 4-4
        return 'grid-cols-4';
      default:
        return 'grid-cols-4';
    }
  };

  const renderModelGrid = () => {
    if (!brand || !models.length) return null;

    const chunks = [];
    let currentChunk = [];

    switch (brand.name) {
      case 'Hyundai': // 19 models: 4-4-4-4-3
        for (let i = 0; i < models.length; i++) {
          if (i < 16) {
            currentChunk.push(models[i]);
            if (currentChunk.length === 4) {
              chunks.push([...currentChunk]);
              currentChunk = [];
            }
          } else {
            currentChunk.push(models[i]);
          }
        }
        if (currentChunk.length) chunks.push([...currentChunk]);
        break;

      case 'Peugeot': // 16 models: 4-4-4-4
        for (let i = 0; i < models.length; i++) {
          currentChunk.push(models[i]);
          if (currentChunk.length === 4) {
            chunks.push([...currentChunk]);
            currentChunk = [];
          }
        }
        break;

      case 'MG': // 10 models: 4-4-2
        for (let i = 0; i < models.length; i++) {
          if (i < 8) {
            currentChunk.push(models[i]);
            if (currentChunk.length === 4) {
              chunks.push([...currentChunk]);
              currentChunk = [];
            }
          } else {
            currentChunk.push(models[i]);
          }
        }
        if (currentChunk.length) chunks.push([...currentChunk]);
        break;

      case 'KGM': // 7 models: 4-3
        for (let i = 0; i < models.length; i++) {
          if (i < 4) {
            currentChunk.push(models[i]);
            if (currentChunk.length === 4) {
              chunks.push([...currentChunk]);
              currentChunk = [];
            }
          } else {
            currentChunk.push(models[i]);
          }
        }
        if (currentChunk.length) chunks.push([...currentChunk]);
        break;

      case 'Subaru': // 4 models: 4
      case 'Suzuki': // 8 models: 4-4
        for (let i = 0; i < models.length; i++) {
          currentChunk.push(models[i]);
          if (currentChunk.length === 4) {
            chunks.push([...currentChunk]);
            currentChunk = [];
          }
        }
        if (currentChunk.length) chunks.push([...currentChunk]);
        break;
    }

    return chunks.map((chunk, index) => (
      <div 
        key={index} 
        className={`grid ${getGridLayout(brand.name, chunk.length)} gap-6 mb-6 ${
          chunk.length < 4 ? 'justify-center' : ''
        }`}
      >
        {chunk.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    ));
  };

  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Marca no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar la marca que estás buscando.
        </p>
        <a href="/" className="btn-primary">
          Volver a Inicio
        </a>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      {/* Brand Hero */}
      <div className="relative h-96 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-6 mx-auto mb-6">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Gama Oficial {brand.name}
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              {brand.description}
            </p>
          </div>
        </div>
      </div>

      {/* Models Grid */}
      <div className="container mx-auto px-4">
        {renderModelGrid()}

        {/* Brand Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sobre {brand.name}
          </h2>
          <p className="text-gray-600 mb-6">
            {brand.extendedDescription}
          </p>
          <a 
            href={brand.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visitar Web Oficial
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;