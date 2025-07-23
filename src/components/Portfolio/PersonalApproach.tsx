import React from 'react';

interface PersonalApproachProps {
  images: {
    profile: string;
    project1: string;
    project2: string;
    project3: string;
  };
}

const PersonalApproach: React.FC<PersonalApproachProps> = ({ images }) => {
  return (
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
              src={images.profile}
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
              src={images.project1}
              alt="Projeto"
              className="rounded-lg shadow-md h-64 object-cover object-center w-full"
            />
            <img
              src={images.project2}
              alt="Jaqueline trabalhando"
              className="rounded-lg shadow-md h-64 object-cover object-center w-full"
            />
            <div className="col-span-2">
              <img
                src={images.project3}
                alt="Projeto Destaque"
                className="rounded-lg shadow-md h-80 w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalApproach;
