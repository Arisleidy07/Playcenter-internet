import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Wifi, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-red-500">PLAYCENTER</span>
              <span className="text-xl font-medium text-green-500">UNIVERSAL</span>
            </div>
            <p className="text-gray-400 mb-6">
              Conectando hogares y empresas dominicanas con internet de alta velocidad y servicio de calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Planes', 'Beneficios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Planes de Internet</h3>
            <ul className="space-y-3">
              {[
                { name: 'Fibra Óptica Básico', speed: '50 Mbps' },
                { name: 'Fibra Óptica Estándar', speed: '100 Mbps' },
                { name: 'Fibra Óptica Premium', speed: '200 Mbps' },
                { name: 'Planes Empresariales', speed: 'Personalizados' },
              ].map((plan, index) => (
                <li key={index} className="flex items-center">
                  <Wifi className="text-blue-500 mr-2 h-4 w-4" />
                  <a 
                    href="#planes" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {plan.name} - {plan.speed}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center mb-4">
                <Phone className="text-green-500 mr-2 h-5 w-5" />
                <span className="text-lg font-medium">809-582-1212</span>
              </li>
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="mt-4">
                <span className="text-blue-400">Soporte Técnico:</span>
                <span className="block mt-1">24/7 Todos los días</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <p>&copy; {currentYear} PlayCenter Universal PCU, S.R.L. Todos los derechos reservados.</p>
            <p>RNC: 1-31-45346-5</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-300">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
            <a 
              href="https://www.blaze.do" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300 flex items-center"
            >
              <Globe className="h-4 w-4 mr-1" />
              Desarrollado por BlazeSphere
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;