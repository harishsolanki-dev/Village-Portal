"use client";

import {
  FolderTree,
  CheckCircle2,
  CircleOff,
  Trash2,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface CategoryStatsProps {
  total: number;
  active: number;
  inactive: number;
  deleted: number;
}

export function CategoryStats({
  total,
  active,
  inactive,
  deleted,
}: CategoryStatsProps) {
  const stats = [
    {
      label: "Total Categories",
      value: total,
      icon: FolderTree,
    },
    {
      label: "Active",
      value: active,
      icon: CheckCircle2,
    },
    {
      label: "Inactive",
      value: inactive,
      icon: CircleOff,
    },
    {
      label: "Deleted",
      value: deleted,
      icon: Trash2,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.label}
            className="border-[#e7e5dc] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-[#77776b]">
                  {stat.label}
                </p>

                <p className="mt-2 text-3xl font-bold text-[#3F3F2F]">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4D7C5A]/10">
                <Icon className="h-5 w-5 text-[#4D7C5A]" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}