import React from 'react';
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
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
            {projects.map((project, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[600px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-auto h-auto max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[600px] object-contain"
                      style={{ display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left text-fade-in">
                    <h3 className="text-2xl font-spectral text-bejeAbobora mb-4">
                      {project.title}
                    </h3>
                    <p className="text-bejeClaro mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-center md:justify-start text-bejeAbobora mb-6">
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
        ) : (
          <div className="flex justify-center items-center h-[350px]">
            <img
              src={fallbackImage}
              alt="Projeto Destaque"
              className="w-auto h-auto max-w-full max-h-[350px] object-contain"
              style={{ display: 'block' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSlider;
