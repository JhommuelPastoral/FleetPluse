"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Truck,
  Route,
  MapPin,
  Fuel,
  Wrench,
  BarChart3,
  UserRound,
  ShieldCheck,
  Droplets,
  Clock3,
  Check,
  Plus,
  Equal,
  VectorSquare
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    label: "Dispatched",
    time: "10:30 AM",
    icon: Box,
  },
  {
    label: "Picked up",
    time: "11:45 AM",
    icon: Truck,
  },
  {
    label: "In transit",
    time: "2:15 PM",
    icon: Route,
    active: true,
  },
  {
    label: "Near destination",
    time: "4:40 PM",
    icon: MapPin,
  },
  {
    label: "Delivered",
    time: "5:10 PM",
    icon: Check,
    complete: true,
  },
];

const fleetItems = [
  { label: "Trucks", icon: Truck },
  { label: "Drivers", icon: UserRound },
  { label: "Routes", icon: Route },
  { label: "Deliveries", icon: Box },
  { label: "Fuel", icon: Fuel },
  { label: "Maintenance", icon: Wrench },
  { label: "Costs", icon: BarChart3 },
];

const results = [
  {
    value: "24/7",
    label: "Fleet visibility",
    icon: ShieldCheck,
  },
  {
    value: "↓ 15%",
    label: "Lower fuel costs",
    icon: Droplets,
  },
  {
    value: "↑ 20%",
    label: "Increase in uptime",
    icon: Wrench,
  },
  {
    value: "",
    label: "Operational visibility",
    icon: Clock3,
  },
  {
    value: "Smarter",
    label: "data-driven decisions",
    icon: BarChart3,
  },
];

