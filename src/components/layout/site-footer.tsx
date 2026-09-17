import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["News", "/news"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
];

const resources = [
  ["Directory", "/directory"],
  ["Government Services", "/services"],
  ["Emergency", "/emergency"],
  ["Local Businesses", "/businesses"],
  ["Contact", "/contact"],
];

export function SiteFooter() {
  return (
    <footer className="bg-[#3F3F2F] text-white">

      <div
        className="
          mx-auto grid max-w-7xl
          gap-10 px-5 py-14
          sm:px-6
          md:grid-cols-2
          lg:grid-cols-4
        "
      >

        {/* Brand */}
        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D99A2B]">
              🏡
            </div>

            <div>

              <p className="font-black">
                Village Portal
              </p>

              <p className="text-[10px] text-white/40">
                Jam Raval
              </p>

            </div>

          </div>

          <p className="mt-5 max-w-xs text-xs leading-6 text-white/45">
            A free community platform for village news,
            events, photos, opportunities and local information.
          </p>

        </div>

        {/* Links */}
        <FooterColumn
          title="Quick Links"
          links={quickLinks}
        />

        <FooterColumn
          title="Useful Resources"
          links={resources}
        />

        {/* Newsletter */}
        <div>

          <h3 className="text-sm font-bold">
            Stay Connected
          </h3>

          <p className="mt-3 text-xs leading-5 text-white/45">
            Get important village updates directly.
          </p>

          <div className="mt-4 flex gap-2">

            <input
              type="email"
              placeholder="Your email"
              className="
                min-w-0 flex-1
                rounded-xl
                border border-white/10
                bg-white/5
                px-3 py-3
                text-xs text-white
                outline-none
                placeholder:text-white/30
                focus:border-[#D99A2B]
              "
            />

            <button
              type="button"
              className="
                rounded-xl
                bg-[#D99A2B]
                px-4
                text-xs font-bold
                text-white
                hover:bg-[#C58A24]
              "
            >
              Join
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div
          className="
            mx-auto flex max-w-7xl
            flex-col gap-2
            px-5 py-5
            text-[10px] text-white/30
            sm:px-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Village Portal.
            All rights reserved.
          </p>

          <p>
            Made for our village community
          </p>

        </div>

      </div>

    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  return (
    <div>

      <h3 className="text-sm font-bold">
        {title}
      </h3>

      <div className="mt-4 space-y-2.5">

        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="
              block text-xs
              text-white/45
              transition-colors
              hover:text-[#D99A2B]
            "
          >
            {label}
          </Link>
        ))}

      </div>

    </div>
  );
}