import type { ServiceSlug } from "./content";

export type Quote = {
  name: { en: string; ar: string };
  company: { en: string; ar: string };
  content: { en: string; ar: string };
  categories: ServiceSlug[];
};

export const QUOTES: Quote[] = [
  {
    name: { en: "Yacine Bouchareb", ar: "ياسين بوشارب" },
    company: { en: "Ooredoo Algérie", ar: "أوريدو الجزائر" },
    content: {
      en: "DORWA's campaign film hit every brief — and a few we didn't write. The team gets the brand and the audience.",
      ar: "فيلم الحملة الذي أنجزه ذروة استوفى كل ما طلبناه — وأشياء لم نطلبها أصلاً. الفريق يفهم العلامة والجمهور.",
    },
    categories: ["video", "social"],
  },
  {
    name: { en: "Lina Kacem", ar: "لينا قاسم" },
    company: { en: "MCA Training", ar: "MCA للتدريب" },
    content: {
      en: "Cinematic, fast, and on budget. Our training-centre film is now the first thing prospects see.",
      ar: "سينمائي، سريع، وفي حدود الميزانية. فيلم مركزنا أصبح أول ما يشاهده العملاء المحتملون.",
    },
    categories: ["video"],
  },
  {
    name: { en: "Mehdi Bensalah", ar: "مهدي بن صالح" },
    company: { en: "Hotel Bay Diab", ar: "فندق باي دياب" },
    content: {
      en: "The 3D walkthrough they delivered let us pre-sell rooms before we'd finished the build. Game-changer.",
      ar: "الجولة الثلاثية الأبعاد التي قدّموها أتاحت لنا حجز الغرف قبل اكتمال البناء. غيّرت كل شيء.",
    },
    categories: ["3d", "video"],
  },
  {
    name: { en: "Sara Mansouri", ar: "سارة منصوري" },
    company: { en: "Cosider", ar: "كوسيدار" },
    content: {
      en: "Professional from the kickoff call to delivery. The corporate film is honest, modern, and reflects who we actually are.",
      ar: "احترافيون من أول اجتماع إلى التسليم. الفيلم المؤسسي صادق وحديث ويعكسنا فعلاً.",
    },
    categories: ["video"],
  },
  {
    name: { en: "Karim Hadj", ar: "كريم حاج" },
    company: { en: "Alscif", ar: "السكيف" },
    content: {
      en: "Our rebrand finally looks like 2026. Logo, colour system, and the launch campaign all came out of one team — no agency ping-pong.",
      ar: "هويتنا الجديدة تليق بـ 2026 أخيراً. الشعار ونظام الألوان وحملة الإطلاق من فريق واحد — دون أي تذبذب بين الوكالات.",
    },
    categories: ["design", "social"],
  },
  {
    name: { en: "Imane Belkacem", ar: "إيمان بلقاسم" },
    company: { en: "ProFert", ar: "بروفرت" },
    content: {
      en: "The product 3Ds let our sales team show every variant in 60 seconds. Conversions on our top SKU jumped meaningfully.",
      ar: "الفيديوهات ثلاثية الأبعاد للمنتج مكّنت فريق المبيعات من عرض كل خيار في 60 ثانية. ارتفعت التحويلات على منتجنا الأبرز بشكل ملحوظ.",
    },
    categories: ["3d"],
  },
  {
    name: { en: "Rachid Ait Ali", ar: "رشيد آيت علي" },
    company: { en: "JS Kabylie", ar: "شبيبة القبائل" },
    content: {
      en: "They captured the supporters' anthem the way it actually feels in the stadium. Real respect for the culture.",
      ar: "صوّروا نشيد الجماهير كما يُحَسّ فعلاً في الملعب. احترام حقيقي للثقافة.",
    },
    categories: ["video", "social"],
  },
  {
    name: { en: "Nour El-Houda", ar: "نور الهدى" },
    company: { en: "HESP", ar: "HESP" },
    content: {
      en: "From the website to the social posts, everything finally feels like one brand. Speed-of-delivery was the real surprise.",
      ar: "من الموقع إلى المنشورات، أصبح كل شيء يبدو علامة واحدة. السرعة في التسليم كانت المفاجأة الحقيقية.",
    },
    categories: ["web", "social", "design"],
  },
  {
    name: { en: "Walid Saadi", ar: "وليد سعدي" },
    company: { en: "Chery Algeria", ar: "تشيري الجزائر" },
    content: {
      en: "The model-launch film travelled across every channel we ship to. One reel, three formats, zero compromise.",
      ar: "فيلم إطلاق الموديل انتشر عبر كل قنواتنا. مقطع واحد، ثلاث صيغ، دون تنازل.",
    },
    categories: ["video", "social"],
  },
];
