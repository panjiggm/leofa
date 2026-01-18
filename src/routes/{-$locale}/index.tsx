import { createFileRoute } from "@tanstack/react-router";
import { getIntlayer } from "intlayer";

// Components
import HeroSection from "@/components/hero";
import AboutUs from "@/components/about-us";
import MainProducts from "@/components/main-products";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import HotProducts from "@/components/hot-products";

export const Route = createFileRoute("/{-$locale}/")({
  component: App,
  head: ({ params }) => {
    const metaContent = getIntlayer("home-page", params.locale);
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://leofa.vercel.app";
    const ogImageUrl = `${siteUrl}/og-image.webp`;

    return {
      meta: [
        { title: metaContent.title },
        { name: "description", content: metaContent.description },
        // Open Graph tags
        { property: "og:title", content: metaContent.title },
        { property: "og:description", content: metaContent.description },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/webp" },
        { property: "og:url", content: `${siteUrl}/${params.locale}` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Leofa Integritas Perkasa" },
        { property: "og:locale", content: params.locale === "id" ? "id_ID" : params.locale === "zh" ? "zh_CN" : "en_US" },
        // Twitter Card tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaContent.title },
        { name: "twitter:description", content: metaContent.description },
        { name: "twitter:image", content: ogImageUrl },
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
      <HotProducts />
      <CTA />
      <Testimonials />
      <FAQ />
    </main>
  </div>
);
}