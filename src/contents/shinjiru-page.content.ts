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
        en: "Shinjiru",
        id: "Shinjiru",
        zh: "Shinjiru",
      }),
      heading: t({
        en: "Driven by Purpose, Powered by People",
        id: "Didorong oleh Tujuan, Didukung oleh Manusia",
        zh: "以目标为驱动，以人为动力",
      }),
      subheading: t({
        en: "Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced challenges, celebrated victories, and woven a narrative of growth and success.",
        id: "Kisah pencapaian kami adalah bukti kuat kerja sama tim dan ketekunan. Bersatu, kami telah menghadapi tantangan, merayakan kemenangan, dan merangkai narasi pertumbuhan dan kesuksesan.",
        zh: "我们的成就故事充分证明了团队合作和毅力的重要性。团结一致，我们面对挑战、庆祝胜利，并编织成长与成功的故事。",
      }),
      buttons: {
        readMore: t({
          en: "Read more",
          id: "Selengkapnya",
          zh: "阅读更多",
        }),
        freeTrial: t({
          en: "Free trial",
          id: "Uji coba gratis",
          zh: "免费试用",
        }),
      },
    },
    carousel: {
      items: {
        approach: t({
          en: "Approach",
          id: "Pendekatan",
          zh: "方法",
        }),
        codeAgency: t({
          en: "Code Agency",
          id: "Agensi Kode",
          zh: "代码机构",
        }),
        marketingStrategy: t({
          en: "Marketing Strategy",
          id: "Strategi Pemasaran",
          zh: "营销策略",
        }),
        development: t({
          en: "Development",
          id: "Pengembangan",
          zh: "开发",
        }),
        uiuxDesigner: t({
          en: "UI/UX Designer",
          id: "Desainer UI/UX",
          zh: "UI/UX设计师",
        }),
        marketing: t({
          en: "Marketing",
          id: "Pemasaran",
          zh: "营销",
        }),
      },
    },
  },
} satisfies Dictionary;

export default shinjiruPageContent;
