import React, { useState } from "react";
import Header from "../components/Home-page/Header";
import Footer from "../components/Home-page/Footer";
import TitleDinamic from "../components/Home-page/TitleDinamic";
import {
  HeroSection,
  IntroSlider,
  ProjectsSlider,
  ProjectsGrid,
  PersonalApproach,
  ProcessSection,
  CallToAction
} from "../components/Portfolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importação das fotos da Jaqueline
import j1 from "../assets/images/portifolio-imgs/j1.webp";
import j2 from "../assets/images/portifolio-imgs/j2.webp";
import j3 from "../assets/images/portifolio-imgs/j3.webp";
import j4 from "../assets/images/portifolio-imgs/j4.webp";
import j5 from "../assets/images/portifolio-imgs/j5.webp";
import j7 from "../assets/images/portifolio-imgs/j7.webp";
import j9 from "../assets/images/portifolio-imgs/j9.webp";
import j11 from "../assets/images/portifolio-imgs/j11.webp";
import p1 from "../assets/images/portifolio-imgs/p1.webp";
import p2 from "../assets/images/portifolio-imgs/p2.webp";
import p3 from "../assets/images/portifolio-imgs/p3.webp";
import p4 from "../assets/images/portifolio-imgs/p4.webp";
import p5 from "../assets/images/portifolio-imgs/p5.webp";
import p6 from "../assets/images/portifolio-imgs/p6.webp";
import p8 from "../assets/images/portifolio-imgs/p8.webp";
import p10 from "../assets/images/portifolio-imgs/p10.webp";

// Estilos personalizados para o slider
const sliderStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .text-fade-in {
    animation: fadeIn 0.8s ease-in-out;
  }

  .slider-container {
    display: block !important;
    position: relative;
    min-height: 300px;
    overflow: visible;
  }

  .slider-container .slick-slider {
    display: block;
    position: relative;
  }

  .slider-container .slick-list {
    display: block;
    overflow: visible;
    position: relative;
  }

  .slider-container .slick-track {
    display: flex;
    position: relative;
  }

  .slider-container .slick-dots {
    bottom: -30px;
  }
  
  .slider-container .slick-dots li {
    margin: 0 2px;
  }
  
  .slider-container .custom-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .slider-container .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
    visibility: visible !important;
  }
  
  .slider-container .slick-slide img {
    transition: transform 0.5s ease;
    max-height: 100%;
    width: auto;
    margin: 0 auto;
    display: block !important;
  }
  
  .slider-container:hover .slick-slide img {
    transform: scale(1.01);
  }
  
  .slick-prev, .slick-next {
    z-index: 20;
  }
