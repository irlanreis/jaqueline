import React, { useState } from "react";
import Header from "../components/Home-page/Header";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import TitleDinamic from "../components/Home-page/TitleDinamic";

const Contato: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Referência para os itens do FAQ
  const faqRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    const wasOpen = openFaqIndex === index;
    setOpenFaqIndex(wasOpen ? null : index);
    
    // Se estamos abrindo um item, faça scroll suave até ele após um pequeno delay
    // para permitir que a animação de abertura inicie
    if (!wasOpen) {
      setTimeout(() => {
        faqRefs.current[index]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center'
        });
      }, 100);
    }
  };
  
  return (
    <>
      <TitleDinamic
        title="Contato | Jaqueline Reis Marketing"
        description="Entre em contato com Jaqueline Reis para impulsionar seu marketing digital."
      />
      <Header />

      <main className="pt-16 bg-gradient-to-b from-beje to-bejeClaro min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-20 px-4 bg-marrondarck">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-spectral text-bejeAbobora mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-bejeClaro max-w-3xl mx-auto">
              Estou pronta para ajudar a transformar sua presença online e
              impulsionar seus resultados de marketing.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-spectral text-marrondarck mb-4">
                Vamos Conversar Sobre Seu Projeto
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estou disponível para discutir como posso ajudar a sua marca a crescer
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg max-w-3xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-bejeAbobora mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-medium text-marrondarck text-lg">Email</h3>
                      <a href="mailto:reismarketing.rr@gmail.com" className="text-gray-700 hover:text-bejeAbobora transition-colors">
                        reismarketing.rr@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-bejeAbobora mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-medium text-marrondarck text-lg">Telefone</h3>
                      <a href="tel:+5595991217538" className="text-gray-700 hover:text-bejeAbobora transition-colors">
                        (95) 99121-7538
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-bejeAbobora mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-medium text-marrondarck text-lg">
                        Localização
                      </h3>
                      <p className="text-gray-700">Boa Vista, RR - Brasil</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-marrondarck mb-3 text-lg flex items-center">
                      Redes Sociais
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/jaquelinereisw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-bejeAbobora text-white p-3 rounded-full hover:bg-marronLight transition-colors"
                        aria-label="Instagram"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href="https://www.facebook.com/IrlaneJaque/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-bejeAbobora text-white p-3 rounded-full hover:bg-marronLight transition-colors"
                        aria-label="Facebook"
                      >
                        <FaFacebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-700">
                  Prefere uma conversa direta? Envie uma mensagem no WhatsApp ou agende uma reunião online.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                  <a 
                    href="https://wa.me/5595991217538" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-bejeAbobora hover:bg-marronLight text-white py-3 px-6 rounded-full transition-colors font-medium text-center"
                  >
                    Falar no WhatsApp
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-spectral text-marrondarck mb-4 inline-block relative">
              Perguntas Frequentes
              <span className="absolute bottom-0 left-0 w-full h-1 bg-bejeAbobora transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços de marketing
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
              <span className="inline-block mr-1 text-bejeAbobora">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </span>
              <span className="italic">Clique nas perguntas para expandir as respostas</span>
            </div>
          </div>

          <div className="space-y-4 transition-all duration-500">
            {/* FAQ Item 1 */}
            <div 
              ref={el => faqRefs.current[0] = el}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openFaqIndex === 0 ? 'shadow-lg border-l-4 border-bejeAbobora' : 'hover:shadow-lg'} cursor-pointer group`}
              onClick={() => toggleFaq(0)}
            >
              <div 
                className="w-full p-6 md:p-8 text-left flex justify-between items-center group-hover:bg-bejeClaro/10 transition-colors"
              >
                <h3 className="text-xl font-medium font-spectral text-bejeAbobora">
                  Você tem equipe?
                </h3>
                <span className={`text-bejeAbobora transition-transform duration-300 ${openFaqIndex === 0 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 0 ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-700 border-t border-gray-100 animate-fadeIn overflow-y-auto max-h-[400px] custom-scrollbar">
                  Sim! A <strong className="text-bejeAbobora">Reis Marketing</strong> é a grande protagonista dessa história, eu, meu marido e minha equipe formamos o corpo responsável por todos os projetos. Cada marca tem seu
                  próprio ritmo, por isso trabalhamos com transparência e responsabilidade.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div 
              ref={el => faqRefs.current[1] = el}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openFaqIndex === 1 ? 'shadow-lg border-l-4 border-bejeAbobora' : 'hover:shadow-lg'} cursor-pointer group`}
              onClick={() => toggleFaq(1)}
            >
              <div 
                className="w-full p-6 md:p-8 text-left flex justify-between items-center group-hover:bg-bejeClaro/10 transition-colors"
              >
                <h3 className="text-xl font-medium font-spectral text-bejeAbobora">
                  Como funciona o processo de trabalho?
                </h3>
                <span className={`text-bejeAbobora transition-transform duration-300 ${openFaqIndex === 1 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 1 ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-700 border-t border-gray-100 space-y-3 animate-fadeIn overflow-y-auto max-h-[400px] custom-scrollbar relative">
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white pointer-events-none opacity-50"></div>
                  <p>
                    Meu processo de trabalho é estruturado em 5 etapas principais:
                  </p>
                  <ol className="list-decimal ml-5 space-y-2">
                    <li className="p-1 hover:bg-bejeClaro/10 rounded-md transition-colors"><strong className="text-bejeAbobora">Descoberta</strong>: Reunião inicial para entender seus objetivos de negócio</li>
                    <li className="p-1 hover:bg-bejeClaro/10 rounded-md transition-colors"><strong className="text-bejeAbobora">Análise</strong>: Estudo detalhado da sua presença digital atual</li>
                    <li className="p-1 hover:bg-bejeClaro/10 rounded-md transition-colors"><strong className="text-bejeAbobora">Estratégia</strong>: Desenvolvimento do plano personalizado com metas claras</li>
                    <li className="p-1 hover:bg-bejeClaro/10 rounded-md transition-colors"><strong className="text-bejeAbobora">Implementação</strong>: Execução das ações estratégicas definidas</li>
                    <li className="p-1 hover:bg-bejeClaro/10 rounded-md transition-colors"><strong className="text-bejeAbobora">Monitoramento</strong>: Análise constante de resultados e ajustes quando necessário</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div 
              ref={el => faqRefs.current[2] = el}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openFaqIndex === 2 ? 'shadow-lg border-l-4 border-bejeAbobora' : 'hover:shadow-lg'} cursor-pointer group`}
              onClick={() => toggleFaq(2)}
            >
              <div 
                className="w-full p-6 md:p-8 text-left flex justify-between items-center group-hover:bg-bejeClaro/10 transition-colors"
              >
                <h3 className="text-xl font-medium font-spectral text-bejeAbobora">
                  Quais serviços você oferece?
                </h3>
                <span className={`text-bejeAbobora transition-transform duration-300 ${openFaqIndex === 2 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 2 ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-700 border-t border-gray-100 animate-fadeIn overflow-y-auto max-h-[400px] custom-scrollbar relative">
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white pointer-events-none opacity-50"></div>
                  <p className="mb-3">
                    Ofereço serviços completos de marketing digital para criar presença online estratégica e resultados mensuráveis:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-bejeClaro/30 p-3 rounded hover:bg-bejeClaro/50 hover:shadow-sm transition-all duration-300 cursor-default">
                      ✨ <span className="font-medium">Estratégia de conteúdo</span>
                    </div>
                    <div className="bg-bejeClaro/30 p-3 rounded hover:bg-bejeClaro/50 hover:shadow-sm transition-all duration-300 cursor-default">
                      ✨ <span className="font-medium">Gestão de redes sociais</span>
                    </div>
                    <div className="bg-bejeClaro/30 p-3 rounded hover:bg-bejeClaro/50 hover:shadow-sm transition-all duration-300 cursor-default">
                      ✨ <span className="font-medium">Storys Personalizados</span>
                    </div>
                    <div className="bg-bejeClaro/30 p-3 rounded hover:bg-bejeClaro/50 hover:shadow-sm transition-all duration-300 cursor-default">
                      ✨ <span className="font-medium">SEO e otimização</span>
                    </div>
                    <div className="bg-bejeClaro/30 p-3 rounded hover:bg-bejeClaro/50 hover:shadow-sm transition-all duration-300 cursor-default">
                      ✨ <span className="font-medium">Landing pages</span>
                    </div>
                    <div className="bg-bejeClaro/30 p-3 rounded hover:bg-bejeClaro/50 hover:shadow-sm transition-all duration-300 cursor-default">
                      ✨ <span className="font-medium">Sites, Blogs e Ferramentas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div 
              ref={el => faqRefs.current[3] = el}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openFaqIndex === 3 ? 'shadow-lg border-l-4 border-bejeAbobora' : 'hover:shadow-lg'} cursor-pointer group`}
              onClick={() => toggleFaq(3)}
            >
              <div 
                className="w-full p-6 md:p-8 text-left flex justify-between items-center group-hover:bg-bejeClaro/10 transition-colors"
              >
                <h3 className="text-xl font-medium font-spectral text-bejeAbobora">
                  Você trabalha com empresas de pequeno porte?
                </h3>
                <span className={`text-bejeAbobora transition-transform duration-300 ${openFaqIndex === 3 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 3 ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-700 border-t border-gray-100 animate-fadeIn overflow-y-auto max-h-[400px] custom-scrollbar">
                  <p>Sim! Trabalho com empresas de todos os tamanhos, desde pequenos empreendedores até grandes corporações.</p>
                  <div className="mt-3 p-3 bg-bejeClaro/10 rounded-md border-l-4 border-bejeAbobora">
                    <p className="italic">Minha abordagem é sempre personalizada, garantindo que as estratégias desenvolvidas estejam alinhadas com seus objetivos específicos e sejam adequadas ao seu orçamento.</p>
                  </div>
                  <p className="mt-3">Acredito que marketing eficiente deve ser acessível para negócios em qualquer estágio de crescimento.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div 
              ref={el => faqRefs.current[4] = el}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openFaqIndex === 4 ? 'shadow-lg border-l-4 border-bejeAbobora' : 'hover:shadow-lg'} cursor-pointer group`}
              onClick={() => toggleFaq(4)}
            >
              <div 
                className="w-full p-6 md:p-8 text-left flex justify-between items-center group-hover:bg-bejeClaro/10 transition-colors"
              >
                <h3 className="text-xl font-medium font-spectral text-bejeAbobora">
                  É possível ter apenas uma consultoria pontual?
                </h3>
                <span className={`text-bejeAbobora transition-transform duration-300 ${openFaqIndex === 4 ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 4 ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-700 border-t border-gray-100 animate-fadeIn overflow-y-auto max-h-[400px] custom-scrollbar relative">
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white pointer-events-none opacity-50"></div>
                  <p>Absolutamente! Além dos serviços contínuos, ofereço sessões de consultoria pontuais para:</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-bejeAbobora text-white p-1 rounded-full mr-2 flex-shrink-0">✓</div>
                      <p>Ajudar em desafios específicos de marketing</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-bejeAbobora text-white p-1 rounded-full mr-2 flex-shrink-0">✓</div>
                      <p>Orientar sua equipe interna com melhores práticas</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-bejeAbobora text-white p-1 rounded-full mr-2 flex-shrink-0">✓</div>
                      <p>Fornecer direcionamento estratégico pontual</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-bejeAbobora text-white p-1 rounded-full mr-2 flex-shrink-0">✓</div>
                      <p>Validar ideias antes de implementá-las</p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-bejeAbobora">Entre em contato para conhecer as opções de consultoria disponíveis!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-marrondarck py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-spectral text-bejeAbobora mb-6">
              Pronto para transformar sua presença digital?
            </h2>
            <p className="text-lg text-bejeClaro mb-8 max-w-2xl mx-auto">
              Tenho o conhecimento e a experiência necessários para ajudar sua marca a alcançar resultados extraordinários no mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5595991217538" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-bejeAbobora hover:bg-marronLight text-white py-3 px-8 rounded-full transition-colors font-medium"
              >
                Vamos Conversar
              </a>
              <a 
                href="/portfolio" 
                className="bg-transparent border-2 border-bejeAbobora text-bejeClaro hover:bg-bejeAbobora/20 py-3 px-8 rounded-full transition-colors font-medium"
              >
                Ver Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;
