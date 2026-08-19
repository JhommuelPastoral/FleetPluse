import { Truck } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type TripStatus = "En Route" | "Delayed" | "Loading";

type Trip = {
  id: string;
  route: string;
  status: TripStatus;
  statusBadgeColor: string;
  iconColor: string;
  progress: number;
};

const tripsData: Trip[] = [
  {
    id: "HV-204",
    route: "Davao → Tagum",
    status: "En Route",
    statusBadgeColor: "bg-green-100 text-green-700",
    iconColor: "text-green-600",
    progress: 72,
  },
  {
    id: "HV-118",
    route: "Davao → Panabo",
    status: "Delayed",
    statusBadgeColor: "bg-red-100 text-red-600",
    iconColor: "text-red-500",
    progress: 48,
  },
  {
    id: "HV-092",
    route: "Digos → Davao",
    status: "Loading",
    statusBadgeColor: "bg-orange-100 text-orange-600",
    iconColor: "text-orange-400",
    progress: 45,
  },
  {
    id: "HV-031",
    route: "Davao → Mati",
    status: "En Route",
    statusBadgeColor: "bg-blue-100 text-blue-700",
    iconColor: "text-blue-600",
    progress: 35,
  },
];

export default function ActiveTrips() {
  return (
    <Card className="h-full w-full overflow-y-scroll scrollbar-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Active Trips</CardTitle>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View all
        </button>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          {tripsData.map((trip, index) => (
            <div
              key={trip.id}
              className={`flex flex-col gap-3 py-4 ${
                index !== tripsData.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Vehicle + Route + Status */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-9 items-center justify-center rounded-lg bg-muted ${trip.iconColor}`}
                  >
                    <Truck size={18} />
                  </div>

                  <div>
                    <p className="font-semibold">{trip.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {trip.route}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold ${trip.statusBadgeColor}`}
                >
                  {trip.status}
                </span>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-3">
                <Progress value={trip.progress} className="h-1.5" />

                <span className="w-8 text-right text-xs font-medium text-muted-foreground">
                  {trip.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}