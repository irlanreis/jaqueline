import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook para fazer scroll para o topo da página quando a rota muda
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};

/**
 * Função para navegar para o topo da página com animação suave
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};
