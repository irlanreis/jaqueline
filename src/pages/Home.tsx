import Destaques from "../components/Home-page/Destaques";
import Feedbacks from "../components/Home-page/Feedbacks";
import Header from "../components/Home-page/Header";
import HeroSection from "../components/Home-page/HeroSection";
import SectionGrid from "../components/Home-page/SectionGrid";
import TitleDinamic from "../components/Home-page/TitleDinamic";
import Footer from "../components/packFeedfBrilhante/Footer";

function Home() {
  return (
    <>
      <TitleDinamic
        title="Jaqueline Reis | Marketing Digital"
        description="Jaqueline Reis - Especialista em Marketing Digital e Estratégias de Conteúdo para Empreendedoras."
      />
      <Header />
      <HeroSection />
      <Destaques />
      <SectionGrid />
      <Feedbacks />
      <Footer />
    </>
  );
}

export default Home;
