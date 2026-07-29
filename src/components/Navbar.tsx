import { useState } from "react";
import { Menu, Minimize2 } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const listItems: NavLink[] = [
  {label: "Home", href: "#"}
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className='bg-black/40 flex justify-between
      items-center gap-16 py-3 px-6 rounded-full backdrop-blur-md
      text-white shadow-lg border border-white/10
      hover:bg-black/50 transition-all duration-300 md:px-10
      '>
        {/* desktop menu */}
        <ul className='hidden items-center gap-8 text-lg md:flex'>
          {listItems.map((item) => (
            <li className='relative group cursor-pointer' 
            key={item.label}>
              <a href={item.href} className="cursor-pointer py-1 block">
                {item.label}
              </a>
              <span className='absolute left-0
              -bottom-1.25 w-0 h-1 rounded-xl
              bg-linear-to-r from-blue-500
              to-green-500 transition-all
              duration-300 group-hover:w-full'>
              </span>
            </li>
          ))}
        </ul>

        {/* contact button (desktop) */}
        <a href="#contact" className="hidden md:inline-block bg-linear-to-r
        from-blue-500 to-green-500 py-1 px-6
        rounded-3xl shadow-2xl text-white text-lg
        font-semibold hover:from-blue-600 hover:to-green-500
        hover:shadow-green-500 shadow-blue-500">
          Contact
        </a>

        {/* mobile menu toggle button */}
        <div className="flex w-full items-center justify-between
        md:hidden">
          <span className="font-bold text-lg px-4">
            Menu
          </span>
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle Navigation Menu" 
            className="p-1 focus:outline-none transition-transform duration-200
            active:scale-90"
          >
            {isOpen ? (
              // minimize icon
              <Minimize2 className="transition-all duration-200"/>
            ) : (
              <Menu className="transition-all duration-200"/>
            )}
          </button>
        </div>
      </div>

      {/* mobile dropdown drawer */}
      { isOpen && (
        <div className="mt-3 flex flex-col gap-4 rounded-3xl
        border border-white/10 bg-black/60 p-6 text-white
        backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 text-center text-lgm">
            {listItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={() => setIsOpen(false)} 
                  className="block py-1 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 block text-center rounded-3xl
            bg-linear-to-r from-blue-500 to-green-500 py-2 px-6
            font-semibold text-white shadow-md"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar