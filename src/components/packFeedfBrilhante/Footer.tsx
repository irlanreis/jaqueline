
const Footer = () => {
  return (
    <footer className="bg-marrondarck py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Call to Action Final */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-SpectralRegular text-bejeLigth 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            leading-tight 
            mb-3 sm:mb-4 md:mb-5 
            px-0 sm:px-4">
            Não perca mais tempo criando posts do zero!
          </h2>
          <p className="font-MontserratRegular text-beje 
            text-sm sm:text-base md:text-lg 
            mb-5 sm:mb-6 md:mb-8 
            max-w-xs sm:max-w-lg md:max-w-2xl 
            mx-auto px-2">
            Junte-se a centenas de empreendedoras que já transformaram seus feeds e aumentaram suas vendas.
          </p>
          <a 
            href="https://pay.kiwify.com.br/1Tag7Ep" 
            target="_blank"
            className="inline-block mx-auto"
          >
            <button
              className="font-MontserratRegular font-bold bg-green-600 text-bejeLigth rounded-lg 
              transition-all duration-300 hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300
              text-base sm:text-lg md:text-xl lg:text-2xl
              py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-6 lg:px-12"
            >
              COMPRAR O PACK FEED BRILHANTE AGORA
            </button>
          </a>
          <div className="mt-4 sm:mt-6 text-beje text-xs sm:text-sm mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-3 gap-1 md:space-y-0">
              <div className="flex items-center justify-center">
                <span className="inline-block mr-1">✅</span>
                <span>Acesso imediato após o pagamento</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="inline-block mr-1">✅</span>
                <span>7 dias de garantia incondicional</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="inline-block mr-1">✅</span>
                <span>Suporte incluído</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-beje/20 pt-4 sm:pt-6">
          <div className="text-center">
            <p className="text-beje text-xs sm:text-sm">
              © {new Date().getFullYear()} Pack Feed Brilhante. Todos os direitos reservados.
            </p>
            <p className="text-beje/70 text-xs mt-2 max-w-lg mx-auto">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;