import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Media from "./components/Media";
// import Footer from "./shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Compo from "./Compo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Compo />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
