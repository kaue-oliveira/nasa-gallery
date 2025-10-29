import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Random from "./pages/Random";
import About from "./pages/About";
import Earth from "./pages/Earth";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          {/* Página principal: Astronomy Picture of the Day */}
          <Route path="/" element={<Home />} />

          {/* Página de favoritos */}
          <Route path="/favorites" element={<Favorites />} />

          {/* Página de imagem aleatória */}
          <Route path="/random" element={<Random />} />

          {/* Página sobre o desafio */}
          <Route path="/about" element={<About />} />

          {/* Página de fotos aleatórias da Terra (EPIC) */}
          <Route path="/earth" element={<Earth />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
