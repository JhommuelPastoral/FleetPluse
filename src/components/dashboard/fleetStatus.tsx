"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";
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
  {
    status: "active",
    trucks: 18,
    fill: "var(--color-active)",
  },
  {
    status: "idle",
    trucks: 7,
    fill: "var(--color-idle)",
  },
  {
    status: "maintenance",
    trucks: 3,
    fill: "var(--color-maintenance)",
  },
  {
    status: "offline",
    trucks: 2,
    fill: "var(--color-offline)",
  },
];

const chartConfig = {
  
  active: {
    label: "Active",
    color: "#2563EB", // blue-600
  },

  idle: {
    label: "Idle",
    color: "#60A5FA", // blue-400
  },

  maintenance: {
    label: "Maintenance",
    color: "#93C5FD", // blue-300
  },

  offline: {
    label: "Offline",
    color: "#1E3A8A", // blue-900
  },
} satisfies ChartConfig;

export default function FleetStatus() {
  const totalTrucks = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.trucks, 0);
  }, []);

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>Fleet Status</CardTitle>
        <CardDescription>
          Current status of all trucks
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  />}
            />
            <Pie
              data={chartData}
              dataKey="trucks"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (
                    viewBox &&
                    "cx" in viewBox &&
                    "cy" in viewBox
                  ) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalTrucks}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Trucks
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-3">
          {chartData.map((data) => (
            <div
              key={data.status}
              className="flex items-center justify-between"
            > 
              <div className="flex items-center gap-2.5">
                <span className="text-sm capitalize text-muted-foreground">
                  {data.status}
                </span>
              </div>

              <span className="text-sm font-semibold">
                {data.trucks}
              </span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}