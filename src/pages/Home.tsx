import Header from "../components/Home-page/Header";
import HeroSection from "../components/Home-page/HeroSection";
import TitleDinamic from "../components/Home-page/TitleDinamic";

function Home() {
  return (
    <>
      <TitleDinamic
        title="Jaqueline Reis | Marketing Digital"
        description="Jaqueline Reis - Especialista em Marketing Digital e Estratégias de Conteúdo para Empreendedoras."
      />
      <Header />
      <HeroSection />
    </>
  );
}

export default Home;
