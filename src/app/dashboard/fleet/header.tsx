"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


export default function Header() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
      {/* Header Content */}
      <div className="min-w-0">
        <h1 className="text-2xl font-bold">Fleet</h1>

        <p className="max-w-2xl text-sm text-muted-foreground">
          Manage, monitor, and maintain all your vehicles in one place.
        </p>
      </div>

      {/* Add Vehicle */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full shrink-0 sm:w-auto">
            <Plus className="h-4 w-4" />
            Add Vehicle
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-sm! max-h-[90vh] overflow-y-auto p-5 sm:p-6 sm:max-w-lg!"
            onInteractOutside={(e) => e.preventDefault()}
            showCloseButton={false}
          >
          <DialogHeader className="group-data-[state=open]:hidden">
            <DialogTitle>Add New Vehicle</DialogTitle>

            <DialogDescription>
              Register a new vehicle and assign it to your fleet.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-2 sm:py-4">
            {/* Vehicle Information */}
            <section className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">
                  Vehicle Information
                </h3>

                <p className="text-xs text-muted-foreground">
                  Basic details about the vehicle.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Vehicle Name */}
                <div className="space-y-2">
                  <Label htmlFor="vehicle-name">Vehicle Name</Label>

                  <Input
                    id="vehicle-name"
                    placeholder="Haulvia Truck 01"
                  />
                </div>

                {/* Plate Number */}
                <div className="space-y-2">
                  <Label htmlFor="plate-number">Plate Number</Label>

                  <Input
                    id="plate-number"
                    placeholder="ABC 1234"
                  />
                </div>

                {/* Vehicle Type */}
                <div className="space-y-2">
                  <Label htmlFor="vehicle-type">Vehicle Type</Label>

                  <Select>
                    <SelectTrigger id="vehicle-type" className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="cargo-truck">
                        Cargo Truck
                      </SelectItem>

                      <SelectItem value="dump-truck">
                        Dump Truck
                      </SelectItem>

                      <SelectItem value="van">
                        Van
                      </SelectItem>

                      <SelectItem value="trailer">
                        Trailer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Model */}
                <div className="space-y-2">
                  <Label htmlFor="model">Vehicle Model</Label>

                  <Input
                    id="model"
                    placeholder="Isuzu Giga"
                  />
                </div>

                {/* Year */}
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>

                  <Input
                    id="year"
                    type="number"
                    placeholder="2024"
                  />
                </div>

                {/* Fuel Type */}
                <div className="space-y-2">
                  <Label htmlFor="fuel-type">Fuel Type</Label>

                  <Select>
                    <SelectTrigger id="fuel-type" className="w-full">
                      <SelectValue placeholder="Select fuel" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="diesel">
                        Diesel
                      </SelectItem>

                      <SelectItem value="gasoline">
                        Gasoline
                      </SelectItem>

                      <SelectItem value="electric">
                        Electric
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Fleet Assignment */}
            <section className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">
                  Fleet Assignment
                </h3>

                <p className="text-xs text-muted-foreground">
                  Assign the vehicle to a driver and fleet group.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Driver */}
                <div className="space-y-2">
                  <Label htmlFor="driver">Driver</Label>

                  <Select>
                    <SelectTrigger id="driver" className="w-full">
                      <SelectValue placeholder="Select driver" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="juan-dela-cruz">
                        Juan Dela Cruz
                      </SelectItem>

                      <SelectItem value="michael-santos">
                        Michael Santos
                      </SelectItem>

                      <SelectItem value="robert-garcia">
                        Robert Garcia
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Fleet */}
                <div className="space-y-2">
                  <Label htmlFor="fleet">Fleet Group</Label>

                  <Select>
                    <SelectTrigger id="fleet" className="w-full">
                      <SelectValue placeholder="Select fleet" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="davao-operations">
                        Davao Operations
                      </SelectItem>

                      <SelectItem value="north-fleet">
                        North Fleet
                      </SelectItem>

                      <SelectItem value="long-haul">
                        Long Haul
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Status */}
            <section className="space-y-2">
              <Label htmlFor="status">Initial Status</Label>

              <Select defaultValue="available">
                <SelectTrigger id="status" className="w-full">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="available">
                    Available
                  </SelectItem>

                  <SelectItem value="maintenance">
                    Maintenance
                  </SelectItem>

                  <SelectItem value="inactive">
                    Inactive
                  </SelectItem>
                </SelectContent>
              </Select>
            </section>
          </div>

          {/* Footer */}
          <DialogFooter className="flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
            </DialogClose>

            <AlertDialog>
              <AlertDialogTrigger asChild>
              <Button
                type="button"
                className="w-full sm:w-auto"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Vehicle
              </Button> 
            </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Add this vehicle?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You're about to add this vehicle to your fleet. You can update its
                    details, driver assignment, and maintenance information later.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}