import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2.5 text-fg"
      aria-label="DORWA"
    >
      <Image
        src="/logo.png"
        alt="DORWA"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        priority
      />
      <span className="font-nacelle text-[15px] font-semibold tracking-[0.18em]">
        DORWA
      </span>
    </Link>
  );
}
