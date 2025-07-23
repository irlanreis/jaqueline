import logo from '../../assets/images/logo-Jaque.svg'
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import navLinks from '../../constants/navLinks';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../hooks/useScrollToTop';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  }

  // Detecta quando o usuário rola a página para adicionar um fundo mais sólido
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-marrondarck shadow-lg' : 'bg-marrondarck/90'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center">
            <Link to="/" className="text-white" onClick={scrollToTop}>
              <img src={logo} alt="logo Jaqueline Reis" className='h-10 sm:h-12 w-auto hover:scale-105 transition-transform duration-300 relative' />
            </Link>
          </div>
          {/*navLinks*/}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {
                navLinks.map((link, i) => (
                  <Link
                    key={i}
                    className="text-bejeAbobora hover:text-bejeLigth transition-colors duration-300 px-3 py-2 text-base font-MontserratRegular font-medium text-center"
                    to={link.link}
                    onClick={scrollToTop} >
                    {link.title}
                  </Link>
                ))
              }
            </div>
          </div>
          {/* Menu hamburguer button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-bejeLigth hover:text-bejeAbobora transition-colors duration-300 focus:outline-none"
              onClick={handleMenu}
            >
              <span className="sr-only">Abrir Menu Principal</span>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-marrondarck bg-opacity-98 flex flex-col items-center justify-center">
          {/* Botão para fechar o menu */}
          <button
            type="button"
            className="absolute top-5 right-4 p-2 text-bejeLigth hover:text-bejeAbobora transition-colors duration-300 focus:outline-none"
            onClick={handleMenu}
            aria-label="Fechar menu"
          >
            <FaTimes size={24} />
          </button>

          <div className="flex flex-col items-center mb-8">
            <img src={logo} alt="logo Jaqueline Reis" className='h-16 w-auto mb-12' />
            <div className="w-16 h-px bg-bejeAbobora/40 mb-10"></div>
          </div>
          
          <nav className="flex flex-col items-center space-y-6 w-full px-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.link}
                className="text-bejeLigth hover:text-bejeAbobora transition-colors duration-300 py-2 w-48 sm:w-56 text-center text-lg font-MontserratRegular border-b border-bejeAbobora/20"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          <div className="absolute bottom-10 text-center">
            <p className="text-bejeLigth/60 text-base font-MontserratRegular">
              © 2025 Jaqueline Reis
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header;