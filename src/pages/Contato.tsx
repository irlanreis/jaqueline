import React from "react";
import Header from "../components/Home-page/Header";
import Footer from "../components/Home-page/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import TitleDinamic from "../components/Home-page/TitleDinamic";

const Contato: React.FC = () => {
  return (
    <>
      <TitleDinamic
        title="Contato | Jaqueline Reis Marketing"
        description="Entre em contato com Jaqueline Reis para impulsionar seu marketing digital."
      />
      <Header />

      <main className="pt-16 bg-gradient-to-b from-beje to-bejeClaro min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-20 px-4 bg-marrondarck">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-spectral text-bejeAbobora mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-bejeClaro max-w-3xl mx-auto">
              Estou pronta para ajudar a transformar sua presença online e
              impulsionar seus resultados de marketing.
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-spectral text-marrondarck mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-bejeAbobora mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-marrondarck">Email</h3>
                    <p className="text-gray-700">reismarketing.rr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-bejeAbobora mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-marrondarck">Telefone</h3>
                    <p className="text-gray-700">(95) 99121-7538</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-bejeAbobora mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-marrondarck">
                      Localização
                    </h3>
                    <p className="text-gray-700">Boa Vista, RR - Brasil</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-medium text-marrondarck mb-3">
                    Redes Sociais
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/jaquelinereisw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bejeAbobora text-white p-3 rounded-full hover:bg-marronLight transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/IrlaneJaque/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bejeAbobora text-white p-3 rounded-full hover:bg-marronLight transition-colors"
                    >
                      <FaFacebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-spectral text-marrondarck mb-6">
                Envie uma Mensagem
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bejeAbobora focus:border-bejeAbobora"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bejeAbobora focus:border-bejeAbobora"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bejeAbobora focus:border-bejeAbobora"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Sua mensagem aqui..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bejeAbobora focus:border-bejeAbobora"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bejeAbobora hover:bg-marronLight text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-spectral text-marrondarck mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-marrondarck mb-2">
                Quanto tempo leva para ver resultados?
              </h3>
              <p className="text-gray-700">
                O tempo para ver resultados varia conforme o projeto e
                estratégia, mas normalmente começamos a observar melhorias em
                métricas relevantes em 30-60 dias, com resultados mais
                significativos em 3-6 meses de trabalho contínuo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-marrondarck mb-2">
                Como funciona o processo de trabalho?
              </h3>
              <p className="text-gray-700">
                Iniciamos com uma reunião de descoberta para entender seus
                objetivos, seguida de uma análise da situação atual. Depois,
                desenvolvemos uma estratégia personalizada, implementamos as
                ações e monitoramos os resultados com relatórios periódicos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-marrondarck mb-2">
                Quais serviços você oferece?
              </h3>
              <p className="text-gray-700">
                Ofereço serviços completos de marketing digital, incluindo
                estratégia de conteúdo, gestão de redes sociais, e-mail
                marketing, otimização para mecanismos de busca (SEO), criação de
                landing pages e consultoria estratégica.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-marrondarck mb-2">
                Você trabalha com empresas de pequeno porte?
              </h3>
              <p className="text-gray-700">
                Sim! Trabalho com empresas de todos os tamanhos, desde startups
                até grandes corporações. Desenvolvo estratégias personalizadas
                que se adequam ao seu orçamento e objetivos específicos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contato;
