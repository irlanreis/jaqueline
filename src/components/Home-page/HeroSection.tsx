import jaqueApresentacao from '../../assets/images/jaque.webp'

function HeroSection() {
  return (
    <main className="min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="w-full md:w-5/12 mb-10 md:mb-0 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -left-3 -top-3 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 border-l-2 border-bejeAbobora/60"></div>
              <img
                src={jaqueApresentacao}
                alt="Jaqueline Reis - Especialista em Marketing Digital"
                className="w-full max-w-[260px] sm:max-w-md lg:max-w-lg mx-auto transition-all duration-500 bg-bejeAbobora/10 hover:bg-bejeAbobora/20 rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute -right-3 -bottom-3 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 border-r-2 border-bejeAbobora/60"></div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 text-center md:text-left order-1 md:order-2 px-2 sm:px-0">
            <div className="inline-block mb-3 sm:mb-2">
              <span className="text-bejeAbobora font-SpectralRegular italic text-sm sm:text-base">— Bem-vinda(o) —</span>
            </div>
            
            <h1 className="font-SpectralRegular text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-marrondarck mb-5 sm:mb-6 md:mb-8 leading-normal sm:leading-relaxed">
              <div className="text-bejeAbobora mb-1 sm:mb-2">Estratégia com essência.</div>
              <div>Comunicação com propósito.</div>
            </h1>
            
            <div className="w-16 h-px bg-bejeAbobora mb-5 sm:mb-6 md:mb-8 mx-auto md:mx-0"></div>
            
            <p className="text-marronLight/90 text-base sm:text-lg md:text-xl font-MontserratRegular leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl md:max-w-2xl">
              Aqui, cada detalhe é pensado com leveza e intenção. Este é um espaço 
              para marcas e pessoas que desejam crescer com verdade e criatividade.
            </p>
            
            <div className="mt-8 sm:mt-10">
              <a
                href="/sobre"
                className="relative inline-block font-MontserratRegular text-marrondarck text-sm sm:text-base md:text-lg group"
              >
                <span className="relative z-10 pr-2 transition-colors duration-300 group-hover:text-bejeAbobora">Conheça minha história</span>
                <span className="inline-block w-6 h-px bg-bejeAbobora transform translate-y-[-3px] transition-all duration-300 group-hover:w-8"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection;
