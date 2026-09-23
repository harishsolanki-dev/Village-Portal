"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Users,
  Shield,
  KeyRound,
  Video,
  Images,
  Megaphone,
  BriefcaseBusiness,
  Settings,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
   {
    label: "Categories",
    href: "/admin/categories",
    icon: LayoutDashboard,
  },
  {
    label: "News",
    href: "/admin/news",
    icon: Newspaper,
  },
  {
    label: "Videos",
    href: "/admin/videos",
    icon: Video,
  },
  {
    label: "Gallery",
    href: "/admin/gallery",
    icon: Images,
  },
];

const community = [
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Roles",
    href: "/admin/roles",
    icon: Shield,
  },
  {
    label: "Permissions",
    href: "/admin/permissions",
    icon: KeyRound,
  },
];

const business = [
  {
    label: "Advertisements",
    href: "/admin/advertisements",
    icon: Megaphone,
  },
  {
    label: "Campaigns",
    href: "/admin/campaigns",
    icon: BriefcaseBusiness,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed inset-y-0 left-0 z-40
        hidden w-64
        border-r border-[#E5E2D8]
        bg-[#3F3F2F]
        lg:block
      "
    >

      {/* Brand */}
      <div className="flex h-20 items-center gap-3 px-6">

        <div
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            bg-[#D99A2B]
            text-lg
          "
        >
          🏡
        </div>

        <div>
          <p className="font-black text-white">
            Village Portal
          </p>

          <p className="text-[10px] text-white/40">
            Administration
          </p>
        </div>

      </div>

      <div className="px-3 py-4">

        <SidebarGroup
          title="Dashboard"
          items={navigation}
          pathname={pathname}
        />

        <SidebarGroup
          title="Community"
          items={community}
          pathname={pathname}
        />

        <SidebarGroup
          title="Business"
          items={business}
          pathname={pathname}
        />

        <div className="mt-6 border-t border-white/10 pt-4">

          <Link
            href="/admin/settings"
            className={`
              flex items-center gap-3
              rounded-xl px-3 py-2.5
              text-sm font-medium
              transition
              ${
                pathname === "/admin/settings"
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <Settings className="h-4 w-4" />

            Settings
          </Link>

        </div>

      </div>

      {/* User */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">

        <div className="flex items-center gap-3">

          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              bg-[#D99A2B]
              text-xs font-bold
              text-white
            "
          >
            HS
          </div>

          <div className="min-w-0">

            <p className="truncate text-xs font-semibold text-white">
              Harish Solanki
            </p>

            <p className="text-[10px] text-white/40">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

function SidebarGroup({
  title,
  items,
  pathname,
}: {
  title: string;
  items: typeof navigation;
  pathname: string;
}) {
  return (
    <div className="mb-5">

      <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
        {title}
      </p>

      <div className="space-y-1">

        {items.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/admin" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group flex items-center
                justify-between
                rounded-xl px-3 py-2.5
                text-sm font-medium
                transition-all
                ${
                  active
                    ? "bg-[#D99A2B] text-white shadow-lg shadow-black/10"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }
              `}
            >

              <span className="flex items-center gap-3">

                <Icon className="h-4 w-4" />

                {item.label}

              </span>

              {active && (
                <ChevronRight className="h-3.5 w-3.5" />
              )}

            </Link>
          );
        })}

      </div>

    </div>
  );
}