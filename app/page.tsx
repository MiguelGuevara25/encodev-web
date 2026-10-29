import AiLab from "@/src/components/AiLab";
import CTA from "@/src/components/CTA";
import Faq from "@/src/components/Faq";
import Footer from "@/src/components/Footer";
import ContactForm from "@/src/components/ContactForm";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Packages from "@/src/components/Packages";
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
      <AiLab />
      {/* <Packages /> */}
      <Faq />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  );
}
