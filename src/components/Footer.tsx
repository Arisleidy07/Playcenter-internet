import { Facebook, Instagram, Youtube, Wifi, Phone, Globe } from "lucide-react";

// Componente personalizado para el ícono de TikTok
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col mb-6">
              <img
                src="/Playlogo.png"
                alt="PlayCenter Universal"
                className="h-16 w-auto mb-2"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Conectando hogares y empresas dominicanas con internet de alta
              velocidad y servicio de calidad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/pcu12"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/playcenter_universal/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@playcenter_universal?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-black h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <TikTokIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Playcenter_Universal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {["Inicio", "Nosotros", "Planes", "Beneficios", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Planes de Internet</h3>
            <ul className="space-y-3">
              {[
                { name: "Fibra Óptica Básico", speed: "50 Mbps" },
                { name: "Fibra Óptica Estándar", speed: "100 Mbps" },
                { name: "Fibra Óptica Premium", speed: "200 Mbps" },
                { name: "Planes Empresariales", speed: "Personalizados" },
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
                <span>8:30am - 5:30pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>8:30am - 12:30pm</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span>Cerrado</span>
              </li>


            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <p>
              &copy; {currentYear} PlayCenter Universal PCU, S.R.L. Todos los
              derechos reservados.
            </p>
            <p>RNC: 1-31-45346-5</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Política de Privacidad
            </a>
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
