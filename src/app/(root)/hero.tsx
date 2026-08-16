"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight, Film } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const getStartedButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (
        !titleRef.current ||
        !subtitleRef.current ||
        !textRef.current ||
        !buttonContainerRef.current ||
        !heroRef.current
      ) {
        return;
      }

      const subtitleSplit = new SplitText(subtitleRef.current, {type: "words",});
      const titleSplit = new SplitText(titleRef.current, {type: "words",});
      const textSplit = new SplitText(textRef.current, {type: "lines",});

      // Hero
      gsap.from(heroRef.current, {
        y: -1000,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      });

      // Subtitle
      gsap.from(subtitleSplit.words, {
        y: -1000,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        rotation: "random(-80, 80)",
        ease: "power4.out",
      });

      // Title
      gsap.from(titleSplit.words, {
        y: -1000,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        rotation: "random(-80, 80)",
        ease: "power4.out",
        delay: 1,
      });

      // Description
      gsap.from(textSplit.lines, {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 2.5,
      });

      // BUTTONS
      gsap.from(buttonContainerRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 3.5,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-start cursor-default"
    >
      <Image
        src="/hero3.jpg"
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 z-0 bg-black/30" />

      <div className="relative z-10 flex flex-col gap-4 px-20">
        <p
          ref={subtitleRef}
          className="text-3xl font-bold text-primary"
        >
          REAL-TIME FLEET MONITORING
        </p>

        <h1
          ref={titleRef}
          className="text-7xl font-bold text-black"
        >
          Real-time visibility.
          <br />
          Total <span className="text-primary">control.</span>
        </h1>

        <p
          ref={textRef}
          className="max-w-100 text-lg text-muted"
        >
          FleetPulse helps you track, analyze, and optimize your fleet
          operations in real-time - saving time, fuel, and money.
        </p>

        <div
          ref={buttonContainerRef}
          className="flex gap-4"
        >
          <Button className="cursor-pointer px-10 py-5 flex items-center gap-3" ref={getStartedButtonRef}>
            Start Free Trial
            <MoveRight size={20} />
          </Button>

          <Button
            variant="outline"
            className="cursor-pointer px-10 py-5 flex items-center gap-3
            hover:bg-white hover:text-primary        
            "
          >
            Watch Demo
            <Film size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}