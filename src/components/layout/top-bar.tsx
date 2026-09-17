import Link from "next/link";

export function TopBar() {
  return (
    <div className="hidden bg-[#3F3F2F] text-white md:block">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">

        <div className="flex items-center gap-5 text-white/70">
          <span>📍 Jam Raval, Gujarat</span>
          <span>☀️ Village Community</span>
        </div>

        <div className="flex items-center gap-5 text-white/60">

          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

          <Link
            href="/help"
            className="transition hover:text-white"
          >
            Help
          </Link>

        </div>

      </div>

    </div>
  );
}