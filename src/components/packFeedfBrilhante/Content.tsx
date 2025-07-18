import images from "../../constants/imgsLandinData";
import { CheckCircle } from "lucide-react";

const Content = () => {
  const benefits = [
    "Designs editáveis no Canva gratuito",
    "Adaptável para qualquer nicho de mercado",
    "Suporte para tirar dúvidas",
    "Vídeo aulas ensinando a usar",
    "Acesso vitalício e atualizações futuras",
    "Bônus exclusivos para acelerar seus resultados"
  ];

  return (
    <section className="bg-bejeLigth py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Seção de Dor */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="font-SpectralRegular text-marronLight text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl leading-tight">
            Você se sente <strong className="text-bejeAbobora">perdida e sem tempo</strong> para criar posts para o seu Instagram?
          </h2>
          <p className="font-MontserratRegular text-marronLight mt-4 sm:mt-6 
            text-sm sm:text-base md:text-lg lg:text-xl 
            max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
            Quantas vezes você já ficou horas na frente do computador, travada, sem saber o que postar para atrair clientes e transmitir profissionalismo?
          </p>
        </div>

        {/* Galeria de Imagens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-2 sm:gap-3 md:gap-4 lg:gap-5 
          mb-10 sm:mb-14 md:mb-16 lg:mb-20 
          max-w-8xl mx-auto">
          {images[0].slice(0, 8).map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={img}
                alt={`Exemplo de post ${i + 1}`}
                className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Seção de Solução */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h3 className="font-SpectralRegular text-marronLight 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            leading-tight 
            max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl 
            mx-auto px-2">
            Com o <strong className="text-bejeAbobora">Pack Feed Brilhante</strong>, você terá posts profissionais e elegantes em <strong className="text-bejeAbobora">menos de 10 minutos</strong>.
          </h3>
        </div>

        {/* Benefícios */}
        <div className="bg-white rounded-lg shadow-lg 
          p-5 sm:p-6 md:p-8 lg:p-10 
          max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl 
          mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h4 className="font-SpectralRegular text-marronLight 
            text-xl sm:text-2xl md:text-3xl 
            text-center mb-4 sm:mb-6 md:mb-8">O que você vai receber:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start sm:items-center font-MontserratRegular text-marronLight 
                text-sm sm:text-base md:text-lg 
                py-1">
                <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Secundário */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="font-SpectralRegular text-marronLight 
            text-xl sm:text-2xl md:text-3xl lg:text-5xl 
            leading-tight mb-5 sm:mb-6 md:mb-8 
            px-2">
            Pronta para ter um feed <strong className="text-bejeAbobora">impecável</strong> e <strong className="text-bejeAbobora">atrair mais clientes</strong>?
          </h3>
          <a 
            href="https://pay.kiwify.com.br/1Tag7Ep" 
            target="_blank"
            className="inline-block mx-auto"
          >
            <button
              className="font-MontserratRegular font-bold bg-green-600 text-bejeLigth rounded-lg 
              transition-all duration-300 hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300
              text-base sm:text-lg md:text-xl lg:text-2xl
              py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-6 lg:px-12"
            >
              QUERO TRANSFORMAR MEU FEED
            </button>
          </a>
          <p className="text-marronLight text-xs sm:text-sm mt-3 sm:mt-4">Compra 100% segura. Acesso imediato.</p>
        </div>

      </div>
    </section>
  );
};

export default Content;