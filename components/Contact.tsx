"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LinkedinIcon = ({
  className,
  size = 24,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact({ lang }: { lang: "en" | "fa" }) {
  const isFa = lang === "fa";
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-item", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 md:px-20 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 relative z-10 block"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="contact-item text-4xl md:text-6xl font-black mb-6 tracking-tight text-zinc-900 dark:text-white/90">
          {isFa ? "بیایید همکاری کنیم." : "LET'S WORK TOGETHER."}
        </h2>
        <p className="contact-item text-zinc-600 dark:text-zinc-500 mb-20 text-lg">
          {isFa
            ? "برای شروع پروژه جدید یا مشاوره فنی در دسترس هستم."
            : "Available for new opportunities and technical consulting."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:miladkamali63@gmail.com"
            className="contact-item group p-8 rounded-xl bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border border-black/5 dark:border-white/5 hover:border-cyan-500/50 flex flex-col items-center cursor-none shadow-sm dark:shadow-none"
          >
            <Mail
              size={28}
              className="text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 mb-4 transition-colors"
            />
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-auto">
              miladkamali63@gmail.com
            </p>
          </a>

          <a
            href="tel:+989198995258"
            className="contact-item group p-8 rounded-xl bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border border-black/5 dark:border-white/5 hover:border-cyan-500/50 flex flex-col items-center cursor-none shadow-sm dark:shadow-none"
          >
            <Phone
              size={28}
              className="text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 mb-4 transition-colors"
            />
            <p
              className="text-xs text-zinc-700 dark:text-zinc-400 mt-auto"
              dir="ltr"
            >
              (+98) 919 899 5258
            </p>
          </a>

          <a
            href="https://linkedin.com/in/milad-kamali-k1993"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item group p-8 rounded-xl bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border border-black/5 dark:border-white/5 hover:border-cyan-500/50 flex flex-col items-center cursor-none shadow-sm dark:shadow-none"
          >
            <LinkedinIcon
              size={28}
              className="text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 mb-4 transition-colors"
            />
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-auto">
              milad-kamali-k1993
            </p>
          </a>

          <div className="contact-item p-8 rounded-xl bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border border-black/5 dark:border-white/5 flex flex-col items-center shadow-sm dark:shadow-none">
            <MapPin size={28} className="text-zinc-500 mb-4" />
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-auto">
              {isFa ? "تهران، رباط کریم" : "Tehran, Robat Karim"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
