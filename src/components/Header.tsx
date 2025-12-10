import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-red-600">PLAYCENTER</span>
            <span className="text-lg md:text-xl font-medium text-green-600">UNIVERSAL</span>
          </div>
        </div>

        {/* Phone Number (Desktop) */}
        <div className="hidden md:flex items-center mr-6">
          <Phone className="h-5 w-5 text-green-600 mr-2" />
          <span className="font-medium text-gray-800">809-582-1212</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Inicio', 'Nosotros', 'Planes', 'Beneficios', 'Contacto'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-blue-600 hover:text-blue-800' : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto" 
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {/* Phone Number (Mobile) */}
            <div className="flex items-center py-2 border-b border-gray-100">
              <Phone className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-gray-800">809-582-1212</span>
            </div>
            
            {['Inicio', 'Nosotros', 'Planes', 'Beneficios', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contacto" 
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;