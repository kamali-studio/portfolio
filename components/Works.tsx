"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Code2 } from "lucide-react";
import { siteData } from "../data"; // فراخوانی فایل اطلاعات

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Works({ lang }: { lang: "en" | "fa" }) {
  const isFa = lang === "fa";
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, { scrollTrigger: { trigger: card, start: "top 85%" }, y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: (index % 3) * 0.1 });
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="works" ref={sectionRef} className="min-h-screen bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 py-32 px-6 md:px-20 text-zinc-900 dark:text-zinc-100 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light mb-20 tracking-tight flex items-center gap-4 border-b border-black/10 dark:border-white/5 pb-8">
          <Code2 size={32} className="text-cyan-600 dark:text-cyan-500" />
          {isFa ? "نمونه کارهای منتخب" : "SELECTED WORKS"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* حالا پروژه‌ها مستقیماً از فایل دیتا لوپ می‌شوند */}
          {siteData.projects.map((project, index) => (
            <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" ref={(el) => { cardsRef.current[index] = el; }} className="group block h-[300px] cursor-none" style={{ perspective: "1000px" }}>
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 flex flex-col justify-between shadow-xl" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                  <div>
                    <p className="text-[10px] text-cyan-600 dark:text-cyan-500 mb-3 tracking-widest uppercase">{isFa ? project.clientFa : project.clientEn}</p>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white/90" dir="ltr">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto" dir="ltr">
                    {project.tech.split(", ").map((tech, i) => (
                      <span key={i} className="text-[10px] tracking-wider px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 p-8 rounded-2xl border border-cyan-500/30 bg-zinc-100 dark:bg-[#081316] transition-colors duration-500 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)]" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed text-sm">
                    {isFa ? project.descFa : project.descEn}
                  </p>
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold uppercase text-xs tracking-widest">
                    <span>{isFa ? "مشاهده سایت" : "Visit Site"}</span>
                    <ExternalLink size={16} />
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
