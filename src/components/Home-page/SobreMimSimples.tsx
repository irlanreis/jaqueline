import sobre2 from "../../assets/images/sobre/sobre-2.webp";

function SobreMimSimples() {
  return (
    <section className="py-12 px-4 xs:px-6 sm:px-8 sm:py-16 md:py-20 lg:py-24 bg-bejeLigth/20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="w-full md:w-5/12 mb-8 md:mb-0 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -left-2 xs:-left-3 -top-2 xs:-top-3 w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 border-t-2 border-l-2 border-bejeAbobora/60"></div>
              <img
                src={sobre2}
                alt="Jaqueline Reis - Especialista em Marketing Digital"
                className="w-full max-w-[230px] xs:max-w-[260px] sm:max-w-md lg:max-w-lg mx-auto transition-all duration-500 bg-bejeAbobora/10 hover:bg-bejeAbobora/20 rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute -right-2 xs:-right-3 -bottom-2 xs:-bottom-3 w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 border-b-2 border-r-2 border-bejeAbobora/60"></div>
            </div>
          </div>
          
          
          <div className="md:w-7/12 mt-8 sm:mt-10 md:mt-0">
            <div className="inline-block mb-2 xs:mb-3">
              <span className="text-bejeAbobora font-SpectralRegular italic text-xs xs:text-sm sm:text-base">— Sobre mim —</span>
            </div>
            
            <h2 className="font-SpectralRegular text-xl xs:text-2xl sm:text-3xl text-marrondarck mb-4 sm:mb-5 md:mb-8">
              Prazer, Jaqueline
            </h2>
            
            <div className="w-12 xs:w-16 h-px bg-bejeAbobora mb-4 sm:mb-6 md:mb-8"></div>
            
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 text-marronLight/90 font-MontserratRegular text-sm xs:text-base sm:text-lg">
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
              
              <div className="pt-5 xs:pt-6 sm:pt-8 md:pt-10 flex flex-wrap gap-3 xs:gap-4 sm:gap-6 mt-1 sm:mt-2">
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
