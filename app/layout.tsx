import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek | Videographer, Editor & Photographer",
  description:
    "Portfolio of Abhishek — Videographer, Video Editor & Photographer with 1 year of experience crafting visual poetry, cinematic reels, and timeless imagery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#fafaf9] text-[#111111] font-sans selection:bg-[#f5a623] selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
