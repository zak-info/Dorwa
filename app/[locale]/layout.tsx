import "../css/style.css";

import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import AOSInit from "@/components/aos-init";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    { path: "../../public/fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/nacelle-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/nacelle-semibolditalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const bodyFont = locale === "ar" ? "font-arabic" : "font-inter";

  return (
    <html lang={locale} dir={dir} className="dark">
      <body
        className={`${inter.variable} ${nacelle.variable} ${arabic.variable} ${bodyFont} bg-brand text-base text-fg antialiased`}
      >
        <NextIntlClientProvider>
          <AOSInit />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
