import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import ImageScannerFeature from "../components/ImageScannerFeature";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import FAQAndCTA from "../components/FAQAndCTA";
import ComparisonTable from "../components/ComparisonTable";
import { Analytics } from "@vercel/analytics/next";
import SavingGoalsSection from "../components/SavingGoalsSection";

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <Hero />
      <ImageScannerFeature />
      <ProblemSolution />
      <SavingGoalsSection />
      <Features />
      <Reviews />
      <ComparisonTable />
      <FAQAndCTA />
      <CallToAction />
      <Footer />
    </>
  );
}