import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import ProblemSection from "@/components/ProblemSection";
import DifferenceSection from "@/components/DifferenceSection";
import ManifestoSection from "@/components/ManifestoSection";
import FounderSection from "@/components/FounderSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden scroll-smooth">
      {/* Background Grid Texture */}
      <div className="fixed inset-0 bg-grid opacity-40 pointer-events-none z-0" />

      <Navbar />
      <HeroSection />
      
      <hr className="border-foreground/10 mx-6 relative z-10" />
      
      <ProofSection />
      <ProblemSection />
      <DifferenceSection />
      <ManifestoSection />
      <FounderSection />
      <OpenSourceSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
