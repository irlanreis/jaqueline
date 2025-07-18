import Content from "../components/packFeedfBrilhante/Content";
import FrequentlyAskedQuestions from "../components/packFeedfBrilhante/FAQ";
import Footer from "../components/packFeedfBrilhante/Footer";
import Initial from "../components/packFeedfBrilhante/Initial";
import Offer from "../components/packFeedfBrilhante/Offer";
import Testimonials from "../components/packFeedfBrilhante/Testimonials";
import Urgency from "../components/packFeedfBrilhante/Urgency";
import { Helmet } from "react-helmet-async";

const PackFeedBrilhante = () => {
  return (
    <>
      <Helmet>
        <title>Pack Feed Brilhante | Templates para Instagram</title>
        <meta name="description" content="Pack Feed Brilhante - 100 Carrosséis e 50 Posts com Scripts prontos para transformar seu Instagram e aumentar suas vendas." />
      </Helmet>
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
