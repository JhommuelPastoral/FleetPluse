import {
  CalendarDays,
  ChevronRight,
  Clock3,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Maintenance = {
  vehicle: string;
  type: string;
  due: string;
  priority: "High" | "Medium" | "Low";
};

const maintenanceData: Maintenance[] = [
  {
    vehicle: "TRK-1024",
    type: "Oil Change",
    due: "Tomorrow",
    priority: "High",
  },
  {
    vehicle: "TRK-1087",
    type: "Brake Inspection",
    due: "Aug 24",
    priority: "Medium",
  },
  {
    vehicle: "TRK-1042",
    type: "Tire Replacement",
    due: "Aug 27",
    priority: "Medium",
  },
  {
    vehicle: "TRK-1103",
    type: "Full Service",
    due: "Sep 02",
    priority: "Low",
  },
];

const priorityStyles = {
  High: "border-red-200 bg-red-50 text-red-600",
  Medium: "border-yellow-200 bg-yellow-50 text-yellow-600",
  Low: "border-green-200 bg-green-50 text-green-600",
};

export default function UpcomingMaintenance() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-base">
            Upcoming Maintenance
          </CardTitle>

          <p className="mt-1 text-xs text-muted-foreground">
            Scheduled vehicle service
          </p>
        </div>

        <Wrench className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-3">
        {maintenanceData.map((maintenance) => (
          <div
            key={maintenance.vehicle}
            className="flex items-center justify-between gap-3 rounded-lg border p-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  {maintenance.vehicle}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {maintenance.type}
                </p>

                <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                  <CalendarDays className="h-3 w-3" />
                  {maintenance.due}
                </div>
              </div>
            </div>

            <Badge
              variant="outline"
              className={priorityStyles[maintenance.priority]}
            >
              {maintenance.priority}
            </Badge>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full text-xs"
        >
          View Maintenance Schedule
          <ChevronRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </CardContent>
    </Card>
  );
}