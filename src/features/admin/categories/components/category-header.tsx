"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryHeaderProps {
  onCreate: () => void;
}

export function CategoryHeader({
  onCreate,
}: CategoryHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-[#4D7C5A]">
          Content Management
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#3F3F2F] sm:text-3xl">
          Categories
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#77776b]">
          Organize village news, articles and community content
          into manageable categories.
        </p>
      </div>

      <Button
        onClick={onCreate}
        className="bg-[#3F3F2F] text-white hover:bg-[#2f2f23]"
      >
        <Plus className="mr-2 h-4 w-4" />
        Create Category
      </Button>
    </div>
  );
}