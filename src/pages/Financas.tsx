import { Calculator, TrendingUp, Target, DollarSign, BarChart3, PieChart } from "lucide-react";
import Header from "../components/Home-page/Header";
import TitleDinamic from "../components/Home-page/TitleDinamic";
import { Link } from "react-router-dom";

function Financas() {
  const services = [
    {
      icon: <Calculator size={40} className="text-bejeAbobora" />,
      title: "Consultoria Financeira para Negócios Digitais",
      description: "Planejamento financeiro estratégico para empreendedoras que querem profissionalizar suas finanças no digital.",
      features: ["Análise de viabilidade de projetos", "Definição de preços e margens", "Fluxo de caixa otimizado"]
    },
    {
      icon: <TrendingUp size={40} className="text-bejeAbobora" />,
      title: "Estratégias de Investimento em Marketing",
      description: "Como definir orçamentos e medir ROI em campanhas digitais para maximizar seus resultados.",
      features: ["ROI em mídias sociais", "Análise de custo-benefício", "Orçamento otimizado"]
    },
    {
      icon: <Target size={40} className="text-bejeAbobora" />,
      title: "Precificação Estratégica de Serviços",
      description: "Metodologias para precificar seus serviços de forma competitiva e lucrativa no mercado digital.",
      features: ["Análise de concorrência", "Margem de lucro ideal", "Pacotes de serviços"]
    }
  ];

  const packages = [
    {
      name: "Consultoria Express",
      price: "R$ 297",
      duration: "1 sessão de 2h",
      description: "Ideal para quem precisa de orientações pontuais sobre finanças do negócio digital.",
      features: [
        "Análise financeira básica",
        "Definição de preços de serviços",
        "Relatório com recomendações",
        "1 mês de suporte via WhatsApp"
      ],
      highlight: false
    },
    {
      name: "Mentoria Financeira",
      price: "R$ 897",
      duration: "3 sessões + acompanhamento",
      description: "Acompanhamento completo para estruturar as finanças do seu negócio digital.",
      features: [
        "3 sessões de mentoria (2h cada)",
        "Planilhas personalizadas",
        "Estratégia de precificação",
        "Análise de ROI em marketing",
        "3 meses de suporte via WhatsApp",
        "Revisão mensal dos resultados"
      ],
      highlight: true
    },
    {
      name: "Consultoria VIP",
      price: "R$ 1.897",
      duration: "Pacote completo 6 meses",
      description: "Solução completa para empreendedoras que querem profissionalizar totalmente suas finanças.",
      features: [
        "6 sessões de mentoria estratégica",
        "Plano financeiro anual personalizado",
        "Acompanhamento quinzenal",
        "Análises mensais de performance",
        "Suporte prioritário via WhatsApp",
        "Templates exclusivos de gestão financeira",
        "Certificado de participação"
      ],
      highlight: false
    }
  ];

  return (
    <>
      <TitleDinamic
        title="Finanças | Jaqueline Reis"
        description="Consultoria financeira especializada para empreendedoras digitais. Organize suas finanças e maximize seus resultados."
      />
      <Header />
      <main className="bg-bejeLigth text-marronLight">
        {/* Hero Section */}
        <section className="bg-marrondarck text-white pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-SpectralRegular text-4xl sm:text-5xl md:text-6xl leading-tight">
              Consultoria <strong className="text-bejeAbobora">Financeira</strong>
            </h1>
            <p className="font-MontserratRegular mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-beje">
              Transforme suas finanças empresariais com estratégias personalizadas para negócios digitais
            </p>
            <div className="mt-8">
              <a 
                href="https://wa.me/5595991217538/?text=Ol%C3%A1,%20tenho%20interesse%20na%20consultoria%20financeira" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="font-MontserratRegular font-bold bg-bejeAbobora text-marrondarck rounded-lg 
                transition-all duration-300 hover:bg-beje hover:scale-105 focus:outline-none focus:ring-4 focus:ring-bejeAbobora/50
                text-base sm:text-lg py-3 px-8 sm:py-4 sm:px-10">
                  Agendar Consulta
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight">
                Serviços <strong className="text-bejeAbobora">Financeiros</strong>
              </h2>
              <p className="font-MontserratRegular mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                Soluções financeiras especializadas para empreendedoras que querem profissionalizar e escalar seus negócios digitais.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-16 h-16 bg-bejeLigth rounded-lg mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="font-SpectralRegular text-xl sm:text-2xl text-center mb-4">{service.title}</h3>
                  <p className="font-MontserratRegular text-sm sm:text-base text-center mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="font-MontserratRegular text-sm flex items-center">
                        <span className="w-2 h-2 bg-bejeAbobora rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight">
                Resultados que <strong className="text-bejeAbobora">transformam</strong>
              </h2>
              <p className="font-MontserratRegular mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                Veja os resultados que minhas clientes alcançaram com a consultoria financeira especializada.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 bg-bejeAbobora rounded-full mx-auto mb-4">
                  <DollarSign size={32} className="text-white" />
                </div>
                <div className="font-SpectralRegular text-3xl sm:text-4xl font-bold text-bejeAbobora mb-2">+150%</div>
                <div className="font-MontserratRegular text-sm sm:text-base">Aumento médio no faturamento</div>
              </div>
              
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 bg-bejeAbobora rounded-full mx-auto mb-4">
                  <BarChart3 size={32} className="text-white" />
                </div>
                <div className="font-SpectralRegular text-3xl sm:text-4xl font-bold text-bejeAbobora mb-2">+200%</div>
                <div className="font-MontserratRegular text-sm sm:text-base">Melhoria na margem de lucro</div>
              </div>
              
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 bg-bejeAbobora rounded-full mx-auto mb-4">
                  <PieChart size={32} className="text-white" />
                </div>
                <div className="font-SpectralRegular text-3xl sm:text-4xl font-bold text-bejeAbobora mb-2">85%</div>
                <div className="font-MontserratRegular text-sm sm:text-base">Redução nos gastos desnecessários</div>
              </div>
              
              <div className="text-center p-4">
                <div className="flex items-center justify-center w-16 h-16 bg-bejeAbobora rounded-full mx-auto mb-4">
                  <Target size={32} className="text-white" />
                </div>
                <div className="font-SpectralRegular text-3xl sm:text-4xl font-bold text-bejeAbobora mb-2">95%</div>
                <div className="font-MontserratRegular text-sm sm:text-base">Satisfação das clientes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight">
                Pacotes de <strong className="text-bejeAbobora">Consultoria</strong>
              </h2>
              <p className="font-MontserratRegular mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                Escolha o pacote que melhor se adapta ao momento do seu negócio e aos seus objetivos financeiros.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div key={index} className={`
                  bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                  ${pkg.highlight ? 'ring-2 ring-bejeAbobora transform scale-105' : ''}
                `}>
                  {pkg.highlight && (
                    <div className="bg-bejeAbobora text-white text-center py-2">
                      <span className="font-MontserratRegular font-bold text-sm">MAIS PROCURADO</span>
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-SpectralRegular text-xl sm:text-2xl text-center mb-2">{pkg.name}</h3>
                    <div className="text-center mb-4">
                      <span className="font-SpectralRegular text-3xl sm:text-4xl font-bold text-bejeAbobora">{pkg.price}</span>
                      <div className="font-MontserratRegular text-sm text-gray-600">{pkg.duration}</div>
                    </div>
                    <p className="font-MontserratRegular text-sm sm:text-base text-center mb-6 text-gray-700">{pkg.description}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="font-MontserratRegular text-sm flex items-start">
                          <span className="w-2 h-2 bg-bejeAbobora rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <a 
                        href={`https://wa.me/5595991217538/?text=Ol%C3%A1,%20tenho%20interesse%20no%20pacote%20${pkg.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full"
                      >
                        <button className={`
                          font-MontserratRegular font-bold rounded-lg transition-all duration-300 
                          focus:outline-none focus:ring-4 focus:ring-bejeAbobora/50 w-full py-3 px-6
                          ${pkg.highlight 
                            ? 'bg-bejeAbobora text-white hover:bg-bejeAbobora/90' 
                            : 'bg-transparent border-2 border-bejeAbobora text-bejeAbobora hover:bg-bejeAbobora hover:text-white'
                          }
                        `}>
                          Contratar Agora
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-marrondarck text-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-SpectralRegular text-3xl sm:text-4xl leading-tight mb-4">
              Pronta para <strong className="text-bejeAbobora">transformar suas finanças</strong>?
            </h2>
            <p className="font-MontserratRegular text-beje text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Agende uma conversa gratuita de 15 minutos para entender como posso ajudar você a organizar e potencializar as finanças do seu negócio digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5595991217538/?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20conversa%20gratuita%20sobre%20consultoria%20financeira" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  className="font-MontserratRegular font-bold bg-bejeAbobora text-marrondarck rounded-lg 
                  transition-all duration-300 hover:bg-beje hover:scale-105 focus:outline-none focus:ring-4 focus:ring-bejeAbobora/50
                  text-base sm:text-lg w-full sm:w-auto
                  py-3 px-8 sm:py-4 sm:px-10"
                >
                  Conversa Gratuita
                </button>
              </a>
              <Link 
                to="/contato" 
                className="inline-block"
              >
                <button
                  className="font-MontserratRegular font-bold bg-transparent border-2 border-bejeAbobora text-bejeClaro rounded-lg 
                  transition-all duration-300 hover:bg-bejeAbobora/10 focus:outline-none focus:ring-4 focus:ring-bejeAbobora/30
                  text-base sm:text-lg w-full sm:w-auto
                  py-3 px-8 sm:py-4 sm:px-10"
                >
                  Outros Contatos
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Financas;