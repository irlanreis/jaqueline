import { ArrowRight } from 'lucide-react';
import logo from '../../assets/images/logo-Jaque.svg';

function ReisMarketing() {
  return (
    <section className="py-12 px-4 xs:px-5 sm:py-14 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16 bg-marrondarck text-bejeLigth relative">
      <div className="absolute w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-bejeAbobora/20 -right-8 sm:-right-12 md:-right-14 top-16 sm:top-20 md:top-24 rounded-full"></div>
      <div className="absolute w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-bejeAbobora/20 left-12 sm:left-16 md:left-24 bottom-12 sm:bottom-16 md:bottom-24 rounded-full"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-2 xs:mb-3">
            <span className="text-bejeAbobora font-SpectralRegular italic text-xs xs:text-sm sm:text-base">— Nossa agência —</span>
          </div>
          <h2 className="font-SpectralRegular text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5">
            Reis Marketing RR
          </h2>
          <div className="w-12 xs:w-16 h-px bg-bejeAbobora mx-auto mb-6 sm:mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-2/5 text-center md:text-left">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <img src={logo} alt="Reis Marketing RR" className="h-10 xs:h-12 sm:h-14 mx-auto md:mx-0" />
            </div>
            
            <p className="text-sm xs:text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-MontserratRegular text-bejeLigth/90">
              Nossa agência nasceu da paixão em conectar marcas e pessoas através 
              de estratégias humanizadas. Com uma equipe multidisciplinar, 
              oferecemos soluções completas que já impactaram mais de 160 clientes em quatro países.
            </p>
            
            <div className="mt-6 sm:mt-8">
              <a 
                href="https://reismarketing.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 border-b border-bejeAbobora text-bejeAbobora hover:text-bejeAbobora/80 transition-colors font-MontserratRegular pb-1 text-sm xs:text-base"
              >
                Conheça nossa agência <ArrowRight size={14} className="xs:w-4 sm:w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="border border-bejeAbobora/20 p-4 xs:p-5 sm:p-6 md:p-7">
                <h3 className="text-bejeAbobora text-base xs:text-lg font-SpectralRegular mb-2 sm:mb-3">Gestão de Redes Sociais</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-xs xs:text-sm leading-relaxed">
                  Estratégias personalizadas para conectar sua marca ao público certo.
                </p>
              </div>
              
              <div className="border border-bejeAbobora/20 p-4 xs:p-5 sm:p-6 md:p-7">
                <h3 className="text-bejeAbobora text-base xs:text-lg font-SpectralRegular mb-2 sm:mb-3">Identidade Visual</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-xs xs:text-sm leading-relaxed">
                  Criação e refinamento da imagem da sua marca para comunicar sua essência.
                </p>
              </div>
              
              <div className="border border-bejeAbobora/20 p-4 xs:p-5 sm:p-6 md:p-7">
                <h3 className="text-bejeAbobora text-base xs:text-lg font-SpectralRegular mb-2 sm:mb-3">Produção de Conteúdo</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-xs xs:text-sm leading-relaxed">
                  Textos, imagens e vídeos que contam a história da sua marca com propósito.
                </p>
              </div>
              
              <div className="border border-bejeAbobora/20 p-4 xs:p-5 sm:p-6 md:p-7">
                <h3 className="text-bejeAbobora text-base xs:text-lg font-SpectralRegular mb-2 sm:mb-3">Tráfego Pago</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-xs xs:text-sm leading-relaxed">
                  Campanhas estratégicas para potencializar seus resultados de forma sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReisMarketing;
