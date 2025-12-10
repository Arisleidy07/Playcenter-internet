import React from 'react';
import { Clock, Zap, Headphones, Wifi, Shield, PenTool as Tools } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: 'Soporte 24/7',
    description: 'Nuestro equipo técnico está disponible todos los días del año para resolver cualquier incidencia.',
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: 'Instalación Rápida',
    description: 'Activamos tu servicio en menos de 48 horas después de tu solicitud.',
  },
  {
    icon: <Wifi className="h-10 w-10 text-blue-600" />,
    title: 'Conexión de Alta Velocidad',
    description: 'Disfruta de velocidades simétricas de descarga y subida para todas tus actividades online.',
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Conexión Segura',
    description: 'Implementamos protocolos de seguridad que protegen tu red de amenazas externas.',
  },
  {
    icon: <Tools className="h-10 w-10 text-blue-600" />,
    title: 'Mantenimiento Gratuito',
    description: 'Incluimos mantenimiento de equipos sin costo adicional durante toda la vigencia de tu contrato.',
  },
  {
    icon: <Headphones className="h-10 w-10 text-blue-600" />,
    title: 'Atención Personalizada',
    description: 'Te asignamos un asesor personal para gestionar tus consultas y requerimientos.',
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios de Nuestro Servicio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre por qué miles de clientes confían en nosotros para sus necesidades de conectividad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
            >
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;