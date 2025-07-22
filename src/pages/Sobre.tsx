import { Award, Globe, Heart, Target } from "lucide-react";
import Header from "../components/Home-page/Header";
import jaqueImg from "../assets/images/portifolio-imgs/j11.webp";
import TitleDinamic from "../components/Home-page/TitleDinamic";
import sobre1 from "../assets/images/sobre/sobre-compartilhando-conhecimento.jpg";
import sobre5 from "../assets/images/sobre/sobre-5.png";
import sobre3 from "../assets/images/sobre/sobre-reuniao-estrategica.jpg";
import sobre4 from "../assets/images/sobre/sobre-4.webp";

function Sobre() {
  const differentiators = [
    {
      icon: <Target size={32} className="text-bejeAbobora" />,
      title: "Planejamento Estratégico com Propósito",
      description: "Cada ação tem um porquê, e isso faz toda a diferença no resultado final.",
    },
    {
      icon: <Globe size={32} className="text-bejeAbobora" />,
      title: "Experiência Global",
      description: "Clientes atendidos no Brasil, EUA, Europa e além.",
    },
    {
      icon: <Award size={32} className="text-bejeAbobora" />,
      title: "Mentorias Transformadoras",
      description: "Acompanhamento direto para quem quer profissionalizar o digital.",
    },
    {
      icon: <Heart size={32} className="text-bejeAbobora" />,
      title: "Fé e Liderança com Integridade",
      description: "Trago princípios cristãos que fortalecem a minha atuação como empresária e mentora.",
    },
  ];

  return (
    <>
      <TitleDinamic
        title="Sobre | Jaqueline Reis"
        description="Conheça Jaqueline Reis, especialista em estratégias de mídias sociais e CEO da Reis Marketing RR."
      />
      <Header />
      <main className="bg-bejeLigth text-marronLight">
        {/* Hero Section */}
        <section className="bg-marrondarck text-white pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-SpectralRegular text-4xl sm:text-5xl md:text-6xl leading-tight">
              Sobre <strong className="text-bejeAbobora">Jaqueline Reis</strong>
            </h1>
            <p className="font-MontserratRegular mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-beje">
              Especialista em Estratégias de Mídias Sociais | CEO da Reis Marketing RR | Cristã | Mentora de Negócios Digitais
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-bejeAbobora"></div>
                  <img 
                    src={jaqueImg} 
                    alt="Jaqueline Reis" 
                    className="rounded-lg shadow-2xl w-full md:h-[450px] lg:h-[550px] object-cover mx-auto relative z-10 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-bejeAbobora/20"
                  />
                  <div className="absolute -top-6 -right-6 bg-bejeAbobora rounded-full p-4 md:p-5 shadow-lg z-20 hidden md:block">
                    <div className="text-white text-center">
                      <div className="font-SpectralRegular font-bold text-3xl md:text-4xl">+160</div>
                      <div className="text-xs md:text-sm uppercase tracking-wider">marcas</div>
                      <div className="text-xs md:text-sm uppercase tracking-wider">atendidas</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="text-bejeAbobora font-MontserratRegular uppercase tracking-wider text-sm mb-2">Fundadora & CEO</div>
                <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-6">
                  Olá! Sou <span className="text-bejeAbobora font-bold relative">
                    Jaqueline Reis
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-bejeAbobora opacity-60"></span>
                  </span>
                </h2>
                
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed mb-4">
                  Fundadora da <strong><a href="https://reismarketing.com" target="_blank" rel="noopener noreferrer" className="hover:text-bejeAbobora">Reis Marketing</a></strong>, uma agência que já trabalhou com mais de 160 marcas em 4 países, desenvolvendo presença digital com autenticidade e propósito. Atuo há anos no mercado de marketing digital com foco em posicionamento estratégico e gestão de redes sociais.
                </p>
                
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed mb-6">
                  Em meu trabalho, busco sempre criar conexões genuínas e conteúdo significativo — orientada por valores cristãos que guiam minhas decisões e minha forma de liderar a equipe.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-bejeClaro/40 text-marrondarck px-3 py-1 rounded-full text-sm">Marketing Estratégico</span>
                  <span className="bg-bejeClaro/40 text-marrondarck px-3 py-1 rounded-full text-sm">Gestão de Redes Sociais</span>
                  <span className="bg-bejeClaro/40 text-marrondarck px-3 py-1 rounded-full text-sm">Mentoria</span>
                  <span className="bg-bejeClaro/40 text-marrondarck px-3 py-1 rounded-full text-sm">Branding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight">
                O que me <strong className="text-bejeAbobora">diferencia</strong>
              </h2>
              <p className="font-MontserratRegular mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                Mais do que números, eu acredito em conexões reais. Por isso, trago uma abordagem completa que une planejamento, criatividade e visão empreendedora.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-bejeLigth/50">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-MontserratRegular font-bold text-lg sm:text-xl mb-1">{item.title}</h3>
                    <p className="font-MontserratRegular text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Jornada Profissional */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight">
                Somos a <strong className="text-bejeAbobora">Reis Marketing</strong>
              </h2>
              <p className="font-MontserratRegular mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                Nossa equipe é formada por profissionais apaixonados por marketing digital, comprometidos em entregar resultados excepcionais para nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
                  <img 
                    src={sobre1} 
                    alt="Jaqueline palestrando em evento" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marrondarck/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-SpectralRegular text-lg md:text-xl">Compartilhando Conhecimento</h3>
                      <p className="text-sm text-bejeClaro">Podcast com a Natacha - 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
                  <img 
                    src={sobre5} 
                    alt="Jaqueline em seu escritório" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marrondarck/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-SpectralRegular text-lg md:text-xl">Bastidores da Agência</h3>
                      <p className="text-sm text-bejeClaro">Planejamento estratégico com a equipe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
                  <img 
                    src={sobre3} 
                    alt="Jaqueline com cliente" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marrondarck/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-SpectralRegular text-lg md:text-xl">Reunião de Estratégia</h3>
                      <p className="text-sm text-bejeClaro">Desenvolvendo soluções personalizadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* História Pessoal Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-2/5">
                <div className="relative">
                  <img 
                    src={sobre4} 
                    alt="Jaqueline Reis em momento pessoal" 
                    className="rounded-lg shadow-xl w-full h-auto md:h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-bejeAbobora p-3 rounded-lg shadow-lg transform rotate-3">
                    <p className="text-white font-MontserratRegular italic text-sm md:text-base">"Tudo o que você faz, faça de todo o coração"</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5">
                <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-6">
                  Além da <strong className="text-bejeAbobora">profissional</strong>
                </h2>
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed mb-4">
                  Sou esposa, empreendedora e apaixonada por transformação. Minha jornada no marketing digital começou em 2020, quando percebi o poder das redes sociais para conectar pessoas e negócios.
                </p>
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed mb-4">
                  Natural de Roraima, sempre busquei trazer uma perspectiva única ao meu trabalho, unindo o olhar estratégico de uma especialista com a sensibilidade necessária para entender as reais necessidades de cada cliente.
                </p>
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed">
                  Acredito que o marketing de verdade se faz com propósito, ética e dedicação genuína — valores que estão presentes em cada projeto que assumo com minha equipe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* "Filosofia de Trabalho" Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-4">
                Minha <strong className="text-bejeAbobora">filosofia</strong> de trabalho
              </h2>
              <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed">
                Para mim, o marketing digital vai muito além da aparência. Acredito em estratégias bem fundamentadas e em relacionamentos genuínos que constroem pontes entre marcas e pessoas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-bejeLigth p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <h3 className="font-SpectralRegular text-xl text-bejeAbobora mb-3">Propósito</h3>
                <p className="font-MontserratRegular text-sm leading-relaxed">
                  Construir pontes entre marcas e pessoas através de comunicação autêntica, criando conexões significativas no mundo digital.
                </p>
              </div>
              
              <div className="bg-bejeLigth p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <h3 className="font-SpectralRegular text-xl text-bejeAbobora mb-3">Inspiração</h3>
                <p className="font-MontserratRegular text-sm leading-relaxed">
                  Acredito que cada marca tem uma história única para contar. Busco sempre a essência que torna cada projeto especial e autêntico.
                </p>
              </div>
              
              <div className="bg-bejeLigth p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <h3 className="font-SpectralRegular text-xl text-bejeAbobora mb-3">Valores</h3>
                <p className="font-MontserratRegular text-sm leading-relaxed">
                  Integridade, transparência, excelência, inovação e empatia são os pilares que sustentam minha abordagem profissional e pessoal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="bg-marrondarck text-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-4">
              Obrigada por <strong className="text-bejeAbobora">conhecer minha história</strong>
            </h2>
            <p className="font-MontserratRegular text-beje text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Se quiser conversar ou conhecer mais sobre meu trabalho, fique à vontade para entrar em contato ou visitar meu portfólio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20trabalho" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  className="font-MontserratRegular font-bold bg-bejeAbobora text-marrondarck rounded-lg 
                  transition-all duration-300 hover:bg-beje hover:scale-105 focus:outline-none focus:ring-4 focus:ring-bejeAbobora/50
                  text-base sm:text-lg w-full sm:w-auto
                  py-3 px-8 sm:py-4 sm:px-10"
                >
                  Entre em Contato
                </button>
              </a>
              <a 
                href="/portfolio" 
                className="inline-block"
              >
                <button
                  className="font-MontserratRegular font-bold bg-transparent border-2 border-bejeAbobora text-bejeClaro rounded-lg 
                  transition-all duration-300 hover:bg-bejeAbobora/10 focus:outline-none focus:ring-4 focus:ring-bejeAbobora/30
                  text-base sm:text-lg w-full sm:w-auto
                  py-3 px-8 sm:py-4 sm:px-10"
                >
                  Veja Meu Portfólio
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Sobre;
