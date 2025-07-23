import sobre3 from "../../assets/images/sobre/sobre-3.webp";
import sobre4 from "../../assets/images/sobre/sobre-4.webp";

function MissaoMarca() {
  return (
    <section className="p-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 text-center">
          <div className="inline-block mb-3">
            <span className="text-bejeAbobora font-SpectralRegular italic text-sm sm:text-base">— Nossa missão —</span>
          </div>
          <h2 className="font-SpectralRegular text-2xl sm:text-3xl md:text-4xl text-marrondarck mb-5">
            O que nos move
          </h2>
          <div className="w-16 h-px bg-bejeAbobora mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          <div className="md:w-5/12">
            <div className="prose prose-lg text-marronLight/90 max-w-none">
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-MontserratRegular">
                Acreditamos que crescer no digital pode — e deve — ser leve, humano e intencional.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-MontserratRegular">
                Nosso propósito é ajudar você a se posicionar com clareza e essência, 
                usando estratégias que respeitam sua história, seu tempo e seus valores.
              </p>
              
              <div className="mt-8 sm:mt-10 md:mt-12 border-t border-bejeAbobora/20 pt-6">
                <p className="italic text-marronLight/80 text-left text-sm sm:text-base md:text-lg font-SpectralRegular w-10/12">
                  "Quando a comunicação parte do coração, ela encontra o caminho certo até as pessoas certas."
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-7/12 mt-8 sm:mt-10 md:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="h-48 sm:h-56 md:h-64 lg:h-96">  
                <img 
                  src={sobre3} 
                  alt="Momentos de mentoria" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 sm:h-56 md:h-64 lg:h-96">
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
