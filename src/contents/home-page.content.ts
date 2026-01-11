import { t, type Dictionary } from "intlayer";

const homePageContent = {
  key: "home-page",
  content: {
      title: t({
        en: "Leofa | Innovative and Reliable Foam Solutions for Your Industry Needs",
        id: "Leofa | Solusi Inovatif dan Terpercaya untuk Kebutuhan Busa Industri Anda",
        zh: "Leofa | 创新与可靠的泡沫解决方案满足您的工业需求",
      }),
    description: t({
      en: "Leofa is a trusted manufacturer of high-quality foam materials with customizable density options for mattress, sofa, automotive detailing, and fashion industries. Experience superior comfort and durability.",
      id: "Leofa adalah produsen busa berkualitas tinggi dengan pilihan densitas yang dapat disesuaikan untuk industri kasur, sofa, detailing automotif, dan fashion. Rasakan kenyamanan dan ketahanan terbaik.",
      zh: "Leofa 是一家值得信赖的高品质泡沫材料制造商，具有可定制的密度选项，适用于床垫、沙发、汽车美容和时尚行业。体验卓越的舒适性和耐用性。",
    }),
      hero: {
        badge: t({
          en: "Trusted Quality Foam Manufacturer",
          id: "Produsen Busa Berkualitas Terpercaya",
          zh: "值得信赖的优质泡沫制造商",
        }),
        heading: t({
          en: "Premium Quality Foam Solutions for Your Industry Needs",
          id: "Solusi Busa Berkualitas Premium untuk Kebutuhan Industri Anda",
          zh: "满足您行业需求的高品质泡沫解决方案",
        }),
        description: t({
          en: "LEOFA provides high-quality foam materials with customizable density options for mattress, sofa, automotive detailing, and fashion industries. Experience superior comfort and durability.",
          id: "LEOFA menyediakan bahan busa berkualitas tinggi dengan pilihan densitas yang dapat disesuaikan untuk industri kasur, sofa, detailing automotif, dan fashion. Rasakan kenyamanan dan ketahanan terbaik.",
          zh: "LEOFA 提供高品质泡沫材料，具有可定制的密度选项，适用于床垫、沙发、汽车美容和时尚行业。体验卓越的舒适性和耐用性。",
        }),
        ctaButton: t({
          en: "Contact Us",
          id: "Hubungi Kami",
          zh: "联系我们",
        }),
      }
  },
} satisfies Dictionary;

export default homePageContent;
