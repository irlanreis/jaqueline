import logo from '../../assets/images/logo-Jaque.svg'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import navLinks from '../../constants/navLinks';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen((prev) => !prev)
    console.log(isOpen);
  }


  return (
    <div className="bg-marrondarck fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white">
              <img src={logo} alt="logo Jakeline Reis" />
            </Link>
          </div>
          {/*navLinks*/}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {
                navLinks.map((link, i) => (
                  <Link
                    key={i}
                    className="text-bejeAbobora hover:bg-marrondarck hover:text-beje px-3 py-2 rounded-md text-sm font-medium text-center"
                    to={link.link} >
                    {link.title}
                  </Link>
                ))
              }
            </div>
          </div>
          {/* Amburguer button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-bejeLigth hover:text-bejeAbobora hover:bg-marronLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber focus:ring-white"
              onClick={handleMenu}
            >
              <span className="sr-only">Open Main Menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-marrondarck bg-opacity-90 flex flex-col items-center justify-center">
          {/* Botão para fechar o menu */}
          <button
            type="button"
            className="inline-flex absolute top-4 right-2 p-2 rounded-md text-bejeLigth hover:text-bejeAbobora hover:bg-marronLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber focus:ring-white"
            onClick={handleMenu}
          >
            <span className="sr-only">Open Main Menu</span>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.link}
              className="text-bejeAbobora hover:bg-marronLight hover:text-beje rounded-md block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)} // Opcional: fecha o menu ao clicar em um item
            >
              {link.title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Header;