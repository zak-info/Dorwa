import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import ContactForm from "@/components/contact-form";
import { CONTACT, WHATSAPP_URL, TEL_URL, MAILTO_URL, bi } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return { title: t("title"), description: t("lead") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });

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

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-[1.2fr_1fr]">
            <div data-aos="fade-up">
              <ContactForm />
            </div>

            <aside
              className="brand-surface flex flex-col gap-5 rounded-2xl p-7"
              data-aos="fade-up"
              data-aos-delay={120}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-brand bg-[var(--brand-surface)] p-4 transition hover:border-brand-strong"
              >
                <IconBubble>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2A9.93 9.93 0 0 0 2.11 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.79 1.22h.01a9.93 9.93 0 0 0 0-19.84Zm5.83 14.06c-.25.7-1.46 1.34-2.02 1.41-.51.08-1.16.11-1.87-.12-.43-.13-.99-.32-1.7-.62-2.99-1.29-4.94-4.31-5.09-4.5-.15-.2-1.22-1.63-1.22-3.11s.78-2.21 1.06-2.51c.27-.3.6-.37.8-.37l.57.01c.18 0 .43-.07.67.51.25.62.85 2.13.92 2.28.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.18-.31.39-.45.52-.15.15-.3.31-.13.61.18.3.78 1.28 1.67 2.07 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.66-.15.27.1 1.73.82 2.03.96.3.15.5.22.57.34.07.12.07.72-.18 1.42Z" />
                  </svg>
                </IconBubble>
                <div>
                  <div className="text-sm font-semibold text-fg">
                    {t("whatsappLabel")}
                  </div>
                  <div className="mt-0.5 text-sm text-muted">{CONTACT.phone}</div>
                </div>
              </a>

              <a
                href={TEL_URL}
                className="group flex items-start gap-4 rounded-xl border border-brand bg-[var(--brand-surface)] p-4 transition hover:border-brand-strong"
              >
                <IconBubble>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </IconBubble>
                <div>
                  <div className="text-sm font-semibold text-fg">{t("callLabel")}</div>
                  <div className="mt-0.5 text-sm text-muted">{CONTACT.phone}</div>
                </div>
              </a>

              <a
                href={MAILTO_URL}
                className="group flex items-start gap-4 rounded-xl border border-brand bg-[var(--brand-surface)] p-4 transition hover:border-brand-strong"
              >
                <IconBubble>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </IconBubble>
                <div>
                  <div className="text-sm font-semibold text-fg">{t("emailLabelDirect")}</div>
                  <div className="mt-0.5 text-sm text-muted">{CONTACT.email}</div>
                </div>
              </a>

              <div className="mt-2 rounded-xl border border-brand p-4">
                <div className="text-xs font-semibold tracking-wider uppercase text-dim">
                  {bi({ en: "Studio", ar: "الاستوديو" }, locale)}
                </div>
                <div className="mt-2 text-sm text-fg">
                  {bi(CONTACT.address, locale)}
                </div>
                <div className="text-sm text-muted">
                  {bi(CONTACT.hassi, locale)}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand bg-brand text-accent">
      {children}
    </div>
  );
}
