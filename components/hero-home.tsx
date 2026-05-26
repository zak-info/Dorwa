import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ModalVideo from "@/components/modal-video";
import type { Locale } from "@/i18n/routing";

const SHOWREEL_YOUTUBE_ID = "ukBTxLGpHxM";

export default async function HeroHome({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Hero" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-5xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, var(--brand-glow), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand px-3 py-1 text-xs tracking-[0.2em] uppercase text-muted"
              data-aos="fade-up"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
              {t("eyebrow")}
            </div>

            <h1
              className="mx-auto max-w-4xl font-nacelle text-4xl font-semibold leading-[1.05] tracking-tight text-fg md:text-6xl"
              data-aos="fade-up"
            >
              {t("title")}
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              {t("lead")}
            </p>

            <div
              className="mx-auto mt-9 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <Link href="/contact" className="btn btn-accent rounded-md">
                <span className="inline-flex items-center gap-2">
                  {t("ctaPrimary")}
                  <Arrow />
                </span>
              </Link>
              <Link href="/work" className="btn btn-ghost rounded-md">
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>

          <ModalVideo
            youtubeId={SHOWREEL_YOUTUBE_ID}
            thumbWidth={1280}
            thumbHeight={720}
            thumbAlt={t("modalAlt")}
            label={tCommon("playReel")}
          />
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden
      className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180"
    >
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
