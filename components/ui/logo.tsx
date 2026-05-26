import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2 text-fg"
      aria-label="DORWA"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 4h3l16 12-16 12H5l16-12L5 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11 9l10 7-10 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
      <span className="font-nacelle text-[15px] font-semibold tracking-[0.18em]">
        DORWA
      </span>
    </Link>
  );
}
