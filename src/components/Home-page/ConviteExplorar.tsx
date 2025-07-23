import { Link } from "react-router-dom";

function ConviteExplorar() {
  return (
    <section className="py-12 xs:py-14 sm:py-16 bg-bejeLigth">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
          <h2 className="font-SpectralRegular text-xl xs:text-2xl sm:text-3xl text-marrondarck mb-4 sm:mb-6 text-center">
            Fique à vontade por aqui
          </h2>

          <p className="text-marronLight text-sm xs:text-base sm:text-lg text-center mb-3 sm:mb-4 font-MontserratRegular">
            Este espaço é seu também. Explore os conteúdos, leia com calma,
            sinta se faz sentido.
          </p>

          <p className="text-marronLight text-sm xs:text-base sm:text-lg text-center mb-6 sm:mb-8 font-MontserratRegular">
            Se algo tocar o seu coração, saiba: não é coincidência.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link
              to="/sobre"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white border border-bejeAbobora rounded-lg text-bejeAbobora hover:bg-bejeAbobora/5 transition-colors font-MontserratRegular text-xs xs:text-sm sm:text-base"
            >
              Minha História
            </Link>
            <Link
              to="/portfolio"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white border border-bejeAbobora rounded-lg text-bejeAbobora hover:bg-bejeAbobora/5 transition-colors font-MontserratRegular text-xs xs:text-sm sm:text-base"
            >
              Portfólio
            </Link>
            <a
              href="mailto:reismarketing.rr@gmail.com"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-bejeAbobora rounded-lg text-white hover:bg-bejeAbobora/90 transition-colors font-MontserratRegular text-xs xs:text-sm sm:text-base"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConviteExplorar;
