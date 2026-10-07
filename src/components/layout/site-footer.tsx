// import Link from "next/link";

// const quickLinks = [
//   ["Home", "/"],
//   ["News", "/news"],
//   ["Events", "/events"],
//   ["Gallery", "/gallery"],
//   ["About", "/about"],
// ];

// const resources = [
//   ["Directory", "/directory"],
//   ["Government Services", "/services"],
//   ["Emergency", "/emergency"],
//   ["Local Businesses", "/businesses"],
//   ["Contact", "/contact"],
// ];

// export function SiteFooter() {
//   return (
//     <footer className="bg-[#3F3F2F] text-white">

//       <div
//         className="
//           mx-auto grid max-w-7xl
//           gap-10 px-5 py-14
//           sm:px-6
//           md:grid-cols-2
//           lg:grid-cols-4
//         "
//       >

//         {/* Brand */}
//         <div>

//           <div className="flex items-center gap-3">

//             <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D99A2B]">
//               🏡
//             </div>

//             <div>

//               <p className="font-black">
//                 Village Portal
//               </p>

//               <p className="text-[10px] text-white/40">
//                 Jam Raval
//               </p>

//             </div>

//           </div>

//           <p className="mt-5 max-w-xs text-xs leading-6 text-white/45">
//             A free community platform for village news,
//             events, photos, opportunities and local information.
//           </p>

//         </div>

//         {/* Links */}
//         <FooterColumn
//           title="Quick Links"
//           links={quickLinks}
//         />

//         <FooterColumn
//           title="Useful Resources"
//           links={resources}
//         />

//         {/* Newsletter */}
//         <div>

//           <h3 className="text-sm font-bold">
//             Stay Connected
//           </h3>

//           <p className="mt-3 text-xs leading-5 text-white/45">
//             Get important village updates directly.
//           </p>

//           <div className="mt-4 flex gap-2">

//             <input
//               type="email"
//               placeholder="Your email"
//               className="
//                 min-w-0 flex-1
//                 rounded-xl
//                 border border-white/10
//                 bg-white/5
//                 px-3 py-3
//                 text-xs text-white
//                 outline-none
//                 placeholder:text-white/30
//                 focus:border-[#D99A2B]
//               "
//             />

//             <button
//               type="button"
//               className="
//                 rounded-xl
//                 bg-[#D99A2B]
//                 px-4
//                 text-xs font-bold
//                 text-white
//                 hover:bg-[#C58A24]
//               "
//             >
//               Join
//             </button>

//           </div>

//         </div>

//       </div>

//       <div className="border-t border-white/10">

//         <div
//           className="
//             mx-auto flex max-w-7xl
//             flex-col gap-2
//             px-5 py-5
//             text-[10px] text-white/30
//             sm:px-6
//             md:flex-row
//             md:items-center
//             md:justify-between
//           "
//         >

//           <p>
//             © {new Date().getFullYear()} Village Portal.
//             All rights reserved.
//           </p>

//           <p>
//             Made for our village community
//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// }

// function FooterColumn({
//   title,
//   links,
// }: {
//   title: string;
//   links: string[][];
// }) {
//   return (
//     <div>

//       <h3 className="text-sm font-bold">
//         {title}
//       </h3>

//       <div className="mt-4 space-y-2.5">

//         {links.map(([label, href]) => (
//           <Link
//             key={href}
//             href={href}
//             className="
//               block text-xs
//               text-white/45
//               transition-colors
//               hover:text-[#D99A2B]
//             "
//           >
//             {label}
//           </Link>
//         ))}

//       </div>

//     </div>
//   );
// }
"use client";

import Link from "next/link";

import { useLanguage } from "@/src/components/i18n/language-provider";

type FooterLink = {
  label: string;
  href: string;
};

