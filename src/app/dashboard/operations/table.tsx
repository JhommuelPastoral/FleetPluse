"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, MoreVertical, ChevronDown } from "lucide-react";
import { useState } from "react";

const mockOperations = [
  {
    id: "HV-204",
    dotColor: "bg-green-500",
    driver: "Juan Cruz",
    routeFrom: "Davao",
    routeTo: "Tagum",
    departure: "07:20 AM",
    status: "En Route",
    statusClasses: "bg-green-100 text-green-700",
    progress: 72,
    progressColor: "bg-green-600",
    eta: "09:42 AM",
    delay: null,
    distance: "142 km",
  },
  {
    id: "HV-118",
    dotColor: "bg-red-500",
    driver: "Mario Santos",
    routeFrom: "Davao",
    routeTo: "Panabo",
    departure: "06:45 AM",
    status: "Delayed",
    statusClasses: "bg-red-100 text-red-700",
    progress: 48,
    progressColor: "bg-red-500",
    eta: "10:15 AM",
    delay: "18 min delay",
    distance: "98 km",
  },
  {
    id: "HV-092",
    dotColor: "bg-orange-500",
    driver: "Rogelio Garcia",
    routeFrom: "Digos",
    routeTo: "Davao",
    departure: "08:10 AM",
    status: "Loading",
    statusClasses: "bg-orange-100 text-orange-700",
    progress: 45,
    progressColor: "bg-orange-500",
    eta: "11:30 AM",
    delay: null,
    distance: "123 km",
  },
  {
    id: "HV-031",
    dotColor: "bg-blue-600",
    driver: "Daniel Reyes",
    routeFrom: "Davao",
    routeTo: "Mati",
    departure: "09:00 AM",
    status: "En Route",
    statusClasses: "bg-blue-100 text-blue-700",
    progress: 35,
    progressColor: "bg-blue-600",
    eta: "01:20 PM",
    delay: null,
    distance: "232 km",
  },
  {
    id: "HV-205",
    dotColor: "bg-green-500",
    driver: "Alvin Lopez",
    routeFrom: "Tagum",
    routeTo: "Davao",
    departure: "07:00 AM",
    status: "Completed",
    statusClasses: "bg-green-100 text-green-700",
    progress: 100,
    progressColor: "bg-green-600",
    eta: "09:10 AM",
    delay: null,
    distance: "142 km",
  },
];

export default function TableOperations() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-4 p-6 bg-white w-full">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Today's Operations
        </h1>

        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles, drivers or routes..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Select Dropdowns */}
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            Status <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            Route <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            All Drivers <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {/* Filters Button */}
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 ml-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm mt-2">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-xs text-slate-500 h-10 px-4">VEHICLE</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10">DRIVER</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10">ROUTE</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10">DEPARTURE</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10">STATUS</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10 w-48">PROGRESS</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10">ETA</TableHead>
              <TableHead className="font-semibold text-xs text-slate-500 h-10">DISTANCE</TableHead>
              <TableHead className="w-10 h-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOperations.map((op, i) => (
              <TableRow key={i} className="hover:bg-gray-50/50 border-gray-100">
                {/* Vehicle */}
                <TableCell className="font-medium px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${op.dotColor}`} />
                    <span className="text-gray-900 font-semibold">{op.id}</span>
                  </div>
                </TableCell>

                {/* Driver */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                      {/* Avatar Placeholder - normally an <img /> */}
                      <span className="text-xs text-gray-500">{op.driver.charAt(0)}</span>
                    </div>
                    <span className="text-gray-700 text-sm">{op.driver}</span>
                  </div>
                </TableCell>

                {/* Route */}
                <TableCell className="text-gray-600 text-sm">
                  {op.routeFrom} <span className="text-gray-400 mx-1">→</span> {op.routeTo}
                </TableCell>

                {/* Departure */}
                <TableCell className="text-gray-600 text-sm">
                  {op.departure}
                </TableCell>

                {/* Status */}
                <TableCell>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${op.statusClasses}`}>
                    {op.status}
                  </span>
                </TableCell>

                {/* Progress */}
                <TableCell>
                  <div className="flex items-center gap-3 w-full pr-4">
                    <span className="text-sm font-medium text-gray-700 w-10">
                      {op.progress}%
                    </span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${op.progressColor}`}
                        style={{ width: `${op.progress}%` }}
                      />
                    </div>
                  </div>
                </TableCell>

                {/* ETA */}
                <TableCell className="text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-900">{op.eta}</span>
                    {op.delay && (
                      <span className="text-red-500 text-xs mt-0.5">{op.delay}</span>
                    )}
                  </div>
                </TableCell>

                {/* Distance */}
                <TableCell className="text-gray-600 text-sm">
                  {op.distance}
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}