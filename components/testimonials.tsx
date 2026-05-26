"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import useMasonry from "@/utils/useMasonry";
import { QUOTES, type Quote } from "@/lib/testimonials";
import type { ServiceSlug } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

type Filter = "all" | ServiceSlug;

const TABS: { key: Filter; tKey: string }[] = [
  { key: "all", tKey: "categoryAll" },
  { key: "video", tKey: "categoryVideo" },
  { key: "social", tKey: "categorySocial" },
  { key: "3d", tKey: "category3d" },
  { key: "design", tKey: "categoryDesign" },
  { key: "web", tKey: "categoryWeb" },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [filter, setFilter] = useState<Filter>("all");
  const t = useTranslations("Testimonials");
  const locale = useLocale() as Locale;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t border-brand py-12 md:py-20">
        <div className="mx-auto max-w-3xl pb-10 text-center md:pb-12">
          <h2 className="font-nacelle text-3xl font-semibold text-fg md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("lead")}</p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center pb-10 md:pb-14">
          <div className="brand-surface inline-flex flex-wrap justify-center gap-1 rounded-full p-1">
            {TABS.map((tab) => {
              const active = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(tab.key)}
                  className={`flex h-8 items-center whitespace-nowrap rounded-full px-3.5 text-xs font-medium transition-colors ${
                    active
                      ? "btn-accent"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {t(tab.tKey)}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {QUOTES.map((q, i) => (
            <TestimonialCard key={i} quote={q} filter={filter} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  filter,
  locale,
}: {
  quote: Quote;
  filter: Filter;
  locale: Locale;
}) {
  const inFilter = filter === "all" || quote.categories.includes(filter);
  return (
    <article
      className={`relative rounded-2xl border border-brand bg-brand-elev p-6 transition-opacity ${
        inFilter ? "opacity-100" : "opacity-30"
      }`}
    >
      <p className="text-[15px] leading-relaxed text-fg before:content-['“'] before:me-1 after:content-['”'] after:ms-1">
        {quote.content[locale]}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand bg-brand text-xs font-semibold text-fg">
          {quote.name[locale].slice(0, 1)}
        </div>
        <div className="text-sm">
          <div className="font-medium text-fg">{quote.name[locale]}</div>
          <div className="text-muted">{quote.company[locale]}</div>
        </div>
      </div>
    </article>
  );
}
