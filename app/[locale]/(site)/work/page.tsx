import { getTranslations, setRequestLocale } from "next-intl/server";
import WorkGrid from "@/components/work-grid";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Work" });
  return { title: t("title"), description: t("lead") };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Work" });

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand px-3 py-1 text-xs tracking-[0.2em] uppercase text-muted"
            data-aos="fade-up"
          >
            {t("eyebrow")}
          </div>
          <h1
            className="font-nacelle text-4xl font-semibold leading-[1.05] text-fg md:text-6xl"
            data-aos="fade-up"
          >
            {t("title")}
          </h1>
          <p
            className="mt-6 text-lg text-muted md:text-xl"
            data-aos="fade-up"
            data-aos-delay={150}
          >
            {t("lead")}
          </p>
        </div>
      </div>

      <WorkGrid />
    </section>
  );
}
