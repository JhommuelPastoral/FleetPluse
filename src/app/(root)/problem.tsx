"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const problemContainer = useRef<HTMLDivElement>(null);
  const problemTitle = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (
        !problemContainer.current ||
        !problemTitle.current ||
        !headingRef.current ||
        !descriptionRef.current ||
        !cardsRef.current
      ) {
        return;
      }

      const cards = cardsRef.current.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: problemContainer.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Section label
      tl.from(problemTitle.current, {
        y: 25,
        opacity: 0,
        duration: 0.7,
      })

        // Main heading
        .from(
          headingRef.current.children,
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.35"
        )

        // Description
        .from(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        )

        // Problem cards
        .from(
          cards,
          {
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.35"
        );

    }, problemContainer);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={problemContainer}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0B0F18] px-6 py-20 sm:px-10 lg:px-20"
    >
      {/* Section label */}
      <p
        ref={problemTitle}
        className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary"
      >
        The Problem.
      </p>

      <div className="grid w-full gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <div ref={headingRef} className="overflow-hidden">
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Disconnected operations.
            </h2>

            <h2 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Disconnected profits.
            </h2>

            <h2 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              See where they go.
            </h2>
          </div>

          <p
            ref={descriptionRef}
            className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Spreadsheets for fuel. Group chats for drivers. Phone calls for
            deliveries. Guesswork for maintenance.
            <br />
            <span className="text-slate-200">
              It&apos;s time to bring everything together.
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2"
        >
          {/* Fuel */}
          <div className="group relative min-h-[250px] border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                01 / Fuel
              </span>

              <span className="font-mono text-xs text-red-400">
                +18.4%
              </span>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Rising fuel costs
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Inefficient routes and excessive consumption quietly reduce every
                trip&apos;s margin.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px w-full bg-white/10">
                <div className="h-px w-[68%] bg-red-400" />
              </div>
            </div>
          </div>

          {/* Drivers */}
          <div className="group relative min-h-[250px] border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                02 / Drivers
              </span>

              <span className="font-mono text-xs text-amber-400">
                07 offline
              </span>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Scattered communication
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Critical updates disappear between phone calls, messages, and
                group chats.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div
                  key={item}
                  className="h-1 flex-1 bg-amber-400/60"
                />
              ))}
            </div>
          </div>

          {/* Deliveries */}
          <div className="group relative min-h-[250px] border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                03 / Deliveries
              </span>

              <span className="font-mono text-xs text-red-400">
                04 delayed
              </span>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Delayed visibility
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Find out about delivery problems after the customer is already
                asking for an update.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <div className="h-px flex-1 bg-white/10" />
              <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <div className="h-px w-10 bg-white/10" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Maintenance */}
          <div className="group relative min-h-[250px] border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                04 / Maintenance
              </span>

              <span className="font-mono text-xs text-amber-400">
                03 due
              </span>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Unexpected downtime
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Missed service schedules turn small mechanical issues into
                expensive downtime.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="font-mono text-xs text-white/30">
                NEXT SERVICE
              </span>

              <span className="font-mono text-sm text-white">
                1,240 km
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}