import Destaques from "../components/Home-page/Destaques";
import Footer from "../components/Home-page/Footer";
import Header from "../components/Home-page/Header";
import PageInitial from "../components/Home-page/PageInitial";

function Home() {
  return (
    <>
      <Header />
      <PageInitial />
      <Destaques />
      <Footer />
    </>
  )
}

export default Home;