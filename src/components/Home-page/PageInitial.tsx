import jaque02 from '../../assets/images/jaque-svg2.svg'

function PageInitial() {
  return (
    <main className="bg-marrondarck w-full h-full p-4">
      <div className="flex justify-center mt-5 relative">
        <div className='w-full h-auto relative'>
          <img
            src={jaque02}
            alt="Jaqueline perfil"
            className="sm:h-48 sm:w-96 sm:object-none 2xl:w-1/2 2xl:h-auto"
          />
          <span className="
        absolute
        h-1/2
        top-auto
        inset-0
        bg-gradient-to-b 
        from-transparent 
        to-marrondarck
        "
          ></span>
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-stretch">
        <p className="text-bejeAbobora text-4xl font-extralight pt-8">Olá, sou Jaqueline Reis,</p>
        <p className="text-bejeLigth text-xl font-light ml-1">social media e criadora de conteúdos há mais de 3 anos.</p>
        <p className="text-bejeLigth text-xl pl-1 font-light mt-12">Meu propósito é fazer você e sua empresa terem um <strong className="text-bejeAbobora font-bold">posicionamento brilhante no digital</strong> através de uma criação de conteúdo Estratégica & Intencional.</p>
      </div>
    </main>
  )
}

export default PageInitial;