import Link from "next/link";

const links = [
  {
    icon: "📰",
    title: "News & Articles",
    text: "Latest updates",
    href: "/news",
  },
  {
    icon: "📅",
    title: "Events",
    text: "Upcoming programs",
    href: "/events",
  },
  {
    icon: "📷",
    title: "Gallery",
    text: "Photos & memories",
    href: "/gallery",
  },
  {
    icon: "📢",
    title: "Advertisements",
    text: "Support businesses",
    href: "/advertisements",
  },
  {
    icon: "👥",
    title: "Directory",
    text: "People & services",
    href: "/directory",
  },
];

export function QuickLinks() {
  return (
    <section className="border-b border-[#E7E4DA] bg-white">

      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              group flex items-center gap-3
              border-b border-[#ECE9E0]
              p-4
              transition-colors
              hover:bg-[#FAFAF7]
              md:border-b-0
              md:border-r
              last:border-r-0
            "
          >

            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-full
                bg-[#F5EFE1]
                text-lg
                transition-transform
                group-hover:scale-110
              "
            >
              {link.icon}
            </div>

            <div>

              <p className="text-xs font-bold">
                {link.title}
              </p>

              <p className="mt-1 text-[10px] text-[#949287]">
                {link.text}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}