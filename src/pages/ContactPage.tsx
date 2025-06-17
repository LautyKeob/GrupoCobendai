import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
              Contacta con Nosotros
            </h1>
            <p className="text-white max-w-xl mx-auto">
              Estamos aquí para ayudarte. Contacta con nosotros y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600">
                <a href="tel:+34900123456" className="hover:text-gold-600">
                  900 123 456
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Lun-Vie: 9:00 - 20:00<br />
                Sáb: 10:00 - 14:00
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@autoelegance.com" className="hover:text-gold-600">
                  info@autoelegance.com
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Respondemos en menos de<br />
                24 horas laborables
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dirección</h3>
              <p className="text-gray-600">
                Avda. Principal, 123<br />
                28001 Madrid
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Ver en Google Maps
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                  rows={6}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full md:w-auto">
                Enviar Mensaje
              </button>
            </form>
          </div>
          
          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestra Ubicación
            </h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12147.354030289095!2d-3.7037929302246094!3d40.41677525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;