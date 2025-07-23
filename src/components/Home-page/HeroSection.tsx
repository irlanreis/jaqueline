import jaqueApresentacao from '../../assets/images/jaque.webp'

function HeroSection() {
  return (
    <main className="min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-3 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="w-full md:w-5/12 mb-8 md:mb-0 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -left-2 xs:-left-3 -top-2 xs:-top-3 w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 border-t-2 border-l-2 border-bejeAbobora/60"></div>
              <img
                src={jaqueApresentacao}
                alt="Jaqueline Reis - Especialista em Marketing Digital"
                className="w-full max-w-[230px] xs:max-w-[260px] sm:max-w-md lg:max-w-lg mx-auto transition-all duration-500 bg-bejeAbobora/10 hover:bg-bejeAbobora/20 rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute -right-2 xs:-right-3 -bottom-2 xs:-bottom-3 w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 border-b-2 border-r-2 border-bejeAbobora/60"></div>
            </div>
          </div>

          <div className="w-full md:w-7/12 text-center md:text-left order-1 mbl:mt-8 md:order-2 px-1 xs:px-2 sm:px-0">
            <div className="inline-block mb-2 xs:mb-3 sm:mb-2">
              <span className="text-bejeAbobora font-SpectralRegular italic text-xs xs:text-sm sm:text-base">— Bem-vinda(o) —</span>
            </div>
            
            <h1 className="font-SpectralRegular text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-marrondarck mb-4 sm:mb-5 md:mb-6 leading-normal sm:leading-relaxed">
              <div className="text-bejeAbobora mb-1 sm:mb-2">Estratégia com essência.</div>
              <div>Comunicação com propósito.</div>
            </h1>
            
            <div className="w-12 xs:w-16 h-px bg-bejeAbobora mb-4 sm:mb-5 md:mb-6 mx-auto md:mx-0"></div>
            
            <p className="text-marronLight/90 text-sm xs:text-base sm:text-lg md:text-xl font-MontserratRegular leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl md:max-w-2xl">
              Aqui, cada detalhe é pensado com leveza e intenção. Este é um espaço 
              para marcas e pessoas que desejam crescer com verdade e criatividade.
            </p>
            
            <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10">
              <a
                href="/sobre"
                className="relative inline-block font-MontserratRegular text-marrondarck text-xs xs:text-sm sm:text-base md:text-lg group"
              >
                <span className="relative z-10 pr-2 transition-colors duration-300 group-hover:text-bejeAbobora">Conheça minha história</span>
                <span className="inline-block w-5 xs:w-6 h-px bg-bejeAbobora transform translate-y-[-2px] xs:translate-y-[-3px] transition-all duration-300 group-hover:w-7 xs:group-hover:w-8"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection;
