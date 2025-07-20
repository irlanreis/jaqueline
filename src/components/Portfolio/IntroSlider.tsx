import React, { useState } from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-bejeAbobora scale-125" : "bg-gray-400"
        }`}
      />
    ),
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div key={currentSlide} className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-fade-in text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-spectral text-marrondarck mb-4 md:mb-6">
          {slides[currentSlide].title}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
          {slides[currentSlide].description1}
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8">
          {slides[currentSlide].description2}
        </p>
      </div>
      <div className="flex justify-center w-full md:w-1/2 relative">
        <div className="slider-container relative pt-12 sm:pt-16 max-w-full sm:max-w-[540px] w-full" style={{ display: 'block', minHeight: '350px' }}>
          {slidersReady ? (
            <Slider {...sliderSettings}>
              {slides.map((slide, index) => (
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
                src={slides[0].img}
                alt="Primeiro slide"
                className="w-auto h-auto max-w-full max-h-[350px] object-contain"
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
