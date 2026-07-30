import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BouncyBox from "./components/ui/BouncyBox"
import BouncingArrow from "./components/ui/BouncingArrow"

export default function App() {
  return (
    <div className="pt-24">
      <Navbar />
      <Hero />

      <BouncyBox className="flex flex-col items-center justify-center gap-6 p-5 mb-12 bg-zinc-900 text-zinc-100">
      {/* Quote Text */}
      <p className="text-base md:text-sm opacity-70 tracking-tighter text-center font-normal">
        Check out some of my stuff below. Site is still work-in-progress.
      </p>

      {/* Repeating Subtle Arrow */}
      <BouncingArrow size={20} color="#d4d4d8" bounceHeight={8} duration={1} />
    </BouncyBox>

    <Footer />
    </div>
  )
}
