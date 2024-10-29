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
    <div className={`h-screen bg-cover  bg-no-repeat bg-top ${background}`}>
      <div
        className="flex flex-col justify-end h-full w-full absolute"
      >
        <div
          className="flex flex-col items-center 
          mbl:h-3/5
          sm:h-3/5 sm:justify-end sm:mb-4
          md:h-1/2 md:justify- space-y-0
          lg:h-4/5 lg:w-1/2 lg:place-items-center"
        >
          <h1
            className="text-bejeLigth text-center font-SpectralRegular
        mbl:max-w-96 mbl:text-6xl
        sm:w-96 sm:text-7xl 
        md:w-2/3 md:text-7xl 
        lg:text-8xl lg:w-full lg:max-w-xl"
          >
            Pack Feed <strong className="">Brilhante</strong>
          </h1>
          <p
            className="text-bejeAbobora text-center  font-thin font-MontserratRegular
            lt:text-lg lt:w-full lt:px-2 
            mbl:w-full mbl:text-2xl mbl:px-2
            sm:max-w-2xl sm:text-2xl sm:mt-0 sm:p-8 sm:w-full
            md:text-2xl md:w-full md:relative md:text-center md:max-w-2xl md:rounded-xl md:bg-marronLight md:p-4 md:bg-opacity-40
            lg:bg-transparent lg:text-4xl lg:w-2/3 lg:font-thin"
          >
            Transforme o seu feed e atraia mais clientes com modelos de posts
            elegantes e minimalistas
          </p>
          <p
            className="text-bejeLigth
            lt:text-sm lt:w-full lt:px-2
          mbl:w-full mbl:h-auto mbl:px-2 mbl:text-center font-MontserratRegular 
          sm:text-center sm:max-w-lg sm:text-base sm:p-6
          md:text-xl md:text-center md:w-full md:max-w-2xl
          lg:text-xl lg:w-2/3"
          >
            <strong className="text-beje text-xl  font-extrabold">
              +100 modelos de posts 100% editáveis
            </strong> que foram desenvolvidos por uma designer especialista em feed
            elegante e minimalista. Adaptáveis para qualquer nicho.
          </p>

          <a href="https://pay.kiwify.com.br/1Tag7Ep" target="_blank">
            <button
              className="
            lt:w-30vh lt:text-lg lt:p-3 lt:m-3
            mbl:w-40vh p-3 mbl:text-xl mbl:p-4 font-semibold bg-green-600  font-MontserratRegular rounded-lg text-bejeLigth hover:bg-green-500
            sm:w-96 sm:text-xl sm:p-6
            md:w-96 md:p-6 md:max-w-2xl md:text-xl"
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
