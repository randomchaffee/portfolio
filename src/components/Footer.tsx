import { useEffect, useState } from "react";
import { BackgroundCanvas } from "./ui/BackgroundCanvas";

const STORAGE_KEY = "bg-art-enabled";

const Footer = () => {
    const [showBg, setShowBg] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem(STORAGE_KEY) === "true";
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, String(showBg));
    }, [showBg]);

    return (
        <>
            <BackgroundCanvas isArtOn={showBg} />

            <footer className="opacity-80 bg-emerald-950/10 border-t border-zinc-800 text-zinc-100 px-4 md:px-16 lg:px-28">
                {/* contact info */}
                <div className="flex flex-row py-6">
                    <p>{"Contact me "}</p>
                    <p className="pl-5">{">"}</p>
                    <a 
                        href="https://discord.com/users/348028456723939329" 
                        className="group relative opacity-70 font-light transition-all duration-150 ml-8"
                    >
                        <span>Discord</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 rounded-xl bg-white transition-all duration-150 group-hover:w-full" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/evangregorio/" 
                        className="group relative opacity-70 font-light transition-all duration-150 ml-8"
                    >
                        <span>LinkedIn</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 rounded-xl bg-white transition-all duration-150 group-hover:w-full" />
                    </a>
                    <a 
                        href="mailto:evanngregorio@gmail.com" 
                        className="group relative opacity-70 font-light transition-all duration-150 ml-8"
                    >
                        <span>Email</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 rounded-xl bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>

                {/* rights and fluff */}
                <div className="flex flex-col pb-8 items-center md:items-baseline">
                    <span>© 2026 randomchaffee</span>
                    <span>This site is work in progress.</span>
                    <span>
                        <button 
                            onClick={() => setShowBg(v => !v)}
                            className="hover:text-white hover:underline transition-all duration-300 cursor-pointer"
                        >
                            Toggle background ({showBg ? "on" : "off"})
                        </button>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;