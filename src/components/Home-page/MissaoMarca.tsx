import sobre3 from "../../assets/images/sobre/sobre-3.webp";
import sobre4 from "../../assets/images/sobre/sobre-4.webp";

function MissaoMarca() {
  return (
    <section className="py-12 px-4 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 text-center">
          <div className="inline-block mb-2 xs:mb-3">
            <span className="text-bejeAbobora font-SpectralRegular italic text-sm xs:text-base sm:text-base">— Nossa missão —</span>
          </div>
          <h2 className="font-SpectralRegular text-2xl xs:text-2xl sm:text-3xl md:text-4xl text-marrondarck mb-3 sm:mb-4 md:mb-5">
            O que nos move
          </h2>
          <div className="w-12 xs:w-16 h-px bg-bejeAbobora mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="md:w-5/12">
            <div className="prose prose-lg text-marronLight/90 max-w-none mbl:text-center">
              <p className="text-base xs:text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 font-MontserratRegular">
                Acreditamos que crescer no digital pode — e deve — ser leve, humano e intencional.
              </p>
              
              <p className="text-base xs:text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 font-MontserratRegular">
                Nosso propósito é ajudar você a se posicionar com clareza e essência, 
                usando estratégias que respeitam sua história, seu tempo e seus valores.
              </p>
              
              <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 border-t border-bejeAbobora/20 pt-4 sm:pt-6">
                <p className="italic text-marronLight/80 text-left text-sm xs:text-md sm:text-base md:text-lg font-SpectralRegular w-11/12 sm:w-10/12">
                  "Quando a comunicação parte do coração, ela encontra o caminho certo até as pessoas certas."
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-7/12 mt-6 xs:mt-8 sm:mt-10 md:mt-0">
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              <div className="h-36 xs:h-64 sm:h-56 md:h-64 lg:h-80 xl:h-96">  
                <img 
                  src={sobre3} 
                  alt="Momentos de mentoria" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-36 xs:h-64 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                <img 
                  src={sobre4} 
                  alt="Trabalhando em estratégias" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissaoMarca;
