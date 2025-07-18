import { Route, Routes } from "react-router-dom";
import PackFeedBrilhante from "./pages/PackFeedBrilhante";
import Home from "./pages/Home";
import Links from "./components/ArvoreLinks/Links";
import { HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/pack-feed-brilhante" element={ <PackFeedBrilhante/> } />
        <Route path="/links" element={ <Links/> } />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
