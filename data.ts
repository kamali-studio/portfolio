export const siteData = {
  // ۱. اطلاعات شخصی و راه‌های ارتباطی
  profile: {
    nameEn: "MILAD KAMALI",
    nameFa: "میلاد کمالی",
    roleEn: "Senior Web Developer / IT Specialist",
    roleFa: "توسعه‌دهنده ارشد وب / متخصص اتوماسیون",
    email: "miladkamali63@gmail.com",
    phoneDisplay: "(+98) 919 899 5258",
    phoneLink: "+989198995258",
    linkedin: "milad-kamali-k1993",
    linkedinUrl: "https://linkedin.com/in/milad-kamali-k1993",
    locationEn: "Tehran, Robat Karim",
    locationFa: "تهران، رباط کریم",
    avatar: "/mimi (1).webp", // عکس پروفایل در پوشه public
    resumeFile: "/Resume-Milad-Kamali.pdf", // فایل رزومه در پوشه public
  },

  // ۲. بخش درباره من
  about: {
    age: "31 years",
    city: "Tehran",
    shortRole: "Senior Dev",
    descEn: "Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Consistently receive high user experience scores for all web development projects. Passionate about building world class web applications and enterprise automation.",
    descFa: "متخصص ارشد توسعه وب، اتوماسیون سازمانی و مدیر پروژه‌های دیجیتال با بیش از ۷ سال تجربه موفق. اشتیاق بالایی در طراحی معماری‌های پیچیده پایگاه داده (JetEngine) و پیاده‌سازی اتوماسیون‌های هوشمند (n8n) برای کسب‌وکارهای بین‌المللی دارم.",
    
    // خدمات من
    services: [
      {
        id: "dev",
        titleEn: "development", titleFa: "توسعه وب‌سایت",
        descEn: "Building a custom tailored solution based on your technical specification.",
        descFa: "ساخت پلتفرم‌های سفارشی بر اساس نیازهای فنی و تجاری شما."
      },
      {
        id: "seo",
        titleEn: "SEO optimization", titleFa: "بهینه‌سازی سئو",
        descEn: "Audit your website, perform technical improvements and meta tags.",
        descFa: "بررسی و ارتقای رتبه سایت شما در موتورهای جستجو با تکنیک‌های فنی."
      },
      {
        id: "data",
        titleEn: "data architecture", titleFa: "معماری داده",
        descEn: "Complex database design and dynamic structures using JetEngine.",
        descFa: "طراحی دیتابیس‌های پیچیده و داینامیک با استفاده از JetEngine."
      },
      {
        id: "auto",
        titleEn: "automation (n8n)", titleFa: "اتوماسیون (n8n)",
        descEn: "Connecting systems and automating business workflows with n8n.",
        descFa: "اتصال سیستم‌های مختلف و خودکارسازی فرآیندهای کسب‌وکار."
      }
    ]
  },

  // ۳. نمونه کارها (۱۹ پروژه)
  projects: [
    { url: "https://soscleanservices.com", title: "SOS Clean Services", clientEn: "Canada Market", clientFa: "مارکت کانادا", tech: "UX/UI, Tech SEO", descEn: "Bilingual corporate website with online booking & server management.", descFa: "سایت شرکتی دوزبانه با سیستم رزرو آنلاین و مدیریت سرور." },
    { url: "https://elitegtaconstruction.com", title: "Elite GTA Construction", clientEn: "North America", clientFa: "آمریکای شمالی", tech: "JetEngine, n8n", descEn: "Luxury portal with dynamic galleries & automated CRM integrations.", descFa: "پورتال لوکس مهندسی با گالری داینامیک پروژه‌ها و اتوماسیون n8n." },
    { url: "https://dermasilk.ca", title: "DermaSilk Clinic", clientEn: "Canada Market", clientFa: "مارکت کانادا", tech: "Local SEO, CPT", descEn: "Modern UI for North American beauty standards with online booking.", descFa: "طراحی رابط کاربری کلینیک زیبایی، سیستم نوبت‌دهی و سئو محلی." },
    { url: "https://digilife360.com", title: "Digilife360", clientEn: "North America", clientFa: "آمریکای شمالی", tech: "Ads Platform, UI/UX", descEn: "Comprehensive advertising platform for US and Canada.", descFa: "پلتفرم جامع آگهی‌دهی در مارکت کانادا و آمریکا." },
    { url: "https://cogreendrywallinsulition.ca", title: "Eco Green Drywall", clientEn: "B2B Portal", clientFa: "پورتال B2B مهندسی", tech: "JetEngine, B2B", descEn: "B2B engineering portal with dynamic project showcases.", descFa: "سایت شرکتی B2B برای معرفی خدمات مهندسی و پیمانکاری." },
    { url: "https://premiumcollege.ca", title: "Premium College", clientEn: "LMS Portal", clientFa: "پورتال آموزشی", tech: "LMS, UX, SEO", descEn: "LMS platform optimized for long-term reading and content SEO.", descFa: "مدیریت پورتال‌های آموزشی، سیستم LMS و بهبود تجربه کاربری." },
    { url: "https://immigratingwithus.com", title: "Immigrating With Us", clientEn: "Legal Services", clientFa: "خدمات مهاجرتی", tech: "Security, Forms", descEn: "Minimal UI with multi-step smart forms and secure hosting.", descFa: "رابط کاربری مینیمال با فرم‌های هوشمند ارزیابی و امنیت بالا." },
    { url: "https://monotravelagency.com", title: "Mono Travel Agency", clientEn: "Tourism", clientFa: "آژانس مسافرتی", tech: "Flexbox, API", descEn: "Travel agency platform with dynamic destinations and booking.", descFa: "پلتفرم گردشگری با نمایش داینامیک تورها و درگاه پرداخت." },
    { url: "https://angelsaid.org", title: "Angels Aid", clientEn: "International NGO", clientFa: "موسسه خیریه", tech: "Multilingual", descEn: "Multilingual portal for secure international donations.", descFa: "پورتال چندزبانه بین‌المللی با درگاه امن جمع‌آوری کمک‌های مالی." },
    { url: "https://infinitylaser.ca", title: "Laser Infinity", clientEn: "Canada Market", clientFa: "مارکت کانادا", tech: "Clinic Portal", descEn: "Web platform for beauty clinic and laser services.", descFa: "توسعه پلتفرم کلینیک زیبایی و خدمات لیزر." },
    { url: "https://damankala.ir", title: "Damankala", clientEn: "Online Store", clientFa: "فروشگاه آنلاین", tech: "WooCommerce, Perf", descEn: "Large e-commerce DB with advanced search and high performance.", descFa: "فروشگاه اینترنتی با دیتابیس عظیم قطعات و عملکرد بهینه." },
    { url: "https://attarjan.ir", title: "Attarjan", clientEn: "E-Commerce", clientFa: "فروشگاه آنلاین", tech: "Dynamic Data", descEn: "Organic products platform with complex filtering structures.", descFa: "فروشگاه محصولات ارگانیک با ساختار داده پویا و فیلترینگ پیچیده." },
    { url: "https://www.yadak-kesh.ir", title: "Yadak-Kesh", clientEn: "Vehicle Assist", clientFa: "امداد خودرو", tech: "SEO, Custom CSS", descEn: "Custom UI and technical performance SEO for vehicle assistance.", descFa: "بهینه‌سازی سئو و طراحی دکمه‌های شناور برای خدمات خودرویی." },
    { url: "https://meta.irpsc.com", title: "Meta News", clientEn: "News Portal", clientFa: "پلتفرم خبری", tech: "Content Mgmt", descEn: "Comprehensive news platform for Iran Metaverse.", descFa: "پلتفرم جامع اخبار متاورس ایران." },
    { url: "https://saffronuses.com", title: "Saffron Uses", clientEn: "E-Commerce", clientFa: "فروشگاه اینترنتی", tech: "WooCommerce, UI", descEn: "Online store for specialized saffron products.", descFa: "توسعه وب‌سایت فروشگاهی برای محصولات زعفران." },
    { url: "https://www.iturgenthelp.com", title: "IT Urgent Help", clientEn: "IT Services", clientFa: "امداد آی‌تی", tech: "Support Portal", descEn: "Support and IT services portal.", descFa: "پورتال خدمات و پشتیبانی فناوری اطلاعات." },
    { url: "https://isonila.com", title: "Isonila", clientEn: "Service Platform", clientFa: "پلتفرم خدماتی", tech: "Web Development", descEn: "Modern web platform development.", descFa: "توسعه و طراحی پلتفرم تحت وب." },
    { url: "https://it-f1.ca", title: "IT-F1", clientEn: "Tech Platform", clientFa: "پلتفرم فناوری", tech: "Web Architecture", descEn: "Canadian tech service platform.", descFa: "پلتفرم خدمات تکنولوژی برای مارکت کانادا." },
    { url: "https://jethashtag.com", title: "Jet Hashtag", clientEn: "Digital Service", clientFa: "خدمات دیجیتال", tech: "Web Design", descEn: "Digital services and hashtag generation platform.", descFa: "پلتفرم دیجیتال مارکتینگ و خدمات هشتگ." }
  ]
};
