import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

type FuelConsumptionRecord = {
  rank: number;
  vehicleId: string;
  consumptionValue: number;
  unit: string;
};

const fuelConsumption: FuelConsumptionRecord[] = [
  {
    rank: 1,
    vehicleId: "TRK-07",
    consumptionValue: 4.65,
    unit: "km/L",
  },
  {
    rank: 2,
    vehicleId: "TRK-12",
    consumptionValue: 3.21,
    unit: "km/L",
  },
  {
    rank: 3,
    vehicleId: "TRK-03",
    consumptionValue: 2.85,
    unit: "km/L",
  },
  {
    rank: 4,
    vehicleId: "TRK-18",
    consumptionValue: 2.45,
    unit: "km/L",
  },
  {
    rank: 5,
    vehicleId: "TRK-21",
    consumptionValue: 1.98,
    unit: "km/L",
  },
];

export default function FuelConsumption() {
  const maxConsumption = Math.max(
    ...fuelConsumption.map((record) => record.consumptionValue)
  );

  return (
    <Card className="h-full w-full rounded-xl">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold">
            Fuel Consumption
          </CardTitle>

          <CardDescription className="text-xs">
            Fuel efficiency by vehicle
          </CardDescription>
        </div>

        <Link
          href="/dashboard/fuel-consumption"
          className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          View All
        </Link>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-5">
          {fuelConsumption.map((record) => {
            const progress = (record.consumptionValue / maxConsumption) * 10;
            return (
              <div
                key={record.vehicleId}
                className="grid grid-cols-[32px_70px_1fr_auto] items-center gap-3"
              >
                {/* Rank */}
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted text-xs font-semibold">
                  {record.rank}
                </div>

                {/* Vehicle */}
                <span className="text-sm font-medium">
                  {record.vehicleId}
                </span>

                {/* Progress */}
                <div className="flex items-center">
                  <Progress
                    value={progress}
                    className="h-2"
                  />
                </div>

                {/* Value */}
                <div className="min-w-[58px] text-right">
                  <span className="text-sm font-semibold">
                    {record.consumptionValue}
                  </span>

                  <span className="ml-1 text-xs text-muted-foreground">
                    {record.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}