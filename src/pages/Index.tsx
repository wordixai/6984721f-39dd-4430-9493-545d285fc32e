import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeatureDetails } from "@/components/FeatureDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <FeatureDetails />
    </div>
  );
};

export default Index;