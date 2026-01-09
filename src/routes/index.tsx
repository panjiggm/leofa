import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/hero";
import Header from "@/components/hero/header";
import AboutUs from "@/components/about-us";

export const Route = createFileRoute("/")({ component: App });

function App() {
return (
  <div className='overflow-x-hidden'>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutUs />
      </main>
    </div>
);
}