import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import FieldNotes from "./pages/FieldNotes";
import Now from "./pages/Now";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<FieldNotes />} />
        <Route path="/now" element={<Now />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;