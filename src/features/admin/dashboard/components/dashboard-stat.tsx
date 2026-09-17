import {
  Newspaper,
  Users,
  Megaphone,
  CalendarDays,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total News",
    value: "128",
    change: "+12 this month",
    icon: Newspaper,
  },
  {
    title: "Users",
    value: "1,240",
    change: "+84 this month",
    icon: Users,
  },
  {
    title: "Advertisements",
    value: "24",
    change: "8 active",
    icon: Megaphone,
  },
  {
    title: "Events",
    value: "18",
    change: "5 upcoming",
    icon: CalendarDays,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="
              border-[#E5E2D8]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <CardContent className="p-5">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-xs font-medium text-[#858379]">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-black text-[#292A20]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[11px] font-medium text-[#4D7C5A]">
                    {stat.change}
                  </p>

                </div>

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-[#F5EFE1]
                    text-[#4D7C5A]
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

              </div>

            </CardContent>
          </Card>
        );
      })}

    </div>
  );
}