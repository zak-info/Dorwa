import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SERVICES } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return { title: t("title"), description: t("lead") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  const tServices = await getTranslations({ locale, namespace: "Services" });
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
              {t("lead")}
            </p>
          </div>

          {/* Anchor nav */}
          <nav className="mx-auto mt-12 max-w-3xl">
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="rounded-full border border-brand bg-[var(--brand-surface)] px-3.5 py-1.5 text-muted transition hover:border-brand-strong hover:text-fg"
                  >
                    {tServices(`${s.slug}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-16 space-y-12">
            {SERVICES.map((s, i) => (
              <article
                id={s.slug}
                key={s.slug}
                className="brand-surface rounded-3xl p-8 md:p-12 scroll-mt-24"
                data-aos="fade-up"
              >
                <div className="flex items-start gap-5 md:gap-8">
                  <span className="font-mono text-sm text-dim md:text-base">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-nacelle text-3xl font-semibold text-fg md:text-4xl">
                      {tServices(`${s.slug}.title`)}
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg text-muted">
                      {tServices(`${s.slug}.blurb`)}
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="btn-sm btn-accent rounded-md"
                      >
                        {tCta("primary")}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
