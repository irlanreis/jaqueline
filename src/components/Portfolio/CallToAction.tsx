import React from 'react';
import { Link } from "react-router-dom";

interface CallToActionProps {
  image: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ image }) => {
  return (
    <section className="w-full py-20 px-4 bg-marrondarck">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="md:w-3/5 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-spectral text-bejeAbobora mb-6">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-lg text-bejeClaro mb-6">
              Estou pronta para transformar suas ideias em estratégias de
              marketing eficientes. Entre em contato para discutirmos como
              posso ajudar a elevar sua marca ao próximo nível.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-bejeAbobora hover:bg-marronLight text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Agende uma Conversa
            </Link>
          </div>
          <div className="md:w-2/5 md:pl-8">
            <img
              src={image}
              alt="Jaqueline Reis"
              className="rounded-lg shadow-xl w-full max-w-sm mx-auto max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
