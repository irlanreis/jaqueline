import React from 'react';
import { Star } from "lucide-react";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ profileImage }) => {
  return (
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
              src={profileImage}
              alt="Jaqueline Reis"
              className="rounded-full border-2 border-bejeAbobora shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover object-center mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-marronLight p-3 rounded-full">
              <Star size={24} fill="#F9F3E5" className="text-bejeClaro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
