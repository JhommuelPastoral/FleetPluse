"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Bell,
  MessageSquareText,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Title */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold sm:text-2xl">
          Operations
        </h1>

        <p className="max-w-2xl text-sm text-muted-foreground">
          Monitor trips, drivers, and operational activity in real-time.
        </p>
      </div>

      {/* Actions */}
      <div className="flex w-full items-center gap-2 md:w-auto">
        {/* Date */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none"
            >
              <CalendarIcon className="h-4 w-4 sm:mr-2" />

              <span className="hidden sm:inline">
                {format(date, "PPP")}
              </span>

              <span className="sm:hidden">
                {format(date, "MMM d")}
              </span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              required
              onSelect={setDate}
            />
          </PopoverContent>
        </Popover>

        {/* Messages */}
        <Button
          size="icon"
          variant="outline"
          className="shrink-0"
        >
          <MessageSquareText />
        </Button>

        {/* Notifications */}
        <Button
          size="icon"
          variant="outline"
          className="shrink-0"
        >
          <Bell />
        </Button>

        {/* New Operation */}
        <Button className="shrink-0">
          <Plus />
          <span className="hidden sm:inline">
            New Operation
          </span>
        </Button>
      </div>
    </header>
  );
}