import Destaques from "../components/Home-page/Destaques";
import Header from "../components/Home-page/Header";
import PageInitial from "../components/Home-page/PageInitial";
import SectionGrid from "../components/Home-page/SectionGrid";

function Home() {
  return (
    <>
      <Header />
      <PageInitial />
      <Destaques />
      <SectionGrid />
    </>
  )
}

export default Home;