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

import type { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#292A20]">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">

        {/* =====================================================
            LEFT BRANDING
        ===================================================== */}
        <section className="relative hidden overflow-hidden bg-[#3F3F2F] lg:flex">

          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">

            <div
              className="
                absolute -left-32 -top-32
                h-96 w-96 rounded-full
                bg-[#D99A2B]/10
                blur-3xl
                animate-auth-float
              "
            />

            <div
              className="
                absolute -bottom-40 -right-32
                h-[28rem] w-[28rem]
                rounded-full
                bg-[#4D7C5A]/20
                blur-3xl
                animate-auth-float-reverse
              "
            />

            <div
              className="
                absolute left-1/2 top-1/3
                h-72 w-72
                -translate-x-1/2
                rounded-full
                bg-[#D99A2B]/5
                blur-3xl
              "
            />

            {/* Decorative circles */}
            <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-[#D99A2B]/70 animate-pulse" />
            <div className="absolute left-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/30 animate-pulse" />
            <div className="absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-[#4D7C5A] animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <div className="animate-auth-fade-in">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-[#D99A2B]
                    text-sm font-bold
                    text-white
                    shadow-lg shadow-black/10
                  "
                >
                  VP
                </div>

                <div>
                  <p className="text-base font-semibold text-white">
                    Village Portal
                  </p>

                  <p className="text-xs text-white/50">
                    Jam Raval
                  </p>
                </div>

              </div>

            </div>

            {/* Main branding */}
            <div className="max-w-xl animate-auth-slide-up">

              <div
                className="
                  mb-5 inline-flex items-center gap-2
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-4 py-2
                  text-xs font-medium
                  tracking-wide
                  text-[#D9CFAE]
                  backdrop-blur-sm
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#D99A2B]" />
                OUR VILLAGE • OUR COMMUNITY
              </div>

              <h1
                className="
                  text-5xl font-bold
                  leading-[1.08]
                  tracking-tight
                  text-white
                  xl:text-6xl
                "
              >
                Stay connected
                <br />
                with your village.
              </h1>

              <p
                className="
                  mt-7 max-w-lg
                  text-base leading-7
                  text-white/60
                  xl:text-lg xl:leading-8
                "
              >
                Discover village news, upcoming events, community
                updates, local stories and important information —
                all in one place.
              </p>

              {/* Mini feature cards */}
              <div className="mt-9 grid max-w-md grid-cols-3 gap-3">

                <Feature
                  title="News"
                  description="Stay updated"
                />

                <Feature
                  title="Events"
                  description="Join community"
                />

                <Feature
                  title="Gallery"
                  description="Our memories"
                />

              </div>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">

              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Village Portal
              </p>

              <div className="flex items-center gap-2 text-xs text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D99A2B]" />
                Built for our village
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            RIGHT AUTH
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
          <div className="w-full max-w-md animate-auth-fade-in">
            {children}
          </div>
        </section>

      </div>
    </main>
  );
}

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div
      className="
        rounded-xl
        border border-white/10
        bg-white/5
        p-3
        backdrop-blur-sm
      "
    >
      <p className="text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-white/40">
        {description}
      </p>
    </div>
  );
}