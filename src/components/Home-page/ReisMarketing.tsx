import { ArrowRight } from 'lucide-react';
import logo from '../../assets/images/logo-Jaque.svg';

function ReisMarketing() {
  return (
    <section className="p-20 bg-marrondarck text-bejeLigth relative">
      <div className="absolute w-32 h-32 border border-bejeAbobora/20 -right-14 top-24 rounded-full"></div>
      <div className="absolute w-16 h-16 border border-bejeAbobora/20 left-24 bottom-24 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center ">
          <div className="inline-block mb-3">
            <span className="text-bejeAbobora font-SpectralRegular italic text-base">— Nossa agência —</span>
          </div>
          <h2 className="font-SpectralRegular text-3xl sm:text-4xl mb-5">
            Reis Marketing RR
          </h2>
          <div className="w-16 h-px bg-bejeAbobora mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-2/5 text-center md:text-left">
            <div className="mb-6">
              <img src={logo} alt="Reis Marketing RR" className="h-14 mx-auto md:mx-0" />
            </div>
            
            <p className="text-lg leading-relaxed mb-8 font-MontserratRegular text-bejeLigth/90">
              Nossa agência nasceu da paixão em conectar marcas e pessoas através 
              de estratégias humanizadas. Com uma equipe multidisciplinar, 
              oferecemos soluções completas que já impactaram mais de 160 clientes em quatro países.
            </p>
            
            <div className="mt-8">
              <a 
                href="https://reismarketing.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-b border-bejeAbobora text-bejeAbobora hover:text-bejeAbobora/80 transition-colors font-MontserratRegular pb-1"
              >
                Conheça nossa agência <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-bejeAbobora/20 p-7">
                <h3 className="text-bejeAbobora text-lg font-SpectralRegular mb-3">Gestão de Redes Sociais</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-sm leading-relaxed">
                  Estratégias personalizadas para conectar sua marca ao público certo.
                </p>
              </div>
              
              <div className="border border-bejeAbobora/20 p-7">
                <h3 className="text-bejeAbobora text-lg font-SpectralRegular mb-3">Identidade Visual</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-sm leading-relaxed">
                  Criação e refinamento da imagem da sua marca para comunicar sua essência.
                </p>
              </div>
              
              <div className="border border-bejeAbobora/20 p-7">
                <h3 className="text-bejeAbobora text-lg font-SpectralRegular mb-3">Produção de Conteúdo</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-sm leading-relaxed">
                  Textos, imagens e vídeos que contam a história da sua marca com propósito.
                </p>
              </div>
              
              <div className="border border-bejeAbobora/20 p-7">
                <h3 className="text-bejeAbobora text-lg font-SpectralRegular mb-3">Tráfego Pago</h3>
                <p className="text-bejeLigth/80 font-MontserratRegular text-sm leading-relaxed">
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
