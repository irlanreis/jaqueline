import Header from "../components/Home-page/Header";
import HeroSection from "../components/Home-page/HeroSection";
import TitleDinamic from "../components/Home-page/TitleDinamic";
import SobreMimSimples from "../components/Home-page/SobreMimSimples";
import MissaoMarca from "../components/Home-page/MissaoMarca";
import ReisMarketing from "../components/Home-page/ReisMarketing";
import ConviteExplorar from "../components/Home-page/ConviteExplorar";
import Footer from "../components/Home-page/Footer";

function Home() {
  return (
    <>
      <TitleDinamic
        title="Jaqueline Reis | Marketing Digital"
        description="Jaqueline Reis - Especialista em Marketing Digital e Estratégias de Conteúdo para Empreendedoras."
      />
      <Header />
      <HeroSection />
      <SobreMimSimples />
      <MissaoMarca />
      <ReisMarketing />
      <ConviteExplorar />
      <Footer />
    </>
  );
}

export default Home;
