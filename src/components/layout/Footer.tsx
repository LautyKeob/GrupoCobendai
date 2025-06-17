import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="text-3xl font-bold">
            <span className="text-gold-600">GRUPO</span>COBENDAI
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-600 mb-4">Nuestras Marcas</h3>
            <ul className="space-y-2">
              <li><Link to="/brand/hyundai" className="hover:text-gold-600 transition">Hyundai</Link></li>
              <li><Link to="/brand/peugeot" className="hover:text-gold-600 transition">Peugeot</Link></li>
              <li><Link to="/brand/mg" className="hover:text-gold-600 transition">MG</Link></li>
              <li><Link to="/brand/kgm" className="hover:text-gold-600 transition">KGM</Link></li>
              <li><Link to="/brand/subaru" className="hover:text-gold-600 transition">Subaru</Link></li>
              <li><Link to="/brand/suzuki" className="hover:text-gold-600 transition">Suzuki</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-600 mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold-600 transition">Inicio</Link></li>
              <li><Link to="/used-vehicles" className="hover:text-gold-600 transition">Vehículos de Ocasión</Link></li>
              <li><Link to="/professional-vehicles" className="hover:text-gold-600 transition">Vehículos Profesionales</Link></li>
              <li><Link to="/rental/short-term" className="hover:text-gold-600 transition">Alquiler</Link></li>
              <li><Link to="/service-appointment" className="hover:text-gold-600 transition">Postventa</Link></li>
              <li><Link to="/contact" className="hover:text-gold-600 transition">Seguros</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-600 mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gold-600 transition">Quiénes somos</Link></li>
              <li><Link to="/contact" className="hover:text-gold-600 transition">Noticias</Link></li>
              <li><Link to="/contact" className="hover:text-gold-600 transition">Contacto</Link></li>
              <li><Link to="/careers" className="hover:text-gold-600 transition">Trabaja con nosotros</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-600 mb-4">Contacto</h3>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-gold-600" />
              <span>900 123 456</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-gold-600" />
              <span>info@autoelegance.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-gold-600 mt-1" />
              <span>Avda. Principal, 123<br />28001 Madrid, España</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-600 mb-4">Horario</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="font-medium">Ventas:</div>
                <div>Lun-Vie: 9:00 - 20:00</div>
                <div>Sábado: 10:00 - 14:00</div>
              </div>
              <div>
                <div className="font-medium">Taller:</div>
                <div>Lun-Vie: 8:00 - 18:00</div>
                <div>Sábado: Cerrado</div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gold-600 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold-600 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold-600 transition">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold-600 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>© {new Date().getFullYear()} Grupo Cobendai. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-gold-600 transition">Política de Privacidad</Link>
            <Link to="/terms" className="hover:text-gold-600 transition">Términos y Condiciones</Link>
            <Link to="/cookies" className="hover:text-gold-600 transition">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;