"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Maintenance() {
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
            Maintenance
          </p>

          <h2 className="max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Don&apos;t wait for a truck
            <br />
            to break down.
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
            Track service schedules, inspections, mileage, and upcoming
            maintenance before small problems become expensive repairs.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Know what needs attention",
              "Track service intervals",
              "Prevent unexpected downtime",
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
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#11161F] rounded-tl-[20px] rounded-bl-[20px]"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* TRUCK VISUAL */}
            <div className="relative min-h-[500px] overflow-hidden border-b border-white/10 bg-[#0D121A] lg:border-b-0 lg:border-r">
              {/* subtle glow */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              {/* Truck */}
              <Image
                src="/truck.jpg"
                alt="Fleet truck"
                fill
                sizes="100%"
                className="absolute inset-0 h-full w-full object-contain md:object-cover"
              />

              {/* Maintenance markers */}
              <div className="absolute left-[30%] top-[61%] flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500 text-[10px] text-white shadow-lg shadow-blue-500/30">
                •
              </div>

              <div className="absolute left-[52%] top-[48%] flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500 text-[10px] text-white shadow-lg shadow-blue-500/30">
                •
              </div>

              <div className="absolute left-[68%] top-[58%] flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500 text-[10px] text-white shadow-lg shadow-blue-500/30">
                •
              </div>

              <div className="absolute left-[79%] top-[46%] flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500 text-[10px] text-white shadow-lg shadow-blue-500/30">
                •
              </div>
            </div>

            {/* MAINTENANCE STATUS */}
            <div className="p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Truck #024
              </div>

              <div className="mt-7 space-y-5">
                {/* ENGINE */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-lime-400"
                    />
                    Engine
                  </div>

                  <span className="text-xs text-slate-400">
                    Good
                  </span>
                </div>

                {/* TIRES */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-lime-400"
                    />
                    Tires
                  </div>

                  <span className="text-xs text-slate-400">
                    Good
                  </span>
                </div>

                {/* OIL */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <AlertTriangle
                      size={17}
                      className="text-yellow-400"
                    />
                    Oil Change
                  </div>

                  <span className="text-right text-xs text-yellow-400">
                    Due in 1,240 km
                  </span>
                </div>

                {/* BRAKES */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-lime-400"
                    />
                    Brakes
                  </div>

                  <span className="text-xs text-slate-400">
                    Good
                  </span>
                </div>

                {/* INSPECTION */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <AlertTriangle
                      size={17}
                      className="text-yellow-400"
                    />
                    Inspection
                  </div>

                  <span className="text-right text-xs text-yellow-400">
                    Due in 12 days
                  </span>
                </div>
              </div>

              {/* NEXT SERVICE */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="text-3xl font-semibold tracking-tight text-primary">
                  12,420 km
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  until next service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}