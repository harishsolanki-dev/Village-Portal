"use client";

import { Search, RotateCcw } from "lucide-react";

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
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#e7e5dc] bg-white p-4 shadow-sm sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8a7d]" />

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search categories..."
          className="border-[#deddd3] bg-[#FAFAF7] pl-9 focus-visible:border-[#4D7C5A] focus-visible:ring-[#4D7C5A]/20"
        />
      </div>

      <Button
        variant="outline"
        onClick={onReset}
        className="border-[#deddd3]"
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset
      </Button>
    </div>
  );
}