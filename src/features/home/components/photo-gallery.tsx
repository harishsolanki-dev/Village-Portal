import Link from "next/link";
import { SectionHeading } from "@/src/components/ui/section-heading";
const gallery = [
  {
    title: "Our Village",
    count: "24 photos",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Festivals",
    count: "56 photos",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Nature",
    count: "32 photos",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Community",
    count: "48 photos",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
  },
];

export function PhotoGallery() {
  return (
    <section>

      <SectionHeading
        icon="📷"
        title="Photo Gallery"
        href="/gallery"
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {gallery.map((item) => (
          <Link
            key={item.title}
            href="/gallery"
            className="group"
          >

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute bottom-3 left-3">

                <p className="text-sm font-bold text-white">
                  {item.title}
                </p>

                <p className="mt-0.5 text-[10px] text-white/60">
                  {item.count}
                </p>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}