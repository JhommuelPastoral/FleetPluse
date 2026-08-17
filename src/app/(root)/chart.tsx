"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { day: "1", cost: 12500 },
  { day: "3", cost: 18400 },
  { day: "5", cost: 9200 },
  { day: "7", cost: 22100 },
  { day: "9", cost: 14600 },
  { day: "11", cost: 19800 },
  { day: "13", cost: 11700 },
  { day: "15", cost: 25300 },
  { day: "17", cost: 13900 },
  { day: "19", cost: 21700 },
  { day: "21", cost: 10800 },
  { day: "23", cost: 26900 },
  { day: "25", cost: 16100 },
  { day: "27", cost: 22420 },
  { day: "30", cost: 19100 },
];

const chartConfig = {
  cost: {
    label: "Fuel cost",
    color: "#2e89ff",
  },
} satisfies ChartConfig;

export default function FuelChart() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-400">
          Fuel cost this month
        </p>

        <div className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ₱284,520
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="font-semibold text-lime-400">
            ↓ 12%
          </span>

          <span className="text-slate-400">
            vs last month
          </span>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-5">
        <ChartContainer
          config={chartConfig}
          className="h-[180px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 8,
              right: 4,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="fuelGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-cost)"
                  stopOpacity={0.3}
                />

                <stop
                  offset="100%"
                  stopColor="var(--color-cost)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,0.045)"
              strokeDasharray="3 6"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              interval={0}
              tick={{
                fill: "#64748b",
                fontSize: 10,
                fontWeight: 500,
              }}
            />

            <ChartTooltip
              cursor={{
                stroke: "rgba(46,137,255,0.3)",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              content={
                <ChartTooltipContent
                  hideLabel
                  indicator="line"
                  formatter={(value) => (
                    <span className="font-semibold text-primary">
                      ₱{Number(value).toLocaleString()}
                    </span>
                  )}
                />
              }
            />

            <Area
              dataKey="cost"
              type="natural"
              stroke="var(--color-cost)"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#fuelGradient)"
              fillOpacity={1}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}