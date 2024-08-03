const PromoCard = () => {
  return (
    <div className="h-70vh flex items-center justify-center bg-pricePack">
      <div className="relative bg-bejeLigth bg-opacity-70 p-6 rounded-lg shadow-lg
      lg:h-4/5 lg:w-3/6">
        <div className="text-center font-MontserratRegular
        lg:w-full lg:h-full lg:ml-auto lg:mr-auto flex flex-col justify-around">
          <section>
            <p className="text-gray-500 text-center text-2xl line-through">De: R$ 97,00</p>
            <p className="text-4xl font-bold text-green-600 mt-2">R$ 57,00</p>
            <p className="text-sm text-gray-500 mt-1">ou 8x de 5,57</p>
          </section>
          <div className="mt-4 text-left text-marronLight text-lg ml-auto mr-auto">
            <ul className="list-disc pl-6 font-semibold space-y-5">
              <li>100 Carrosséis com Scripts que vendem</li>
              <li>50 Posts para Feed com Scripts que engajam</li>
              <li>2 Bônus Exclusivos</li>
              <li>Aulas de como editar cores, textos e imagens</li>
              <li>Grupo de Suporte VIP</li>
            </ul>
          </div>
          <a href="https://pay.kiwify.com.br/1Tag7Ep" target="_blank">
            <button
              className="
            mbl:w-72 p-3 text-lg font-semibold bg-green-600  font-MontserratRegular rounded-lg text-bejeLigth hover:bg-green-500 shadow-xl"
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
