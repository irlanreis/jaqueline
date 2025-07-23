import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section className="py-20 sm:py-24 px-4 bg-gradient-to-b from-bejeClaro to-bejeClaro/50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute w-40 h-40 border border-bejeAbobora/10 -right-20 top-20 rounded-full"></div>
      <div className="absolute w-24 h-24 border border-bejeAbobora/10 left-12 bottom-24 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="text-bejeAbobora font-SpectralRegular italic text-sm sm:text-base">— Metodologia —</span>
          </div>
          <h2 className="font-SpectralRegular text-2xl sm:text-3xl md:text-4xl text-marronLight mb-5">
            Meu Processo Criativo
          </h2>
          <div className="w-16 h-px bg-bejeAbobora mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-marronLight/90 font-MontserratRegular text-base">
            Um caminho estruturado que combina estratégia e sensibilidade para criar conexões autênticas entre marcas e pessoas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-bejeLigth bg-gradient-to-b from-bejeLigth/50 to-bejeClaro/50 p-6 sm:p-8 border border-bejeAbobora/10 text-center hover:border-bejeAbobora/30 transition-all duration-300 group rounded-xl"
            >
              <div className="w-16 h-16 border-2 border-bejeAbobora/80 rounded-full flex items-center justify-center mx-auto mb-6 text-bejeAbobora group-hover:bg-bejeAbobora/5 transition-colors duration-300">
                <span className="font-SpectralRegular font-semibold text-xl">{step.number}</span>
              </div>
              
              <h3 className="text-xl font-SpectralRegular text-marronLight mb-4">
                {step.title}
              </h3>
              
              <p className="text-marronLight/80 font-MontserratRegular text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
