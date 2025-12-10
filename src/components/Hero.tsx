import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Conéctate con lo mejor de la 
              <span className="text-blue-600"> fibra óptica</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Disfruta de una conexión rápida, estable y sin interrupciones con nuestros planes de internet de fibra óptica FTTH diseñados para ti.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#planes" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Ver planes
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contacto" 
                className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full font-medium text-lg transition-all duration-300"
              >
                Contáctanos
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/7516353/pexels-photo-7516353.jpeg" 
                alt="Familia conectada con internet de alta velocidad" 
                className="relative rounded-2xl shadow-lg w-full max-w-md object-cover h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;