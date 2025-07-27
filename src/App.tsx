import {
  Navbar,
  HeroSection,
  AboutSection,
  HowItWorks,
  AdvantagesSection,
  // SpotlightSection,
  FAQSection,
  FooterSection,
  BottomFooter,
  // Testing,
} from "./components";

export default function App() {
  return (
    <div className="relative bg-[#101010] lg:pt-5 pt-3">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <div className="bg-[#2D2214]">
        <HowItWorks />
      </div>

      <AdvantagesSection />
      {/* <SpotlightSection /> */}
      <div className="bg-[#101010]">
      <FAQSection />
      <FooterSection />
      </div>

      <BottomFooter />
    </div>
  );
}
