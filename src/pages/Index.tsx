import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestGrid from "@/components/TestGrid";
import AnalyticsSection from "@/components/AnalyticsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TestGrid />
      <AnalyticsSection />
      <Footer />
    </div>
  );
};

export default Index;
