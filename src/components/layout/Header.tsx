import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import DropdownMenu from '../navigation/DropdownMenu';
import { brandOptions, promotionOptions } from '../../data/menuOptions';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-gold-600">GRUPO</span>COBENDAI
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <DropdownMenu
              label="MARCAS"
              options={brandOptions}
              isHeader={true}
            />
            <DropdownMenu
              label="PROMOCIONES"
              options={promotionOptions}
              isHeader={true}
            />
            <Link to="/used-vehicles" className="nav-link">
              VEHÍCULOS DE OCASIÓN
            </Link>
            <Link to="/professional-vehicles" className="nav-link">
              VEHÍCULOS PROFESIONALES
            </Link>
            <DropdownMenu
              label="ALQUILER"
              options={[
                { label: 'Corto Plazo (días)', href: '/rental/short-term' },
                { label: 'Largo Plazo (meses)', href: '/rental/long-term' },
              ]}
              isHeader={true}
            />
            <Link to="/careers" className="nav-link">
              EMPLEO
            </Link>
            <Link to="/contact" className="nav-link">
              CONTACTO
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/service-appointment" 
              className="btn-primary"
            >
              Cita Taller
            </Link>
            <a 
              href="tel:+34900123456" 
              className="flex items-center text-gold-600 font-medium"
            >
              <Phone className="mr-2 h-4 w-4" />
              900 123 456
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="mobile-dropdown">
                <div className="flex items-center justify-between py-2 px-4 border-b">
                  <span className="font-medium">MARCAS</span>
                  <ChevronDown size={16} />
                </div>
                <div className="pl-4 py-2 space-y-2">
                  {brandOptions.map((option, index) => (
                    <Link key={index} to={option.href} className="block py-1">
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mobile-dropdown">
                <div className="flex items-center justify-between py-2 px-4 border-b">
                  <span className="font-medium">PROMOCIONES</span>
                  <ChevronDown size={16} />
                </div>
                <div className="pl-4 py-2 space-y-2">
                  {promotionOptions.map((option, index) => (
                    <Link key={index} to={option.href} className="block py-1">
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/used-vehicles" className="py-2 px-4 border-b">
                VEHÍCULOS DE OCASIÓN
              </Link>
              <Link to="/professional-vehicles" className="py-2 px-4 border-b">
                VEHÍCULOS PROFESIONALES
              </Link>
              
              <div className="mobile-dropdown">
                <div className="flex items-center justify-between py-2 px-4 border-b">
                  <span className="font-medium">ALQUILER</span>
                  <ChevronDown size={16} />
                </div>
                <div className="pl-4 py-2 space-y-2">
                  <Link to="/rental/short-term" className="block py-1">
                    Corto Plazo (días)
                  </Link>
                  <Link to="/rental/long-term" className="block py-1">
                    Largo Plazo (meses)
                  </Link>
                </div>
              </div>
              
              <Link to="/careers" className="py-2 px-4 border-b">
                EMPLEO
              </Link>
              <Link to="/contact" className="py-2 px-4 border-b">
                CONTACTO
              </Link>
              
              <Link to="/service-appointment" className="btn-primary-mobile">
                Cita Taller
              </Link>
              <a href="tel:+34900123456" className="btn-secondary-mobile">
                <Phone className="mr-2 h-4 w-4" />
                900 123 456
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;