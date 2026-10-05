import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import GenreTicker from "./components/GenreTicker";
import About from "./components/About";
import Services from "./components/Services";
import Catalogue from "./components/Catalogue";
import Steps from "./components/Steps";
import Contact from "./components/Contact";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <span
        className="block h-full origin-left rounded-r-full bg-gradient-to-r from-brand-800 to-gold-500 transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink antialiased">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <GenreTicker />
        <TrustStrip />
        <About />
        <Services />
        <Catalogue />
        <Steps />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
