import { t, type Dictionary } from "intlayer";

const contactPageContent = {
  key: "contact-page",
  content: {
    title: t({
      en: "Contact Us | LEOFA - Get in Touch for Premium Foam Solutions",
      id: "Hubungi Kami | LEOFA - Konsultasi Solusi Busa Berkualitas Premium",
      zh: "联系我们 | LEOFA - 获取优质泡沫解决方案",
    }),
    description: t({
      en: "Contact LEOFA for high-quality foam solutions. Our team is ready to help you find the perfect products for your mattress, sofa, automotive detailing, and fashion industry needs.",
      id: "Hubungi LEOFA untuk solusi busa berkualitas tinggi. Tim kami siap membantu Anda menemukan produk yang sempurna untuk kebutuhan industri kasur, sofa, detailing automotif, dan fashion.",
      zh: "联系LEOFA获取高品质泡沫解决方案。我们的团队随时准备帮助您找到适合床垫、沙发、汽车美容和时尚行业需求的完美产品。",
    }),
    hero: {
      badge: t({
        en: "Get in Touch",
        id: "Hubungi Kami",
        zh: "联系我们",
      }),
      heading: t({
        en: "Let's Discuss Your Foam Solutions",
        id: "Mari Diskusikan Solusi Busa Anda",
        zh: "让我们讨论您的泡沫解决方案",
      }),
      subheading: t({
        en: "Whether you need foam for mattresses, sofas, automotive detailing, or fashion applications, our team is ready to provide customized solutions for your industry needs.",
        id: "Apakah Anda membutuhkan busa untuk kasur, sofa, detailing automotif, atau aplikasi fashion, tim kami siap memberikan solusi khusus untuk kebutuhan industri Anda.",
        zh: "无论您需要床垫、沙发、汽车美容还是时尚应用的泡沫，我们的团队都准备为您的行业需求提供定制解决方案。",
      }),
    },
    companyInfo: {
      name: t({
        en: "PT. LEOFA INTEGRITAS PERKASA",
        id: "PT. LEOFA INTEGRITAS PERKASA",
        zh: "PT. LEOFA INTEGRITAS PERKASA",
      }),
      tagline: t({
        en: "Trusted Quality Foam Manufacturer",
        id: "Produsen Busa Berkualitas Terpercaya",
        zh: "值得信赖的优质泡沫制造商",
      }),
      availability: t({
        en: "Ready to Serve You",
        id: "Siap Melayani Anda",
        zh: "随时为您服务",
      }),
    },
    form: {
      name: {
        label: t({
          en: "Full Name",
          id: "Nama Lengkap",
          zh: "全名",
        }),
        placeholder: t({
          en: "Enter your full name...",
          id: "Masukkan nama lengkap Anda...",
          zh: "输入您的全名...",
        }),
      },
      email: {
        label: t({
          en: "Email Address",
          id: "Alamat Email",
          zh: "电子邮件地址",
        }),
        placeholder: t({
          en: "Enter your email address...",
          id: "Masukkan alamat email Anda...",
          zh: "输入您的电子邮件地址...",
        }),
      },
      company: {
        label: t({
          en: "Company Name (Optional)",
          id: "Nama Perusahaan (Opsional)",
          zh: "公司名称（可选）",
        }),
        placeholder: t({
          en: "Enter your company name...",
          id: "Masukkan nama perusahaan Anda...",
          zh: "输入您的公司名称...",
        }),
      },
      phone: {
        label: t({
          en: "Phone Number",
          id: "Nomor Telepon",
          zh: "电话号码",
        }),
        placeholder: t({
          en: "Enter your phone number...",
          id: "Masukkan nomor telepon Anda...",
          zh: "输入您的电话号码...",
        }),
      },
      message: {
        label: t({
          en: "Your Message",
          id: "Pesan Anda",
          zh: "您的留言",
        }),
        placeholder: t({
          en: "Tell us about your foam requirements, quantity needed, or any questions...",
          id: "Ceritakan tentang kebutuhan busa Anda, jumlah yang dibutuhkan, atau pertanyaan lainnya...",
          zh: "告诉我们您的泡沫需求、所需数量或任何问题...",
        }),
      },
      industries: {
        label: t({
          en: "Industry / Application",
          id: "Industri / Aplikasi",
          zh: "行业/应用",
        }),
        options: {
          mattress: t({
            en: "Mattress Manufacturing",
            id: "Manufaktur Kasur",
            zh: "床垫制造",
          }),
          sofa: t({
            en: "Sofa & Furniture",
            id: "Sofa & Furniture",
            zh: "沙发和家具",
          }),
          automotive: t({
            en: "Automotive Detailing",
            id: "Detailing Automotif",
            zh: "汽车美容",
          }),
          fashion: t({
            en: "Fashion & Apparel",
            id: "Fashion & Apparel",
            zh: "时尚和服装",
          }),
        },
      },
      submit: t({
        en: "Send Message",
        id: "Kirim Pesan",
        zh: "发送消息",
      }),
    },
    partners: {
      title: t({
        en: "Trusted by Industry Leaders",
        id: "Dipercaya oleh Pemimpin Industri",
        zh: "受到行业领导者的信赖",
      }),
    },
    social: {
      facebook: t({
        en: "Facebook",
        id: "Facebook",
        zh: "Facebook",
      }),
      instagram: t({
        en: "Instagram",
        id: "Instagram",
        zh: "Instagram",
      }),
      tiktok: t({
        en: "TikTok",
        id: "TikTok",
        zh: "TikTok",
      }),
    },
  },
} satisfies Dictionary;

export default contactPageContent;
