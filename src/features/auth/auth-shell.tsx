// import type { ReactNode } from "react";

// interface AuthShellProps {
//   children: ReactNode;
// }

// export function AuthShell({ children }: AuthShellProps) {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       <div className="grid min-h-screen lg:grid-cols-2">

//         {/* Left Branding Section */}
//         <section className="relative hidden overflow-hidden bg-slate-950 lg:flex">
//           <div className="absolute inset-0">
//             <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
//             <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
//           </div>

//           <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

//             {/* Logo */}
//             <div>
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-slate-950">
//                   VP
//                 </div>

//                 <div>
//                   <p className="font-semibold text-white">
//                     Village Portal
//                   </p>

//                   <p className="text-xs text-slate-400">
//                     Jam Raval
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-xl">
//               <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
//                 Our Village • Our Community
//               </p>

//               <h1 className="text-5xl font-bold leading-tight tracking-tight text-white xl:text-6xl">
//                 Stay connected
//                 <br />
//                 with your village.
//               </h1>

//               <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
//                 Discover the latest village news, events, videos,
//                 gallery updates and important community information.
//               </p>
//             </div>

//             {/* Footer */}
//             <p className="text-sm text-slate-500">
//               © {new Date().getFullYear()} Village Portal
//             </p>
//           </div>
//         </section>

//         {/* Right Authentication Section */}
//         <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
//           <div className="w-full max-w-md">
//             {children}
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

// import type { ReactNode } from "react";

// interface AuthShellProps {
//   children: ReactNode;
// }

// export function AuthShell({ children }: AuthShellProps) {
//   return (
//     <main className="min-h-screen bg-[#FAFAF7] text-[#292A20]">
//       <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">

//         {/* =====================================================
//             LEFT BRANDING
//         ===================================================== */}
//         <section className="relative hidden overflow-hidden bg-[#3F3F2F] lg:flex">

//           {/* Animated background shapes */}
//           <div className="absolute inset-0 overflow-hidden">

//             <div
//               className="
//                 absolute -left-32 -top-32
//                 h-96 w-96 rounded-full
//                 bg-[#D99A2B]/10
//                 blur-3xl
//                 animate-auth-float
//               "
//             />

//             <div
//               className="
//                 absolute -bottom-40 -right-32
//                 h-[28rem] w-[28rem]
//                 rounded-full
//                 bg-[#4D7C5A]/20
//                 blur-3xl
//                 animate-auth-float-reverse
//               "
//             />

//             <div
//               className="
//                 absolute left-1/2 top-1/3
//                 h-72 w-72
//                 -translate-x-1/2
//                 rounded-full
//                 bg-[#D99A2B]/5
//                 blur-3xl
//               "
//             />

//             {/* Decorative circles */}
//             <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-[#D99A2B]/70 animate-pulse" />
//             <div className="absolute left-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/30 animate-pulse" />
//             <div className="absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-[#4D7C5A] animate-pulse" />
//           </div>

//           {/* Content */}
//           <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

//             {/* Logo */}
//             <div className="animate-auth-fade-in">

//               <div className="flex items-center gap-3">

//                 <div
//                   className="
//                     flex h-12 w-12 items-center justify-center
//                     rounded-2xl
//                     bg-[#D99A2B]
//                     text-sm font-bold
//                     text-white
//                     shadow-lg shadow-black/10
//                   "
//                 >
//                   VP
//                 </div>

//                 <div>
//                   <p className="text-base font-semibold text-white">
//                     Village Portal
//                   </p>

//                   <p className="text-xs text-white/50">
//                     Jam Raval
//                   </p>
//                 </div>

//               </div>

//             </div>

//             {/* Main branding */}
//             <div className="max-w-xl animate-auth-slide-up">

//               <div
//                 className="
//                   mb-5 inline-flex items-center gap-2
//                   rounded-full
//                   border border-white/10
//                   bg-white/5
//                   px-4 py-2
//                   text-xs font-medium
//                   tracking-wide
//                   text-[#D9CFAE]
//                   backdrop-blur-sm
//                 "
//               >
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#D99A2B]" />
//                 OUR VILLAGE • OUR COMMUNITY
//               </div>

//               <h1
//                 className="
//                   text-5xl font-bold
//                   leading-[1.08]
//                   tracking-tight
//                   text-white
//                   xl:text-6xl
//                 "
//               >
//                 Stay connected
//                 <br />
//                 with your village.
//               </h1>

//               <p
//                 className="
//                   mt-7 max-w-lg
//                   text-base leading-7
//                   text-white/60
//                   xl:text-lg xl:leading-8
//                 "
//               >
//                 Discover village news, upcoming events, community
//                 updates, local stories and important information —
//                 all in one place.
//               </p>

//               {/* Mini feature cards */}
//               <div className="mt-9 grid max-w-md grid-cols-3 gap-3">

//                 <Feature
//                   title="News"
//                   description="Stay updated"
//                 />

//                 <Feature
//                   title="Events"
//                   description="Join community"
//                 />

//                 <Feature
//                   title="Gallery"
//                   description="Our memories"
//                 />

