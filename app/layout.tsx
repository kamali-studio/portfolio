import type { Metadata } from "next";
import { Outfit, Vazirmatn } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const vazir = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazir" });

export const metadata: Metadata = {
  title: "Milad Kamali | Portfolio",
  description: "Senior Web Developer & IT Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${vazir.variable} bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 antialiased overflow-x-hidden transition-colors duration-500`}
        suppressHydrationWarning
      >
        <div className="bg-noise"></div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
