const PromoCard = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="bg-bejeLigth bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        <div className="font-MontserratRegular flex flex-col justify-between gap-4 sm:gap-6 md:gap-8">
          <section className="text-center">
            <p className="text-gray-500 text-xl sm:text-2xl line-through">De: R$ 97,00</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mt-1 sm:mt-2">R$ 57,00</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">ou 8x de 5,57</p>
          </section>
          <div className="mt-2 text-left text-marronLight">
            <ul className="list-disc pl-6 font-semibold space-y-3 sm:space-y-4 text-base sm:text-lg">
              <li>100 Carrosséis com Scripts que vendem</li>
              <li>50 Posts para Feed com Scripts que engajam</li>
              <li>2 Bônus Exclusivos</li>
              <li>Aulas de como editar cores, textos e imagens</li>
              <li>Grupo de Suporte VIP</li>
            </ul>
          </div>
          <a href="https://pay.kiwify.com.br/1Tag7Ep" target="_blank" className="mt-4 w-full">
            <button
              className="w-full p-3 sm:p-4 text-base sm:text-lg font-semibold bg-green-600 font-MontserratRegular 
              rounded-lg text-bejeLigth hover:bg-green-500 shadow-xl transition-all duration-300"
            >
              QUERO ACESSAR AGORA
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
