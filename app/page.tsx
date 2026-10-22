import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Projects from "@/src/components/Projects";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-brand-white text-brand-navy font-display selection:bg-brand-orange/20">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
