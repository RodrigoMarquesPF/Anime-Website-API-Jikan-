import Popular from "./Components/Popular";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Homepage from "./Components/Homepage";
import Gallery from "./Components/Gallery";
//import { useGlobalContext } from "./context/global"

function App() {
  /*const global =useGlobalContext()
  console.log(global)*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
