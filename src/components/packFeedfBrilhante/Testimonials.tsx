import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      profession: "Coach de Relacionamentos",
      text: "Depois do Pack Feed Brilhante, meu Instagram transformou completamente! Agora recebo mensagens diárias de potenciais clientes interessados nos meus serviços. O melhor investimento que fiz para o meu negócio!",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      profession: "Nutricionista",
      text: "Eu passava horas tentando criar um post bonito e nunca ficava satisfeita. Com os templates do Pack, criei 30 posts em apenas 2 horas! Meu feed ficou muito mais profissional.",
      rating: 5
    },
    {
      name: "Fernanda Costa",
      profession: "Consultora de Beleza",
      text: "Os designs são simplesmente perfeitos! Elegantes, modernos e fáceis de editar. Minha audiência triplicou em 2 meses e já consegui 15 clientes novos através do Instagram.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="bg-bejeLigth py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-SpectralRegular text-marronLight 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
            leading-tight px-0 sm:px-4">
            O que nossas clientes estão <strong className="text-bejeAbobora">falando</strong>
          </h2>
          <p className="font-MontserratRegular text-marronLight 
            mt-3 sm:mt-4 md:mt-5 
            text-sm sm:text-base md:text-lg lg:text-xl 
            max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
            mx-auto px-2">
            Mais de 500 empreendedoras já transformaram seus feeds e aumentaram suas vendas com o Pack Feed Brilhante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-4 sm:gap-5 md:gap-6 lg:gap-8 
          max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg 
              p-4 sm:p-5 md:p-6 
              relative 
              hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <Quote className="text-bejeAbobora 
                w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                mb-3 md:mb-4 
                opacity-50" />
              <p className="font-MontserratRegular text-marronLight 
                text-sm sm:text-base 
                leading-relaxed 
                mb-3 md:mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <div>
                <h4 className="font-MontserratRegular font-bold text-marronLight 
                  text-base sm:text-lg">
                  {testimonial.name}
                </h4>
                <p className="font-MontserratRegular text-bejeAbobora text-xs sm:text-sm">
                  {testimonial.profession}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center 
          mt-10 sm:mt-12 md:mt-16 lg:mt-20 
          max-w-4xl mx-auto">
          <h3 className="font-SpectralRegular text-marronLight 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            leading-tight 
            mb-4 sm:mb-5 md:mb-6 
            px-2">
            Seja a próxima <strong className="text-bejeAbobora">história de sucesso</strong>!
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
              QUERO MEU PACK AGORA
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
