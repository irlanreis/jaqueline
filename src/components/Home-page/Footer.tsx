import { Mail } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-20 border-t border-marrondarck/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="font-SpectralRegular text-xl text-marrondarck mb-5">
                Jaqueline <span className="text-bejeAbobora">Reis</span>
              </h3>
              <p className="text-marronLight/80 font-MontserratRegular text-sm leading-relaxed mb-6">
                Estrategista e mentora de comunicação com propósito. Transformando histórias em conexões que importam.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/jaquelinereisw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-marronLight/70 hover:text-bejeAbobora transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="https://facebook.com/irlanejaque" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-marronLight/70 hover:text-bejeAbobora transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="font-SpectralRegular text-lg text-marrondarck mb-5">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-marronLight/80 hover:text-bejeAbobora transition-colors duration-300 font-MontserratRegular text-sm"
                  >
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="text-marronLight/80 hover:text-bejeAbobora transition-colors duration-300 font-MontserratRegular text-sm"
                  >
                    Sobre Mim
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicos" 
                    className="text-marronLight/80 hover:text-bejeAbobora transition-colors duration-300 font-MontserratRegular text-sm"
                  >
                    Portfólio
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-SpectralRegular text-lg text-marrondarck mb-5">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:reismarketing.rr@gmail.com" 
                  className="flex items-center text-marronLight/80 hover:text-bejeAbobora transition-colors duration-300 font-MontserratRegular text-sm"
                >
                  <Mail size={16} className="mr-2" />
                  reismarketing.rr@gmail.com
                </a>
                <p className="font-MontserratRegular text-sm text-marronLight/80">
                  Roraima, Brasil
                </p>
                <a 
                  href="https://reismarketing.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-bejeAbobora hover:text-bejeAbobora/80 transition-colors duration-300 font-MontserratRegular text-sm mt-2"
                >
                  Reis Marketing →
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-marrondarck/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-marronLight/60 font-MontserratRegular mb-4 md:mb-0">
              &copy; {currentYear} Jaqueline Reis. Todos os direitos reservados.
            </p>
            <p className="text-xs text-marronLight/60 font-MontserratRegular">
              Desenvolvido com ❤️ por <a href="https://reismarketing.com" target="_blank" rel="noopener noreferrer" className="text-bejeAbobora hover:text-bejeAbobora/80">Reis Marketing</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
