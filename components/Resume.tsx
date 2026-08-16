"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {
  User,
  Phone,
  UserPlus,
  DownloadCloud,
  Code2,
  Rocket,
  Database,
  ShieldCheck,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Resume({ lang }: { lang: "en" | "fa" }) {
  const isFa = lang === "fa";
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<
    (HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | null)[]
  >([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(cardRef.current, {
        clipPath: "inset(10% 50% 10% 50% round 20px)",
        opacity: 0,
        duration: 1.5,
        ease: "power4.inOut",
      });
      tl.from(
        imageRef.current,
        {
          scale: 0.8,
          rotation: isFa ? 5 : -5,
          transformOrigin: "center center",
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
        },
        "-=0.8",
      );
      tl.from(
        ".resume-text",
        { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.5",
      );
      tl.from(
        iconsRef.current,
        {
          x: isFa ? 20 : -20,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1",
      );

      gsap.to(imageRef.current, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".download-btn", {
        boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.6)",
        y: -3,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef, dependencies: [lang] },
  );

  const handleIconHover = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, {
      scale: 1.2,
      color: "#06b6d4",
      duration: 0.3,
      ease: "back.out(2)",
    });
  const handleIconLeave = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, {
      scale: 1,
      color: "#71717a",
      duration: 0.3,
      clearProps: "all",
    });

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Milad Kamali\nTEL:+989198995258\nEMAIL:miladkamali63@gmail.com\nEND:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Milad_Kamali.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-4 md:px-8 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 relative z-10 block"
    >
      <div
        ref={cardRef}
        className={`relative max-w-6xl mx-auto bg-white dark:bg-[#111111] transition-colors duration-500 rounded-2xl shadow-xl dark:shadow-2xl flex flex-col md:flex-row mt-16 md:mt-24 border border-black/5 dark:border-white/5 ${isFa ? "md:flex-row-reverse" : ""}`}
      >
        <div
          className={`hidden md:flex flex-col items-center justify-between w-24 py-8 bg-zinc-100 dark:bg-[#0a0a0a] transition-colors duration-500 z-30 ${isFa ? "rounded-r-2xl border-l border-black/5 dark:border-white/5" : "rounded-l-2xl border-r border-black/5 dark:border-white/5"}`}
        >
          <div className="space-y-8 w-full flex flex-col items-center mt-4">
            <div
              ref={(el) => {
                iconsRef.current[0] = el;
              }}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className="text-zinc-500 dark:text-zinc-400 cursor-none p-2"
            >
              <User size={22} />
            </div>
            <a
              href="tel:+989198995258"
              ref={(el) => {
                iconsRef.current[1] = el;
              }}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className="text-zinc-500 dark:text-zinc-400 cursor-none p-2"
              title={isFa ? "تماس مستقیم" : "Call Me"}
            >
              <Phone size={22} />
            </a>
            <button
              onClick={handleSaveContact}
              ref={(el) => {
                iconsRef.current[2] = el;
              }}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className="text-zinc-500 dark:text-zinc-400 cursor-none p-2"
              title={isFa ? "ذخیره در مخاطبین" : "Save Contact"}
            >
              <UserPlus size={24} />
            </button>
          </div>
          <a
            href="/Resume-Milad-Kamali.pdf"
            download
            className="flex flex-col items-center gap-3 cursor-none group"
          >
            <div className="download-btn w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white group-hover:bg-cyan-500 transition-colors">
              <DownloadCloud size={20} />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-zinc-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors uppercase text-center">
              {isFa ? "دانلود رزومه" : "Download CV"}
            </span>
          </a>
        </div>

        <div
          ref={imageRef}
          className={`relative w-full md:w-[380px] h-[400px] md:h-[580px] -mt-10 md:-mt-16 md:-mb-16 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden mx-auto md:mx-0 ${isFa ? "md:mr-12" : "md:ml-12"}`}
        >
          <Image
            src="/mimi (1).webp"
            alt="Milad Kamali"
            fill
            className="object-cover scale-105 hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3
              className="text-3xl font-black text-white tracking-tight"
              dir="ltr"
            >
              Milad Kamali
            </h3>
            <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mt-1">
              Developer
            </p>
          </div>
        </div>

        <div className="flex-1 py-12 px-8 md:px-16 z-10 flex flex-col justify-center">
          <h2 className="resume-text text-4xl md:text-5xl font-black text-zinc-900 dark:text-white/90 mb-6 tracking-tight transition-colors duration-500">
            {isFa ? "درباره من" : "about me"}
          </h2>
          <div
            className="resume-text flex flex-wrap gap-4 text-xs md:text-sm font-bold tracking-widest uppercase mb-8"
            dir="ltr"
          >
            <span className="text-cyan-600 dark:text-cyan-500">31 years</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span className="text-cyan-600 dark:text-cyan-500">Tehran</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span className="text-cyan-600 dark:text-cyan-500">Senior Dev</span>
          </div>
          <p
            className={`resume-text text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 text-sm md:text-base transition-colors duration-500 ${isFa ? "text-justify" : "text-left"}`}
          >
            {isFa
              ? "متخصص ارشد توسعه وب، اتوماسیون سازمانی و مدیر پروژه‌های دیجیتال با بیش از ۷ سال تجربه موفق. اشتیاق بالایی در طراحی معماری‌های پیچیده پایگاه داده (JetEngine) و پیاده‌سازی اتوماسیون‌های هوشمند (n8n) برای کسب‌وکارهای بین‌المللی دارم."
              : "Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Consistently receive high user experience scores for all web development projects. Passionate about building world class web applications and enterprise automation."}
          </p>

          <h3 className="resume-text text-2xl font-bold text-zinc-900 dark:text-white/90 mb-8 tracking-tight transition-colors duration-500">
            {isFa ? "خدمات من" : "my services"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="resume-text group">
              <Code2
                size={24}
                className="text-cyan-600 mb-4 group-hover:text-cyan-500 transition-colors"
              />
              <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                {isFa ? "توسعه وب‌سایت" : "development"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {isFa
                  ? "ساخت پلتفرم‌های سفارشی بر اساس نیازهای فنی و تجاری شما."
                  : "Building a custom tailored solution based on your technical specification."}
              </p>
            </div>
            <div className="resume-text group">
              <Rocket
                size={24}
                className="text-cyan-600 mb-4 group-hover:text-cyan-500 transition-colors"
              />
              <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                {isFa ? "بهینه‌سازی سئو" : "SEO optimization"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {isFa
                  ? "بررسی و ارتقای رتبه سایت شما در موتورهای جستجو با تکنیک‌های فنی."
                  : "Audit your website, perform technical improvements and meta tags."}
              </p>
            </div>
            <div className="resume-text group">
              <Database
                size={24}
                className="text-cyan-600 mb-4 group-hover:text-cyan-500 transition-colors"
              />
              <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                {isFa ? "معماری داده" : "data architecture"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {isFa
                  ? "طراحی دیتابیس‌های پیچیده و داینامیک با استفاده از JetEngine."
                  : "Complex database design and dynamic structures using JetEngine."}
              </p>
            </div>
            <div className="resume-text group">
              <ShieldCheck
                size={24}
                className="text-cyan-600 mb-4 group-hover:text-cyan-500 transition-colors"
              />
              <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                {isFa ? "اتوماسیون (n8n)" : "automation (n8n)"}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {isFa
                  ? "اتصال سیستم‌های مختلف و خودکارسازی فرآیندهای کسب‌وکار."
                  : "Connecting systems and automating business workflows with n8n."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
