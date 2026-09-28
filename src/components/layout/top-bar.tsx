// import Link from "next/link";

// export function TopBar() {
//   return (
//     <div className="hidden bg-[#3F3F2F] text-white md:block">

//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">

//         <div className="flex items-center gap-5 text-white/70">
//           <span>📍 Jam Raval, Gujarat</span>
//           <span>☀️ Village Community</span>
//         </div>

//         <div className="flex items-center gap-5 text-white/60">

//           <Link
//             href="/about"
//             className="transition hover:text-white"
//           >
//             About
//           </Link>

//           <Link
//             href="/contact"
//             className="transition hover:text-white"
//           >
//             Contact
//           </Link>

//           <Link
//             href="/help"
//             className="transition hover:text-white"
//           >
//             Help
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import Link from "next/link";

import { useLanguage } from "../i18n/language-provider";

export function TopBar() {
  const { t } = useLanguage();

  return (
    <div
      className="
        hidden
        border-b border-border
        bg-foreground
        text-background
        md:block
      "
    >
      <div
        className="
          mx-auto
          flex max-w-7xl
          items-center justify-between
          px-6 py-2
          text-xs
        "
      >
        <div className="flex items-center gap-5 opacity-80">
          <span>
            📍 {t.topbar.location}
          </span>

          <span>
            ☀️ {t.topbar.community}
          </span>
        </div>

        <div className="flex items-center gap-5 opacity-70">
          <Link
            href="/about"
            className="transition hover:opacity-100"
          >
            {t.topbar.about}
          </Link>

          <Link
            href="/contact"
            className="transition hover:opacity-100"
          >
            {t.topbar.contact}
          </Link>

          <Link
            href="/help"
            className="transition hover:opacity-100"
          >
            {t.topbar.help}
          </Link>
        </div>
      </div>
    </div>
  );
}