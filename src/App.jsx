import { useEffect } from "react";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { CompetitorComparisonSection } from "./components/CompetitorComparisonSection";
import { AppPromisesSection } from "./components/AppPromisesSection";
import { ProblemStatementSection } from "./components/ProblemStatementSection";
import { Footer } from "./components/Footer";
import { PricingSection } from "./components/PricingSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { Header } from "./components/Header";

export default function App() {
  useEffect(() => {
    const updateHeaderMargin = () => {
      const header = document.getElementById('main-header');
      if (header) {
        document.body.style.marginTop = `${header.offsetHeight}px`;
      }
    };

    updateHeaderMargin();
    window.addEventListener('resize', updateHeaderMargin);
    
    return () => window.removeEventListener('resize', updateHeaderMargin);
  }, []);

  return (
    <div className="bg-tasko-white200 w-full overflow-x-hidden">
      <Header />
      <div className="flex w-full relative flex-col">
        <HeroSection />
        <ProblemStatementSection />
        <IntroductionSection />
        <AppPromisesSection />
        <CompetitorComparisonSection />
        <PricingSection />
        <Footer />    
      </div>
    </div>
  );
}
