"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FuelChart from "./chart";
gsap.registerPlugin(ScrollTrigger);

const fuelTrucks = [
  {
    rank: 1,
    truck: "Truck 07",
    usage: "98.5 L/100km",
    width: "82%",
    color: "bg-red-400",
  },
  {
    rank: 2,
    truck: "Truck 12",
    usage: "87.2 L/100km",
    width: "70%",
    color: "bg-orange-400",
  },
  {
    rank: 3,
    truck: "Truck 03",
    usage: "76.1 L/100km",
    width: "61%",
    color: "bg-yellow-300",
  },
  {
    rank: 4,
    truck: "Truck 21",
    usage: "64.3 L/100km",
    width: "52%",
    color: "bg-lime-400",
  },
  {
    rank: 5,
    truck: "Truck 14",
    usage: "58.7 L/100km",
    width: "47%",
    color: "bg-green-400",
  },
];

export default function FuelOperations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(contentRef.current?.children ?? [], {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      }).from(
        dashboardRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.98,
          duration: 1,
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0B0F18] px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        {/* LEFT */}
        <div ref={contentRef}>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Fleet Efficiency
          </p>

          <h2 className="max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Every kilometer
            <br />
            has a cost.
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
            Monitor fuel usage, analyze trends, and identify waste before it
            eats into your profits.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Fuel consumption by truck & driver",
              "Cost per kilometer",
              "Detect unusual usage instantly",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* DASHBOARD */}
        <div
          ref={dashboardRef}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#11161F] shadow-2xl shadow-black/30"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* FUEL COST */}
            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r sm:p-8">

              <FuelChart />
              {/* CHART */}

            </div>

            {/* TOP CONSUMPTION */}
            <div className="p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Top fuel consumption
              </div>

              <div className="mt-7 space-y-6">
                {fuelTrucks.map((truck) => (
                  <div
                    key={truck.truck}
                    className="flex items-center gap-3"
                  >
                    {/* Rank */}
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500/20 text-[11px] font-semibold text-lime-400">
                      {truck.rank}
                    </div>

                    {/* Truck */}
                    <div className="w-16 shrink-0 text-sm font-medium text-slate-300">
                      {truck.truck}
                    </div>

                    {/* Bar */}
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${truck.color}`}
                        style={{
                          width: truck.width,
                        }}
                      />
                    </div>

                    {/* Value */}
                    <div className="w-[82px] shrink-0 text-right text-xs font-medium text-slate-300">
                      {truck.usage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}