import Link from "next/link";

interface SectionHeadingProps {
  icon: string;
  title: string;
  href: string;
}

export function SectionHeading({
  icon,
  title,
  href,
}: SectionHeadingProps) {
  return (
    <div className="mb-5 flex items-center justify-between">

      <div className="flex items-center gap-3">

        <span className="text-xl">
          {icon}
        </span>

        <h2
          className="
            text-2xl font-black
            tracking-tight
            text-[#292A20]
          "
        >
          {title}
        </h2>

      </div>

      <Link
        href={href}
        className="
          text-xs font-bold
          text-[#4D7C5A]
          transition-colors
          hover:text-[#3F3F2F]
        "
      >
        View all →
      </Link>

    </div>
  );
}