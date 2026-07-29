import { useState, useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
}

const listItems: NavLink[] = [
  {label: "Work", href: "#"},
  {label: "About", href: "#"},
  {label: "Blog", href: "#"},
  {label: "Contact", href: "#"},
];

const Navbar = () => {
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

  return (
    // w-full bg-zinc-900 text-white
    <header 
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all
        duration-300 ease-in-out ${
          isScrolled
            ? "bg-zinc-900/60 backdrop-blur-md border-b border-white/10 shadow-lg py-0"
            : "bg-zinc-900 py-0"
        }`}
    >
      <nav 
        aria-label="Main Navigation"
        className="hidden md:flex items-center justify-between py-5 px-10 transition-all duration-300"
      >
        {/* left side */}
        <div className="flex flex-col text-lg font-bold leading-tight">
          <a 
            href="#"
            className="flex flex-col text-lg font-bold leading-tight"
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
      </nav>
    </header>
  )
}

export default Navbar