`;

const introSlides = [
  {
    img: j1,
    title: "Criatividade & Estratégia",
    description1: "Quando ideias criativas encontram uma estratégia bem pensada, o resultado é transformador.",
    description2: "Acreditamos que a beleza e a intenção caminham juntas. Por isso, cada projeto nasce com propósito, sensibilidade e direção clara."
  },
  {
    img: j2,
    title: "Designs Impactantes",
    description1: "Um bom design é aquele que toca, comunica e conecta — muito além da estética.",
    description2: "Cada detalhe visual é pensado com carinho para representar marcas de forma verdadeira e inspiradora."
  },
  {
    img: j5,
    title: "Foco na Execução",
    description1: "Ter boas ideias é só o começo. O que realmente faz a diferença é colocar em prática com cuidado e consistência.",
    description2: "Por aqui, cuidamos da execução com atenção aos detalhes, para que cada entrega seja leve, eficaz e cheia de propósito."
  },
  {
    img: j9,
    title: "Colaboração e Alinhamento",
    description1: "Acreditamos na força das trocas genuínas. Quando ouvimos com empatia e construímos juntos, tudo flui melhor.",
    description2: "Alinhamento constante, abertura para ouvir e caminhar lado a lado fazem parte do nosso jeito de trabalhar."
  },
  {
    img: j3,
    title: "Compartilhar Conhecimento",
    description1: "O que aprendemos só ganha valor de verdade quando é compartilhado com quem também quer crescer.",
    description2: "Através de conteúdos, trocas e mentorias, fortalecemos pessoas e negócios para que brilhem com autenticidade no digital."
  }
];

const Portfolio: React.FC = () => {
  const [slidersReady, setSlidersReady] = useState(false);
  
  // Efeito para inicializar os sliders
  React.useEffect(() => {
    // Pequeno delay para garantir que o DOM esteja pronto
    const timer = setTimeout(() => {
      setSlidersReady(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
      <TitleDinamic
        title="Portfólio | Jaqueline Reis Marketing"
        description="Conheça os projetos e trabalhos desenvolvidos por Jaqueline Reis."
      />
      <Header />

      <main className="pt-16 bg-gradient-to-b from-beje to-bejeClaro min-h-screen">
        {/* Hero Section */}
        <HeroSection profileImage={j11} />

        {/* Intro Section with Image Slider */}
        <section className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <IntroSlider slides={introSlides} slidersReady={slidersReady} />
        </section>

        {/* Portfolio Highlights */}
        <section className="bg-marrondarck py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-spectral text-bejeAbobora mb-12 text-center">
              Destaques do Portfólio
            </h2>
            
            {/* Dados para o ProjectsSlider */}
            <ProjectsSlider 
              projects={[
                {
                  image: p5,
                  title: "Campanha Digital Completa",
                  description: "Desenvolvimento de estratégia digital completa, incluindo criação de conteúdo, gestão de mídias sociais e campanhas pagas que resultaram em um aumento de 250% no engajamento online.",
                  clientName: "Mikaelly Cristina",
                  category: "Nutrição"
                },
                {
                  image: p2,
                  title: "Identidade Visual Premium",
                  description: "Criação de identidade visual completa para empresa de luxo, incluindo logo, paleta de cores e materiais impressos, resultando em um reposicionamento de mercado bem-sucedido.",
                  clientName: "Abrace Pscicologia",
                  category: "Saúde Mental"
                },
                {
                  image: p3,
                  title: "Estratégia e Elegância",
                  description: "A criação de uma estratégia digital que combina elegância e eficácia que gera resultados é fruto de um trabalho cuidadoso e alinhado com a visão de cada cliente.",
                  clientName: "Maria Olivia",
                  category: "Nutrição"
                },
                {
                  image: p8,
                  title: "Branding Completo",
                  description: "Desenvolvimento de identidade visual completa, posicionamento estratégico e aplicações de marca que trouxeram personalidade e consistência para o negócio em todas as plataformas de comunicação.",
                  clientName: "Geo Araújo",
                  category: "Nutrição"
                },
                {
                  image: p10,
                  title: "Consultoria Estratégica",
                  description: "Assessoria completa para negócios que buscam otimizar sua presença digital e aumentar resultados. Inclui análise de mercado, definição de objetivos e plano de ação personalizado.",
                  clientName: "Mayara Maranhão",
                  category: "Arquitetura"
                }
              ]} 
              slidersReady={slidersReady}
              fallbackImage={p1}
            />

            {/* Projetos em Grid */}
            <ProjectsGrid
              profileImage={j3}
              projects={[
                {
                  image: p3,
                  title: "Estratégia de Mídias Sociais",
                  description: "Desenvolvimento de estratégia completa para crescimento orgânico em plataformas sociais."
                },
                {
                  image: p4,
                  title: "Identidade Visual",
                  description: "Criação de identidade visual marcante e alinhada com os valores da marca."
                },
                {
                  image: p5,
                  title: "Storys Intencionais",
                  description: "Planejamento e criação de storys que geram conexão e engajamento com o público."
                }
              ]}
            />
          </div>
        </section>

        {/* Personal Approach */}
        <PersonalApproach 
          images={{
            profile: j7,
            project1: p6,
            project2: j4,
            project3: p1
          }} 
        />

        {/* Process Section */}
        <ProcessSection 
          steps={[
            {
              number: "1",
              title: "Imersão",
              description: "Mergulho profundo no universo da sua marca, entendendo seu público, mercado e objetivos."
            },
            {
              number: "2",
              title: "Estratégia",
              description: "Desenvolvimento de um plano estratégico personalizado com base nos insights coletados."
            },
            {
              number: "3",
              title: "Execução",
              description: "Implementação cuidadosa da estratégia, com atenção aos detalhes e ajustes contínuos para maximizar resultados."
            }
          ]} 
        />

        {/* Call to Action */}
        <CallToAction image={j4} />
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
