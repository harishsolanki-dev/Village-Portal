import { SectionHeading } from "@/src/components/ui/section-heading";
import Link from "next/link";
const news = [
  {
    category: "Development",
    title: "New Road Project to Connect Nearby Villages",
    description:
      "Development work and important updates from our village community.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Education",
    title: "Village School Expands Learning Opportunities",
    description:
      "Discover the latest education and community development updates.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Culture",
    title: "Annual Village Festival Preparations Begin",
    description:
      "Stay updated with upcoming cultural celebrations and local events.",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=80",
  },
];

export function LatestNews() {
  return (
    <section>

      <SectionHeading
        icon="📰"
        title="Latest News"
        href="/news"
      />

      <div className="grid gap-5 md:grid-cols-3">

        {news.map((item) => (
          <article
            key={item.title}
            className="
              group overflow-hidden
              rounded-2xl
              border border-[#E5E2D8]
              bg-white
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="relative h-44 overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              <span
                className="
                  absolute bottom-3 left-3
                  rounded-lg
                  bg-[#4D7C5A]
                  px-2.5 py-1
                  text-[10px] font-bold
                  text-white
                "
              >
                {item.category}
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-base font-bold leading-6">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#858379]">
                {item.description}
              </p>

              <Link
                href="/news"
                className="
                  mt-4 inline-flex
                  text-xs font-bold
                  text-[#4D7C5A]
                "
              >
                Read more →
              </Link>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}