import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { TEAM, bi } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return { title: t("title"), description: t("intro") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "About" });
  const tCta = await getTranslations({ locale, namespace: "Cta" });

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20">
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
              {t("intro")}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="brand-surface rounded-2xl p-7" data-aos="fade-up">
              <h2 className="font-nacelle text-2xl font-semibold text-fg">
                {t("missionTitle")}
              </h2>
              <p className="mt-3 text-muted">{t("missionBody")}</p>
            </div>
            <div
              className="brand-surface rounded-2xl p-7"
              data-aos="fade-up"
              data-aos-delay={120}
            >
              <h2 className="font-nacelle text-2xl font-semibold text-fg">
                {bi({ en: "Where we work", ar: "أين نعمل" }, locale)}
              </h2>
              <p className="mt-3 text-muted">
                {bi(
                  {
                    en: "Headquartered in Hassi Messaoud, serving brands all across Algeria — and creators don't recognize borders.",
                    ar: "مقرّنا في حاسي مسعود، ونخدم العلامات في كل الجزائر — والمبدعون لا يعرفون حدودًا.",
                  },
                  locale,
                )}
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-nacelle text-3xl font-semibold text-fg md:text-4xl">
                {t("teamTitle")}
              </h2>
              <p className="mt-3 text-muted">{t("teamLead")}</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {TEAM.map((m, i) => (
                <div
                  key={m.name.en}
                  className="brand-surface rounded-2xl p-5 text-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-strong bg-brand-elev text-lg font-semibold text-fg">
                    {m.name[locale].slice(0, 1)}
                  </div>
                  <div className="mt-3 font-nacelle text-sm font-semibold text-fg">
                    {m.name[locale]}
                  </div>
                  <div className="mt-1 text-xs text-muted">{t(m.roleKey)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center" data-aos="fade-up">
            <h3 className="font-nacelle text-2xl font-semibold text-fg">
              {tCta("title")}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-muted">{tCta("lead")}</p>
            <div className="mt-6">
              <Link href="/contact" className="btn btn-accent rounded-md">
                {tCta("primary")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
