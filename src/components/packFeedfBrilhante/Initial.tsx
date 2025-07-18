import { useEffect, useState } from "react";

const Initial = () => {

  const [background, setBackground] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width >= 1480) {
        setBackground("bg-lg-bg-end");
      } else if (width >= 1228) {
        setBackground("bg-lg-bg-mid");
      } else if (width >= 1024) {
        setBackground("bg-lg-bg-start");
      } else {
        setBackground("bg-jaqueSorriso");
      }
    };

    window.addEventListener("resize", updateBackground);
    updateBackground();

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <div className={`min-h-[100vh] bg-cover bg-no-repeat bg-center ${background}`}>
      <div className="flex items-end justify-self-stretch min-h-[100vh] w-full">
        <div
          className="flex flex-col items-center justify-center h-full w-full px-4 py-10 space-y-8
          lt:py-6 lt:space-y-4
          mbl:py-8 mbl:space-y-6 mbl:px-6 
          sm:py-10 sm:space-y-8 
          md:py-14 md:space-y-10 md:px-8
          lg:w-1/2 lg:space-y-12 lg:px-12
          xl:w-3/5 xl:space-y-14 xl:px-8 xl:pb-16
          2xl:w-1/2 2xl:space-y-16"
        >
          {/* Título Principal - H1 */}
          <h1
            className="text-bejeLigth text-center font-SpectralRegular font-normal leading-[1.1]
            lt:text-4xl lt:max-w-xs
            mbl:text-5xl mbl:max-w-sm
            sm:text-6xl sm:max-w-md
            md:text-7xl md:max-w-lg
            lg:text-7xl lg:max-w-2xl
            xl:text-8xl xl:max-w-3xl
            2xl:text-8xl 2xl:max-w-4xl"
          >
            Pack Feed <strong className="font-bold text-white">Brilhante</strong>
          </h1>

          {/* Subtítulo - H2 */}
          <h2
            className="text-bejeAbobora text-center font-MontserratRegular font-light leading-relaxed
            lt:text-base lt:max-w-xs
            mbl:text-lg mbl:max-w-sm
            sm:text-xl sm:max-w-md sm:px-4
            md:text-2xl md:max-w-lg md:bg-marronLight md:bg-opacity-40 md:rounded-xl md:p-6
            lg:text-2xl lg:max-w-2xl lg:bg-transparent lg:p-0
            xl:text-3xl xl:max-w-3xl"
          >
            Transforme o seu feed e atraia mais clientes com modelos de posts
            elegantes e minimalistas
          </h2>

          {/* Texto descritivo - P */}
          <p
            className="text-bejeLigth text-center font-MontserratRegular leading-relaxed
            lt:text-xs lt:max-w-xs lt:px-2
            mbl:text-sm mbl:max-w-sm mbl:px-3
            sm:text-base sm:max-w-md sm:px-4
            md:text-lg md:max-w-lg md:px-0
            lg:text-xl lg:max-w-2xl
            xl:text-2xl xl:max-w-3xl"
          >
            <strong className="text-beje font-bold">
              +100 modelos de posts 100% editáveis
            </strong>{" "}
            que foram desenvolvidos por uma designer especialista em feed
            elegante e minimalista. Adaptáveis para qualquer nicho.
          </p>

          {/* Botão CTA */}
          <a 
            href="https://pay.kiwify.com.br/1Tag7Ep" 
            target="_blank"
            className="w-full max-w-sm mx-auto mt-4"
          >
            <button
              className="w-full font-MontserratRegular font-bold bg-green-600 text-bejeLigth rounded-lg 
              transition-all duration-300 hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300
              lt:text-sm lt:py-3 lt:px-4
              mbl:text-base mbl:py-4 mbl:px-6
              sm:text-lg sm:py-5 sm:px-8
              md:text-xl md:py-5 md:px-8
              lg:text-xl lg:py-5 lg:px-10
              xl:text-2xl xl:py-6 xl:px-6"
            >
              QUERO ACESSAR AGORA
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Initial;
