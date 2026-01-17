import { t, type Dictionary } from "intlayer";

const project9PageContent = {
  key: "project9-page",
  content: {
    title: t({
      en: "Project9 | Professional Automotive Detailing Foam Solutions - Leofa",
      id: "Project9 | Solusi Busa Detailing Otomotif Profesional - Leofa",
      zh: "Project9 | 专业汽车美容泡沫解决方案 - Leofa",
    }),
    description: t({
      en: "Project9 offers professional automotive detailing foam solutions with precision and durability. Our polishing pads and foam materials deliver efficient and optimal results for car care professionals.",
      id: "Project9 menawarkan solusi busa detailing otomotif profesional dengan presisi dan ketahanan. Pad poles dan bahan busa kami memberikan hasil yang efisien dan optimal untuk profesional perawatan mobil.",
      zh: "Project9提供精确耐用的专业汽车美容泡沫解决方案。我们的抛光垫和泡沫材料为汽车护理专业人士提供高效优质的效果。",
    }),
    hero: {
      badge: t({
        en: "Professional Automotive Detailing",
        id: "Detailing Otomotif Profesional",
        zh: "专业汽车美容",
      }),
      heading: t({
        en: "Precision Foam Solutions for Professional Detailing",
        id: "Solusi Busa Presisi untuk Detailing Profesional",
        zh: "专业美容精密泡沫解决方案",
      }),
      subheading: t({
        en: "Designed for the automotive sector and professional detailing needs, Project9 products offer precision and durability for efficient and optimal polishing results. Trust the quality that professionals choose.",
        id: "Dirancang untuk kebutuhan sektor otomotif dan detailing profesional, produk Project9 menawarkan presisi dan ketahanan untuk hasil poles yang efisien dan optimal. Percayakan pada kualitas yang dipilih para profesional.",
        zh: "专为汽车行业和专业美容需求设计，Project9产品提供精确性和耐用性，实现高效和最佳的抛光效果。信赖专业人士选择的品质。",
      }),
      buttons: {
        contactUs: t({
          en: "Contact Us",
          id: "Hubungi Kami",
          zh: "联系我们",
        }),
        viewProducts: t({
          en: "View Products",
          id: "Lihat Produk",
          zh: "查看产品",
        }),
      },
    },
    carousel: {
      cards: {
        precision: t({
          en: "Precision",
          id: "Presisi",
          zh: "精准",
        }),
        durability: t({
          en: "Durability",
          id: "Ketahanan",
          zh: "耐用",
        }),
        professional: t({
          en: "Professional Grade",
          id: "Standar Profesional",
          zh: "专业级",
        }),
      },
      images: {
        polishing: t({
          en: "Polishing Pads",
          id: "Pad Poles",
          zh: "抛光垫",
        }),
        detailing: t({
          en: "Detailing Tools",
          id: "Alat Detailing",
          zh: "美容工具",
        }),
        finishing: t({
          en: "Finishing Foam",
          id: "Busa Finishing",
          zh: "修整泡沫",
        }),
      },
    },
  },
} satisfies Dictionary;

export default project9PageContent;
