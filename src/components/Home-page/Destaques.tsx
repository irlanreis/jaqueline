import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionGrid from './SectionGrid';
import images from '../../constants/globalImgs';
import Feedbacks from './Feedbacks';

function Destaques() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
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
        },
      },
    ],
  }

  return (
    <div className="bg-bejeLigth">
      <div className="w-full bg-black flex relative justify-center">
        <h2 className="text-white p-2 text-6xl font-extralight bg-black pb-10 absolute">Destaques</h2>
        <Slider className="bg-black pb-8 2xl:w-full 2xl:mt-44 ml-2" {...settings}>
          {images.map((img, i) => (
            <img
              key={i}
              className="sm:w-80 2xl:m-8 2xl:mb-0 2xl:w-40 pl-4"
              src={img}
              alt={`design ${i + 1}`}
            />
          ))}
        </Slider>
      </div>

      <h2 className="text-white p-2 text-6xl font-extralight bg-black pb-10 m-10 w-1/5 items-center ml-auto mr-auto text-center">Serviços</h2>

      <div className="flex bg-bejeLigth justify-center w-full space-x-6">
        <div className="w-80 h-96 rounded overflow-hidden shadow-lg ml-2 bg-yellow-900 text-center transition-transform transform hover:scale-105 hover:shadow-amber-600">
          <div className="px-6 py-4 text-center space-y-20">
            <div className="font-bold text-4xl mb-2 text-amber-500 mt-6 text-center">Gestão de Redes Sociais</div>
            <p className="text-gray-50 text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, exercitationem, nam sequi possimus inventore.
            </p>
          </div>
          <span className="p-2 bg-amber-950 rounded text-amber-500 hover:cursor-pointer hover:bg-amber-800">Valores ao Final</span>
        </div>

        <div className="w-80 h-96 rounded overflow-hidden shadow-lg ml-2 bg-yellow-900 text-center transition-transform transform hover:scale-105 hover:shadow-amber-600">
          <div className="px-6 py-4 text-center space-y-20">
            <div className="font-bold text-4xl mb-2 text-amber-500 mt-6 text-center">Criação de Desing</div>
            <p className="text-gray-50 text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, exercitationem, nam sequi possimus inventore.
            </p>
          </div>
          <span className="p-2 bg-amber-950 rounded text-amber-500 hover:cursor-pointer hover:bg-amber-800">Valores ao Final</span>
        </div>

        <div className="w-80 h-96 rounded overflow-hidden shadow-lg ml-2 bg-yellow-900 text-center transition-transform transform hover:scale-105 hover:shadow-amber-600">
          <div className="px-6 py-4 text-center space-y-20">
            <div className="font-bold text-4xl mb-2 text-amber-500 mt-6 text-center">Identidade Visual</div>
            <p className="text-gray-50 text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, exercitationem, nam sequi possimus inventore.
            </p>
          </div>
          <span className="p-2 bg-amber-950 rounded text-amber-500 hover:cursor-pointer hover:bg-amber-800">Valores ao Final</span>
        </div>

        <div className="w-80 h-96 rounded overflow-hidden shadow-lg ml-2 bg-marrondarck text-center transition-transform transform hover:scale-105 hover:shadow-marrondarck">
          <div className="px-6 py-4 text-center space-y-10">
            <div className="font-bold text-4xl mb-2 text-bejeAbobora mt-6 text-center">Análise de Perfil e Consultoria</div>
            <p className="text-beje text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, exercitationem, nam sequi possimus inventore.
            </p>
          </div>
          <span className="p-2 bg-marronLight rounded text-bejeAbobora hover:cursor-pointer hover:bg-beje">Valores ao Final</span>
        </div>

        <div className="w-80 h-96 rounded overflow-hidden shadow-lg ml-2 bg-yellow-900 text-center transition-transform transform hover:scale-105 hover:shadow-bejeAbobora">
          <div className="px-6 py-4 text-center space-y-20">
            <div className="font-bold text-4xl mb-2 text-amber-500 mt-6 text-center">Criação de Landing Pages</div>
            <p className="text-gray-50 text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, exercitationem, nam sequi possimus inventore.
            </p>
          </div>
          <span className="p-2 bg-amber-950 rounded text-amber-500 hover:cursor-pointer hover:bg-amber-800">Valores ao Final</span>
        </div>
      </div>
      
      <div className="flex p-6 max-w-7xl ml-auto mr-auto mt-12 justify-center text-amber-500 space-x-20 2xl:w-82">
        <div className="text-center">
          <p className="2xl:text-6xl w-82">+55</p>
          <h1 className="w-82 font-light 2xl:text-4xl">Clientes em todo o Brasil</h1>
        </div>
        <div className="text-center">
          <p className="2xl:text-6xl">+25</p>
          <h1 className="w-82 font-light 2xl:text-4xl">Nichos atendidos</h1>
        </div>
      </div>

      <SectionGrid />
      <Feedbacks />
    </div>
  )
}

export default Destaques;