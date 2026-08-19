import {
  Activity,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Clock3,
  TriangleAlert,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

type Data = {
  label: string;
  count: number | string;
  icon: React.JSX.Element;
  trend: string;
  trendDescription: string;
  isPositive: boolean;
  trendDirection: "up" | "down";
};

const SampleData: Data[] = [
  {
    label: "Active Trips",
    count: 18,
    icon: <Activity className="text-blue-500" />,
    trend: "12%",
    trendDescription: "from yesterday",
    isPositive: true,
    trendDirection: "up",
  },
  {
    label: "On-Time Rate",
    count: "94%",
    icon: <Clock3 className="text-green-500" />,
    trend: "2.4%",
    trendDescription: "from yesterday",
    isPositive: true,
    trendDirection: "up",
  },
  {
    label: "Delayed Trips",
    count: 3,
    icon: <TriangleAlert className="text-orange-500" />,
    trend: "1",
    trendDescription: "from yesterday",
    isPositive: false,
    trendDirection: "up",
  },
  {
    label: "Completed Today",
    count: 27,
    icon: <CheckCircle2 className="text-purple-500" />,
    trend: "8",
    trendDescription: "from yesterday",
    isPositive: true,
    trendDirection: "up",
  },
];

export default function SummaryCard() {
  if (!SampleData) {
    return (
      <div className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="h-50">
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-8 w-1/2" />
            </CardContent>

            <CardFooter>
              <Skeleton className="h-4 w-2/3" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {SampleData.map((data) => {
        const trendColor = data.isPositive
          ? "text-green-500"
          : "text-red-500";

        const TrendIcon =
          data.trendDirection === "up" ? ArrowUp : ArrowDown;

        return (
          <Card key={data.label}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  {data.label}
                </CardTitle>

                {data.icon}
              </div>

              <CardDescription>
                Operations overview
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold tracking-tight">
                {data.count}
              </p>
            </CardContent>

            <CardFooter className="flex items-center gap-2 text-sm">
              <TrendIcon className={trendColor} />

              <span className={`font-medium ${trendColor}`}>
                {data.trend}
              </span>

              <span className="text-muted-foreground">
                {data.trendDescription}
              </span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}