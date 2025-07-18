import { Star } from "lucide-react";
import PromoCard from "./PromoCard";

const Offer = () => {
  const bonusList = [
    {
      title: "Bônus 1: Paleta de Cores",
      description: "Combinações de cores prontas para você usar e manter a harmonia visual."
    },
    {
      title: "Bônus 2: Guia de Edição no Canva",
      description: "Um passo a passo simples para você personalizar seus posts sem dificuldades."
    },
    {
      title: "Bônus 3: Suporte Exclusivo",
      description: "Acesso ao nosso grupo de suporte para tirar todas as suas dúvidas."
    }
  ];

  return (
    <section className="bg-marronLight py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-SpectralRegular text-bejeLigth 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            leading-tight 
            mx-auto max-w-3xl">
            Uma oferta <strong className="text-bejeAbobora">irresistível</strong> para você começar hoje
          </h2>
          <p className="font-MontserratRegular text-beje 
            mt-3 sm:mt-4 md:mt-5 
            text-sm sm:text-base md:text-lg 
            mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl">
            Tenha acesso a tudo que você precisa para criar um feed profissional e atraente por um preço que cabe no seu bolso.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center 
          gap-10 lg:gap-12 xl:gap-16 
          max-w-5xl mx-auto">
          
          {/* Card de Preço */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:w-1/2">
            <PromoCard />
          </div>

          {/* Lista de Bônus */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="font-SpectralRegular text-bejeLigth 
              text-xl sm:text-2xl md:text-3xl 
              text-center lg:text-left 
              mb-4 sm:mb-6">
              E ainda tem mais... <strong className="text-bejeAbobora">Bônus Exclusivos!</strong>
            </h3>
            <div className="space-y-4">
              {bonusList.map((bonus, i) => (
                <div key={i} className="bg-marronLight/70 rounded-lg 
                  p-4 sm:p-5 
                  flex items-start 
                  shadow-md
                  transition-all duration-300 
                  hover:bg-bejeAbobora/20 hover:translate-y-[-2px]">
                  <Star className="text-bejeAbobora 
                    w-6 h-6 sm:w-7 sm:h-7 
                    mr-3 sm:mr-4 
                    mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-MontserratRegular font-bold text-bejeLigth 
                      text-base sm:text-lg">
                      {bonus.title}
                    </h4>
                    <p className="font-MontserratRegular text-beje 
                      text-sm sm:text-base 
                      mt-1">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Garantia */}
        <div className="text-center 
          mt-12 sm:mt-16 md:mt-20
          max-w-xl sm:max-w-2xl md:max-w-3xl 
          mx-auto 
          bg-marronLight/30 p-5 sm:p-6 md:p-8 rounded-lg shadow-md">
            <h4 className="font-SpectralRegular text-bejeLigth 
              text-lg sm:text-xl md:text-2xl 
              mb-3 sm:mb-4">
                Sua satisfação ou seu dinheiro de volta!
            </h4>
            <p className="font-MontserratRegular text-beje 
              text-sm sm:text-base 
              leading-relaxed">
                Você tem <strong className="text-white">7 dias de garantia incondicional</strong>. Se por qualquer motivo você não ficar satisfeita com o Pack Feed Brilhante, basta nos enviar um e-mail e nós devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Offer;