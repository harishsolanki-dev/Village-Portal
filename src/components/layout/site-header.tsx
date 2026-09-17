"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Directory", href: "/directory" },
  { label: "Services", href: "/services" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E4DA] bg-white/95 backdrop-blur-xl">

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >

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

            <p className="text-base font-black tracking-tight">
              Village Portal
            </p>

            <p className="text-[10px] text-[#8B897E]">
              Our Village. Our People. Our Stories.
            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">

          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                rounded-xl
                px-3 py-2
                text-xs font-semibold
                transition-all
                ${
                  index === 0
                    ? "bg-[#3F3F2F] text-white"
                    : "text-[#68675C] hover:bg-[#F4F2EA] hover:text-[#3F3F2F]"
                }
              `}
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          <button
            type="button"
            className="
              hidden h-10 w-10
              items-center justify-center
              rounded-xl
              border border-[#E5E2D8]
              bg-[#FAFAF7]
              transition
              hover:border-[#4D7C5A]
              md:flex
            "
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
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#C58A24]
              hover:shadow-md
              sm:px-5
            "
          >
            Login
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-[#E5E2D8]
              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-[#E7E4DA] bg-white px-5 py-4 lg:hidden">

          <nav className="space-y-1">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  block rounded-xl
                  px-4 py-3
                  text-sm font-semibold
                  text-[#68675C]
                  hover:bg-[#F5F3EC]
                "
              >
                {item.label}
              </Link>
            ))}

          </nav>

        </div>
      )}

    </header>
  );
}