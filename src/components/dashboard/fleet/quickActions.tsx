import {
  Plus,
  Wrench,
  UserRound,
  Route,
  Map,
  TriangleAlert,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actions = [
  {
    label: "Add Vehicle",
    description: "Add a new vehicle",
    icon: Plus,
  },
  {
    label: "Schedule Maintenance",
    description: "Schedule vehicle service",
    icon: Wrench,
  },
  {
    label: "Assign Driver",
    description: "Assign a driver",
    icon: UserRound,
  },
  {
    label: "Create Trip",
    description: "Create a new trip",
    icon: Route,
  },
  {
    label: "Track Fleet",
    description: "View live fleet",
    icon: Map,
  },
  {
    label: "View Alerts",
    description: "Review fleet alerts",
    icon: TriangleAlert,
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          Quick Actions
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto justify-start gap-3 px-3 py-3 text-left"
            >
              <Icon className="h-4 w-4 shrink-0" />

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  {action.label}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}