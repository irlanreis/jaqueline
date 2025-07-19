import { Route, Routes } from "react-router-dom";
import PackFeedBrilhante from "./pages/PackFeedBrilhante";
import Home from "./pages/Home";
import Links from "./components/ArvoreLinks/Links";
import { HelmetProvider } from "react-helmet-async";
import Sobre from "./pages/Sobre";
import Portfolio from "./pages/Portfolio";
import Contato from "./pages/Contato";


function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/pack-feed-brilhante" element={ <PackFeedBrilhante/> } />
        <Route path="/links" element={ <Links/> } />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/contato" element={ <Contato/> } />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
