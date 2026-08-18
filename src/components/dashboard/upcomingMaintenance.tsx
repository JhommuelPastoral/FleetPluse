import Link from "next/link";
import { CalendarClock, ChevronRight, Wrench } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const upcomingMaintenance = [
  {
    vehicleId: "TRK-07",
    type: "Engine Oil Change",
    dueDate: "Aug 20",
    daysLeft: 2,
    priority: "High",
  },
  {
    vehicleId: "TRK-12",
    type: "Brake Inspection",
    dueDate: "Aug 22",
    daysLeft: 4,
    priority: "Medium",
  },
  {
    vehicleId: "TRK-03",
    type: "Tire Replacement",
    dueDate: "Aug 25",
    daysLeft: 7,
    priority: "Medium",
  },
  {
    vehicleId: "TRK-18",
    type: "Full Service",
    dueDate: "Aug 29",
    daysLeft: 11,
    priority: "Low",
  },
];

const priorityStyles = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-amber-50 text-amber-600",
  Low: "bg-blue-50 text-blue-600",
};

export default function UpcomingMaintenance() {
  return (
    <Card className="h-full w-full rounded-xl">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold">
            Upcoming Maintenance
          </CardTitle>

          <CardDescription className="text-xs">
            Scheduled vehicle maintenance
          </CardDescription>
        </div>

        <Link
          href="/dashboard/maintenance"
          className="text-xs font-medium text-primary hover:text-primary/80"
        >
          View All
        </Link>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col divide-y">
          {upcomingMaintenance.map((maintenance) => (
            <div
              key={maintenance.vehicleId}
              className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </div>

              {/* Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">
                    {maintenance.vehicleId}
                  </p>

                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      priorityStyles[maintenance.priority as keyof typeof priorityStyles]
                    }`}
                  >
                    {maintenance.priority}
                  </span>
                </div>

                <p className="truncate text-xs text-muted-foreground">
                  {maintenance.type}
                </p>
              </div>

              {/* Date */}
              <div className="hidden items-center gap-1.5 sm:flex">
                <CalendarClock className="h-3.5 w-3.5 text-muted-foreground" />

                <div className="text-right">
                  <p className="text-xs font-medium">
                    {maintenance.dueDate}
                  </p>

                  <p className="text-[10px] text-muted-foreground">
                    {maintenance.daysLeft} days
                  </p>
                </div>
              </div>

              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}