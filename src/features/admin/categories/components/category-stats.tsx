// "use client";

// import {
//   FolderTree,
//   CheckCircle2,
//   CircleOff,
//   Trash2,
// } from "lucide-react";

// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";

// interface CategoryStatsProps {
//   total: number;
//   active: number;
//   inactive: number;
//   deleted: number;
// }

// export function CategoryStats({
//   total,
//   active,
//   inactive,
//   deleted,
// }: CategoryStatsProps) {
//   const stats = [
//     {
//       label: "Total Categories",
//       value: total,
//       icon: FolderTree,
//     },
//     {
//       label: "Active",
//       value: active,
//       icon: CheckCircle2,
//     },
//     {
//       label: "Inactive",
//       value: inactive,
//       icon: CircleOff,
//     },
//     {
//       label: "Deleted",
//       value: deleted,
//       icon: Trash2,
//     },
//   ];

//   return (
//     <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//       {stats.map((stat) => {
//         const Icon = stat.icon;

//         return (
//           <Card
//             key={stat.label}
//             className="border-[#e7e5dc] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//           >
//             <CardContent className="flex items-center justify-between p-5">
//               <div>
//                 <p className="text-sm text-[#77776b]">
//                   {stat.label}
//                 </p>

//                 <p className="mt-2 text-3xl font-bold text-[#3F3F2F]">
//                   {stat.value}
//                 </p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4D7C5A]/10">
//                 <Icon className="h-5 w-5 text-[#4D7C5A]" />
//               </div>
//             </CardContent>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import {
  FolderTree,
  CheckCircle2,
  CircleOff,
  Trash2,
  type LucideIcon,
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

interface StatItem {
  label: string;
  value: number;
  icon: LucideIcon;
  description: string;
  iconWrapper: string;
  iconColor: string;
}

export function CategoryStats({
  total,
  active,
  inactive,
  deleted,
}: CategoryStatsProps) {
  const stats: StatItem[] = [
    {
      label: "Total Categories",
      value: total,
      icon: FolderTree,
      description: "All categories",
      iconWrapper: "bg-[#4D7C5A]/10",
      iconColor: "text-[#4D7C5A]",
    },
    {
      label: "Active",
      value: active,
      icon: CheckCircle2,
      description: "Currently active",
      iconWrapper: "bg-[#4D7C5A]/10",
      iconColor: "text-[#4D7C5A]",
    },
    {
      label: "Inactive",
      value: inactive,
      icon: CircleOff,
      description: "Currently inactive",
      iconWrapper: "bg-[#B58A3A]/10",
      iconColor: "text-[#B58A3A]",
    },
    {
      label: "Deleted",
      value: deleted,
      icon: Trash2,
      description: "In recycle bin",
      iconWrapper: "bg-[#B85450]/10",
      iconColor: "text-[#B85450]",
    },
  ];

  return (
    <section
      aria-label="Category statistics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.label}
            className="
              group
              border-[#E7E5DC]
              bg-white
              shadow-[0_1px_3px_rgba(0,0,0,0.04)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-[#D8D5C9]
              hover:shadow-[0_8px_24px_rgba(63,63,47,0.08)]
            "
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                {/* Content */}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#77776B]">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-3xl font-bold tracking-tight text-[#3F3F2F]">
                    {stat.value.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-[#9A998E]">
                    {stat.description}
                  </p>
                </div>

                {/* Icon */}
                <div
                  className={`
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-xl
                    ${stat.iconWrapper}
                    transition-transform
                    duration-200
                    group-hover:scale-105
                  `}
                >
                  <Icon
                    className={`h-5 w-5 ${stat.iconColor}`}
                    strokeWidth={1.8}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}