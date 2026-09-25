// "use client";

// import { Search, RotateCcw } from "lucide-react";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// interface CategoryToolbarProps {
//   search: string;
//   onSearchChange: (value: string) => void;
//   onReset: () => void;
// }

// export function CategoryToolbar({
//   search,
//   onSearchChange,
//   onReset,
// }: CategoryToolbarProps) {
//   return (
//     <div className="flex flex-col gap-3 rounded-2xl border border-[#e7e5dc] bg-white p-4 shadow-sm sm:flex-row">
//       <div className="relative flex-1">
//         <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8a7d]" />

//         <Input
//           value={search}
//           onChange={(e) => onSearchChange(e.target.value)}
//           placeholder="Search categories..."
//           className="border-[#deddd3] bg-[#FAFAF7] pl-9 focus-visible:border-[#4D7C5A] focus-visible:ring-[#4D7C5A]/20"
//         />
//       </div>

//       <Button
//         variant="outline"
//         onClick={onReset}
//         className="border-[#deddd3]"
//       >
//         <RotateCcw className="mr-2 h-4 w-4" />
//         Reset
//       </Button>
//     </div>
//   );
// }

"use client";

import {
  Search,
  RotateCcw,
  X,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CategoryToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
}

export function CategoryToolbar({
  search,
  onSearchChange,
  onReset,
}: CategoryToolbarProps) {
  const hasSearch = search.trim().length > 0;

  return (
    <div
      className="
        rounded-2xl
        border border-[#E7E5DC]
        bg-white
        p-3
        shadow-[0_1px_3px_rgba(0,0,0,0.04)]
        sm:p-4
      "
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            className="
              pointer-events-none
              absolute
              left-3.5
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-[#8A8A7D]
            "
            strokeWidth={1.8}
          />

          <Input
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search categories by name or slug..."
            aria-label="Search categories"
            className="
              h-10
              border-[#E1DFD6]
              bg-[#FAFAF7]
              pl-10
              pr-10
              text-sm
              text-[#3F3F2F]
              placeholder:text-[#9A998E]
              transition-all
              focus-visible:border-[#4D7C5A]
              focus-visible:bg-white
              focus-visible:ring-2
              focus-visible:ring-[#4D7C5A]/10
            "
          />

          {/* Clear search */}
          {hasSearch && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-6
                w-6
                -translate-y-1/2
                items-center
                justify-center
                rounded-md
                text-[#8A8A7D]
                transition-colors
                hover:bg-[#EDEBE3]
                hover:text-[#3F3F2F]
              "
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Reset */}
        <Button
          type="button"
          variant="outline"
          onClick={onReset}
          className="
            h-10
            shrink-0
            border-[#DEDCD2]
            bg-white
            px-4
            text-sm
            font-medium
            text-[#3F3F2F]
            transition-all
            hover:border-[#C9C6B9]
            hover:bg-[#F7F6F1]
            hover:text-[#3F3F2F]
          "
        >
          <RotateCcw
            className="mr-2 h-4 w-4"
            strokeWidth={1.8}
          />

          Reset
        </Button>
      </div>

      {/* Search result state */}
      {hasSearch && (
        <div className="mt-3 flex items-center gap-2 px-1">
          <span className="text-xs text-[#8A8A7D]">
            Searching for
          </span>

          <span
            className="
              max-w-[240px]
              truncate
              rounded-md
              bg-[#4D7C5A]/8
              px-2
              py-1
              text-xs
              font-medium
              text-[#4D7C5A]
            "
          >
            "{search.trim()}"
          </span>
        </div>
      )}
    </div>
  );
}