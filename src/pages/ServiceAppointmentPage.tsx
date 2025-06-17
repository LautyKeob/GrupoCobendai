import { useState } from 'react';
import { Calendar, Clock, PenTool as Tool, Car } from 'lucide-react';

const ServiceAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    year: '',
    plate: '',
    service: '',
    date: '',
    time: '',
    comments: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  
  const services = [
    'Mantenimiento Periódico',
    'Revisión Pre-ITV',
    'Cambio de Aceite',
    'Frenos',
    'Neumáticos',
    'Diagnóstico',
    'Aire Acondicionado',
    'Otro'
  ];
  
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '16:00', '17:00', '18:00'
  ];
  
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Solicita tu Cita de Taller
            </h1>
            <p className="text-white max-w-xl mx-auto">
              Mantén tu vehículo en perfecto estado con nuestro servicio oficial
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Tool className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Servicio Oficial
              </h3>
              <p className="text-gray-600 text-sm">
                Técnicos certificados y herramientas especializadas
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Cita Flexible
              </h3>
              <p className="text-gray-600 text-sm">
                Elige el día y hora que mejor te convenga
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Tiempo Garantizado
              </h3>
              <p className="text-gray-600 text-sm">
                Te informamos del tiempo estimado de reparación
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Car className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Vehículo Sustitutivo
              </h3>
              <p className="text-gray-600 text-sm">
                Disponible bajo petición para reparaciones largas
              </p>
            </div>
          </div>
          
          {/* Appointment Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Solicitar Cita
            </h2>
            
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Información Personal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                </div>
              </div>
              
              {/* Vehicle Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Información del Vehículo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                      Marca
                    </label>
                    <input
                      type="text"
                      id="brand"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                      Modelo
                    </label>
                    <input
                      type="text"
                      id="model"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Año
                    </label>
                    <input
                      type="number"
                      id="year"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="plate" className="block text-sm font-medium text-gray-700 mb-1">
                      Matrícula
                    </label>
                    <input
                      type="text"
                      id="plate"
                      value={formData.plate}
                      onChange={(e) => setFormData({ ...formData, plate: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Service Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Tipo de Servicio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Servicio requerido
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Comentarios adicionales
                    </label>
                    <textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="form-input"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Appointment Time */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Fecha y Hora
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha preferida
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Hora preferida
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="btn-primary w-full md:w-auto">
                Solicitar Cita
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAppointmentPage;