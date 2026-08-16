"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, Play, Activity } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Marquee } from "react-kino";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (
        !heroRef.current ||
        !eyebrowRef.current ||
        !titleRef.current ||
        !textRef.current ||
        !buttonsRef.current ||
        !statsRef.current
      ) {
        return;
      }

      const eyebrowSplit = new SplitText(eyebrowRef.current, {
        type: "chars",
      });

      const titleSplit = new SplitText(titleRef.current, {
        type: "lines",
      });

      const textSplit = new SplitText(textRef.current, {
        type: "lines",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      // Image reveal
      gsap.fromTo(
        heroRef.current,
        {
          scale: 1.2,
        },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );

      // Eyebrow
      tl.from(eyebrowSplit.chars, {
        x: -1000,
        opacity: 0,
        duration: 0.6,
        stagger: 0.025,
      })

        // Heading
        .from(
          titleSplit.lines,
          {
            y: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.2"
        )

        // Description
        .from(
          textSplit.lines,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.45"
        )

        // Buttons
        .from(
          buttonsRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )

        // Bottom stats
        .from(
          statsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <Image
        src="/hero1.jpg"
        alt="Fleet truck"
        fill
        priority
        sizes="100vw"
        className="object-cover grayscale"
      />

      {/* Premium overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Stronger left-side contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-32 sm:px-10 lg:px-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />

            <p
              ref={eyebrowRef}
              className="font-mono text-sm font-semibold tracking-[0.2em] text-primary sm:text-base"
            >
              REAL-TIME FLEET OPERATIONS
            </p>
          </div>

          {/* Heading */}
          <h1
            ref={titleRef}
            className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            Know where every truck is.
            <br />
            Know what&apos;s{" "}
            <span className="text-primary">costing you.</span>
          </h1>

          {/* Description */}
          <p
            ref={textRef}
            className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
          >
            FleetPulse gives fleet managers one live command center for
            vehicles, drivers, fuel, maintenance, and deliveries.
          </p>

          {/* CTAs */}
          <div
            ref={buttonsRef}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-14 rounded-none px-7 text-sm font-semibold"
            >
              Start monitoring your fleet
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              <Play size={16} fill="currentColor" />
              Watch 90-sec demo
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom information bar */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 text-white backdrop-blur-md cursor-default "
      >
        <Marquee speed={60} pauseOnHover>
          <div>
            <span className="mx-8 font-mono tracking-widest text-white/50">
              24 VEHICLES MONITORED
            </span>
            <span className="text-primary">●</span>

            <span className="mx-8 font-monotracking-widest text-white/50">
              REAL-TIME GPS TRACKING
            </span>

            <span className="text-primary">●</span>

            <span className="mx-8 font-mono tracking-widest text-white/50">
              LIVE FLEET VISIBILITY
            </span>

            <span className="text-primary">●</span>

            <span className="mx-8 font-monotracking-widest text-white/50">
              FUEL & MAINTENANCE MONITORING
            </span>

            <span className="text-primary">●</span>

            <span className="mx-8 font-mono tracking-widest text-white/50">
              24 / 7 OPERATIONS
            </span>

            <span className="text-primary">●</span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}