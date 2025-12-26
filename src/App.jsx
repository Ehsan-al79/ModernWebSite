import Navbar from "./Projects/project modernWebsite/components/Navbar";
import Hero from "./Projects/project modernWebsite/components/Hero";
import Features from "./Projects/project modernWebsite/components/Features";
import Pricing from "./Projects/project modernWebsite/components/Pricing";
import Testimonials from "./Projects/project modernWebsite/components/Testimonials";
import Footer from "./Projects/project modernWebsite/components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
