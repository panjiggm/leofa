import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/hero";
import Header from "@/components/hero/header";

export const Route = createFileRoute("/")({ component: App });

function App() {
return (
  <div className='overflow-x-hidden'>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className='flex flex-col pt-17.5'>
        <HeroSection />
      </main>
    </div>
);
}