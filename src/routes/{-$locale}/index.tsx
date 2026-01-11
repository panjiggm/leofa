import { createFileRoute } from "@tanstack/react-router";
import { getIntlayer } from "intlayer";

// Components
import HeroSection from "@/components/hero";
import AboutUs from "@/components/about-us";
import MainProducts from "@/components/main-products";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";

export const Route = createFileRoute("/{-$locale}/")({
  component: App,
  head: ({ params }) => {
    const metaContent = getIntlayer("home-page", params.locale);

    return {
      meta: [
        { title: metaContent.title },
        { description: metaContent.description },
      ]
    }
  }
});

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