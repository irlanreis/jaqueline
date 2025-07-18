import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como vou receber o Pack Feed Brilhante?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download imediato. Todo o material estará disponível em uma pasta organizada no Google Drive."
    },
    {
      question: "Preciso ter experiência em design para usar os templates?",
      answer: "Não! Os templates foram criados especificamente para pessoas sem conhecimento em design. Você só precisa saber o básico do Canva (que é muito simples) e nós te ensinamos tudo através dos vídeos inclusos."
    },
    {
      question: "Os templates funcionam para qualquer tipo de negócio?",
      answer: "Sim! Os designs são minimalistas e elegantes, o que os torna versáteis para qualquer nicho: coaching, estética, nutrição, moda, consultoria, e muito mais. Você só precisa adaptar as cores e textos para o seu negócio."
    },
    {
      question: "Posso usar os templates quantas vezes quiser?",
      answer: "Claro! O Pack é seu para sempre. Você pode usar e reutilizar os templates quantas vezes quiser, para quantos posts precisar, sem nenhuma limitação."
    },
    {
      question: "E se eu não souber usar o Canva?",
      answer: "Incluímos vídeo aulas passo a passo mostrando exatamente como editar os templates no Canva. Além disso, você terá acesso ao nosso grupo de suporte para tirar qualquer dúvida."
    },
    {
      question: "A garantia é real?",
      answer: "Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro sem fazer perguntas."
    },
    {
      question: "Posso revender os templates?",
      answer: "Não, os templates são para uso pessoal ou do seu negócio. Não é permitida a revenda ou distribuição dos arquivos originais."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-marronLight py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-SpectralRegular text-bejeLigth 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
            leading-tight px-0 sm:px-4">
            Perguntas <strong className="text-bejeAbobora">Frequentes</strong>
          </h2>
          <p className="font-MontserratRegular text-beje 
            mt-3 sm:mt-4 md:mt-5 
            text-sm sm:text-base md:text-lg lg:text-xl 
            max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
            mx-auto px-2">
            Tire todas as suas dúvidas sobre o Pack Feed Brilhante
          </p>
        </div>

        <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-3 sm:mb-4">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full bg-marronLight/70 hover:bg-bejeAbobora/20 rounded-lg 
                  p-3 sm:p-4 md:p-5 
                  text-left transition-all duration-300 
                  flex justify-between items-center"
              >
                <h3 className="font-MontserratRegular font-semibold text-bejeLigth 
                  text-sm sm:text-base md:text-lg 
                  pr-3 sm:pr-4">
                  {faq.question}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="text-bejeAbobora w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-bejeAbobora w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="bg-bejeLigth rounded-b-lg 
                  p-3 sm:p-4 md:p-5 
                  mt-0.5 sm:mt-1">
                  <p className="font-MontserratRegular text-marronLight 
                    text-sm sm:text-base md:text-lg 
                    leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="text-center 
          mt-10 sm:mt-12 md:mt-16 lg:mt-20 
          max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
          mx-auto px-2">
          <h3 className="font-SpectralRegular text-bejeLigth 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            leading-tight 
            mb-4 sm:mb-6 md:mb-8">
            Ainda tem dúvidas? <strong className="text-bejeAbobora">Experimente sem riscos!</strong>
          </h3>
          <a 
            href="https://pay.kiwify.com.br/1Tag7Ep" 
            target="_blank"
            className="inline-block mx-auto"
          >
            <button
              className="font-MontserratRegular font-bold bg-green-600 text-bejeLigth rounded-lg 
              transition-all duration-300 hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300
              text-sm sm:text-base md:text-lg lg:text-xl
              py-3 px-5 sm:py-4 sm:px-7 md:py-5 md:px-9 lg:py-6 lg:px-11"
            >
              GARANTIR MEU PACK COM 7 DIAS DE GARANTIA
            </button>
          </a>
          <p className="text-beje text-xs sm:text-sm mt-3 sm:mt-4">Compra 100% segura. Acesso imediato. Garantia incondicional.</p>
        </div>

      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