//               </div>

//             </div>

//             {/* Footer */}
//             <div className="flex items-center justify-between">

//               <p className="text-xs text-white/35">
//                 © {new Date().getFullYear()} Village Portal
//               </p>

//               <div className="flex items-center gap-2 text-xs text-white/35">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#D99A2B]" />
//                 Built for our village
//               </div>

//             </div>

//           </div>
//         </section>

//         {/* =====================================================
//             RIGHT AUTH
//         ===================================================== */}
//         <section
//           className="
//             flex min-h-screen
//             items-center justify-center
//             px-5 py-10
//             sm:px-8
//             lg:px-12
//             xl:px-20
//           "
//         >
//           <div className="w-full max-w-md animate-auth-fade-in">
//             {children}
//           </div>
//         </section>

//       </div>
//     </main>
//   );
// }

// interface FeatureProps {
//   title: string;
//   description: string;
// }

// function Feature({ title, description }: FeatureProps) {
//   return (
//     <div
//       className="
//         rounded-xl
//         border border-white/10
//         bg-white/5
//         p-3
//         backdrop-blur-sm
//       "
//     >
//       <p className="text-sm font-semibold text-white">
//         {title}
//       </p>

//       <p className="mt-1 text-[10px] text-white/40">
//         {description}
//       </p>
//     </div>
//   );
// }

