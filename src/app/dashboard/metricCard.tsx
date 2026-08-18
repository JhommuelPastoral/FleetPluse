import { ArrowDown, ArrowUp, Fuel, Radio, ReceiptText, Truck } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from '@/components/ui/skeleton';

type Data = {
  label: string;
  count: number | string;
  icon: React.JSX.Element;
  trendIcon: React.JSX.Element;
  trend: string;
  trendDescription: string;
};

const SampleData: Data[] = [
  {
    label: "Total Vehicles",
    count: 32,
    icon: <Truck color="blue" />,
    trendIcon: <ArrowUp color="green" />,
    trend: "2",
    trendDescription: "from last week",
  },
  {
    label: "Active Vehicles",
    count: 26,
    icon: <Radio color="green" />,
    trendIcon: <ArrowUp color="green" />,
    trend: "81%",
    trendDescription: "of total fleet",
  },
  {
    label: "Fuel Efficiency",
    count: "2.63 km/L",
    icon: <Fuel color="orange" />,
    trendIcon: <ArrowUp color="green" />,
    trend: "8%",
    trendDescription: "from last week",
  },
  {
    label: "Total Expenses",
    count: "₱284,520",
    icon: <ReceiptText color="red" />,
    trendIcon: <ArrowDown color="red" />,
    trend: "5%",
    trendDescription: "from last week",
  },
];

export default function MetricCard() {

  if(!SampleData){
    return (
      <div className="grid md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton className="h-50 bg-neutral-300 space-y-4 p-4" key={index}> 
            <Skeleton className="h-5 w-3/4 bg-neutral-400 rounded-full" />
            <Skeleton className="h-5 w-1/2 bg-neutral-400 rounded-full" />
            <Skeleton className="h-5 w-1/4 bg-neutral-400 rounded-full" />
            <Skeleton className="h-5 w-[40%] bg-neutral-400 rounded-full" />
          </Skeleton>
        ))}

      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {SampleData.map((data) => (
        <Card key={data.label}>
          <CardHeader>
            <CardTitle>{data.label}</CardTitle>
            <CardDescription>{data.trendDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {data.icon}
              <p className="text-2xl font-bold">{data.count}</p>
            </div>
          </CardContent>
          <CardFooter className="flex items-center gap-2">
            {data.trendIcon}
            <p>{data.trend}</p> 
            <p>{data.trendDescription}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}