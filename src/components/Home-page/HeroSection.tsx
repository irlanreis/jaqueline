import jaqueApresentacao from '../../assets/images/landing-page/jaqueApresentacao.webp'

function HeroSection() {
  return (
    <main className="bg-marrondarck p-4 pb-0 overflow-x-hidden">
      <div className="flex flex-col items-center mt-5
      md:flex-row md:justify-around">
        <div className='relative xs:max-w-xs sm:max-w-sm md:max-w-md md:w-1/2 xl:max-w-xl xl:w-1/2'>
          <img
            src={jaqueApresentacao}
            alt="Jaqueline perfil"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl object-contain h-auto"
          />
          <span
            className="
              absolute
              inset-0
              bg-gradient-to-b 
              from-transparent 
              to-marrondarck
              pointer-events-none
              "
          ></span>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center text-center mt-8
        md:w-1/2 md:items-start md:text-left md:mt-0 md:ml-10">
          <p className="text-bejeAbobora text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extralight mb-2 ">Olá, sou Jaqueline Reis</p>
          <p className="text-bejeLigth text-lg sm:text-xl md:text-2xl font-light">Social Media e Criadora de Conteúdos há mais de 3 anos.</p>
          <p className="text-bejeLigth text-lg sm:text-xl md:text-2xl font-light mt-10">
            Meu propósito é fazer você e sua empresa terem um <strong className="text-bejeAbobora font-bold">posicionamento brilhante no digital</strong> através de uma criação de conteúdo Estratégica & Intencional.
          </p>
        </div>
      </div>
    </main>
  )
}

export default HeroSection;
