
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Full Arch Implants', path: '/full-arch-implants' },
    { name: 'Composite Bonding', path: '/composite-bonding' },
    { name: 'Invisalign Braces', path: '/invisalign-braces' },
    { name: 'Teeth Whitening', path: '/teeth-whitening' },
    { name: 'Veneers', path: '/veneers' },
    { name: 'Dental Implants', path: '/dental-implants' },
    { name: 'Dentures', path: '/dentures' },
    { name: 'White Fillings', path: '/white-fillings' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a149de9b-ffc7-4ccb-89c6-45a712d8505a.png" 
                alt="Coventry Road Dentalcare" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#63316b] font-medium transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-[#63316b] font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#63316b] transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/#about" className="text-gray-600 hover:text-[#63316b] font-medium transition-colors">About</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-[#63316b] font-medium transition-colors">Contact</Link>
          </div>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium">024 7699 2020</span>
            </div>
            <button className="bg-[#63316b] text-white px-6 py-2 rounded-full font-medium hover:bg-[#63316b]/90 transition-all duration-300">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-[#63316b] font-medium py-2">Home</Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-900 font-semibold py-2 border-b border-gray-100">Treatments</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block text-gray-600 hover:text-[#63316b] font-medium py-2 pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link to="/#about" className="block text-gray-600 hover:text-[#63316b] font-medium py-2">About</Link>
              <Link to="/#contact" className="block text-gray-600 hover:text-[#63316b] font-medium py-2">Contact</Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <span>024 7699 2020</span>
                </div>
                <button className="w-full bg-[#63316b] text-white px-6 py-3 rounded-full font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
