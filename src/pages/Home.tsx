import Destaques from "../components/Home-page/Destaques";
import Feedbacks from "../components/Home-page/Feedbacks";
import Header from "../components/Home-page/Header";
import PageInitial from "../components/Home-page/PageInitial";
import SectionGrid from "../components/Home-page/SectionGrid";
import Footer from "../components/packFeedfBrilhante/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Jaqueline Reis | Marketing Digital</title>
        <meta
          name="description"
          content="Jaqueline Reis - Especialista em Marketing Digital e Estratégias de Conteúdo para Empreendedoras."
        />
      </Helmet>
      <Header />
      <PageInitial />
      <Destaques />
      <SectionGrid />
      <Feedbacks />
      <Footer />
    </>
  );
}

export default Home;
