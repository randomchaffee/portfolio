import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Work from "./pages/Work";

export default function App() {
  return (
    <div className="pt-24">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>

    <Footer />
    </div>
  )
}
