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
    about: {
      badge: t({
        en: "About Shinjiru",
        id: "Tentang Shinjiru",
        zh: "关于Shinjiru",
      }),
      heading: t({
        en: "Comfort That Indonesian Families Trust",
        id: "Kenyamanan yang Dipercaya Keluarga Indonesia",
        zh: "印尼家庭信赖的舒适感",
      }),
      description: t({
        en: "Shinjiru is a sub-brand of LEOFA dedicated to providing premium sleep solutions for Indonesian families. Our mattresses, pillows, and bedding accessories are crafted with high-quality foam materials to deliver superior comfort and support for a restful night's sleep.",
        id: "Shinjiru adalah sub-brand dari LEOFA yang didedikasikan untuk menyediakan solusi tidur premium bagi keluarga Indonesia. Kasur, bantal, dan aksesori tempat tidur kami dibuat dengan bahan busa berkualitas tinggi untuk memberikan kenyamanan dan dukungan superior untuk tidur malam yang nyenyak.",
        zh: "Shinjiru是LEOFA旗下致力于为印尼家庭提供优质睡眠解决方案的子品牌。我们的床垫、枕头和床上用品采用优质泡沫材料制作，为安稳的夜间睡眠提供卓越的舒适性和支撑力。",
      }),
      readMore: t({
        en: "Learn More",
        id: "Pelajari Lebih Lanjut",
        zh: "了解更多",
      }),
      stats: {
        experience: {
          title: t({
            en: "10+ Years",
            id: "10+ Tahun",
            zh: "10+年",
          }),
          description: t({
            en: "Expertise in premium sleep product manufacturing.",
            id: "Keahlian dalam manufaktur produk tidur premium.",
            zh: "优质睡眠产品制造专业知识。",
          }),
        },
        products: {
          title: t({
            en: "30+ Products",
            id: "30+ Produk",
            zh: "30+产品",
          }),
          description: t({
            en: "Complete range of mattresses, pillows, and bedding.",
            id: "Rangkaian lengkap kasur, bantal, dan perlengkapan tidur.",
            zh: "床垫、枕头和床上用品的完整系列。",
          }),
        },
        customers: {
          title: t({
            en: "10,000+ Customers",
            id: "10.000+ Pelanggan",
            zh: "10,000+客户",
          }),
          description: t({
            en: "Indonesian families enjoying quality sleep.",
            id: "Keluarga Indonesia menikmati tidur berkualitas.",
            zh: "印尼家庭享受优质睡眠。",
          }),
        },
        satisfaction: {
          title: t({
            en: "95% Satisfaction",
            id: "95% Kepuasan",
            zh: "95%满意度",
          }),
          description: t({
            en: "Customer satisfaction with our sleep products.",
            id: "Kepuasan pelanggan dengan produk tidur kami.",
            zh: "客户对我们睡眠产品的满意度。",
          }),
        },
      },
      features: {
        whyChoose: {
          title: t({
            en: "Why Choose Shinjiru?",
            id: "Mengapa Memilih Shinjiru?",
            zh: "为什么选择Shinjiru？",
          }),
          description: t({
            en: "Premium foam materials designed for optimal comfort and support, meeting the sleep needs of Indonesian families.",
            id: "Bahan busa premium yang dirancang untuk kenyamanan dan dukungan optimal, memenuhi kebutuhan tidur keluarga Indonesia.",
            zh: "专为最佳舒适度和支撑力设计的优质泡沫材料，满足印尼家庭的睡眠需求。",
          }),
        },
        quality: {
          title: t({
            en: "High Quality Standards",
            id: "Standar Kualitas Tinggi",
            zh: "高质量标准",
          }),
          description: t({
            en: "Every product meets strict quality standards to ensure long-lasting comfort and durability.",
            id: "Setiap produk memenuhi standar kualitas ketat untuk memastikan kenyamanan dan ketahanan jangka panjang.",
            zh: "每款产品均符合严格的质量标准，确保持久的舒适性和耐用性。",
          }),
        },
        comfort: {
          title: t({
            en: "Superior Comfort",
            id: "Kenyamanan Superior",
            zh: "卓越舒适",
          }),
          description: t({
            en: "Engineered to provide the perfect balance of softness and support for restful sleep.",
            id: "Dirancang untuk memberikan keseimbangan sempurna antara kelembutan dan dukungan untuk tidur nyenyak.",
            zh: "精心设计，提供柔软度和支撑力的完美平衡，带来安稳的睡眠。",
          }),
        },
      },
    },
  },
} satisfies Dictionary;

export default shinjiruPageContent;
