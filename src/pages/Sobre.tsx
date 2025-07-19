import { Award, Globe, Heart, Target } from "lucide-react";
import Header from "../components/Home-page/Header";
import Footer from "../components/packFeedfBrilhante/Footer";
import jaqueImg from "../assets/images/landing-page/jaqueApresentacao.webp";
import TitleDinamic from "../components/Home-page/TitleDinamic";

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
            {/* <h1 className="font-SpectralRegular text-4xl sm:text-5xl md:text-6xl leading-tight">
              Sobre <strong className="text-bejeAbobora">Jaqueline Reis</strong>
            </h1> */}
            <p className="font-MontserratRegular mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-beje">
              Especialista em Estratégias de Mídias Sociais | CEO da Reis Marketing RR | Cristã | Mentora de Negócios Digitais
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <img 
                  src={jaqueImg} 
                  alt="Jaqueline Reis" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-4">
                  Olá! Sou Jaqueline Reis, fundadora da Reis Marketing RR.
                </h2>
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed mb-4">
                  Uma agência que já ajudou mais de 160 marcas em 4 países a crescerem com estratégia, autenticidade e propósito. Atuo há anos no mercado de marketing digital com foco em posicionamento estratégico, gestão de redes sociais e autoridade online.
                </p>
                <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed">
                  Minha missão é transformar negócios através de uma presença digital forte, humana e intencional — sempre com base em valores cristãos que guiam minhas decisões e minha forma de liderar.
                </p>
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

        {/* "Além da estética" Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-4">
              Vamos além da <strong className="text-bejeAbobora">estética</strong>
            </h2>
            <p className="font-MontserratRegular text-base sm:text-lg leading-relaxed">
              Redes sociais bonitas chamam atenção. Mas <strong className="font-bold">estratégia é o que converte</strong>. E é nisso que eu e minha equipe somos especialistas: em transformar seguidores em clientes e marcas em referências no digital. Se você busca crescer de forma intencional e com valores alinhados, está no lugar certo.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-marrondarck text-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-4">
              Vamos conversar?
            </h2>
            <p className="font-MontserratRegular text-beje text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Clique no botão abaixo e veja como posso ajudar você ou sua marca a crescer com estratégia, autoridade e essência.
            </p>
            <a 
              href="https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="font-MontserratRegular font-bold bg-bejeAbobora text-marrondarck rounded-lg 
                transition-all duration-300 hover:bg-beje hover:scale-105 focus:outline-none focus:ring-4 focus:ring-bejeAbobora/50
                text-base sm:text-lg md:text-xl
                py-3 px-8 sm:py-4 sm:px-10"
              >
                Fale Comigo no WhatsApp
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sobre;