export function SiteFooter() {
  const { t } = useLanguage();

  const quickLinks: FooterLink[] = [
    {
      label: t.common.home,
      href: "/",
    },
    {
      label: t.common.news,
      href: "/news",
    },
    {
      label: t.common.events,
      href: "/events",
    },
    {
      label: t.common.gallery,
      href: "/gallery",
    },
    {
      label: t.common.about,
      href: "/about",
    },
  ];

  const resources: FooterLink[] = [
    {
      label: t.common.directory,
      href: "/directory",
    },
    {
      label: t.common.governmentServices,
      href: "/services",
    },
    {
      label: t.common.emergency,
      href: "/emergency",
    },
    {
      label: t.common.localBusinesses,
      href: "/businesses",
    },
    {
      label: t.common.contact,
      href: "/contact",
    },
  ];

  return (
    <footer
      className="
        border-t border-border
        bg-footer-background
        text-footer-foreground
      "
    >
      {/* =========================
          Main Footer
      ========================== */}
      <div
        className="
          mx-auto
          grid max-w-7xl
          gap-10
          px-5 py-14
          sm:px-6
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* =========================
            Brand
        ========================== */}
        <div>
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-3
            "
          >
            {/* Logo */}
            <div
              className="
                flex h-11 w-11
                shrink-0
                items-center justify-center
                rounded-2xl
                bg-accent
                text-xl
                shadow-sm
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            >
              🏡
            </div>

            {/* Brand Name */}
            <div>
              <p
                className="
                  font-black
                  tracking-tight
                  text-footer-foreground
                "
              >
                Village Portal
              </p>

              <p
                className="
                  text-[10px]
                  text-footer-foreground/50
                "
              >
                Jam Raval
              </p>
            </div>
          </Link>

          <p
            className="
              mt-5
              max-w-xs
              text-xs
              leading-6
              text-footer-foreground/55
            "
          >
            {t.footer.description}
          </p>
        </div>

        {/* =========================
            Quick Links
        ========================== */}
        <FooterColumn
          title={t.footer.quickLinks}
          links={quickLinks}
        />

        {/* =========================
            Resources
        ========================== */}
        <FooterColumn
          title={t.footer.usefulResources}
          links={resources}
        />

        {/* =========================
            Stay Connected
        ========================== */}
        <div>
          <h3
            className="
              text-sm
              font-bold
              text-footer-foreground
            "
          >
            {t.footer.stayConnected}
          </h3>

          <p
            className="
              mt-3
              text-xs
              leading-5
              text-footer-foreground/55
            "
          >
            {t.footer.newsletter}
          </p>

          {/* Newsletter */}
          <form
            className="
              mt-4
              flex
              gap-2
            "
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label
              htmlFor="footer-email"
              className="sr-only"
            >
              {t.common.email}
            </label>

            <input
              id="footer-email"
              type="email"
              placeholder={t.common.email}
              autoComplete="email"
              className="
                min-w-0
                flex-1
                rounded-xl
                border border-footer-foreground/10
                bg-footer-foreground/5
                px-3 py-3
                text-xs
                text-footer-foreground
                outline-none
                transition
                placeholder:text-footer-foreground/30
                focus:border-accent
                focus:ring-2
                focus:ring-accent/20
              "
            />

            <button
              type="submit"
              className="
                shrink-0
                rounded-xl
                bg-accent
                px-4
                text-xs
                font-bold
                text-accent-foreground
                transition-all
                hover:-translate-y-0.5
                hover:brightness-95
                focus:outline-none
                focus:ring-2
                focus:ring-accent/40
              "
            >
              {t.common.join}
            </button>
          </form>
        </div>
      </div>

      {/* =========================
          Bottom Footer
      ========================== */}
      <div
        className="
          border-t
          border-footer-foreground/10
        "
      >
        <div
          className="
            mx-auto
            flex max-w-7xl
            flex-col
            gap-2
            px-5 py-5
            text-[10px]
            sm:px-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-footer-foreground/35">
            © {new Date().getFullYear()} Village Portal.{" "}
            {t.footer.copyright}
          </p>

          <p className="text-footer-foreground/35">
            {t.footer.madeFor}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   Footer Column
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3
        className="
          text-sm
          font-bold
          text-footer-foreground
        "
      >
        {title}
      </h3>

      <nav
        aria-label={title}
        className="mt-4 space-y-2.5"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              block
              text-xs
              text-footer-foreground/50
              transition-colors
              hover:text-accent
            "
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}