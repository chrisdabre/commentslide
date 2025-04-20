import Features from "@/components/landing-page/Features";
import Footer from "@/components/shared-ui/Footer";
import Header from "@/components/shared-ui/Header";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import LowerCta from "@/components/landing-page/LowerCta";


export default function Home() {
  return (
    <main >
      <Header />
        <div className="flex-1">
          
          <HeroSection />

          <Features />

          <HowItWorks />

          <LowerCta />
        </div>
      <Footer />
    </main>
  );
}
