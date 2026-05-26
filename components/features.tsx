import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { SERVICES } from "@/lib/content";
import { Link } from "@/i18n/navigation";

function Icon({ kind }: { kind: string }) {
  switch (kind) {
    case "film":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9h18M3 15h18M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "share":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="m8 11 8-4M8 13l8 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="m3 8 9 5 9-5M12 13v9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "pen":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <path d="m4 20 4-1 11-11-3-3L5 16l-1 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="m15 5 3 3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
  return null;
}

export default async function Features({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Services" });

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-brand py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <div className="inline-flex items-center gap-3 pb-3 text-xs tracking-[0.25em] uppercase text-muted before:h-px before:w-8 before:bg-[var(--brand-border-strong)] after:h-px after:w-8 after:bg-[var(--brand-border-strong)]">
              {t("eyebrow")}
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-fg md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted">{t("lead")}</p>
          </div>

          <div className="mx-auto grid max-w-sm gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-brand bg-brand-elev p-7 transition hover:border-brand-strong"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30"
                  style={{ background: "var(--brand-accent)" }}
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brand text-accent">
                  <Icon kind={service.iconKey} />
                </div>
                <h3 className="mt-5 font-nacelle text-lg font-semibold text-fg">
                  {t(`${service.slug}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`${service.slug}.blurb`)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
