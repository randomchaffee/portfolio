import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("bg-art-on", showBg);
  }, [showBg]);

  return (
    <div className="pt-24">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Blog />} />
        </Routes>
      </main>

    <Footer />
    <button onClick={() => setShowBg(v => !v)}>
        Toggle background
      </button>
    </div>
  )
}
