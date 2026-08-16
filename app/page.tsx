"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "fa">("en");
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "fa" : "en");
  const isFa = lang === "fa";

  return (
    <main
      className={`bg-zinc-50 dark:bg-[#050505] min-h-screen ${isFa ? "font-vazir" : "font-outfit"} ${isFa ? "text-right" : "text-left"} relative transition-colors duration-500`}
      dir={isFa ? "rtl" : "ltr"}
    >
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-[1000] origin-left scale-x-0 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
      />

      <Navbar lang={lang} toggleLang={toggleLang} />

      <div className="relative z-10">
        <Hero lang={lang} />
        <Resume lang={lang} />
        <Works lang={lang} />
        <Contact lang={lang} />
      </div>
    </main>
  );
}
