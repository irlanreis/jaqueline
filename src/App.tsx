import { Route, Routes } from "react-router-dom";
import PackFeedBrilhante from "./pages/PackFeedBrilhante";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/pack-feed-brilhante" element={ <PackFeedBrilhante/> } />
    </Routes>
  );
}

export default App;
