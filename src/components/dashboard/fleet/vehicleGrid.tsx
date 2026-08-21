"use client";

import {
  CalendarDays,
  Gauge,
  MapPin,
  MoreVertical,
  Search,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
type VehicleStatus =
  | "En Route"
  | "Idle"
  | "Loading"
  | "In Maintenance"
  | "Offline";

type Vehicle = {
  id: string;
  model: string;
  plate: string;
  driver?: string;
  location: string;
  status: VehicleStatus;
  image: string;

  trip?: {
    from: string;
    to: string;
    speed?: string;
    eta?: string;
  };

  fuel?: number;

  maintenance?: {
    type: string;
    center: string;
    completion: string;
  };

  lastConnection?: string;
  gpsStatus?: string;
};

const vehicles: Vehicle[] = [
  {
    id: "HV-1024",
    model: "Isuzu N-Series",
    plate: "ABC-1234",
    driver: "Mark Santos",
    location: "Davao City",
    status: "En Route",
    image: "/truck.jpg",
    trip: {
      from: "Davao City",
      to: "Cagayan de Oro",
      speed: "72 km/h",
      eta: "2:14 PM",
    },
    fuel: 72,
  },
  {
    id: "HV-1031",
    model: "Hino 300",
    plate: "DEF-5678",
    driver: "John Cruz",
    location: "Panabo City",
    status: "Idle",
    image: "/truck.jpg",
    trip: {
      from: "Panabo",
      to: "Davao City",
    },
    fuel: 54,
  },
  {
    id: "HV-1042",
    model: "Fuso Fighter",
    plate: "GHI-9101",
    driver: "Carlo Reyes",
    location: "Tagum City",
    status: "Loading",
    image: "/truck.jpg",
    fuel: 65,
  },
  {
    id: "HV-1055",
    model: "Volvo FM",
    plate: "JKL-1122",
    location: "Davao City",
    status: "In Maintenance",
    image: "/truck.jpg",
    maintenance: {
      type: "Brake Service",
      center: "Davao Depot",
      completion: "May 22, 2024",
    },
  },
  {
    id: "HV-1017",
    model: "Isuzu N-Series",
    plate: "MNO-3344",
    location: "Mati City",
    status: "Offline",
    image: "/truck.jpg",
    lastConnection: "May 20, 2024 • 10:32 AM",
    gpsStatus: "No Signal",
  },
  {
    id: "HV-1062",
    model: "Hino 500",
    plate: "PQR-7788",
    driver: "Rodel Garcia",
    location: "Davao City",
    status: "En Route",
    image: "/truck.jpg",
    trip: {
      from: "Davao City",
      to: "Tagum City",
      speed: "78 km/h",
      eta: "1:48 PM",
    },
    fuel: 68,
  },
];

const statusStyles: Record<VehicleStatus, string> = {
  "En Route":
    "border-green-200 bg-green-50 text-green-600",
  Idle:
    "border-yellow-200 bg-yellow-50 text-yellow-600",
  Loading:
    "border-blue-200 bg-blue-50 text-blue-600",
  "In Maintenance":
    "border-orange-200 bg-orange-50 text-orange-600",
  Offline:
    "border-red-200 bg-red-50 text-red-600",
};

function StatusBadge({ status }: { status: VehicleStatus }) {
  return (
    <Badge
      variant="outline"
      className={`gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </Badge>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="space-y-3 pb-3">
        <div className="flex items-center justify-between">
          <StatusBadge status={vehicle.status} />

          <span className="text-xs text-muted-foreground">
            {vehicle.status === "En Route" && "• Live"}
            {vehicle.status === "Idle" && "• Idle for 1h 23m"}
            {vehicle.status === "Loading" && "• Loading 65%"}
            {vehicle.status === "In Maintenance" && "• In Service"}
            {vehicle.status === "Offline" && "• Last seen 2h ago"}
          </span>
        </div>

        <div className="flex gap-3">
          <div className="h-20 w-24 shrink-0 overflow-hidden rounded-md bg-muted relative">
            <Image
              src={vehicle.image}
              fill
              alt={vehicle.id}
              className="h-full w-full object-contain"
              sizes="20vw "
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold">
              {vehicle.id}
            </h3>

            <p className="text-xs text-muted-foreground">
              {vehicle.model}
            </p>

            <Badge
              variant="outline"
              className="mt-2 font-medium"
            >
              {vehicle.plate}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 h-full">
        {/* Driver / Location */}
        {vehicle.driver && (
          <div className="flex items-center justify-between border-t pt-3 text-xs">
            <span className="font-medium">
              {vehicle.driver}
            </span>

            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {vehicle.location}
            </span>
          </div>
        )}

        {!vehicle.driver && (
          <div className="flex items-center gap-1 border-t pt-3 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {vehicle.location}
          </div>
        )}

        {/* Trip */}
        {vehicle.trip && (
          <div className="space-y-2 border-t pt-3">
            <p className="text-[11px] text-muted-foreground">
              {vehicle.status === "Idle"
                ? "Last Trip"
                : "Current Trip"}
            </p>

            <p className="text-xs font-medium">
              {vehicle.trip.from}
              <span className="mx-2 text-muted-foreground">
                →
              </span>
              {vehicle.trip.to}
            </p>

            {(vehicle.trip.speed || vehicle.trip.eta) && (
              <div className="flex gap-4 text-[11px] text-muted-foreground">
                {vehicle.trip.speed && (
                  <span className="flex items-center gap-1">
                    <Gauge className="h-3 w-3" />
                    {vehicle.trip.speed}
                  </span>
                )}

                {vehicle.trip.eta && (
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    ETA {vehicle.trip.eta}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Loading */}
        {vehicle.status === "Loading" && (
          <div className="space-y-2 border-t pt-3">
            <div className="flex justify-between text-[11px]">
              <span className="text-muted-foreground">
                Loading Progress
              </span>

              <span className="font-medium">65%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[65%] rounded-full bg-blue-500" />
            </div>
          </div>
        )}

        {/* Fuel */}
        {vehicle.fuel !== undefined && (
          <div className="space-y-2 border-t pt-3">
            <div className="flex justify-between text-[11px]">
              <span className="text-muted-foreground">
                Fuel
              </span>

              <span className="font-medium">
                {vehicle.fuel}%
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-green-500"
                style={{ width: `${vehicle.fuel}%` }}
              />
            </div>
          </div>
        )}

        {/* Maintenance */}
        {vehicle.maintenance && (
          <div className="space-y-2 border-t pt-3 text-xs">
            <div>
              <p className="text-[11px] text-muted-foreground">
                Maintenance Type
              </p>
              <p className="font-medium">
                {vehicle.maintenance.type}
              </p>
            </div>

            <div>
              <p className="text-[11px] text-muted-foreground">
                Service Center
              </p>
              <p className="font-medium">
                {vehicle.maintenance.center}
              </p>
            </div>

            <div>
              <p className="text-[11px] text-muted-foreground">
                Expected Completion
              </p>
              <p className="font-medium">
                {vehicle.maintenance.completion}
              </p>
            </div>
          </div>
        )}

        {/* Offline */}
        {vehicle.status === "Offline" && (
          <div className="space-y-2 border-t pt-3 text-xs">
            <div>
              <p className="text-[11px] text-muted-foreground">
                Last Connection
              </p>

              <p className="font-medium">
                {vehicle.lastConnection}
              </p>
            </div>

            <div>
              <p className="text-[11px] text-muted-foreground">
                GPS Status
              </p>

              <p className="font-medium text-red-500">
                {vehicle.gpsStatus}
              </p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 border-t pt-3">
        <Button
          variant="outline"
          className="flex-1 text-xs"
        >
          View Details
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="shrink-0"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function VehicleGrid() {
  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search vehicles..."
            className="pl-9"
          />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-32">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="idle">Idle</SelectItem>
            <SelectItem value="maintenance">
              Maintenance
            </SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-32">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="van">Van</SelectItem>
            <SelectItem value="trailer">Trailer</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-32">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Depots</SelectItem>
            <SelectItem value="davao">Davao Depot</SelectItem>
            <SelectItem value="north">North Fleet</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="newest">
          <SelectTrigger className="w-full lg:w-28">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Vehicle Cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    </div>
  );
}