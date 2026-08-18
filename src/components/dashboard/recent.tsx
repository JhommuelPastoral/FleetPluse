import {
  AlertTriangle,
  Info,
  MapPin,
  Wrench,
} from "lucide-react";

type AlertType = "critical" | "warning" | "info";

type Alert = {
  type: AlertType;
  title: string;
  description: string;
  time: string;
};

const alerts: Alert[] = [
  {
    type: "critical",
    title: "Geofence Exit",
    description: "TRK-07 exited Davao Port Zone",
    time: "2m ago",
  },
  {
    type: "warning",
    title: "High Engine Temperature",
    description: "TRK-12 engine temperature is high",
    time: "15m ago",
  },
  {
    type: "critical",
    title: "Maintenance Due",
    description: "TRK-03 maintenance is due soon",
    time: "1h ago",
  },
  {
    type: "info",
    title: "Driver Behavior",
    description: "Hard braking detected on TRK-18",
    time: "2h ago",
  },
  {
    type: "info",
    title: "Driver ",
    description: "Speeding detected on TRK-18",
    time: "2h ago",
  }
];

const alertStyles = {
  critical: {
    icon: AlertTriangle,
    className: "bg-red-50 text-red-500",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-amber-50 text-amber-500",
  },
  info: {
    icon: Info,
    className: "bg-blue-50 text-blue-500",
  },
};

export default function Alerts() {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm h-full">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">
          Recent Alerts
        </h3>

        <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="divide-y">
        {alerts.map((alert) => {
          const style = alertStyles[alert.type];
          const Icon = style.icon;
          return (
            <div
              key={`${alert.title}-${alert.time}`}
              className="flex gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${style.className}`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-sm font-medium">
                    {alert.title}
                  </p>

                  <span className="shrink-0 text-sm text-muted-foreground">
                    {alert.time}
                  </span>
                </div>

                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {alert.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}