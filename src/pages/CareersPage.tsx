import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const jobOpenings = [
  {
    id: '1',
    title: 'Asesor Comercial',
    department: 'Ventas',
    location: 'Madrid',
    type: 'Tiempo completo',
    description: 'Buscamos un asesor comercial con experiencia en el sector automovilístico para nuestra concesión principal.',
    requirements: [
      'Experiencia mínima de 2 años en venta de vehículos',
      'Excelentes habilidades de comunicación',
      'Orientación al cliente',
      'Conocimientos del sector automovilístico'
    ]
  },
  {
    id: '2',
    title: 'Mecánico Especialista',
    department: 'Taller',
    location: 'Barcelona',
    type: 'Tiempo completo',
    description: 'Se necesita mecánico especialista con experiencia en vehículos híbridos y eléctricos.',
    requirements: [
      'Formación profesional en mecánica',
      'Experiencia con vehículos híbridos y eléctricos',
      'Conocimientos de diagnóstico electrónico',
      'Disponibilidad de turnos'
    ]
  },
  {
    id: '3',
    title: 'Recepcionista de Taller',
    department: 'Atención al Cliente',
    location: 'Valencia',
    type: 'Tiempo completo',
    description: 'Buscamos un profesional para la recepción de nuestro taller principal.',
    requirements: [
      'Experiencia en atención al cliente',
      'Conocimientos básicos de mecánica',
      'Habilidades organizativas',
      'Manejo de herramientas informáticas'
    ]
  }
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Trabaja con Nosotros
            </h1>
            <p className="text-white max-w-xl mx-auto">
              Únete a nuestro equipo y forma parte de una empresa líder en el sector automovilístico
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Por qué trabajar en <span className="text-gold-600">Auto Elegance</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Desarrollo Profesional</h3>
              <p className="text-gray-600">
                Ofrecemos formación continua y oportunidades de crecimiento dentro de la empresa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ambiente de Trabajo</h3>
              <p className="text-gray-600">
                Fomentamos un ambiente colaborativo y positivo con excelentes condiciones laborales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Beneficios Sociales</h3>
              <p className="text-gray-600">
                Disfrutarás de beneficios como seguro médico, descuentos en vehículos y más.
              </p>
            </div>
          </div>
        </section>
        
        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ofertas de Empleo Actuales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
                onClick={() => setSelectedJob(job)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-xs">
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Application Form */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Envíanos tu Candidatura
          </h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
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
            
            <div className="mb-4">
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
            
            <div className="mb-4">
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
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input"
                rows={4}
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                Curriculum Vitae
              </label>
              <input
                type="file"
                id="cv"
                onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })}
                className="form-input"
                accept=".pdf,.doc,.docx"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Formatos aceptados: PDF, DOC, DOCX
              </p>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Enviar Candidatura
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;