import type { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF7]">
      <div className="grid min-h-screen lg:grid-cols-[1.15fr_0.85fr]">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <section className="relative hidden overflow-hidden bg-[#3F3F2F] lg:block">

          {/* Ambient background */}
          <div className="absolute inset-0">

            <div
              className="
                absolute -left-40 -top-40
                h-[500px] w-[500px]
                rounded-full
                bg-[#D99A2B]/10
                blur-[100px]
                animate-[orbFloat_10s_ease-in-out_infinite]
              "
            />

            <div
              className="
                absolute -bottom-40 -right-40
                h-[500px] w-[500px]
                rounded-full
                bg-[#4D7C5A]/20
                blur-[100px]
                animate-[orbFloatReverse_12s_ease-in-out_infinite]
              "
            />

          </div>

          {/* Decorative grid */}
          <div
            className="
              absolute inset-0
              opacity-[0.035]
              [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col p-10 xl:p-16">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl
                  bg-[#D99A2B]
                  text-sm font-black
                  text-white
                  shadow-xl shadow-black/20
                  transition-transform duration-500
                  hover:rotate-6 hover:scale-105
                "
              >
                VP
              </div>

              <div>
                <h2 className="font-bold text-white">
                  Village Portal
                </h2>

                <p className="text-xs text-white/45">
                  Jam Raval
                </p>
              </div>

            </div>

            {/* Main */}
            <div className="relative flex flex-1 items-center">

              <div className="w-full max-w-2xl">

                {/* Badge */}
                <div
                  className="
                    mb-6 inline-flex items-center gap-2
                    rounded-full
                    border border-white/10
                    bg-white/[0.06]
                    px-4 py-2
                    text-xs font-medium
                    text-[#D9CFAE]
                    backdrop-blur-md
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="
                        absolute inline-flex h-full w-full
                        animate-ping rounded-full
                        bg-[#D99A2B] opacity-60
                      "
                    />

                    <span className="relative h-2 w-2 rounded-full bg-[#D99A2B]" />
                  </span>

                  OUR VILLAGE • OUR COMMUNITY
                </div>

                <h1
                  className="
                    max-w-xl
                    text-5xl font-black
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white
                    xl:text-7xl
                  "
                >
                  Your village.
                  <br />

                  <span className="text-[#D99A2B]">
                    Your community.
                  </span>
                </h1>

                <p
                  className="
                    mt-7 max-w-xl
                    text-base leading-7
                    text-white/55
                    xl:text-lg
                  "
                >
                  One simple place to discover local news,
                  events, stories, photos and important community
                  updates.
                </p>

                {/* =================================================
                    3D VILLAGE
                ================================================= */}
                <div className="relative mt-10 h-56 w-full max-w-xl">

                  {/* Moon / Sun */}
                  <div
                    className="
                      absolute right-20 top-3
                      h-16 w-16
                      rounded-full
                      bg-[#D99A2B]
                      shadow-[0_0_60px_rgba(217,154,43,0.25)]
                      animate-[sunFloat_6s_ease-in-out_infinite]
                    "
                  />

                  {/* Cloud */}
                  <div
                    className="
                      absolute left-12 top-8
                      h-5 w-24
                      rounded-full
                      bg-white/10
                      blur-[1px]
                      animate-[cloudMove_12s_linear_infinite]
                    "
                  />

                  {/* 3D ground */}
                  <div
                    className="
                      absolute bottom-3 left-0 right-0
                      h-24
                      rounded-[50%]
                      bg-[#4D7C5A]/30
                      [transform:rotateX(60deg)]
                      [transform-style:preserve-3d]
                    "
                  />

                  {/* House 1 */}
                  <VillageHouse
                    className="
                      absolute bottom-12 left-[18%]
                      animate-[houseFloat_5s_ease-in-out_infinite]
                    "
                    scale="large"
                  />

                  {/* House 2 */}
                  <VillageHouse
                    className="
                      absolute bottom-14 left-[47%]
                      scale-75
                      animate-[houseFloat_6s_ease-in-out_0.5s_infinite]
                    "
                  />

                  {/* Tree */}
                  <VillageTree
                    className="
                      absolute bottom-10 right-[18%]
                      animate-[treeFloat_5s_ease-in-out_1s_infinite]
                    "
                  />

                  {/* Small tree */}
                  <VillageTree
                    className="
                      absolute bottom-9 left-[65%]
                      scale-75
                      animate-[treeFloat_6s_ease-in-out_0.3s_infinite]
                    "
                  />

                </div>

                {/* Feature pills */}
                <div className="mt-2 flex flex-wrap gap-3">

                  <FeaturePill>
                    📰 Local News
                  </FeaturePill>

                  <FeaturePill>
                    📅 Village Events
                  </FeaturePill>

                  <FeaturePill>
                    📷 Memories
                  </FeaturePill>

                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between">

              <p className="text-xs text-white/30">
                © {new Date().getFullYear()} Village Portal
              </p>

              <p className="text-xs text-white/30">
                Built for our community
              </p>

            </div>

          </div>
        </section>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
        <section
          className="
            flex min-h-screen
            items-center justify-center
            px-5 py-10
            sm:px-8
            lg:px-12
            xl:px-20
          "
        >
          <div
            className="
              w-full max-w-[430px]
              animate-[authEnter_0.7s_ease-out]
            "
          >

            {/* Mobile branding */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-2xl
                  bg-[#3F3F2F]
                  text-sm font-black
                  text-white
                  shadow-lg
                "
              >
                VP
              </div>

              <div>
                <p className="font-bold text-[#292A20]">
                  Village Portal
                </p>

                <p className="text-xs text-[#8A897D]">
                  Jam Raval
                </p>
              </div>

            </div>

            {/* Auth card */}
            <div
              className="
                rounded-[28px]
                border border-[#E5E2D8]
                bg-white
                p-6
                shadow-[0_20px_70px_rgba(63,63,47,0.08)]
                sm:p-9
              "
            >
              {children}
            </div>

            {/* Bottom */}
            <p className="mt-6 text-center text-xs text-[#99988D]">
              A free community platform for our village.
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}

/* =============================================================
   3D HOUSE
============================================================= */

function VillageHouse({
  className = "",
  scale,
}: {
  className?: string;
  scale?: "large";
}) {
  return (
    <div
      className={`
        relative
        h-24 w-28
        [transform-style:preserve-3d]
        ${scale === "large" ? "scale-110" : ""}
        ${className}
      `}
    >
      {/* House body */}
      <div
        className="
          absolute bottom-0 left-3
          h-16 w-20
          rounded-sm
          bg-[#E8D9B8]
          shadow-xl
          [transform:translateZ(12px)]
        "
      >

        {/* Door */}
        <div
          className="
            absolute bottom-0 left-7
            h-9 w-7
            rounded-t-sm
            bg-[#704D35]
          "
        />

        {/* Window */}
        <div
          className="
            absolute left-2 top-4
            h-7 w-7
            rounded-sm
            border-2 border-[#4D7C5A]
            bg-[#9CB7A0]
          "
        />

      </div>

      {/* Roof */}
      <div
        className="
          absolute left-1 top-1
          h-0 w-0
          border-l-[47px]
          border-r-[47px]
          border-b-[48px]
          border-l-transparent
          border-r-transparent
          border-b-[#704D35]
          [transform:translateZ(20px)]
        "
      />

      {/* Chimney */}
      <div
        className="
          absolute right-7 top-2
          h-7 w-4
          bg-[#8C6345]
          [transform:translateZ(22px)]
        "
      />

    </div>
  );
}

/* =============================================================
   3D TREE
============================================================= */

function VillageTree({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative h-24 w-16
        [transform-style:preserve-3d]
        ${className}
      `}
    >

      {/* Trunk */}
      <div
        className="
          absolute bottom-0 left-7
          h-12 w-5
          rounded-b-md
          bg-[#704D35]
        "
      />

      {/* Leaves */}
      <div
        className="
          absolute left-0 top-0
          h-14 w-14
          rounded-full
          bg-[#4D7C5A]
          shadow-[8px_8px_0_rgba(39,69,48,0.25)]
          [transform:translateZ(15px)]
        "
      />

      <div
        className="
          absolute left-5 top-5
          h-12 w-12
          rounded-full
          bg-[#668A69]
          [transform:translateZ(20px)]
        "
      />

    </div>
  );
}

/* =============================================================
   FEATURE PILL
============================================================= */

function FeaturePill({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
        rounded-full
        border border-white/10
        bg-white/[0.05]
        px-4 py-2
        text-xs font-medium
        text-white/60
        backdrop-blur-md
      "
    >
      {children}
    </div>
  );
}