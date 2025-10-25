import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import UserPathways from "@/components/UserPathways";
import AIFeatures from "@/components/AIFeatures";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problems />
      <UserPathways />
      <AIFeatures />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
