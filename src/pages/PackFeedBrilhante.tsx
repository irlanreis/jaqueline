import Content from "../components/packFeedfBrilhante/Content";
import FrequentlyAskedQuestions from "../components/packFeedfBrilhante/FAQ";
import Footer from "../components/packFeedfBrilhante/Footer";
import Initial from "../components/packFeedfBrilhante/Initial";
import Offer from "../components/packFeedfBrilhante/Offer";
import Testimonials from "../components/packFeedfBrilhante/Testimonials";
import Urgency from "../components/packFeedfBrilhante/Urgency";
import Header from "../components/Home-page/Header";
import TitleDinamic from "../components/Home-page/TitleDinamic";

const PackFeedBrilhante = () => {
  return (
    <>
      <TitleDinamic
        title="Pack Feed Brilhante | Templates para Instagram"
        description="Pack Feed Brilhante - 100 Carrosséis e 50 Posts com Scripts prontos para transformar seu Instagram e aumentar suas vendas."
      />
      <Header />
      <Initial />
      <Content />
      <Offer />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Urgency />
      <Footer />
    </>
  );
};

export default PackFeedBrilhante;
