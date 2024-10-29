import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SectionGrid from "./SectionGrid";
import images from "../../constants/globalImgs";
// import Feedbacks from "./Feedbacks";
import servicos from "../../constants/servicosReisMarkketin";

function Destaques() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          Infinity: true,
        },
      },
    ],
  };

  return (
    <div className="bg-beje">
      <h2 className="text-marronLight p-6 text-5xl font-light text-center">
        Destaques
      </h2>
      {/* Imagens em destaques */}
      <Slider className="bg-beje ml-2" {...settings}>
        {images.map((img, i) => (
          <img
            key={i}
            className="sm:w-80 2xl:m-8 shadow-md pl-3"
            src={img}
            alt={`design ${i + 1}`}
          />
        ))}
      </Slider>

      <h2 className="text-marronLight p-6 text-5xl font-light text-center m-4">
        Serviços
      </h2>
    {/* Card dos Serviços */}
      <div className=" flex justify-center">
        <div className="grid gap-2 h-full lt:grid-cols-1 mbl:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl m-2">
          {servicos.map((servico, key) => (
            <div
              key={key}
              className="rounded-xl overflow-hidden shadow-lg bg-marronLight text-center transition-transform transform h-80"
            >
              <div className="flex flex-col justify-evenly h-5/6 m-2 text-left">
                <div className="mbl:text-2xl font-bold text-4xl mb-2 text-bejeClaro mt-6 text-center">
                  {servico.titulo}
                </div>
                <p className="mbl:text-base mbl:p-1 text-bejeLigth text-lg font-light">
                  {servico.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-evenly p-6 text-bejeAbobora font-semibold">
        <div className="text-center mbl:text-2xl">
          <p className="text-4xl font-semibold">+100</p>
          <h1 className="w-96 text-xl">Clientes em mais de três países</h1>
        </div>
        <div className="text-center">
          <p className="text-4xl font-semibold">+40</p>
          <h1 className="w-96 text-xl">Nichos atendidos</h1>
        </div>
      </div>
    </div>
  );
}

export default Destaques;
