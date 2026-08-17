"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, VectorSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Product: [
    "Overview",
    "Features",
    "Trucks",
    "Pricing",
    "Integrations",
  ],
  Resources: [
    "Help Center",
    "Guides",
    "Blog",
    "API Docs",
    "Status",
  ],
  Company: [
    "About Us",
    "Careers",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function FleetFooter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================
         CTA BACKGROUND
      ===================================== */

      gsap.from(".cta-bg", {
        scale: 1.08,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /* =====================================
         CTA CONTENT
      ===================================== */

      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      ctaTl
        .from(".cta-copy", {
          opacity: 0,
          x: -50,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".cta-buttons",
          {
            opacity: 0,
            x: 40,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".cta-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        );

      /* =====================================
         FOOTER
      ===================================== */

      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      footerTl
        .from(".footer-brand", {
          opacity: 0,
          y: 25,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          ".footer-column",
          {
            opacity: 0,
            y: 20,
            duration: 0.45,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          ".footer-newsletter",
          {
            opacity: 0,
            x: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".footer-bottom",
          {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );

      /* =====================================
         BUTTON HOVER
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(".cta-button")
        .forEach((button) => {
          const arrow = button.querySelector(".button-arrow");

          const enter = () => {
            gsap.to(button, {
              y: -3,
              duration: 0.25,
              ease: "power2.out",
            });

            gsap.to(arrow, {
              x: 5,
              duration: 0.25,
              ease: "power2.out",
            });
          };

          const leave = () => {
            gsap.to(button, {
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            });

            gsap.to(arrow, {
              x: 0,
              duration: 0.25,
              ease: "power2.out",
            });
          };

          button.addEventListener("mouseenter", enter);
          button.addEventListener("mouseleave", leave);

          return () => {
            button.removeEventListener("mouseenter", enter);
            button.removeEventListener("mouseleave", leave);
          };
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#070a0f] text-white"
    >
      {/* =========================================
          CTA
      ========================================== */}

      <section
        ref={ctaRef}
        className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden border-b border-white/[0.08] sm:min-h-[420px] lg:min-h-[400px]"
      >
        {/* Background */}
        <div
          className="
            cta-bg absolute inset-0
            bg-[url('/truck-night.jpg')]
            bg-cover bg-center
          "
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2d73]/90 via-[#09245c]/85 to-[#03102b]/95 sm:bg-gradient-to-r" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-5 py-12 text-center sm:px-8 lg:flex-row lg:justify-between lg:gap-10 lg:px-12 lg:py-16 lg:text-left">
          
          {/* Copy */}
          <div className="cta-copy max-w-xl">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Know your fleet.
              <br />
              Control your operation.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base lg:mx-0">
              Join thousands of trucking companies using Haulvia to
              keep their trucks moving and their costs under control.
            </p>
          </div>

          {/* Buttons */}
          <div className="cta-buttons flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row lg:shrink-0">
            <button className="cta-button group flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-blue-500 sm:w-auto sm:px-7">
              Start your free trial

              <ArrowRight
                size={15}
                className="button-arrow transition-transform"
              />
            </button>

            <button className="cta-button group flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-black/20 px-6 py-3.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto sm:px-7">
              Book a demo

              <ArrowRight
                size={15}
                className="button-arrow transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="cta-line absolute bottom-0 left-0 h-px w-full bg-blue-500/50" />
      </section>

      {/* =========================================
          FOOTER
      ========================================== */}

      <footer
        ref={footerRef}
        className="px-6 py-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_1.2fr]">
            {/* Brand */}

            <div className="footer-brand">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm  text-lg font-bold text-white">
                  <VectorSquare />
                </div>

                <span className="text-lg font-semibold">
                  Haulvia.
                </span>
              </div>

              <p className="mt-2 max-w-[190px] text-xs leading-relaxed text-white/45">
                Real-time trucking operations that drive your
                business forward.
              </p>
            </div>

            {/* Footer columns */}

            {Object.entries(footerLinks).map(
              ([title, links]) => (
                <div
                  key={title}
                  className="footer-column"
                >
                  <h3 className="mb-3 text-xs font-medium text-white">
                    {title}
                  </h3>

                  <div className="space-y-1.5">
                    {links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-[11px] text-white/45 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )
            )}

            {/* Newsletter */}

            <div className="footer-newsletter">
              <h3 className="text-xs font-medium">
                Stay updated
              </h3>

              <p className="mt-2 max-w-[210px] text-[11px] leading-relaxed text-white/45">
                Get the latest updates and tips for fleet operations.
              </p>

              <div className="mt-4 flex overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs outline-none placeholder:text-white/25"
                />

                <button className="flex w-10 items-center justify-center bg-blue-600 transition-colors hover:bg-blue-500">
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="footer-bottom mt-8 border-t border-white/[0.08] pt-4 text-center">
            <p className="text-[10px] text-white/30">
              © 2026 Haulvia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}