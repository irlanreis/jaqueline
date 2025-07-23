import sobre2 from "../../assets/images/sobre/sobre-2.webp";

function SobreMimSimples() {
  return (
    <section className="py-16 px-16 sm:py-20 md:py-24 bg-bejeLigth/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          <div className="w-full md:w-5/12 mb-10 md:mb-0 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -left-3 -top-3 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 border-l-2 border-bejeAbobora/60"></div>
              <img
                src={sobre2}
                alt="Jaqueline Reis - Especialista em Marketing Digital"
                className="w-full max-w-[260px] sm:max-w-md lg:max-w-lg mx-auto transition-all duration-500 bg-bejeAbobora/10 hover:bg-bejeAbobora/20 rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute -right-3 -bottom-3 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 border-r-2 border-bejeAbobora/60"></div>
            </div>
          </div>
          
          
          <div className="md:w-7/12 mt-12 sm:mt-16 md:mt-0">
            <div className="inline-block mb-3">
              <span className="text-bejeAbobora font-SpectralRegular italic text-sm sm:text-base">— Sobre mim —</span>
            </div>
            
            <h2 className="font-SpectralRegular text-2xl sm:text-3xl text-marrondarck mb-5 sm:mb-8">
              Prazer, Jaqueline
            </h2>
            
            <div className="w-16 h-px bg-bejeAbobora mb-6 sm:mb-8"></div>
            
            <div className="space-y-4 sm:space-y-5 text-marronLight/90 font-MontserratRegular text-base sm:text-lg">
              <p className="leading-relaxed">
                Sou uma mulher movida por fé, criatividade e o desejo de ver pessoas florescendo 
                no digital — e fora dele também.
              </p>
              
              <p className="leading-relaxed">
                À frente da Reis Marketing RR, já caminhei com mais de 160 marcas em quatro países,
                sempre buscando algo além dos números: uma comunicação que tenha alma.
              </p>
              
              <p className="leading-relaxed">
                Por aqui, a gente acredita no valor das trocas verdadeiras, na beleza dos detalhes e 
                na força de quem constrói com propósito.
              </p>
              
              <div className="pt-8 sm:pt-10 flex flex-wrap gap-4 sm:gap-6 mt-2">
                <span className="text-marrondarck border-b border-bejeAbobora text-xs sm:text-sm uppercase tracking-wider font-MontserratRegular">
                  Estratégia Digital
                </span>
                <span className="text-marrondarck border-b border-bejeAbobora text-xs sm:text-sm uppercase tracking-wider font-MontserratRegular">
                  Social Media
                </span>
                <span className="text-marrondarck border-b border-bejeAbobora text-xs sm:text-sm uppercase tracking-wider font-MontserratRegular">
                  Mentoria
                </span>
                <span className="text-marrondarck border-b border-bejeAbobora text-xs sm:text-sm uppercase tracking-wider font-MontserratRegular">
                  Produção de Conteúdo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMimSimples;
