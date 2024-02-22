import Popular from "./Components/Popular";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
//import { useGlobalContext } from "./context/global"

function App() {
  /*const global =useGlobalContext()
  console.log(global)*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
