import React from 'react';
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import './ProjectsSliderStyle.css';

interface FeaturedProject {
  image: string;
  title: string;
  description: string;
  clientName: string;
  category: string;
}

interface ProjectsSliderProps {
  projects: FeaturedProject[];
  slidersReady: boolean;
  fallbackImage: string;
}

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects, slidersReady, fallbackImage }) => {
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

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = React.useRef<Slider | null>(null);
  
  React.useEffect(() => {
    // Quando currentSlide muda externamente, atualize o slider
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);
  
  return (
    <div className="mb-8 relative">
      <div className="slider-container relative pt-4 sm:pt-8 w-full" style={{ display: 'block', minHeight: '350px' }}>
        {slidersReady ? (
          <div className="relative">
            <Slider
              ref={sliderRef}
              dots={true}
              infinite={true}
              speed={500}
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
              swipe={true}
              swipeToSlide={true}
              touchThreshold={10}
              beforeChange={(_: number, next: number) => setCurrentSlide(next)}
              responsive={[
                {
                  breakpoint: 640,
                  settings: {
                    arrows: false,
                    dots: true,
                    swipe: true,
                    touchThreshold: 5,
                    speed: 400,
                  }
                }
              ]}
            >
              {projects.map((project, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                  <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[550px] object-cover md:object-contain"
                      style={{ display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center text-center md:text-left text-fade-in">
                    <h3 className="text-2xl font-spectral text-bejeAbobora mb-2 md:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-bejeClaro mb-3 md:mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-center md:justify-start text-bejeAbobora mb-3 md:mb-4">
                      <Star size={18} fill="currentColor" className="mr-1" />
                      <Star size={18} fill="currentColor" className="mr-1" />
                      <Star size={18} fill="currentColor" className="mr-1" />
                      <Star size={18} fill="currentColor" className="mr-1" />
                      <Star size={18} fill="currentColor" />
                    </div>
                    <div className="inline-flex flex-col sm:flex-row items-center text-bejeAbobora">
                      <span className="mr-2 font-medium text-bejeClaro">
                        Cliente: {project.clientName}
                      </span>
                      <span className="bg-bejeAbobora/20 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
            
            {/* Botões de navegação para mobile */}
            <div className="sm:hidden absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "350px" }}>
              <button
                onClick={() => {
                  if (currentSlide > 0) {
                    setCurrentSlide(currentSlide - 1);
                  } else {
                    setCurrentSlide(projects.length - 1);
                  }
                }}
                type="button"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-bejeAbobora/40 hover:bg-bejeAbobora/60 w-10 h-14 flex items-center justify-center rounded-r-md focus:outline-none shadow-md pointer-events-auto"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              
              <button
                onClick={() => {
                  if (currentSlide < projects.length - 1) {
                    setCurrentSlide(currentSlide + 1);
                  } else {
                    setCurrentSlide(0);
                  }
                }}
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-bejeAbobora/40 hover:bg-bejeAbobora/60 w-10 h-14 flex items-center justify-center rounded-l-md focus:outline-none shadow-md pointer-events-auto"
                aria-label="Próximo slide"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px]">
            <img
              src={fallbackImage}
              alt="Projeto Destaque"
              className="w-full h-full max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[550px] object-cover md:object-contain"
              style={{ display: 'block' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSlider;
