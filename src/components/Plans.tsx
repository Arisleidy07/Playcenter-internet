import React, { useState } from 'react';
import { CheckCircle, Wifi, Download, Upload } from 'lucide-react';

const plans = [
  { speed: 8, price: 900 },
  { speed: 10, price: 1000 },
  { speed: 15, price: 1200 },
  { speed: 20, price: 1250 },
  { speed: 30, price: 1300 },
  { speed: 40, price: 1450 },
  { speed: 50, price: 1700 },
  { speed: 60, price: 2000 },
  { speed: 80, price: 2200 },
  { speed: 90, price: 2300 },
  { speed: 100, price: 2500 }
];

const features = [
  'Internet ilimitado',
  'Servicio estable',
  'Soporte técnico 24/7',
  'Instalación rápida',
  'Equipos incluidos'
];

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="planes" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Planes</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y disfruta de la mejor experiencia de internet con nuestra fibra óptica FTTH.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isYearly ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700'
                }`}
                onClick={() => setIsYearly(false)}
              >
                Mensual
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isYearly ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700'
                }`}
                onClick={() => setIsYearly(true)}
              >
                Anual (15% descuento)
              </button>
            </div>
          </div>
          
          <div className="bg-green-100 text-green-800 font-bold py-3 px-4 rounded-lg inline-block mt-6 mb-8">
            RECUERDE QUE NUESTROS PLANES SON ILIMITADOS
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="bg-blue-600 h-2"></div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.speed} MEGAS</h3>
                  <Wifi className="text-blue-600 h-6 w-6" />
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Download className="text-blue-600 h-5 w-5" />
                  <span className="text-gray-700">Descarga: <strong>{plan.speed} Mbps</strong></span>
                </div>
                
                <div className="mb-6 pt-2 border-t border-gray-100">
                  <p className="text-3xl font-bold text-gray-900">
                    RD${isYearly 
                      ? Math.round(plan.price * 0.85 * 12).toLocaleString() 
                      : plan.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {isYearly ? 'por año' : 'por mes'}
                  </p>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-300">
                  Contratar Ahora
                </button>
              </div>
              
              <div className="bg-gray-50 p-4">
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;