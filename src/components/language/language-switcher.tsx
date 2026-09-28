// "use client";

// import { Languages, Check } from "lucide-react";

// import { useLanguage } from "@/src/components/i18n/language-provider";
// import { languages } from "@/src/components/i18n/config";

// export function LanguageSwitcher() {
//   const { language, setLanguage } =
//     useLanguage();

//   return (
//     <div className="relative">
//       <details className="group">
//         <summary
//           className="
//             flex cursor-pointer list-none
//             items-center gap-2
//             rounded-xl
//             border border-[#E5E2D8]
//             bg-white px-3 py-2
//             text-xs font-semibold
//             text-[#3F3F2F]
//             transition
//             hover:bg-[#FAFAF7]
//             dark:border-white/10
//             dark:bg-white/5
//             dark:text-white
//             dark:hover:bg-white/10
//           "
//         >
//           <Languages className="h-4 w-4" />

//           <span>
//             {language === "en"
//               ? "English"
//               : "ગુજરાતી"}
//           </span>

//           <span className="text-[10px]">
//             ▾
//           </span>
//         </summary>

//         <div
//           className="
//             absolute right-0 z-50 mt-2
//             w-40 overflow-hidden
//             rounded-xl
//             border border-[#E5E2D8]
//             bg-white
//             p-1
//             shadow-xl
//             dark:border-white/10
//             dark:bg-[#292A20]
//           "
//         >
//           {Object.values(languages).map(
//             (item) => {
//               const active =
//                 language === item.code;

//               return (
//                 <button
//                   key={item.code}
//                   type="button"
//                   onClick={() =>
//                     setLanguage(item.code)
//                   }
//                   className="
//                     flex w-full items-center
//                     justify-between
//                     rounded-lg
//                     px-3 py-2.5
//                     text-left text-xs
//                     font-medium
//                     transition
//                     hover:bg-[#F5EFE1]
//                     dark:hover:bg-white/10
//                   "
//                 >
//                   <span>
//                     {item.nativeLabel}
//                   </span>

//                   {active && (
//                     <Check className="h-4 w-4 text-[#4D7C5A]" />
//                   )}
//                 </button>
//               );
//             }
//           )}
//         </div>
//       </details>
//     </div>
//   );
// }


"use client";

import { Languages } from "lucide-react";

import { useLanguage } from "../i18n/language-provider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="
            h-10
            rounded-xl
            gap-2
            border-border
            bg-background
            text-foreground
            hover:bg-muted
          "
        >
          <Languages className="h-4 w-4" />

          {language === "en"
            ? "English"
            : "ગુજરાતી"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
        >
          🇬🇧 {t.language.english}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setLanguage("gu")}
        >
          🇮🇳 {t.language.gujarati}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}