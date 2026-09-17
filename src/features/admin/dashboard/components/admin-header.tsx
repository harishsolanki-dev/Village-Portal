"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

export function AdminHeader() {
  return (
    <header
      className="
        sticky top-0 z-30
        flex h-20
        items-center justify-between
        border-b border-[#E5E2D8]
        bg-white/90
        px-4
        backdrop-blur-xl
        sm:px-6
        lg:px-8
      "
    >

      <div className="flex items-center gap-3">

        <button
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            border border-[#E5E2D8]
            lg:hidden
          "
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden sm:block">

          <p className="text-sm font-bold text-[#292A20]">
            Admin Dashboard
          </p>

          <p className="text-[11px] text-[#96948A]">
            Manage your village portal
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2">

        <button
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-[#77766B]
            transition
            hover:bg-[#F5F3EC]
          "
        >
          <Search className="h-4 w-4" />
        </button>

        <button
          className="
            relative
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-[#77766B]
            transition
            hover:bg-[#F5F3EC]
          "
        >
          <Bell className="h-4 w-4" />

          <span
            className="
              absolute right-2 top-2
              h-1.5 w-1.5
              rounded-full
              bg-[#D99A2B]
            "
          />
        </button>

      </div>

    </header>
  );
}