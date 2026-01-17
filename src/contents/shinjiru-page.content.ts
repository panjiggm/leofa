import { t, type Dictionary } from "intlayer";

const shinjiruPageContent = {
  key: "shinjiru-page",
  content: {
    title: t({
      en: "Shinjiru | Premium Quality Sleep Solutions - Leofa",
      id: "Shinjiru | Solusi Tidur Berkualitas Premium - Leofa",
      zh: "Shinjiru | 优质睡眠解决方案 - Leofa",
    }),
    description: t({
      en: "Shinjiru offers premium quality sleep solutions including mattresses, pillows, and bedding accessories. Experience superior comfort with our high-standard foam products designed for Indonesian people.",
      id: "Shinjiru menawarkan solusi tidur berkualitas premium termasuk kasur, bantal, dan aksesori tempat tidur. Rasakan kenyamanan superior dengan produk busa standar tinggi kami yang dirancang untuk masyarakat Indonesia.",
      zh: "Shinjiru提供优质睡眠解决方案，包括床垫、枕头和床上用品配件。体验我们为印尼人民设计的高标准泡沫产品带来的卓越舒适感。",
    }),
    hero: {
      badge: t({
        en: "Premium Sleep Products",
        id: "Produk Tidur Premium",
        zh: "优质睡眠产品",
      }),
      heading: t({
        en: "Quality Sleep for Better Living",
        id: "Tidur Berkualitas untuk Hidup Lebih Baik",
        zh: "优质睡眠，美好生活",
      }),
      subheading: t({
        en: "Shinjiru is a line of sleep equipment products including mattresses, pillows, and more to meet the sleep comfort needs of Indonesian people with high quality standards. Experience superior comfort every night.",
        id: "Shinjiru adalah lini produk perlengkapan tidur yang mencakup kasur, bantal, dan lainnya untuk menjawab kebutuhan kenyamanan tidur masyarakat Indonesia dengan standar mutu tinggi. Rasakan kenyamanan superior setiap malam.",
        zh: "Shinjiru是一系列睡眠设备产品，包括床垫、枕头等，以高质量标准满足印尼人民的睡眠舒适需求。每晚体验卓越舒适。",
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
        comfort: t({
          en: "Comfort",
          id: "Kenyamanan",
          zh: "舒适",
        }),
        quality: t({
          en: "High Quality",
          id: "Kualitas Tinggi",
          zh: "高品质",
        }),
        durability: t({
          en: "Durability",
          id: "Ketahanan",
          zh: "耐用",
        }),
      },
      images: {
        mattress: t({
          en: "Mattress",
          id: "Kasur",
          zh: "床垫",
        }),
        pillow: t({
          en: "Pillow",
          id: "Bantal",
          zh: "枕头",
        }),
        bedding: t({
          en: "Bedding",
          id: "Perlengkapan Tidur",
          zh: "床上用品",
        }),
      },
    },
  },
} satisfies Dictionary;

export default shinjiruPageContent;
