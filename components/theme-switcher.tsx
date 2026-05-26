import { Link } from "@/i18n/navigation";
import { THEMES, type ThemeId } from "@/lib/themes";

export default function ThemeSwitcher({ active }: { active: ThemeId }) {
  return (
    <div className="pointer-events-auto fixed bottom-5 left-1/2 z-40 -translate-x-1/2">
      <div className="brand-surface flex items-center gap-1 rounded-full p-1 backdrop-blur-md shadow-lg">
        <span className="px-3 text-[10px] uppercase tracking-[0.18em] text-dim">
          Theme
        </span>
        {THEMES.map((t) => {
          const isActive = t.id === active;
          return (
            <Link
              key={t.id}
              href={`/themes/${t.id}`}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                isActive ? "btn-accent" : "text-muted hover:text-fg"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full border border-brand-strong"
                style={{ background: t.accentHex }}
                aria-hidden
              />
              <span className="uppercase tracking-wide">{t.id}</span>
              <span className="hidden sm:inline">· {t.shortLabel}</span>
            </Link>
          );
        })}
        <Link
          href="/"
          className="ms-2 rounded-full border border-brand px-3 py-1.5 text-xs text-muted transition hover:text-fg"
        >
          Exit
        </Link>
      </div>
    </div>
  );
}
