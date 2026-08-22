import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Work from "./pages/Work";

export default function App() {
  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />

          {/* article routes */}
          <Route path="/blog/:slug" element={<BlogPost />}/>
        </Routes>
      </main>

    <Footer />
    </div>
  )
}
