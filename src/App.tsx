import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

    <Footer />
    </div>
  )
}
