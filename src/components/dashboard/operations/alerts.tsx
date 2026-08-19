import {
  AlertTriangle,
  CircleAlert,
  Info,
  Truck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AlertType = "Critical" | "Warning" | "Info";

type OperationAlert = {
  id: string;
  vehicle: string;
  message: string;
  time: string;
  type: AlertType;
};

const alerts: OperationAlert[] = [
  {
    id: "ALT-001",
    vehicle: "HV-118",
    message: "Vehicle has been delayed for 18 minutes",
    time: "5 min ago",
    type: "Critical",
  },
  {
    id: "ALT-002",
    vehicle: "HV-092",
    message: "Loading operation is taking longer than expected",
    time: "12 min ago",
    type: "Warning",
  },
  {
    id: "ALT-003",
    vehicle: "HV-204",
    message: "Vehicle entered the Tagum delivery zone",
    time: "18 min ago",
    type: "Info",
  },
  {
    id: "ALT-004",
    vehicle: "HV-031",
    message: "Vehicle is approaching the destination",
    time: "24 min ago",
    type: "Info",
  },
];

const alertStyles: Record<
  AlertType,
  {
    icon: typeof AlertTriangle;
    iconColor: string;
    background: string;
  }
> = {
  Critical: {
    icon: CircleAlert,
    iconColor: "text-red-600",
    background: "bg-red-50",
  },
  Warning: {
    icon: AlertTriangle,
    iconColor: "text-orange-600",
    background: "bg-orange-50",
  },
  Info: {
    icon: Info,
    iconColor: "text-blue-600",
    background: "bg-blue-50",
  },
};

export default function Alerts() {
  return (
    <Card className="h-full w-full overflow-y-scroll scrollbar-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Operation Alerts</CardTitle>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View all
        </button>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          {alerts.map((alert, index) => {
            const style = alertStyles[alert.type];
            const Icon = style.icon;

            return (
              <div
                key={alert.id}
                className={`flex gap-3 py-4 ${
                  index !== alerts.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Alert Icon */}
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${style.background}`}
                >
                  <Icon
                    size={18}
                    className={style.iconColor}
                  />
                </div>

                {/* Alert Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Truck
                        size={14}
                        className="shrink-0 text-muted-foreground"
                      />

                      <p className="text-sm font-semibold">
                        {alert.vehicle}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs text-muted-foreground">
                      {alert.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {alert.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}