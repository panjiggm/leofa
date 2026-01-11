import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/hero";
import AboutUs from "@/components/about-us";
import MainProducts from "@/components/main-products";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";

export const Route = createFileRoute("/")({ component: App });

function App() {
return (
  <div className='overflow-x-hidden'>
    <main>
      <HeroSection />
      <AboutUs />
      <MainProducts />
      <CTA />
      <FAQ />
    </main>
  </div>
);
}