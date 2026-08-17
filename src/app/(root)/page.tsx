"use client";

import { useEffect } from "react";
import Hero from "./hero";
import Problem from "./problem";
import Operation from "./operation";
import FuelOperations from "./fuelOperation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Page() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Problem />
          <Operation />
          <FuelOperations />
        </div>
      </div>
    </>
  );
}