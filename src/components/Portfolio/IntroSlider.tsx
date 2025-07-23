import React, { useState } from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './SliderStyle.css';

interface SlideData {
  img: string;
  title: string;
  description1: string;
  description2: string;
}

interface IntroSliderProps {
  slides: SlideData[];
  slidersReady: boolean;
}

const IntroSlider: React.FC<IntroSliderProps> = ({ slides, slidersReady }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Custom arrows for the slider
  const NextArrow = (props: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    const { onClick } = props;
    return (
      <button
        className="hidden sm:flex absolute right-0 -top-12 z-10 bg-bejeAbobora/40 hover:bg-marronLight/10 text-white w-10 h-10 items-center justify-center rounded-full transition-all duration-300 focus:outline-none border-2 border-bejeAbobora md:right-0 md:-top-12"
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
        className="hidden sm:flex absolute right-12 -top-12 z-10 bg-bejeAbobora/40 hover:bg-marronLight/10 text-white w-10 h-10 items-center justify-center rounded-full transition-all duration-300 focus:outline-none border-2 border-bejeAbobora md:right-12 md:-top-12"
        onClick={onClick}
      >
        <ChevronLeft size={20} className="text-bejeAbobora" />
      </button>
    );
  };

  const sliderRef = React.useRef<Slider | null>(null);

  React.useEffect(() => {
    // Quando currentSlide muda externamente, atualize o slider
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    dotsClass: "slick-dots custom-dots",
    adaptiveHeight: true,
    fade: true,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand" as const,
    initialSlide: 0,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
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
    ],
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-bejeAbobora scale-125" : "bg-gray-400 hover:bg-gray-500"
        }`}
      />
    ),
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-1 md:gap-2">
      <div key={currentSlide} className="md:w-2/5 mb-0 md:mb-0 md:pr-6 lg:pr-8 text-fade-in text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-spectral text-marrondarck mb-1 md:mb-3 leading-tight">
          {slides[currentSlide].title}
        </h2>
        <div className="w-12 h-px bg-bejeAbobora mx-auto md:mx-0 mb-1 md:mb-3"></div>
        <p className="text-sm sm:text-base text-marronLight/90 mb-1 md:mb-3 leading-relaxed font-MontserratRegular">
          {slides[currentSlide].description1}
        </p>
        <p className="text-sm sm:text-base text-marronLight/90 mb-2 md:mb-4 leading-relaxed font-MontserratRegular">
          {slides[currentSlide].description2}
        </p>
      </div>
      <div className="flex justify-center w-full md:w-3/5 relative">
        <div className="slider-container relative pt-2 sm:pt-4 md:pt-6 w-full" style={{ display: 'block', minHeight: '320px' }}>
          {slidersReady ? (
            <div className="relative">
              <Slider ref={sliderRef} {...sliderSettings}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-[380px] sm:h-[460px] md:h-[500px] lg:h-[550px] outline-none relative"
                  >
                    <img
                      src={slide.img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full max-w-full max-h-[380px] sm:max-h-[460px] md:max-h-[500px] lg:max-h-[550px] object-cover md:object-contain"
                      style={{ display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
              
              {/* Botões de navegação para mobile */}
              <div className="sm:hidden absolute inset-0">
                <button
                  onClick={() => {
                    if (currentSlide > 0) {
                      setCurrentSlide(currentSlide - 1);
                    } else {
                      setCurrentSlide(slides.length - 1);
                    }
                  }}
                  type="button"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-bejeAbobora/40 hover:bg-bejeAbobora/60 w-10 h-14 flex items-center justify-center rounded-r-md focus:outline-none shadow-md"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                
                <button
                  onClick={() => {
                    if (currentSlide < slides.length - 1) {
                      setCurrentSlide(currentSlide + 1);
                    } else {
                      setCurrentSlide(0);
                    }
                  }}
                  type="button"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-bejeAbobora/40 hover:bg-bejeAbobora/60 w-10 h-14 flex items-center justify-center rounded-l-md focus:outline-none shadow-md"
                  aria-label="Próximo slide"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[380px] sm:h-[460px] md:h-[500px] lg:h-[550px]">
              <img
                src={slides[0].img}
                alt="Primeiro slide"
                className="w-full h-full max-w-full max-h-[380px] sm:max-h-[460px] md:max-h-[500px] lg:max-h-[550px] object-cover md:object-contain"
                style={{ display: 'block' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroSlider;

/* Adicione este CSS ao seu arquivo de estilo global ou descomente para usar */
/*
.custom-dots {
  bottom: -35px;
  text-align: center;
  padding: 10px 0;
}

.custom-dots li {
  display: inline-block;
  margin: 0 4px;
}

.custom-dots li button {
  font-size: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 5px;
}

@media (max-width: 640px) {
  .custom-dots {
    bottom: -30px;
  }
}

.slick-slider {
  margin-bottom: 45px;
}
*/
