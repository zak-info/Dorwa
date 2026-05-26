"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { PROJECTS, type Project, type ServiceSlug } from "@/lib/content";
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

export default function WorkGrid() {
  const t = useTranslations("Testimonials");
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  const visible = PROJECTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-8 md:py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="brand-surface inline-flex flex-wrap justify-center gap-1 rounded-full p-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                aria-pressed={filter === tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex h-8 items-center rounded-full px-4 text-xs font-medium transition ${
                  filter === tab.key ? "btn-accent" : "text-muted hover:text-fg"
                }`}
              >
                {t(tab.tKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActive(project)}
              className="group relative overflow-hidden rounded-2xl border border-brand bg-brand-elev text-start"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.thumb}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={project.title[locale]}
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-bg)]/85 via-transparent to-transparent"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent)] text-[var(--brand-accent-fg)]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M2 1l11 6L2 13V1Z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-dim">{project.client}</div>
                <div className="mt-1.5 font-nacelle text-base font-semibold text-fg">
                  {project.title[locale]}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onClose={() => setActive(null)}>
        <DialogBackdrop className="fixed inset-0 z-99999 bg-black/85" />
        <div className="fixed inset-0 z-99999 flex items-center px-4 py-6 sm:px-6">
          <DialogPanel className="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            {active?.video ? (
              <video src={active.video} controls autoPlay className="h-full w-full" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-fg">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-dim">{active?.client}</div>
                  <div className="mt-2 font-nacelle text-2xl">{active?.title[locale]}</div>
                  <div className="mt-6 text-sm text-muted">Video coming soon.</div>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}
