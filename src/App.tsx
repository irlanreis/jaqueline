import { Route, Routes } from "react-router-dom";
import PackFeedBrilhante from "./pages/PackFeedBrilhante";
import Home from "./pages/Home";
import Links from "./components/ArvoreLinks/Links";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/pack-feed-brilhante" element={ <PackFeedBrilhante/> } />
      <Route path="/links" element={ <Links/> } />
    </Routes>
  );
}

export default App;
