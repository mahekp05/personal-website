import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Thoughts from "./pages/Thoughts";
import ThoughtPage from "./pages/ThoughtPage";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/notes" element={<Thoughts />} />
        <Route path="/notes/:slug" element={<ThoughtPage />} />
        <Route path="/field-notes/:slug" element={<ThoughtPage />} />
        <Route path="/now" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;