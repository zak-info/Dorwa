import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default async function Cta({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Cta" });

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl border border-brand-strong bg-brand-elev px-6 py-14 text-center md:py-20"
          data-aos="fade-up"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "var(--brand-glow)" }}
          />
          <h2 className="mx-auto max-w-3xl font-nacelle text-3xl font-semibold leading-tight text-fg md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t("lead")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-accent rounded-md">
              {t("primary")}
            </Link>
            <Link href="/work" className="btn btn-ghost rounded-md">
              {t("secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
