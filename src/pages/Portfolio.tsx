import React, { useState } from "react";
import Header from "../components/Home-page/Header";
import Footer from "../components/Home-page/Footer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import TitleDinamic from "../components/Home-page/TitleDinamic";
import Slider from "react-slick";
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
import j10 from "../assets/images/portifolio-imgs/j10.webp";
// import j11 from "../assets/images/portifolio-imgs/j11.webp";  
import p1 from "../assets/images/portifolio-imgs/p1.webp";
import p2 from "../assets/images/portifolio-imgs/p2.webp";
import p3 from "../assets/images/portifolio-imgs/p3.webp";
import p4 from "../assets/images/portifolio-imgs/p4.webp";
import p5 from "../assets/images/portifolio-imgs/p5.webp";
import p6 from "../assets/images/portifolio-imgs/p6.webp";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidersReady, setSlidersReady] = useState(false);
  
  // Efeito para inicializar os sliders
  React.useEffect(() => {
    // Pequeno delay para garantir que o DOM esteja pronto
    const timer = setTimeout(() => {
      setSlidersReady(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Custom arrows for the slider
  const NextArrow = (props: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 sm:-top-12 -top-10 z-10 bg-bejeAbobora/40 hover:bg-marronLight/10 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none border-2 border-bejeAbobora"
        onClick={onClick}
      >
        <ChevronRight size={20} className="text-bejeAbobora" />
      </button>
    );
  };

  const PrevArrow = (props: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-10 sm:right-12 sm:-top-12 -top-10 z-10 bg-bejeAbobora/40 hover:bg-marronLight/10 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none border-2 border-bejeAbobora"
        onClick={onClick}
      >
        <ChevronLeft size={20} className="text-bejeAbobora" />
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Inicialmente desativado para garantir que o primeiro slide seja mostrado
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    dotsClass: "slick-dots custom-dots",
    adaptiveHeight: true,
    fade: true,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand" as const, // Adicionando lazy loading
    initialSlide: 0, // Garantindo que o slider comece no primeiro slide
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-bejeAbobora scale-125" : "bg-gray-400"
        }`}
      />
    ),
  };

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
        <section className="w-full py-16 sm:py-20 px-4 bg-marrondarck">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-spectral text-bejeAbobora mb-6">
                Meu Portfólio
              </h1>
              <p className="text-lg md:text-xl text-bejeClaro">
                Conheça alguns dos projetos e trabalhos que desenvolvi para
                clientes em diversos segmentos.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <img
                  src={j10}
                  alt="Jaqueline Reis"
                  className="rounded-full border-4 border-bejeAbobora shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover object-center mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-marronLight p-3 rounded-full">
                  <Star size={24} fill="#F9F3E5" className="text-bejeClaro" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section with Image Slider */}
        <section className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div key={currentSlide} className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-fade-in text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-spectral text-marrondarck mb-4 md:mb-6">
                {introSlides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
                {introSlides[currentSlide].description1}
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8">
                {introSlides[currentSlide].description2}
              </p>
            </div>
            <div className="flex justify-center w-full md:w-1/2 relative">
              <div className="slider-container relative pt-12 sm:pt-16 max-w-full sm:max-w-[540px] w-full" style={{ display: 'block', minHeight: '350px' }}>
                {slidersReady ? (
                  <Slider {...sliderSettings}>
                    {introSlides.map((slide, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] outline-none"
                      >
                        <img
                          src={slide.img}
                          alt={`Slide ${index + 1}`}
                          className="w-auto h-auto max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px] object-contain"
                          style={{ display: 'block' }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="flex justify-center items-center h-[350px]">
                    <img
                      src={introSlides[0].img}
                      alt="Primeiro slide"
                      className="w-auto h-auto max-w-full max-h-[350px] object-contain"
                      style={{ display: 'block' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="bg-marrondarck py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-spectral text-bejeAbobora mb-12 text-center">
              Destaques do Portfólio
            </h2>

            {/* Highlighted Projects Slider */}
            <div className="mb-16 relative">
              <div className="slider-container relative pt-16 w-full" style={{ display: 'block', minHeight: '350px' }}>
                {slidersReady ? (
                <Slider
                  dots={true}
                  infinite={true}
                  speed={700}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={false}
                  nextArrow={<NextArrow />}
                  prevArrow={<PrevArrow />}
                  fade={true}
                  cssEase="ease-in-out"
                  adaptiveHeight={true}
                  initialSlide={0}
                  dotsClass="slick-dots custom-dots"
                >
                  {/* Featured Project 1 */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[600px]">
                        <img
                          src={p5}
                          alt="Projeto Destaque"
                          className="w-auto h-auto max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[600px] object-contain"
                          style={{ display: 'block' }}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left text-fade-in">
                        <h3 className="text-2xl font-spectral text-bejeAbobora mb-4">
                          Campanha Digital Completa
                        </h3>
                        <p className="text-bejeClaro mb-6">
                          Desenvolvimento de estratégia digital completa,
                          incluindo criação de conteúdo, gestão de mídias
                          sociais e campanhas pagas que resultaram em um aumento
                          de 250% no engajamento online.
                        </p>
                        <div className="flex items-center justify-center md:justify-start text-bejeAbobora mb-6">
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star size={18} fill="currentColor" />
                        </div>
                        <div className="inline-flex flex-col sm:flex-row items-center text-bejeAbobora">
                          <span className="mr-2 font-medium text-bejeClaro">
                            Cliente: Mikaelly Cristina
                          </span>
                          <span className="bg-bejeAbobora/20 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                            Nutrição
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Project 2 */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[600px]">
                        <img
                          src={p2}
                          alt="Projeto Destaque"
                          className="w-auto h-auto max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[600px] object-contain"
                          style={{ display: 'block' }}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left text-fade-in">
                        <h3 className="text-2xl font-spectral text-bejeAbobora mb-4">
                          Identidade Visual Premium
                        </h3>
                        <p className="text-bejeClaro mb-6">
                          Criação de identidade visual completa para empresa de
                          luxo, incluindo logo, paleta de cores e materiais
                          impressos, resultando em um reposicionamento de
                          mercado bem-sucedido.
                        </p>
                        <div className="flex items-center justify-center md:justify-start text-bejeAbobora mb-6">
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star size={18} fill="currentColor" />
                        </div>
                        <div className="inline-flex flex-col sm:flex-row items-center text-bejeAbobora">
                          <span className="mr-2 font-medium text-bejeClaro">
                            Cliente: Abrace Pscicologia
                          </span>
                          <span className="bg-bejeAbobora/20 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                            Saúde Mental
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Project 3 */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[600px]">
                        <img
                          src={p3}
                          alt="Projeto Destaque"
                          className="w-auto h-auto max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[600px] object-contain"
                          style={{ display: 'block' }}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left text-fade-in">
                        <h3 className="text-2xl font-spectral text-bejeAbobora mb-4">
                          Estratégia e Elegância
                        </h3>
                        <p className="text-bejeClaro mb-6">
                          A criação de uma estratégia digital que combina
                          elegância e eficácia que gera resultados é fruto de um
                          trabalho cuidadoso e alinhado com a visão de cada cliente. 
                        </p>
                        <div className="flex items-center justify-center md:justify-start text-bejeAbobora mb-6">
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star
                            size={18}
                            fill="currentColor"
                            className="mr-1"
                          />
                          <Star size={18} fill="currentColor" />
                        </div>
                        <div className="inline-flex flex-col sm:flex-row items-center text-bejeAbobora">
                          <span className="mr-2 font-medium text-bejeClaro">
                            Cliente: Maria Olivia
                          </span>
                          <span className="bg-bejeAbobora/20 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                            Nutrição
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                ) : (
                  <div className="flex justify-center items-center h-[350px]">
                    <img
                      src={p1}
                      alt="Projeto Destaque"
                      className="w-auto h-auto max-w-full max-h-[350px] object-contain"
                      style={{ display: 'block' }}
                    />
                  </div>
                )}
              </div>
            </div>

              <div className="flex justify-center mb-12">
              <img
                src={j3}
                alt="Jaqueline Reis"
                className="w-28 h-28 sm:w-36 sm:h-36 object-cover object-center rounded-full border-2 border-bejeAbobora"
                loading="lazy"
              />
            </div>            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Project 1 */}
              <div className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img
                    src={p3}
                    alt="Estratégia de Mídias Sociais"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-spectral text-marrondarck mb-2">
                    Estratégia de Mídias Sociais
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Desenvolvimento de estratégia completa para crescimento
                    orgânico em plataformas sociais.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img
                    src={p4}
                    alt="Landing Page de Conversão"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-spectral text-marrondarck mb-2">
                    Landing Page de Conversão
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Criação de página de alta conversão para produto digital com
                    taxa de 12% de conversão.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img
                    src={p5}
                    alt="E-mail Marketing"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-spectral text-marrondarck mb-2">
                    E-mail Marketing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Desenvolvimento de sequência de e-mails com taxa de abertura
                    de 35% e conversão de 5%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Approach */}
        <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 mt-8 md:mt-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-spectral text-marrondarck mb-6">
                Meu Toque Pessoal
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                O que diferencia meu trabalho é a atenção personalizada que dou
                a cada cliente. Entendo que cada marca é única e merece uma
                estratégia personalizada que reflita sua essência.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meu processo criativo inclui uma imersão profunda no universo do
                cliente, pesquisa de mercado detalhada e desenvolvimento de
                soluções que realmente se destacam.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <img
                  src={j7}
                  alt="Jaqueline Reis"
                  className="w-16 h-16 rounded-full object-cover object-center border-2 border-bejeAbobora"
                />
                <div>
                  <p className="text-marrondarck font-spectral text-lg">
                    Jaqueline Reis
                  </p>
                  <p className="text-bejeAbobora">
                    Estrategista de Marketing Digital
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={p6}
                  alt="Projeto"
                  className="rounded-lg shadow-md h-64 object-cover object-center w-full"
                />
                <img
                  src={j4}
                  alt="Jaqueline trabalhando"
                  className="rounded-lg shadow-md h-64 object-cover object-center w-full"
                />
                <div className="col-span-2">
                  <img
                    src={p1}
                    alt="Projeto Destaque"
                    className="rounded-lg shadow-md h-80 w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-bejeClaro py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-spectral text-marrondarck mb-12 text-center">
              Meu Processo Criativo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-bejeAbobora rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-spectral text-marrondarck mb-4">
                  Imersão
                </h3>
                <p className="text-gray-700">
                  Mergulho profundo no universo da sua marca, entendendo seu
                  público, mercado e objetivos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-bejeAbobora rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-spectral text-marrondarck mb-4">
                  Estratégia
                </h3>
                <p className="text-gray-700">
                  Desenvolvimento de um plano estratégico personalizado com base
                  nos insights coletados.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-bejeAbobora rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-spectral text-marrondarck mb-4">
                  Execução
                </h3>
                <p className="text-gray-700">
                  Implementação cuidadosa da estratégia, com atenção aos
                  detalhes e ajustes contínuos para maximizar resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 px-4 bg-marrondarck">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="md:w-3/5 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-spectral text-bejeAbobora mb-6">
                  Vamos trabalhar juntos?
                </h2>
                <p className="text-lg text-bejeClaro mb-6">
                  Estou pronta para transformar suas ideias em estratégias de
                  marketing eficientes. Entre em contato para discutirmos como
                  posso ajudar a elevar sua marca ao próximo nível.
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-bejeAbobora hover:bg-marronLight text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Agende uma Conversa
                </Link>
              </div>
              <div className="md:w-2/5 md:pl-8">
                <img
                  src={j4}
                  alt="Jaqueline Reis"
                  className="rounded-lg shadow-xl w-full max-w-sm mx-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
