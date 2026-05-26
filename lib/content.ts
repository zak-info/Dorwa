import type { Locale } from "@/i18n/routing";

type Bi = { en: string; ar: string };

export const CONTACT = {
  phone: "+213 699 504 214",
  phoneRaw: "+213699504214",
  email: "contact@dorwaprod.com",
  whatsappE164: "213699504214",
  address: { en: "Ouargla, Algeria", ar: "ورقلة، الجزائر" } as Bi,
  hassi: { en: "Hassi Messaoud", ar: "حاسي مسعود" } as Bi,
  socials: {
    facebook: "https://www.facebook.com/dorwaprod",
    instagram: "https://www.instagram.com/dorwa.prod",
    linkedin: "https://www.linkedin.com/company/dorwa-production",
    youtube: "https://www.youtube.com/@dorwaproduction",
    tiktok: "https://www.tiktok.com/@dorwa.prod",
  },
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappE164}`;
export const TEL_URL = `tel:${CONTACT.phoneRaw}`;
export const MAILTO_URL = `mailto:${CONTACT.email}`;

export type ServiceSlug = "video" | "social" | "3d" | "design" | "web";

export const SERVICES: { slug: ServiceSlug; iconKey: string }[] = [
  { slug: "video", iconKey: "film" },
  { slug: "social", iconKey: "share" },
  { slug: "3d", iconKey: "cube" },
  { slug: "design", iconKey: "pen" },
  { slug: "web", iconKey: "monitor" },
];

export type TeamMember = {
  name: Bi;
  roleKey: "roleProducer" | "roleDOP" | "roleCreative" | "roleMusic" | "roleDesigner" | "roleFilmmaker";
};

export const TEAM: TeamMember[] = [
  { name: { en: "Houssam", ar: "حسام" }, roleKey: "roleProducer" },
  { name: { en: "Khaled", ar: "خالد" }, roleKey: "roleDOP" },
  { name: { en: "Wael", ar: "وائل" }, roleKey: "roleCreative" },
  { name: { en: "Adlan", ar: "عدلان" }, roleKey: "roleMusic" },
  { name: { en: "Abdou", ar: "عبدو" }, roleKey: "roleDesigner" },
  { name: { en: "Khalifa", ar: "خليفة" }, roleKey: "roleFilmmaker" },
];

export type Partner = { name: string; logo: string };

export const PARTNERS: Partner[] = [
  { name: "Ooredoo", logo: "/partners/Ooredoo-Logo_CMYK_On-White-BG_FA-01-removebg-preview.png" },
  { name: "Mobilis", logo: "/partners/ATM_Mobilis.svg-2048x716.png" },
  { name: "Cosider", logo: "/partners/Cosider_Logo.svg" },
  { name: "JS Kabylie", logo: "/partners/Logo_JS_Kabylie.svg-removebg-preview.png" },
  { name: "MCA", logo: "/partners/MCA_logo.png" },
  { name: "Chery", logo: "/partners/chery-seeklogo.png" },
  { name: "Lours O&G", logo: "/partners/lours.png" },
  { name: "OSCO", logo: "/partners/osco.png" },
  { name: "ProFert", logo: "/partners/profert.png" },
  { name: "HESP", logo: "/partners/logo-hesp-grang-format-removebg-preview.png" },
  { name: "Alscif", logo: "/partners/Alscif-Logo-Vertical-Transparent-BG-2048x2048.png" },
  { name: "ENTP", logo: "/partners/Logo_entp.png" },
  { name: "ENSP", logo: "/partners/ENSP.png" },
  { name: "GCB", logo: "/partners/GCB_Logo.svg-removebg-preview.png" },
  { name: "AIFG", logo: "/partners/aifg-logo-png_seeklogo-477004-removebg-preview.png" },
  { name: "GMS", logo: "/partners/gms-pr.png" },
  { name: "Ministry of Housing", logo: "/partners/وزارة_السكن_والعمران_والمدينة.svg.png" },
];

export type Project = {
  slug: string;
  title: Bi;
  client: string;
  category: ServiceSlug;
  thumb: string;
  video?: string;
};

export const PROJECTS: Project[] = [
  { slug: "mca-training", title: { en: "MCA Training Centre", ar: "مركز تدريب MCA" }, client: "MCA", category: "video", thumb: "/images/workflow-01.png" },
  { slug: "lours-oil-gas", title: { en: "Lours Oil & Gas", ar: "لورس للنفط والغاز" }, client: "Lours O&G", category: "video", thumb: "/images/workflow-02.png" },
  { slug: "hotel-bay-diab", title: { en: "Hotel Bay Diab — Algiers", ar: "فندق باي دياب — الجزائر" }, client: "Hotel Bay Diab", category: "video", thumb: "/images/workflow-03.png" },
  { slug: "ooredoo-campaign", title: { en: "Ooredoo Summer Campaign", ar: "حملة أوريدو الصيفية" }, client: "Ooredoo", category: "social", thumb: "/images/hero-image-01.jpg" },
  { slug: "jsk-supporters", title: { en: "JSK Supporters Anthem", ar: "نشيد جماهير شبيبة القبائل" }, client: "JS Kabylie", category: "video", thumb: "/images/p1.png" },
  { slug: "chery-launch", title: { en: "Chery — Model Launch", ar: "تشيري — إطلاق موديل" }, client: "Chery", category: "video", thumb: "/images/p2.png" },
  { slug: "cosider-corp", title: { en: "Cosider — Corporate Film", ar: "كوسيدار — فيلم مؤسسي" }, client: "Cosider", category: "video", thumb: "/images/p3.png" },
  { slug: "profert-3d", title: { en: "ProFert — Product 3D", ar: "بروفرت — تصوير ثلاثي الأبعاد" }, client: "ProFert", category: "3d", thumb: "/images/p4.png" },
  { slug: "alscif-identity", title: { en: "Alscif — Brand Identity", ar: "السكيف — هوية بصرية" }, client: "Alscif", category: "design", thumb: "/images/p5.png" },
  { slug: "hesp-website", title: { en: "HESP — Website", ar: "HESP — موقع الويب" }, client: "HESP", category: "web", thumb: "/images/p6.png" },
];

export function bi(value: Bi, locale: Locale): string {
  return value[locale];
}
