"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { day: "Monday", cost: 12500 },
  { day: "Tuesday", cost: 8400 },
  { day: "Wednesday", cost: 15200 },
  { day: "Thursday", cost: 9800 },
  { day: "Friday", cost: 18400 },
  { day: "Saturday", cost: 7200 },
  { day: "Sunday", cost: 5600 },
];

const chartConfig = {
  cost: {
    label: "Maintenance Cost",
    color: "#2563EB",
  },
} satisfies ChartConfig;

export default function MaintenanceCost() {
  const totalCost = chartData.reduce((total, item) => total + item.cost,0);

  const averageCost = totalCost / chartData.length;

  return (
    <Card className="h-full w-full rounded-xl">
      <CardHeader>
        <CardTitle>Maintenance Cost</CardTitle>

        <CardDescription>
          Daily maintenance expenses this week
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="fillCost"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-cost)"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="var(--color-cost)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>`₱${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) =>`₱${Number(value).toLocaleString()}`}
                  indicator="dashed"
                />
              }
              
            />

            <Area
              dataKey="cost"
              type="natural"
              fill="url(#fillCost)"
              fillOpacity={0.4}
              stroke="var(--color-cost)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Weekly maintenance cost: ₱
              {totalCost.toLocaleString()}
              <TrendingUp className="h-4 w-4" />
            </div>

            <div className="text-muted-foreground">
              Average: ₱{Math.round(averageCost).toLocaleString()} per day
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}