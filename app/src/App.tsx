import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import FieldNotes from "./pages/FieldNotes";
import NotePage from "./pages/NotePage";
import Now from "./pages/Now";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/notes" element={<FieldNotes />} />
        <Route path="/notes/:slug" element={<NotePage />} />
        <Route path="/field-notes/:slug" element={<NotePage />} />
        <Route path="/now" element={<Now />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;