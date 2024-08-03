import images from "../../constants/imgsLandinData"
// import images02 from "../../constants/imgsLanding02";
// import images03 from "../../constants/imgsLanding03";
import Slider from "react-slick";
import PromoCard from "./PromoCard";
import PromoDetails from "./PromoDetails";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Content = () => {
  const NextArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <div className="absolute top-1/2 right-0 z-10 cursor-pointer opacity-50 hover:opacity-100"
        onClick={onClick}>
        <button className="bg-white text-bejeAbobora p-2 rounded-full shadow-lg">
          <ArrowRight className="w-4" />
        </button>
      </div>
    )
  };

  const PrevArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <div className="absolute top-1/2 left-0 z-10 cursor-pointer opacity-50 hover:opacity-100"
        onClick={onClick}>
        <button className="bg-white text-bejeAbobora p-2 rounded-full w- shadow-lg">
          <ArrowLeft className="w-4" />
        </button>
      </div>
    )
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={function (): void {
      throw new Error("Function void.");
    }} />,
    prevArrow: <PrevArrow onClick={function (): void {
      throw new Error("Function void.");
    }} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mbl:w-full sm:w-full text-center flex flex-col">
      <article className="font-base font-MontserratRegular text-bejeAbobora text-base
       mbl:w-full mbl:px-4 mbl:ml-auto mbl:mr-auto mbl:my-6
       sm:w-full sm:px-4 sm:py-8 sm:text-xl sm:ml-auto sm:mr-auto
       md: md:p-8 md:text-4xl md:text-">
        Quantas vezes você demorou horas na frente do computador tentando criar um design?
      </article>
      <Slider {...settings} className="bg-bejeAbobora mb-10
      md:h-1/2 md:w-1/2 md:ml-auto md:mr-auto" lazyLoad="anticipated">
        {images[0].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Imagem de trabalho"
            className="w-full h-auto"
          />
        ))}
      </Slider>
      <div className="flex flex-col items-center justify-between h-96">
        <p className="text-bejeAbobora font-MontserratRegular 
      mbl:w-11/12 mbl:p-2 mbl:text-xl text-center
      sm:w-4/5 sm:p-4 sm:pb-6 sm:text-2xl
      lg:w-1/2 lg:text-3xl">
          Com o Pack Feed Brilhante você vai produzir conteúdos mais atrativos e profissionais em menos de 10 minutos.
        </p>
        <h1 className="font-bold font-SpectralRegular text-marronLight text- text-3xl 
      mbl:w-96 mbl:p-4 
      sm:text-4xl sm:w-4/5 sm:pb-6
      lg:text-6xl">
          Garantindo o Pack Feed Brilhante você irá receber
        </h1>
        <p className="border-2 rounded-xl font-MontserratRegular border-bejeAbobora text-bejeAbobora text-center text-2xl mbl:w-96 mbl:m-4 mbl:p-2 mbl:pl-14 mbl:pr-14
      sm:text-3xl sm:w-4/5 sm:mb-6
      lg:p-6 lg:w-1/2">
          <strong>60 modelos</strong> de posts carrosseis infinitos de 5, 6 e 7 páginas.
        </p>
      </div>
      <Slider {...settings} className="bg-bejeLigth mb-10 mt-4
      md:h-1/2 md:w-1/2 md:ml-auto md:mr-auto">
        {images[1].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Imagem de trabalho"
            className="w-full h-auto"
          />
        ))}
      </Slider>
      <div className="flex flex-col justify-between items-center bg-bejeLigth mt-4 space-y-8">
        <p className="text-xl border-2 p-2 mt-10 rounded-md border-bejeAbobora font-bold text-bejeAbobora
        sm:w-2/3 sm:ml-auto sm:mr-auto sm:p-2 sm:text-2xl
        lg:w-2/5 lg:p-6 lg:text-3xl">
          + de 40 modelos de posts estáticos
        </p>

        <img className="mbl:h-1/3 bg-beje bg-opacity-50 w-1/2" src={images[2][0]} alt="Imagem de trabalho" />

        <p className="font-semibold font-SpectralRegular text-marronLight text- text-3xl mbl:w-96
        sm:w-4/5
        lg:text-5xl lg:w-2/4">
          Aulas práticas sobre canva e design para você usar o seu pack da melhor forma</p>

        <img src={images[2][0]} alt="capa do pack" className="bg-lg" />


        <a href="https://pay.kiwify.com.br/1Tag7Ep" target="_blank">
          <button
            className="
            mbl:w-80 p-6 text-2xl font-semibold bg-green-600  font-MontserratRegular rounded-lg text-bejeLigth hover:bg-green-500"
          >
            QUERO ACESSAR AGORA
          </button>
        </a>

        <p className="font-semibold font-SpectralRegular text-marronLight text-4xl">Adquira hoje e ganhe</p>
        <p className="text-xl mbl:m-4 mbl:pl-10 mbl:pr-10 font-MontserratRegular border-2 p-2 rounded-md border-bejeAbobora font-M text-bejeAbobora">Manual com +50 inspirações de paleta de cores + aula sobre identidade visual</p>
        <div className="flex flex-col justify-between bg-green-600 p-4 rounded-lg ">
          <p className="text-2xl mbl:w-1/2 mbl:p-4  text-red-600 line-through">
          De R$ 47,00
          </p>
          <p className="text-gray-200 text-4xl">por <strong>R$ 0,00</strong></p>
        </div>
      </div>


      <img className="mbl:h-1/3 md:h-1/2 md:w-1/2 md:ml-auto md:mr-auto" src={images[3][0]} alt="Imagem de trabalho" />
      <p className="text-xl mbl:m-4 border-2 p-2 rounded-md border-bejeAbobora font-MontserratRegular font-bold text-bejeAbobora">Aula sobre como organizar sua produção de conteúdo no trello</p>
      <p className="text-3xl mbl:w-1/2 mbl:ml-auto mt-6 mbl:mr-auto bg-bejeLigth mbl:p-4 rounded-xl font-bold text-bejeAbobora">De R$ <strong className="text-red-400 line-through">87,00</strong> por R$ <strong className="text-green-600">0,00</strong></p>
      <img className="mbl:h-1/3 md:h-1/2 md:w-1/2 md:ml-auto md:mr-auto" src={images[4][0]} alt="Imagem de trabalho" />
      <PromoCard />
      <PromoDetails />
    </div>
  );
}

export default Content;