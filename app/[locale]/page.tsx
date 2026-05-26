import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Partners from "@/components/partners";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });
  return { title: t("eyebrow"), description: t("lead") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <Partners />
      <Features locale={locale} />
      <Workflows locale={locale} />
      <Testimonials />
      <Cta locale={locale} />
    </>
  );
}
