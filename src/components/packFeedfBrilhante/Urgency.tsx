import { Clock, AlertCircle } from "lucide-react";

const Urgency = () => {
  return (
    <section className="bg-bejeAbobora py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-center 
            gap-2 sm:gap-0 
            mb-5 sm:mb-6">
            <Clock className="text-bejeLigth 
              w-7 h-7 sm:w-8 sm:h-8 
              mb-2 sm:mb-0 sm:mr-3" />
            <h2 className="font-SpectralRegular text-bejeLigth 
              text-xl sm:text-2xl md:text-3xl lg:text-4xl 
              font-bold sm:font-normal">
              <strong>Atenção!</strong> Oferta por tempo limitado
            </h2>
          </div>

          <div className="bg-marronLight/30 rounded-lg 
            p-4 sm:p-5 md:p-6 
            mb-5 sm:mb-6 
            shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center 
              gap-1 sm:gap-0 
              mb-2 sm:mb-3">
              <AlertCircle className="text-yellow-400 
                w-5 h-5 sm:w-6 sm:h-6 
                mb-1 sm:mb-0 sm:mr-2" />
              <p className="font-MontserratRegular text-bejeLigth 
                text-base sm:text-lg md:text-xl 
                font-bold">
                Preço promocional válido apenas hoje!
              </p>
            </div>
            <p className="font-MontserratRegular text-beje 
              text-sm sm:text-base md:text-lg 
              max-w-xs sm:max-w-lg md:max-w-xl 
              mx-auto">
              O Pack Feed Brilhante está com <strong className="text-white">50% de desconto</strong> apenas nas próximas horas. 
              Depois dessa oferta, o valor volta ao preço normal de R$ 197,00.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row 
            items-center justify-center 
            gap-4 sm:gap-6 md:gap-8 
            text-bejeLigth">
            <div className="flex items-center">
              <span className="text-base sm:text-lg md:text-xl">⚡</span>
              <span className="ml-2 text-xs sm:text-sm md:text-base">Acesso imediato</span>
            </div>
            <div className="flex items-center">
              <span className="text-base sm:text-lg md:text-xl">🎯</span>
              <span className="ml-2 text-xs sm:text-sm md:text-base">Resultados garantidos</span>
            </div>
            <div className="flex items-center">
              <span className="text-base sm:text-lg md:text-xl">🔒</span>
              <span className="ml-2 text-xs sm:text-sm md:text-base">Compra 100% segura</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Urgency;
