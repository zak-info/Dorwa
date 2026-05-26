import Image from "next/image";
import { PARTNERS } from "@/lib/content";

export default function Partners() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-brand py-12 md:py-16">
          <p className="text-center text-xs font-medium tracking-[0.3em] uppercase text-dim">
            Trusted by teams across Algeria
          </p>

          <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="group relative flex h-12 items-center justify-center"
                title={p.name}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={48}
                  className="max-h-10 w-auto object-contain opacity-60 brightness-0 invert transition duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
