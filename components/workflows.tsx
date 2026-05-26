import { getTranslations } from "next-intl/server";
import Spotlight from "@/components/spotlight";
import type { Locale } from "@/i18n/routing";

export default async function Workflows({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Workflows" });

  const phases: { tag: string; body: string; icon: React.ReactNode }[] = [
    {
      tag: t("discoverTag"),
      body: t("discoverBody"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="m20 20-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      tag: t("produceTag"),
      body: t("produceBody"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="m17 10 4-2v8l-4-2v-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      tag: t("deliverTag"),
      body: t("deliverBody"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <path d="M4 7h13l3 5v5H4V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="8" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 text-xs tracking-[0.25em] uppercase text-muted before:h-px before:w-8 before:bg-[var(--brand-border-strong)] after:h-px after:w-8 after:bg-[var(--brand-border-strong)]">
              {t("eyebrow")}
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-fg md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted">{t("lead")}</p>
          </div>

          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {phases.map((phase, i) => (
              <article
                key={phase.tag}
                className="group/card relative h-full overflow-hidden rounded-2xl border border-brand bg-brand-elev p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 group-hover:before:opacity-100"
                style={{ ["--tw-shadow-color" as string]: "var(--brand-glow)" }}
              >
                <div className="relative z-20 h-full rounded-[inherit] bg-brand p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brand text-accent">
                    {phase.icon}
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="font-mono text-xs text-dim">0{i + 1}</span>
                    <span className="rounded-full border border-brand bg-[var(--brand-surface)] px-2 py-0.5 text-xs text-fg">
                      {phase.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{phase.body}</p>
                </div>

                {/* spotlight glow tint */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-40 -top-40 z-10 h-80 w-80 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-30"
                  style={{
                    background: "var(--brand-accent)",
                    transform: "translate(var(--mouse-x), var(--mouse-y))",
                  }}
                />
              </article>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
