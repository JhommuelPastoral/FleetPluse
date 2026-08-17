"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Map from "./map";

gsap.registerPlugin(ScrollTrigger);
const fleetStats = [
  {
    value: 18,
    label: "On the road",
    className: "text-lime-400",
  },
  {
    value: 3,
    label: "Idle",
    className: "text-slate-200",
  },
  {
    value: 2,
    label: "In maintenance",
    className: "text-yellow-400",
  },
  {
    value: 1,
    label: "Delayed",
    className: "text-red-400",
  },
];
export default function Operation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const mapWrapperRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

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

      tl.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          headingRef.current?.querySelectorAll(".heading-line") ?? [],
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .from(
          descriptionRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          statsRef.current?.children ?? [],
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .from(
          mapWrapperRef.current,
          {
            y: 40,
            opacity: 0,
            scale: 0.98,
            duration: 1,
          },
          "-=0.55"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0B0F18] px-6 py-20 sm:px-10 lg:px-20"
    >
      <p
        ref={eyebrowRef}
        className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary"
      >
        Live Operations.
      </p>

      <div className="grid w-full gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <div ref={headingRef} className="overflow-hidden">
            <div className="overflow-hidden">
              <h2 className="heading-line text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                See your operation
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="heading-line mt-2 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                as it happens.
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="heading-line mt-2 text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Nothing goes unseen.
              </h2>
            </div>
          </div>

          <p
            ref={descriptionRef}
            className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Monitor your entire truck in real time. Know where every vehicle
            is, what it&apos;s doing, and what needs attention next.
            <span className="mt-2 block text-slate-200">
              One view for the operation behind every delivery.
            </span>
          </p>
          {/* FLEET STATS */}
          <div
            ref={statsRef}
            className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4"
          >
            {fleetStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3"
              >
                <div
                  className={`text-2xl font-semibold tracking-tight ${stat.className}`}
                >
                  {stat.value}
                </div>

                <div className="mt-1 text-[11px] font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-sm font-medium text-slate-200">
                Fleet online
              </span>
            </div>

            <span className="h-4 w-px bg-white/10" />

            <span className="text-sm text-slate-500">
              Real-time visibility
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={mapWrapperRef}
          className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1 shadow-2xl shadow-black/20 sm:h-[500px] lg:h-[600px]"
        >
          <Map />
        </div>
      </div>
    </section>
  );
}