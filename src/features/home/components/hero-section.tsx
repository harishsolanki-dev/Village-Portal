import { VillageScene } from "@/src/features/home/components/village-scene";
import Link from "next/link";


export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#3F3F2F]">

      {/* Ambient motion */}
      <div
        className="
          pointer-events-none absolute
          -left-40 -top-40
          h-[500px] w-[500px]
          rounded-full
          bg-[#D99A2B]/10
          blur-[100px]
          animate-[homeOrb_10s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-40 -right-40
          h-[500px] w-[500px]
          rounded-full
          bg-[#4D7C5A]/25
          blur-[100px]
          animate-[homeOrbReverse_12s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:py-24">

        {/* Content */}
        <div>

          <div
            className="
              mb-6 inline-flex
              items-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.06]
              px-4 py-2
              text-xs font-semibold
              text-[#D9CFAE]
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#D99A2B]" />

            JAM RAVAL VILLAGE PORTAL
          </div>

          <h1
            className="
              text-5xl font-black
              leading-[1.02]
              tracking-[-0.05em]
              text-white
              sm:text-6xl
              xl:text-7xl
            "
          >
            Connecting

            <br />

            <span className="text-[#D99A2B]">
              Our Village.
            </span>
          </h1>

          <p
            className="
              mt-7 max-w-xl
              text-base leading-7
              text-white/60
              sm:text-lg
            "
          >
            Your digital home for village news, events,
            community stories, photos and important local
            information.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">

            <Link
              href="/news"
              className="
                group inline-flex
                items-center gap-2
                rounded-2xl
                bg-[#D99A2B]
                px-5 py-3.5
                text-sm font-bold
                text-white
                transition-all
                hover:-translate-y-1
                hover:bg-[#C58A24]
                hover:shadow-xl
              "
            >
              Latest News

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/events"
              className="
                inline-flex
                items-center gap-2
                rounded-2xl
                border border-white/15
                bg-white/[0.06]
                px-5 py-3.5
                text-sm font-semibold
                text-white
                backdrop-blur-md
                transition-all
                hover:-translate-y-1
                hover:bg-white/10
              "
            >
              📅 View Events
            </Link>

          </div>

          <div className="mt-10 flex gap-8">

            <HeroStat
              value="100%"
              label="Free Platform"
            />

            <HeroStat
              value="24/7"
              label="Village Updates"
            />

            <HeroStat
              value="1"
              label="Community"
            />

          </div>

        </div>

        {/* 3D */}
        <VillageScene />

      </div>

    </section>
  );
}

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-lg font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-white/35">
        {label}
      </p>
    </div>
  );
}