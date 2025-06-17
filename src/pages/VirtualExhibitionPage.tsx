import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { virtualExhibitions } from '../data/exhibitions';

const VirtualExhibitionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [exhibition, setExhibition] = useState(null);
  
  useEffect(() => {
    const foundExhibition = virtualExhibitions.find(e => e.id === id);
    if (foundExhibition) {
      setExhibition(foundExhibition);
    }
  }, [id]);
  
  if (!exhibition) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Exposición no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar la exposición virtual que estás buscando.
        </p>
        <a href="/" className="btn-primary">
          Volver a Inicio
        </a>
      </div>
    );
  }
  
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Exhibition Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {exhibition.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {exhibition.description}
          </p>
        </div>
        
        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={exhibition.videoUrl}
              title={exhibition.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Te interesa este modelo?
          </h2>
          <p className="text-gray-600 mb-6">
            Contacta con nosotros para obtener más información o programar una prueba de conducción.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              Solicitar Información
            </button>
            <button className="btn-secondary">
              Programar Prueba
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualExhibitionPage;