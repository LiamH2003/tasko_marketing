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
