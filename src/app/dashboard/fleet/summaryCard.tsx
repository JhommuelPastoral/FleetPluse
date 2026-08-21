import {
  Activity,
  CirclePause,
  CircleX,
  Truck,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

type Data = {
  label: string;
  count: number | string;
  description: string;
  icon: React.JSX.Element;
};

const SampleData: Data[] = [
  {
    label: "Total Vehicles",
    count: 48,
    description: "All registered vehicles",
    icon: <Truck className="text-blue-500" />,
  },
  {
    label: "Active",
    count: 32,
    description: "Currently on the road",
    icon: <Activity className="text-green-500" />,
  },
  {
    label: "Idle",
    count: 7,
    description: "Currently not moving",
    icon: <CirclePause className="text-yellow-500" />,
  },
  {
    label: "Maintenance",
    count: 5,
    description: "Currently being serviced",
    icon: <Wrench className="text-orange-500" />,
  },
  {
    label: "Offline",
    count: 4,
    description: "No connection",
    icon: <CircleX className="text-red-500" />,
  },
];

export default function SummaryCard() {
  if (!SampleData) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="h-50">
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-8 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {SampleData.map((data) => (
        <Card key={data.label}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">
                {data.label}
              </CardTitle>

              {data.icon}
            </div>

            <CardDescription>
              {data.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold tracking-tight">
              {data.count}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}