import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import FAQAndCTA from "./components/FAQAndCTA";
import ComparisonTable from "./components/ComparisonTable";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <Reviews />
      <ComparisonTable />
      <FAQAndCTA />
      <CallToAction />
      <Footer />
    </>
  );
}
