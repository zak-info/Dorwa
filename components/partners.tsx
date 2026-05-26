import { PARTNERS } from "@/lib/content";

export default function Partners() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-brand py-12 md:py-16">
          <p className="text-center text-xs font-medium tracking-[0.3em] uppercase text-dim">
            Trusted by teams across Algeria
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex h-12 items-center justify-center"
                title={p.name}
              >
                <span className="font-nacelle text-sm font-semibold tracking-wide text-muted transition-colors hover:text-fg">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
