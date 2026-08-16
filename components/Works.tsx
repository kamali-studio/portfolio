"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Code2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    url: "https://soscleanservices.com",
    title: "SOS Clean Services",
    clientEn: "Canada Market",
    clientFa: "مارکت کانادا",
    tech: "UX/UI, Tech SEO",
    descEn:
      "Bilingual corporate website with online booking & server management.",
    descFa: "سایت شرکتی دوزبانه با سیستم رزرو آنلاین و مدیریت سرور.",
  },
  {
    url: "https://elitegtaconstruction.com",
    title: "Elite GTA Construction",
    clientEn: "North America",
    clientFa: "آمریکای شمالی",
    tech: "JetEngine, n8n",
    descEn:
      "Luxury portal with dynamic galleries & automated CRM integrations.",
    descFa: "پورتال لوکس مهندسی با گالری داینامیک پروژه‌ها و اتوماسیون n8n.",
  },
  {
    url: "https://dermasilk.ca",
    title: "DermaSilk Clinic",
    clientEn: "Canada Market",
    clientFa: "مارکت کانادا",
    tech: "Local SEO, CPT",
    descEn:
      "Modern UI for North American beauty standards with online booking.",
    descFa: "طراحی رابط کاربری کلینیک زیبایی، سیستم نوبت‌دهی و سئو محلی.",
  },
  {
    url: "https://digilife360.com",
    title: "Digilife360",
    clientEn: "North America",
    clientFa: "آمریکای شمالی",
    tech: "Ads Platform, UI/UX",
    descEn: "Comprehensive advertising platform for US and Canada.",
    descFa: "پلتفرم جامع آگهی‌دهی در مارکت کانادا و آمریکا.",
  },
  {
    url: "https://cogreendrywallinsulition.ca",
    title: "Eco Green Drywall",
    clientEn: "B2B Portal",
    clientFa: "پورتال B2B مهندسی",
    tech: "JetEngine, B2B",
    descEn: "B2B engineering portal with dynamic project showcases.",
    descFa: "سایت شرکتی B2B برای معرفی خدمات مهندسی و پیمانکاری.",
  },
  {
    url: "https://premiumcollege.ca",
    title: "Premium College",
    clientEn: "LMS Portal",
    clientFa: "پورتال آموزشی",
    tech: "LMS, UX, SEO",
    descEn: "LMS platform optimized for long-term reading and content SEO.",
    descFa: "مدیریت پورتال‌های آموزشی، سیستم LMS و بهبود تجربه کاربری.",
  },
  {
    url: "https://immigratingwithus.com",
    title: "Immigrating With Us",
    clientEn: "Legal Services",
    clientFa: "خدمات مهاجرتی",
    tech: "Security, Forms",
    descEn: "Minimal UI with multi-step smart forms and secure hosting.",
    descFa: "رابط کاربری مینیمال با فرم‌های هوشمند ارزیابی و امنیت بالا.",
  },
  {
    url: "https://monotravelagency.com",
    title: "Mono Travel Agency",
    clientEn: "Tourism",
    clientFa: "آژانس مسافرتی",
    tech: "Flexbox, API",
    descEn: "Travel agency platform with dynamic destinations and booking.",
    descFa: "پلتفرم گردشگری با نمایش داینامیک تورها و درگاه پرداخت.",
  },
  {
    url: "https://angelsaid.org",
    title: "Angels Aid",
    clientEn: "International NGO",
    clientFa: "موسسه خیریه",
    tech: "Multilingual",
    descEn: "Multilingual portal for secure international donations.",
    descFa: "پورتال چندزبانه بین‌المللی با درگاه امن جمع‌آوری کمک‌های مالی.",
  },
  {
    url: "https://infinitylaser.ca",
    title: "Laser Infinity",
    clientEn: "Canada Market",
    clientFa: "مارکت کانادا",
    tech: "Clinic Portal",
    descEn: "Web platform for beauty clinic and laser services.",
    descFa: "توسعه پلتفرم کلینیک زیبایی و خدمات لیزر.",
  },
  {
    url: "https://damankala.ir",
    title: "Damankala",
    clientEn: "Online Store",
    clientFa: "فروشگاه آنلاین",
    tech: "WooCommerce, Perf",
    descEn: "Large e-commerce DB with advanced search and high performance.",
    descFa: "فروشگاه اینترنتی با دیتابیس عظیم قطعات و عملکرد بهینه.",
  },
  {
    url: "https://attarjan.ir",
    title: "Attarjan",
    clientEn: "E-Commerce",
    clientFa: "فروشگاه آنلاین",
    tech: "Dynamic Data",
    descEn: "Organic products platform with complex filtering structures.",
    descFa: "فروشگاه محصولات ارگانیک با ساختار داده پویا و فیلترینگ پیچیده.",
  },
  {
    url: "https://www.yadak-kesh.ir",
    title: "Yadak-Kesh",
    clientEn: "Vehicle Assist",
    clientFa: "امداد خودرو",
    tech: "SEO, Custom CSS",
    descEn: "Custom UI and technical performance SEO for vehicle assistance.",
    descFa: "بهینه‌سازی سئو و طراحی دکمه‌های شناور برای خدمات خودرویی.",
  },
  {
    url: "https://meta.irpsc.com",
    title: "Meta News",
    clientEn: "News Portal",
    clientFa: "پلتفرم خبری",
    tech: "Content Mgmt",
    descEn: "Comprehensive news platform for Iran Metaverse.",
    descFa: "پلتفرم جامع اخبار متاورس ایران.",
  },
  {
    url: "https://saffronuses.com",
    title: "Saffron Uses",
    clientEn: "E-Commerce",
    clientFa: "فروشگاه اینترنتی",
    tech: "WooCommerce, UI",
    descEn: "Online store for specialized saffron products.",
    descFa: "توسعه وب‌سایت فروشگاهی برای محصولات زعفران.",
  },
  {
    url: "https://www.iturgenthelp.com",
    title: "IT Urgent Help",
    clientEn: "IT Services",
    clientFa: "امداد آی‌تی",
    tech: "Support Portal",
    descEn: "Support and IT services portal.",
    descFa: "پورتال خدمات و پشتیبانی فناوری اطلاعات.",
  },
  {
    url: "https://isonila.com",
    title: "Isonila",
    clientEn: "Service Platform",
    clientFa: "پلتفرم خدماتی",
    tech: "Web Development",
    descEn: "Modern web platform development.",
    descFa: "توسعه و طراحی پلتفرم تحت وب.",
  },
  {
    url: "https://it-f1.ca",
    title: "IT-F1",
    clientEn: "Tech Platform",
    clientFa: "پلتفرم فناوری",
    tech: "Web Architecture",
    descEn: "Canadian tech service platform.",
    descFa: "پلتفرم خدمات تکنولوژی برای مارکت کانادا.",
  },
  {
    url: "https://jethashtag.com",
    title: "Jet Hashtag",
    clientEn: "Digital Service",
    clientFa: "خدمات دیجیتال",
    tech: "Web Design",
    descEn: "Digital services and hashtag generation platform.",
    descFa: "پلتفرم دیجیتال مارکتینگ و خدمات هشتگ.",
  },
];

export default function Works({ lang }: { lang: "en" | "fa" }) {
  const isFa = lang === "fa";
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%" },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: (index % 3) * 0.1,
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="works"
      ref={sectionRef}
      className="min-h-screen bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 py-32 px-6 md:px-20 text-zinc-900 dark:text-zinc-100 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light mb-20 tracking-tight flex items-center gap-4 border-b border-black/10 dark:border-white/5 pb-8">
          <Code2 size={32} className="text-cyan-600 dark:text-cyan-500" />
          {isFa ? "نمونه کارهای منتخب" : "SELECTED WORKS"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group block h-[300px] cursor-none"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div
                  className="absolute inset-0 p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 flex flex-col justify-between shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <p className="text-[10px] text-cyan-600 dark:text-cyan-500 mb-3 tracking-widest uppercase">
                      {isFa ? project.clientFa : project.clientEn}
                    </p>
                    <h3
                      className="text-2xl font-bold text-zinc-900 dark:text-white/90"
                      dir="ltr"
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto" dir="ltr">
                    {project.tech.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] tracking-wider px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute inset-0 p-8 rounded-2xl border border-cyan-500/30 bg-zinc-100 dark:bg-[#081316] transition-colors duration-500 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
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
