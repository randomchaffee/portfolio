import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const listItems: NavLink[] = [
  {label: "Blog", href: "/blog"},
];

const Navbar = () => {
  // ======= scroll-down effect section ========
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // effect toggle after 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // ===========================================

  // =========== hamburger dropdown section ===========
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  // ==================================================

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all
          duration-300 ease-in-out border-b ${
            isScrolled
              ? "backdrop-blur-md border-white/10 shadow-lg py-0"
              : "border-white/0 py-0"
          }`}
      >
        <nav 
          aria-label="Main Navigation"
          className="flex items-center justify-between pt-3 pb-3 px-10 transition-all duration-300"
        >
          {/* left side */}
          <div className="flex flex-col items-center md:items-baseline text-lg font-bold leading-tight">
            <a 
              href="/"
              className="flex flex-col text-sm md:text-lg md:py-0.5 font-bold leading-tight"
            >
              <span>Evan</span>
              <span>Gregorio</span>
            </a>
          </div>
          {/* desktop menu */}
          <ul className='hidden items-center gap-8 text-base font-medium md:flex'>
            {listItems.map((item) => (
              <li className='relative group cursor-pointer' 
              key={item.label}>
                <a 
                  href={item.href} 
                  className="cursor-pointer py-1 block"
                >
                  {item.label}
                </a>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 rounded-xl
              bg-white transition-all duration-300 group-hover:w-full'
                >
                </span>
              </li>
            ))}
          </ul>

          {/* hamburger (only appears on sm) */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* backdrop menu (appears from below) */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity
          duration-300 md:hidden 
          ${isOpen ? 'opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 text-white
            rounded-t-2xl border-t border-zinc-800 pt-6 pb-36 transition-transform duration-300
            ease-out md:hidden
            ${isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* top handle/grabber */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1.5 bg-zinc-700 rounded-full" />
          </div>

          {/* links */}
          <ul className='flex flex-col gap-4 text-lg font-medium'>
            {listItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={() => setIsOpen(false)} // close menu when link is clicked
                  className="block py-2 px-8 font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default Navbar