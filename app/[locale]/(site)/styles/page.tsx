import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export const metadata = {
  title: "Style Explorer",
  description: "Phase-0 comparison of the four candidate visual directions.",
  robots: { index: false, follow: false },
};

type Variant = {
  id: "a" | "b" | "c" | "d";
  label: string;
  blurb: string;
};

const VARIANTS: Variant[] = [
  {
    id: "a",
    label: "A · Pure B&W cinematic",
    blurb:
      "Black bg, white type, monochrome imagery. Strongest match to DORWA's logo and 'visual storytellers' positioning.",
  },
  {
    id: "b",
    label: "B · Black + warm gold",
    blurb:
      "Premium metallic accent (gold #C9A961) on CTAs and highlights. Evokes desert / Valley of the Sun.",
  },
  {
    id: "c",
    label: "C · Red gradient (retuned)",
    blurb: "Template's red→gray system retuned for DORWA. Fastest path, less distinctive.",
  },
  {
    id: "d",
    label: "D · Black + electric cyan",
    blurb: "Cool cyan #4ADEDE accent. Reads more 'tech studio' than 'cinematic agency.'",
  },
];

export default async function StylesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tHero = await getTranslations({ locale, namespace: "Hero" });
  const tServices = await getTranslations({ locale, namespace: "Services" });
  const tCta = await getTranslations({ locale, namespace: "Cta" });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <h1 className="font-nacelle text-3xl font-semibold text-fg md:text-4xl">
          Style Explorer
        </h1>
        <p className="mt-3 text-muted">
          Four candidate visual directions for DORWA, rendered against the same
          hero / service-card / CTA. Pick a winner and we propagate it across
          all pages — the other three get deleted.
        </p>
      </div>

      <div className="space-y-10">
        {VARIANTS.map((v) => (
          <section
            key={v.id}
            data-style={v.id}
            className="overflow-hidden rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-bg)]"
          >
            <header className="flex flex-col gap-2 border-b border-[var(--brand-border)] bg-[var(--brand-bg-elev)] p-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-nacelle text-xl font-semibold text-[var(--brand-fg)]">
                  {v.label}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-[var(--brand-fg-muted)]">
                  {v.blurb}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] px-3 py-1 text-xs text-[var(--brand-fg-muted)]">
                accent
                <span
                  className="inline-block h-3.5 w-3.5 rounded-full"
                  style={{ background: "var(--brand-accent)" }}
                  aria-hidden
                />
              </span>
            </header>

            <div className="grid gap-6 p-6 md:grid-cols-3">
              {/* Hero column */}
              <div className="md:col-span-2 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-bg-elev)] p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] px-3 py-1 text-xs tracking-widest uppercase text-[var(--brand-fg-muted)]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--brand-accent)" }}
                  />
                  {tHero("eyebrow")}
                </div>
                <h3 className="mt-5 font-nacelle text-3xl font-semibold leading-tight text-[var(--brand-fg)] md:text-4xl">
                  {tHero("title")}
                </h3>
                <p className="mt-4 max-w-xl text-[var(--brand-fg-muted)]">
                  {tHero("lead")}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-md px-4 py-2.5 text-sm font-medium"
                    style={{
                      background: "var(--brand-accent)",
                      color: "var(--brand-accent-fg)",
                    }}
                  >
                    {tHero("ctaPrimary")}
                  </button>
                  <button
                    type="button"
                    className="rounded-md border px-4 py-2.5 text-sm font-medium text-[var(--brand-fg)]"
                    style={{ borderColor: "var(--brand-border-strong)" }}
                  >
                    {tHero("ctaSecondary")}
                  </button>
                </div>
              </div>

              {/* Service card column */}
              <div className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-bg-elev)] p-7">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-md border"
                  style={{
                    color: "var(--brand-accent)",
                    borderColor: "var(--brand-border)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 9h18M3 15h18M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4 className="mt-5 font-nacelle text-lg font-semibold text-[var(--brand-fg)]">
                  {tServices("video.title")}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-fg-muted)]">
                  {tServices("video.blurb")}
                </p>
              </div>
            </div>

            {/* CTA band */}
            <div className="m-6 mt-0 rounded-2xl border p-8 text-center"
              style={{
                borderColor: "var(--brand-border-strong)",
                background: "var(--brand-bg-elev)",
              }}
            >
              <h4 className="font-nacelle text-2xl font-semibold text-[var(--brand-fg)] md:text-3xl">
                {tCta("title")}
              </h4>
              <p className="mt-2 text-[var(--brand-fg-muted)]">{tCta("lead")}</p>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  className="rounded-md px-4 py-2.5 text-sm font-medium"
                  style={{
                    background: "var(--brand-accent)",
                    color: "var(--brand-accent-fg)",
                  }}
                >
                  {tCta("primary")}
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-brand bg-brand-elev p-6 text-sm text-muted">
        Once you've picked a winner, tell me which letter (A/B/C/D) and I'll
        delete the other three palettes from <code>app/css/style.css</code>,
        remove this <code>/styles</code> route, and ship the chosen one as the
        only theme.
      </div>
    </div>
  );
}
