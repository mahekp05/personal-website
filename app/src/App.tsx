import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Thoughts from "./pages/Thoughts";
import ThoughtPage from "./pages/ThoughtPage";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/now" element={<Navigate to="/projects" replace />} />
        <Route path="/notes" element={<Thoughts />} />
        <Route path="/notes/:slug" element={<ThoughtPage />} />
        <Route path="/field-notes/:slug" element={<ThoughtPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;