
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
