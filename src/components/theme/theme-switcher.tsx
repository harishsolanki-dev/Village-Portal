// "use client";

// import {
//   Monitor,
//   Moon,
//   Sun,
// } from "lucide-react";

// import {
//   useTheme,
// } from "next-themes";

// export function ThemeSwitcher() {
//   const { theme, setTheme } = useTheme();

//   const themes = [
//     {
//       value: "light",
//       label: "Light",
//       icon: Sun,
//     },
//     {
//       value: "dark",
//       label: "Dark",
//       icon: Moon,
//     },
//     {
//       value: "system",
//       label: "System",
//       icon: Monitor,
//     },
//   ];

//   return (
//     <div className="flex items-center gap-1 rounded-xl border border-[#E5E2D8] bg-white p-1 dark:border-white/10 dark:bg-white/5">
//       {themes.map((item) => {
//         const Icon = item.icon;

//         const active = theme === item.value;

//         return (
//           <button
//             key={item.value}
//             type="button"
//             title={item.label}
//             onClick={() => setTheme(item.value)}
//             className={`
//               flex h-8 w-8
//               items-center justify-center
//               rounded-lg
//               transition
//               ${
//                 active
//                   ? "bg-[#3F3F2F] text-white dark:bg-[#D99A2B]"
//                   : "text-[#77776B] hover:bg-[#F5EFE1] dark:text-white/60 dark:hover:bg-white/10"
//               }
//             `}
//           >
//             <Icon className="h-4 w-4" />
//           </button>
//         );
//       })}
//     </div>
//   );
// }
"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{
        type: "application/json",
      }}
    >
      {children}
    </NextThemesProvider>
  );
}