import { Star } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800 shadow-lg flex items-center justify-between py-3 px-6 md:px-12 z-50">
      {/* Brand Logo & Name */}
      {/* <Link to="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
        <Star className="w-7 h-7 fill-current" />
        <span className="font-semibold text-xl">React Router</span>
      </Link> */}

      {/* Navigation Links */}
      <div className="flex items-center gap-3">
        <Link 
          to="/" 
          className="py-1.5 px-4 text-base font-medium text-white hover:text-slate-900 rounded-full hover:bg-slate-100 transition duration-200"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="py-1.5 px-4 text-base font-medium text-white hover:text-slate-900 rounded-full hover:bg-slate-100 transition duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
}