import React from 'react';
import { Link } from "react-router-dom";

interface CallToActionProps {
  image: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ image }) => {
  return (
    <section className="w-full py-16 px-4 bg-marrondarck">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center w-full mb-8">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-spectral text-bejeAbobora mb-4 md:mb-6">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-base sm:text-lg text-bejeClaro">
                Estou pronta para transformar suas ideias em estratégias de
                marketing eficientes. Entre em contato para discutirmos como
                posso ajudar a elevar sua marca ao próximo nível.
              </p>
            </div>
            
            <div className="md:w-2/5 md:pl-8 flex justify-center">
              <img
                src={image}
                alt="Jaqueline Reis"
                className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm mx-auto max-h-[350px] object-cover md:object-contain"
              />
            </div>
          </div>
          
          <Link
            to="/contato"
            className="inline-block bg-bejeAbobora hover:bg-marronLight text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-colors duration-300 mt-4 text-center text-lg"
          >
            Agende uma Conversa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
