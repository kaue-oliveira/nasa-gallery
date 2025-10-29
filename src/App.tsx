import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rovers from "./pages/Rovers";
import Favorites from "./pages/Favorites";
// import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rovers" element={<Rovers />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
