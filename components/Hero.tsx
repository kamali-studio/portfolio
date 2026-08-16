"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero({ lang }: { lang: "en" | "fa" }) {
  const isFa = lang === "fa";
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
      tl.from(
        ".scroll-indicator",
        { opacity: 0, duration: 2, ease: "power2.out" },
        "-=0.5",
      );
      gsap.to(".ambient-glow", {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container, dependencies: [lang] },
  );

  return (
    <section
      ref={container}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="ambient-glow absolute w-[60vw] h-[40vw] bg-cyan-600/10 rounded-[100%] blur-[120px]"></div>
      </div>

      <div className="overflow-hidden z-10 py-4 px-6 text-center">
        <h1 className="hero-text text-6xl md:text-[9rem] font-black tracking-tighter text-zinc-900 dark:text-white/95 leading-none transition-colors duration-500">
          {isFa ? "میلاد کمالی" : "MILAD KAMALI"}
        </h1>
      </div>
      <div className="overflow-hidden z-10 text-center mt-6">
        <p className="hero-text text-xs md:text-lg tracking-[0.4em] uppercase text-zinc-600 dark:text-zinc-400 font-medium transition-colors duration-500">
          {isFa
            ? "توسعه‌دهنده ارشد وب / متخصص اتوماسیون"
            : "Senior Web Developer / IT Specialist"}
        </p>
      </div>

      <a
        href="#about"
        className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-none"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-400 dark:via-zinc-500 to-transparent"></div>
        <span className="text-[9px] tracking-[0.3em] uppercase">
          {isFa ? "اسکرول" : "Scroll"}
        </span>
      </a>
    </section>
  );
}
