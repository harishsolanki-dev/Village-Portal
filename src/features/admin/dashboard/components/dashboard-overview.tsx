"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Apr", visitors: 820 },
  { month: "May", visitors: 1100 },
  { month: "Jun", visitors: 980 },
  { month: "Jul", visitors: 1450 },
  { month: "Aug", visitors: 1720 },
  { month: "Sep", visitors: 2140 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#4D7C5A",
  },
};

export function DashboardOverview() {
  return (
    <Card className="border-[#E5E2D8] shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-base font-bold">
              Portal Overview
            </CardTitle>

            <p className="mt-1 text-xs text-[#858379]">
              Village portal visitors over the last 6 months
            </p>

          </div>

          <span className="rounded-lg bg-[#F5EFE1] px-3 py-1.5 text-[10px] font-semibold text-[#4D7C5A]">
            Last 6 months
          </span>

        </div>

      </CardHeader>

      <CardContent>

        <ChartContainer
          config={chartConfig}
          className="h-[280px] w-full"
        >

          <AreaChart data={data}>

            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <Area
              type="monotone"
              dataKey="visitors"
              stroke="var(--color-visitors)"
              fill="var(--color-visitors)"
              fillOpacity={0.12}
              strokeWidth={2}
            />

          </AreaChart>

        </ChartContainer>

      </CardContent>

    </Card>
  );
}