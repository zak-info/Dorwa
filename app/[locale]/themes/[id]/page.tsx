import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Partners from "@/components/partners";

import { isThemeId, THEMES } from "@/lib/themes";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { id } = await params;
  if (!isThemeId(id)) return {};
  const theme = THEMES.find((t) => t.id === id)!;
  return {
    title: `Theme ${id.toUpperCase()} — ${theme.label}`,
    description: theme.description,
    robots: { index: false, follow: false },
  };
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isThemeId(id)) notFound();
  setRequestLocale(locale);

  const theme = THEMES.find((t) => t.id === id)!;

  return (
    <>
      {/* Theme banner — sits above the hero to remind the viewer which palette they're seeing */}
      <div className="mx-auto mt-4 w-full max-w-6xl px-4 sm:px-6">
        <div className="brand-surface flex items-center justify-between gap-4 rounded-2xl px-4 py-3 text-sm">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-3.5 w-3.5 rounded-full border border-brand-strong"
              style={{ background: theme.accentHex }}
              aria-hidden
            />
            <span className="font-medium text-fg">
              Theme {id.toUpperCase()} · {theme.label}
            </span>
          </div>
          <span className="hidden text-xs text-muted sm:inline">
            {theme.description}
          </span>
        </div>
      </div>

      <Hero locale={locale} />
      <Partners />
      <Features locale={locale} />
      <Workflows locale={locale} />
      <Testimonials />
      <Cta locale={locale} />
    </>
  );
}
