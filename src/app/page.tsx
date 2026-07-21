import Navigation from "@/components/Navigation";
import HeroSequence from "@/components/HeroSequence";
import Specifications from "@/components/Specifications";
import MacroPhotography from "@/components/MacroPhotography";
import Craftsmanship from "@/components/Craftsmanship";
import SecondarySequence from "@/components/SecondarySequence";
import TertiarySequence from "@/components/TertiarySequence";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <HeroSequence />
      <Specifications />
      <MacroPhotography />
      <Craftsmanship />
      <SecondarySequence />
      <TertiarySequence />
      <Footer />
    </main>
  );
}
