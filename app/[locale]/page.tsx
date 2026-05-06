import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import FAQAndCTA from "../components/FAQAndCTA";
import ComparisonTable from "../components/ComparisonTable";
import Pricing from "../components/Pricing";
import { Analytics } from "@vercel/analytics/next";
import SavingGoalsSection from "../components/SavingGoalsSection";

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <Hero />
      <ProblemSolution />
      <SavingGoalsSection />
      <Features />
      <Reviews />
      <ComparisonTable />
      <Pricing />
      <FAQAndCTA />
      <CallToAction />
      <Footer />
    </>
  );
}