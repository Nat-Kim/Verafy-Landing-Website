import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import DataSecurity from "@/components/DataSecurity";
import WhyVerafy from "@/components/WhyVerafy";
import WaitlistCTA from "@/components/WaitlistCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <DataSecurity />
        <WhyVerafy />
        <WaitlistCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
