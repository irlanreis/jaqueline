import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../hooks/useScrollToTop';

/**
 * Componente que exibe um botão para voltar ao topo da página
 * quando o usuário rolar para baixo
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controla a visibilidade do botão com base na posição de rolagem
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed right-4 bottom-6 p-3 sm:p-4 rounded-full bg-bejeAbobora shadow-lg text-white hover:bg-bejeAbobora/90 transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
