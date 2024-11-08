import Destaques from "../components/Home-page/Destaques";
import Feedbacks from "../components/Home-page/Feedbacks";
import Header from "../components/Home-page/Header";
import PageInitial from "../components/Home-page/PageInitial";
import SectionGrid from "../components/Home-page/SectionGrid";
import Footer from "../components/packFeedfBrilhante/Footer";

function Home() {
  return (
    <>
      <Header />
      <PageInitial />
      <Destaques />
      <SectionGrid />
      <Feedbacks />
      <Footer />
    </>
  )
}

export default Home;