export default function TruckOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* --------------------------------
         DELIVERY TIMELINE
      -------------------------------- */

      const timelineItems = gsap.utils.toArray<HTMLElement>(
        ".timeline-item"
      );

      const timelineLines = gsap.utils.toArray<HTMLElement>(
        ".timeline-line"
      );

      gsap.set(timelineItems, {
        opacity: 0,
        y: 25,
        scale: 0.9,
      });

      gsap.set(timelineLines, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const timelineTl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timelineItems.forEach((item, index) => {
        timelineTl.to(
          item,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "back.out(1.5)",
          },
          index === 0 ? 0 : "-=0.15"
        );

        if (timelineLines[index]) {
          timelineTl.to(
            timelineLines[index],
            {
              scaleX: 1,
              duration: 0.35,
              ease: "power2.out",
            },
            "-=0.2"
          );
        }
      });

      /* --------------------------------
         FLEET EQUATION
      -------------------------------- */

      const fleetItemsEl = gsap.utils.toArray<HTMLElement>(
        ".fleet-item"
      );

      const operators = gsap.utils.toArray<HTMLElement>(
        ".fleet-operator"
      );

      gsap.set(fleetItemsEl, {
        opacity: 0,
        y: 30,
      });

      gsap.set(operators, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(".fleet-result", {
        opacity: 0,
        scale: 0.8,
        x: 20,
      });

      const fleetTl = gsap.timeline({
        scrollTrigger: {
          trigger: fleetRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      fleetTl.to(fleetItemsEl, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.1,
        ease: "power3.out",
      });

      fleetTl.to(
        operators,
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.08,
          ease: "back.out(2)",
        },
        "-=0.45"
      );

      fleetTl.to(
        ".fleet-result",
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.15"
      );

      /* --------------------------------
         RESULTS
      -------------------------------- */

      const resultItems = gsap.utils.toArray<HTMLElement>(
        ".result-item"
      );

      gsap.set(resultItems, {
        opacity: 0,
        y: 35,
      });

      const resultsTl = gsap.timeline({
        scrollTrigger: {
          trigger: resultsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      resultsTl.to(resultItems, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* --------------------------------
         HEADINGS
      -------------------------------- */

      gsap.utils
        .toArray<HTMLElement>(".overview-copy")
        .forEach((copy) => {
          gsap.from(copy, {
            opacity: 0,
            x: -35,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: copy,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen overflow-hidden bg-[#070a0f] text-white"
    >
      {/* ===============================
          DELIVERY
      ================================ */}

      <div
        ref={timelineRef}
        className="border-y border-white/[0.08] px-6 py-12 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
          {/* Copy */}
          <div className="overview-copy">
            <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-blue-500">
              DELIVERIES
            </p>

            <h2 className="max-w-[240px] text-2xl font-semibold leading-[1.05] tracking-tight sm:text-3xl">
              From dispatch to delivery, nothing gets lost.
            </h2>

            <p className="mt-3 max-w-[230px] text-sm leading-relaxed text-white/45">
              Know which trucks are carrying what, where they're going,
              and when they'll arrive.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex items-start justify-between">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="timeline-item flex min-w-0 flex-1 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        flex h-14 w-14 items-center justify-center
                        rounded-full border
                        ${
                          item.complete
                            ? "border-green-500/50 bg-green-500/20 text-green-400"
                            : "border-blue-500/50 bg-blue-600/20 text-blue-400"
                        }
                        shadow-[0_0_30px_rgba(37,99,235,0.18)]
                      `}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="mt-3 text-center">
                      <p className="text-xs font-medium text-white/80">
                        {item.label}
                      </p>

                      <p
                        className={`mt-1 text-[11px] ${
                          item.active
                            ? "text-green-400"
                            : item.complete
                              ? "text-green-400"
                              : "text-white/45"
                        }`}
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>

                  {index < timeline.length - 1 && (
                    <div className="timeline-line mt-7 h-px flex-1 bg-blue-500/40" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===============================
          WHY HAULVIA
      ================================ */}

      <div
        ref={fleetRef}
        className="border-b border-white/[0.08] px-6 py-12 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
          {/* Copy */}
          <div className="overview-copy">
            <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-blue-500">
              WHY HAULVIA
            </p>

            <h2 className="max-w-[240px] text-2xl font-semibold leading-[1.05] tracking-tight sm:text-3xl">
              Your fleet is more than trucks.
            </h2>

            <p className="mt-3 max-w-[230px] text-sm leading-relaxed text-white/45">
              Haulvia unifies every part of your operation so you can
              make smarter decisions, faster.
            </p>
          </div>

          {/* Equation */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-7">
            {fleetItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <div className="fleet-item flex w-[65px] flex-col items-center gap-2">
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className="text-white/80"
                    />

                    <span className="text-[10px] text-white/55">
                      {item.label}
                    </span>
                  </div>

                  {index < fleetItems.length - 1 && (
                    <Plus
                      className="fleet-operator text-white/50"
                      size={17}
                    />
                  )}
                </div>
              );
            })}

            <Equal
              className="fleet-operator text-white/50"
              size={20}
            />

            {/* Result */}
            <div className="fleet-result flex h-16 w-16 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
              <VectorSquare
                size={30}
                className="text-white"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 text-center">
          <p className="text-sm font-medium text-blue-500">
            One operation. One source of truth.
          </p>
        </div>
      </div>

      {/* ===============================
          RESULTS
      ================================ */}

      <div
        ref={resultsRef}
        className="px-6 py-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.18em] text-blue-500">
            REAL RESULTS. EVERY DAY.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5">
            {results.map((result) => {
              const Icon = result.icon;

              return (
                <div
                  key={result.label}
                  className="result-item flex items-center gap-4 border-white/[0.12] px-5 py-2 first:pl-0 lg:border-l"
                >
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="shrink-0 text-blue-500"
                  />

                  <div>
                    <p className="text-2xl font-semibold tracking-tight">
                      {result.value}
                    </p>

                    <p className="mt-1 text-[10px] text-white/45">
                      {result.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}