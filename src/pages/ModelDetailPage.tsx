import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { models } from '../data/models';
import { ArrowLeft, Phone } from 'lucide-react';

const ModelDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    type: 'particular',
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const foundModel = models.find(m => m.id === id);
    if (foundModel) {
      setModel(foundModel);
    }
  }, [id]);

  if (!model) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Modelo no encontrado
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar el modelo que estás buscando.
        </p>
        <Link to="/" className="btn-primary">
          Volver a Inicio
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          to={`/brand/${model.brand.toLowerCase()}`}
          className="inline-flex items-center text-gray-600 hover:text-gold-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a {model.brand}
        </Link>

        {/* Model Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {model.brand} {model.name}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {model.description}
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={model.gallery[selectedImage]}
                alt={`${model.brand} ${model.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {model.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gold-600' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${model.brand} ${model.name} - Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm text-gray-500">Precio desde</span>
                <div className="text-3xl font-bold text-gray-900">
                  {model.price.from.toLocaleString('es-ES')} €
                </div>
              </div>
              <a 
                href="tel:+34900123456" 
                className="flex items-center text-gold-600 font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                900 123 456
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'particular' })}
                  className={`flex-1 py-2 px-4 rounded-md text-center ${
                    formData.type === 'particular'
                      ? 'bg-gold-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Particular
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'empresa' })}
                  className={`flex-1 py-2 px-4 rounded-md text-center ${
                    formData.type === 'empresa'
                      ? 'bg-gold-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Empresa
                </button>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre y Apellidos
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Solicitar Información
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailPage;