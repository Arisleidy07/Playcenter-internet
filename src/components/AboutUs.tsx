import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="p-6 lg:p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En PlayCenter Universal PCU, S.R.L., somos una empresa dominicana dedicada a transformar la experiencia de conectividad en República Dominicana. Con más de 10 años de experiencia en el sector de telecomunicaciones, nos hemos consolidado como una alternativa confiable y de calidad para hogares y empresas que buscan una conexión a internet rápida y estable.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nuestra misión es llevar la mejor tecnología de fibra óptica a cada rincón del país, garantizando un servicio excepcional, atención personalizada y soporte técnico inmediato. Nos distinguimos por nuestro compromiso con la satisfacción del cliente y la constante innovación tecnológica.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Tecnología de vanguardia',
                'Soporte técnico 24/7',
                'Instalación rápida',
                'Servicio personalizado'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-600/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg" 
                alt="Oficina de PlayCenter Universal" 
                className="relative rounded-2xl shadow-lg w-full max-w-md object-cover h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;