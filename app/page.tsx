// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
//         <div>
//           <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
//             Jam Raval Village Portal
//           </p>

//           <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900">
//             Your Village. Your Community. One Digital Platform.
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
//             Stay connected with the latest village news, events, videos,
//             gallery updates and important information.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

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

const events = [
  {
    day: "15",
    month: "SEP",
    title: "Temple Festival Opening",
    time: "10:00 AM",
    location: "Village Temple",
  },
  {
    day: "21",
    month: "SEP",
    title: "Community Health Camp",
    time: "09:00 AM",
    location: "Community Hall",
  },
  {
    day: "02",
    month: "OCT",
    title: "Clean Village Drive",
    time: "08:00 AM",
    location: "Main Village Area",
  },
  {
    day: "14",
    month: "OCT",
    title: "Cultural Program",
    time: "06:00 PM",
    location: "Village Ground",
  },
];

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#292A20]">

      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div className="hidden bg-[#3F3F2F] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">

          <div className="flex items-center gap-5 text-white/70">
            <span>📍 Jam Raval, Porbandar, Gujarat</span>
            <span>☀️ 28°C</span>
            <span>Sunny</span>
          </div>

          <div className="flex items-center gap-5 text-white/60">
            <Link href="/about" className="hover:text-white">
              About
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>

            <Link href="/help" className="hover:text-white">
              Help
            </Link>
          </div>

        </div>
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-[#E7E4DA] bg-white/95 backdrop-blur-xl">

        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-5 sm:px-6">

          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">

            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-2xl
                bg-[#3F3F2F]
                text-lg
                shadow-md
                transition-all duration-300
                group-hover:-rotate-3
                group-hover:scale-105
              "
            >
              🏡
            </div>

            <div className="hidden sm:block">
              <p className="text-base font-black tracking-tight text-[#292A20]">
                Village Portal
              </p>

              <p className="text-[10px] text-[#8B897E]">
                Our Village. Our People. Our Stories.
              </p>
            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">

            <NavItem href="/" active>
              Home
            </NavItem>

            <NavItem href="/news">
              News
            </NavItem>

            <NavItem href="/events">
              Events
            </NavItem>

            <NavItem href="/gallery">
              Gallery
            </NavItem>

            <NavItem href="/directory">
              Directory
            </NavItem>

            <NavItem href="/services">
              Services
            </NavItem>

          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              className="
                hidden h-10 w-10
                items-center justify-center
                rounded-xl
                border border-[#E5E2D8]
                bg-[#FAFAF7]
                text-sm
                transition
                hover:border-[#4D7C5A]
                md:flex
              "
              aria-label="Search"
            >
              🔍
            </button>

            <Link
              href="/login"
              className="
                rounded-xl
                bg-[#D99A2B]
                px-4 py-2.5
                text-xs font-bold
                text-white
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-[#C58A24]
                hover:shadow-md
                sm:px-5
              "
            >
              Login
            </Link>

          </div>

        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#3F3F2F]">

        {/* Animated ambient lights */}
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

        {/* Grid */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:py-24">

          {/* Hero copy */}
          <div className="relative z-10">

            <div
              className="
                mb-6 inline-flex
                items-center gap-2
                rounded-full
                border border-white/10
                bg-white/[0.06]
                px-4 py-2
                text-xs font-semibold
                tracking-wide
                text-[#D9CFAE]
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#D99A2B]" />
              JAM RAVAL VILLAGE PORTAL
            </div>

            <h1
              className="
                max-w-2xl
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
                  group
                  inline-flex items-center gap-2
                  rounded-2xl
                  bg-[#D99A2B]
                  px-5 py-3.5
                  text-sm font-bold
                  text-white
                  shadow-xl shadow-black/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#C58A24]
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
                  inline-flex items-center gap-2
                  rounded-2xl
                  border border-white/15
                  bg-white/[0.06]
                  px-5 py-3.5
                  text-sm font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                📅 View Events
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">

              <HeroStat value="100%" label="Free Platform" />
              <HeroStat value="24/7" label="Village Updates" />
              <HeroStat value="1" label="Community" />

            </div>

          </div>

          {/* =================================================
              3D VILLAGE SCENE
          ================================================= */}
          <div className="relative mx-auto h-[360px] w-full max-w-[560px] lg:h-[440px]">

            {/* Sun */}
            <div
              className="
                absolute right-[14%] top-[5%]
                h-20 w-20
                rounded-full
                bg-[#D99A2B]
                shadow-[0_0_80px_rgba(217,154,43,0.25)]
                animate-[homeSun_6s_ease-in-out_infinite]
                sm:h-24 sm:w-24
              "
            />

            {/* Clouds */}
            <div
              className="
                absolute left-[8%] top-[18%]
                h-5 w-28
                rounded-full
                bg-white/10
                animate-[homeCloud_14s_linear_infinite]
              "
            />

            <div
              className="
                absolute left-[45%] top-[30%]
                h-4 w-20
                rounded-full
                bg-white/[0.07]
                animate-[homeCloud_18s_linear_2s_infinite]
              "
            />

            {/* Ground */}
            <div
              className="
                absolute bottom-6 left-1/2
                h-36 w-[90%]
                -translate-x-1/2
                rounded-[50%]
                bg-[#4D7C5A]/30
                [transform:translateX(-50%)_rotateX(60deg)]
              "
            />

            {/* Back hill */}
            <div
              className="
                absolute bottom-16 left-[5%]
                h-28 w-[90%]
                rounded-[50%]
                bg-[#4D7C5A]/25
              "
            />

            {/* House 1 */}
            <House3D
              className="
                absolute bottom-20 left-[14%]
                scale-125
                animate-[homeHouse_5s_ease-in-out_infinite]
              "
            />

            {/* House 2 */}
            <House3D
              className="
                absolute bottom-24 left-[48%]
                scale-90
                animate-[homeHouse_6s_ease-in-out_1s_infinite]
              "
            />

            {/* Tree */}
            <Tree3D
              className="
                absolute bottom-16 right-[10%]
                scale-125
                animate-[homeTree_5s_ease-in-out_0.5s_infinite]
              "
            />

            {/* Small tree */}
            <Tree3D
              className="
                absolute bottom-14 right-[35%]
                scale-75
                animate-[homeTree_6s_ease-in-out_1.5s_infinite]
              "
            />

            {/* Floating community badge */}
            <div
              className="
                absolute right-[2%] top-[45%]
                hidden
                rounded-2xl
                border border-white/10
                bg-white/10
                px-4 py-3
                backdrop-blur-xl
                sm:block
                animate-[homeBadge_5s_ease-in-out_infinite]
              "
            >
              <p className="text-xs font-bold text-white">
                Our Roots
              </p>

              <p className="mt-1 text-[10px] text-white/50">
                Our Pride
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          QUICK LINKS
      ====================================================== */}
      <section className="border-b border-[#E7E4DA] bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">

          <QuickLink icon="📰" title="News & Articles" text="Latest updates" />
          <QuickLink icon="📅" title="Events" text="Upcoming programs" />
          <QuickLink icon="📷" title="Gallery" text="Photos & memories" />
          <QuickLink icon="📢" title="Advertisements" text="Support businesses" />
          <QuickLink icon="👥" title="Directory" text="People & services" />

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">

        <div className="grid gap-12 lg:grid-cols-[1.7fr_0.9fr]">

          {/* News */}
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

                    <h3
                      className="
                        text-base font-bold
                        leading-6
                        text-[#292A20]
                        transition-colors
                        group-hover:text-[#4D7C5A]
                      "
                    >
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

          {/* Events */}
          <section>

            <SectionHeading
              icon="📅"
              title="Upcoming Events"
              href="/events"
            />

            <div className="overflow-hidden rounded-2xl border border-[#E5E2D8] bg-white">

              {events.map((event, index) => (
                <div
                  key={event.title}
                  className={`
                    flex gap-4 p-4
                    transition-colors
                    hover:bg-[#FAFAF7]
                    ${
                      index !== events.length - 1
                        ? "border-b border-[#ECE9E0]"
                        : ""
                    }
                  `}
                >

                  <div
                    className="
                      flex h-14 w-14 shrink-0
                      flex-col items-center
                      justify-center
                      rounded-xl
                      bg-[#F5EFE1]
                    "
                  >
                    <span className="text-lg font-black text-[#3F3F2F]">
                      {event.day}
                    </span>

                    <span className="text-[9px] font-bold text-[#D99A2B]">
                      {event.month}
                    </span>
                  </div>

                  <div className="min-w-0">

                    <h3 className="text-sm font-bold text-[#292A20]">
                      {event.title}
                    </h3>

                    <p className="mt-1 text-[11px] text-[#858379]">
                      🕐 {event.time}
                    </p>

                    <p className="mt-1 truncate text-[11px] text-[#858379]">
                      📍 {event.location}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </section>

        </div>

        {/* =================================================
            GALLERY + AD
        ================================================== */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.7fr_0.8fr]">

          {/* Gallery */}
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
                  className="
                    group overflow-hidden
                    rounded-2xl
                  "
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

          {/* Advertisement */}
          <section>

            <div
              className="
                relative h-full min-h-[270px]
                overflow-hidden
                rounded-3xl
                bg-[#F5E8CB]
                p-7
              "
            >

              <span
                className="
                  absolute right-5 top-5
                  rounded-md
                  bg-[#D99A2B]
                  px-2 py-1
                  text-[9px] font-black
                  text-white
                "
              >
                AD
              </span>

              <div className="relative z-10 max-w-[220px]">

                <p className="text-xs font-bold uppercase tracking-widest text-[#8B6A32]">
                  Support local
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl font-black
                    leading-tight
                    text-[#5B4429]
                  "
                >
                  Grow your business with our village.
                </h3>

                <p className="mt-3 text-xs leading-5 text-[#816C50]">
                  Advertise your business and reach the
                  local community.
                </p>

                <Link
                  href="/advertise"
                  className="
                    mt-5 inline-flex
                    rounded-xl
                    bg-[#3F3F2F]
                    px-4 py-2.5
                    text-xs font-bold
                    text-white
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#4D7C5A]
                  "
                >
                  Advertise with us →
                </Link>

              </div>

              {/* Store illustration */}
              <div
                className="
                  absolute
                  -bottom-2 -right-3
                  text-[100px]
                  opacity-90
                  animate-[homeStore_5s_ease-in-out_infinite]
                "
              >
                🏪
              </div>

            </div>

          </section>

        </div>

      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="bg-[#3F3F2F] text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">

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

          <FooterColumn
            title="Quick Links"
            links={[
              ["Home", "/"],
              ["News", "/news"],
              ["Events", "/events"],
              ["Gallery", "/gallery"],
              ["About", "/about"],
            ]}
          />

          <FooterColumn
            title="Useful Resources"
            links={[
              ["Directory", "/directory"],
              ["Government Services", "/services"],
              ["Emergency", "/emergency"],
              ["Local Businesses", "/businesses"],
              ["Contact", "/contact"],
            ]}
          />

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
                  text-xs
                  text-white
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

          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] text-white/30 sm:px-6 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Village Portal. All rights reserved.
            </p>

            <p>
              Made with ❤️ for our village
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}

/* =============================================================
   COMPONENTS
============================================================= */

function NavItem({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        rounded-xl
        px-3 py-2
        text-xs font-semibold
        transition-all
        ${
          active
            ? "bg-[#3F3F2F] text-white shadow-sm"
            : "text-[#68675C] hover:bg-[#F4F2EA] hover:text-[#3F3F2F]"
        }
      `}
    >
      {children}
    </Link>
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

function QuickLink({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href="#"
      className="
        group
        flex items-center gap-3
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
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold text-[#292A20]">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-[#949287]">
          {text}
        </p>
      </div>
    </Link>
  );
}

function SectionHeading({
  icon,
  title,
  href,
}: {
  icon: string;
  title: string;
  href: string;
}) {
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
          hover:text-[#3F3F2F]
        "
      >
        View all →
      </Link>

    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>

      <h3 className="text-sm font-bold">
        {title}
      </h3>

      <div className="mt-4 space-y-2.5">

        {links.map(([label, href]) => (
          <Link
            key={label}
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

/* =============================================================
   3D HOUSE
============================================================= */

function House3D({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative h-32 w-36
        [transform-style:preserve-3d]
        ${className}
      `}
    >

      {/* House body */}
      <div
        className="
          absolute bottom-0 left-5
          h-20 w-24
          rounded-sm
          bg-[#E7D8B7]
          shadow-[10px_10px_0_rgba(0,0,0,0.12)]
          [transform:translateZ(12px)]
        "
      >

        {/* Door */}
        <div
          className="
            absolute bottom-0 left-9
            h-12 w-9
            rounded-t-md
            bg-[#704D35]
          "
        />

        {/* Window */}
        <div
          className="
            absolute left-3 top-6
            h-8 w-8
            rounded-sm
            border-2 border-[#4D7C5A]
            bg-[#9DBAA1]
          "
        />

        {/* Window 2 */}
        <div
          className="
            absolute right-3 top-6
            h-8 w-8
            rounded-sm
            border-2 border-[#4D7C5A]
            bg-[#9DBAA1]
          "
        />

      </div>

      {/* Roof */}
      <div
        className="
          absolute left-1 top-1
          h-0 w-0
          border-l-[60px]
          border-r-[60px]
          border-b-[55px]
          border-l-transparent
          border-r-transparent
          border-b-[#704D35]
          [transform:translateZ(20px)]
        "
      />

      {/* Chimney */}
      <div
        className="
          absolute right-8 top-1
          h-8 w-5
          bg-[#8A6144]
          [transform:translateZ(22px)]
        "
      />

    </div>
  );
}

/* =============================================================
   3D TREE
============================================================= */

function Tree3D({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative h-32 w-20
        [transform-style:preserve-3d]
        ${className}
      `}
    >

      <div
        className="
          absolute bottom-0 left-8
          h-16 w-6
          rounded-b-md
          bg-[#704D35]
        "
      />

      <div
        className="
          absolute left-0 top-1
          h-16 w-16
          rounded-full
          bg-[#4D7C5A]
          shadow-[10px_10px_0_rgba(39,69,48,0.25)]
          [transform:translateZ(15px)]
        "
      />

      <div
        className="
          absolute left-7 top-7
          h-14 w-14
          rounded-full
          bg-[#668A69]
          [transform:translateZ(22px)]
        "
      />

    </div>
  );
}