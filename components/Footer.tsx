import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between pb-16 border-b border-neutral-800 gap-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
              <span>Have a project in mind?</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter max-w-xl leading-none">
              Let&apos;s create visual poetry together.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#f5a623] hover:bg-[#e0951a] text-black font-bold text-sm tracking-wide transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Middle Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-neutral-800 text-neutral-400 text-sm">
          {/* Col 1: Bio summary */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <svg className="w-7 h-5" viewBox="0 0 48 24" fill="currentColor">
                <circle cx="10" cy="12" r="10" />
                <path d="M24 2C29.52 2 34 6.48 34 12C34 17.52 29.52 22 24 22V2Z" />
                <rect x="38" y="2" width="8" height="20" rx="4" />
              </svg>
              <span className="font-extrabold tracking-tight uppercase text-sm">Abhishek</span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-400">
              Videographer, Video Editor & Photographer with 1 year of professional craft capturing motion, texture, and light across commercial & fine art projects.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Inquiries & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Proof */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Expertise
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between">
                <span>Cinematic Video</span>
                <span className="text-amber-400 font-medium">4K / Super-8</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Post & Sound Design</span>
                <span className="text-neutral-500">DaVinci / Premiere</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Editorial Photography</span>
                <span className="text-neutral-500">35mm / Digital</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Color Grading</span>
                <span className="text-neutral-500">Custom Film LUTs</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social proof handles matching image */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { label: "yt", href: "https://youtube.com" },
                { label: "ig", href: "https://instagram.com" },
                { label: "fb", href: "https://facebook.com" },
                { label: "x", href: "https://x.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1 rounded-full border border-neutral-700 hover:border-amber-400 hover:text-white text-xs lowercase font-mono transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-neutral-500 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>hello@abhishekvisuals.com</span>
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Abhishek. All rights reserved. Visual Poetry in Motion.</p>
          <div className="flex items-center gap-6">
            <span>1 Year Professional Experience</span>
            <span>•</span>
            <span>Worldwide Availability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
