"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Film,
  Sparkles,
  ArrowUpRight,
  Layers,
  Cpu,
  Monitor,
  CheckCircle2,
  Calendar,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const gearList = [
    {
      category: "Cinematography & Cameras",
      items: [
        "Sony FX3 Cinema Line (4K 120p, 10-bit 4:2:2, S-Cinetone)",
        "Sony A7 IV (Hybrid 33MP Photography & 4K Recording)",
        "Beaulieu 4008 ZM II Vintage Super 8mm Movie Camera",
        "DJI RS3 Pro Gimbal with LiDAR Focusing System",
      ],
    },
    {
      category: "Optics & Glass",
      items: [
        "Sirui Anamorphic 35mm & 50mm T2.9 1.6x Full Frame",
        "Sony FE 24-70mm f/2.8 GM II Zoom",
        "Sigma 85mm f/1.4 DG DN Art Prime",
        "Vintage Helios 44-2 58mm f/2 with Swirly Bokeh Mod",
      ],
    },
    {
      category: "Post-Production Suite",
      items: [
        "DaVinci Resolve Studio 19 (Advanced Node Color Grading & Fairlight)",
        "Adobe Premiere Pro & After Effects (Motion Graphics & Pacing)",
        "Calibrated LG UltraFine 4K IPS Display (100% DCI-P3 Color Accuracy)",
        "Custom Film Emulation LUTs & 35mm Grain Scans",
      ],
    },
    {
      category: "Lighting & Field Audio",
      items: [
        "Aputure Light Storm 300d II + Light Dome 150",
        "Amaran T2c & T4c RGBWW Tube Lights",
        "Sennheiser MKH 416 Boom Shotgun Microphone",
        "DJI Mic 2 Wireless System (32-bit Float Recording)",
      ],
    },
  ];

  const milestones = [
    {
      period: "Months 1 - 3",
      title: "Foundational Rhythm & Indie Music Videos",
      description:
        "Began professional freelance journey shooting acoustic sessions and fast-paced electronic music clips. Mastered camera motion and precision speed-ramping.",
    },
    {
      period: "Months 4 - 6",
      title: "First Viral Reels & High-Retention Commercial Cuts",
      description:
        "Delivered 15+ high-impact short-form videos for fashion labels and local creatives, crossing 250k organic views with an average 82% completion rate.",
    },
    {
      period: "Months 7 - 9",
      title: "Sala Canal Curated Showcase & Film Works",
      description:
        "Invited to present architectural Super 8 and digital cinema studies at Sala Canal de Isabel II in Madrid, expanding into fine art documentary.",
    },
    {
      period: "Months 10 - 12",
      title: "Full-Spectrum Director of Photography & Senior Editor",
      description:
        "Expanded into full end-to-end commercial productions: concept scripting, lighting setups, gimbal operation, and professional DaVinci Resolve mastering.",
    },
  ];

  return (
    <div className="w-full bg-[#fafaf9] text-neutral-900 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f5a623] font-bold mb-3">
              <Sparkles className="w-4 h-4 fill-amber-400" />
              <span>About Abhishek</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-black">
              Filmmaker.
              <br />
              Editor.
              <br />
              <span className="text-neutral-400">Observer.</span>
            </h1>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-base text-neutral-700 leading-relaxed font-normal">
              Based in the studio and on location worldwide. 1 year of intensive commercial
              delivery shaping light, human rhythm, and visual poetry.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
              <span className="px-3 py-1 rounded-full bg-neutral-200/80 text-neutral-800">
                1 Year Pro Experience
              </span>
              <span>•</span>
              <span>45+ Projects</span>
              <span>•</span>
              <span>Worldwide Travel</span>
            </div>
          </div>
        </div>

        {/* Artistic Portrait & Philosophy Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Artistic Portrait with Vintage Camera */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[48px] overflow-hidden bg-black shadow-2xl border border-neutral-300 group">
              <Image
                src="/images/about-cameraman.jpg"
                alt="Abhishek with vintage camera"
                fill
                priority
                className="object-cover filter grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-mono uppercase text-amber-400">Philosophy</span>
                <p className="text-lg font-bold mt-1">
                  &ldquo;A frame isn&apos;t just pixels — it&apos;s a pulse of light and time.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bio, Story & Approach */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                Merging the nostalgia of analog celluloid with modern hyper-sharp digital precision.
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                In my first year in professional filmmaking and photography, I chose not to take
                shortcuts. I committed to mastering every single link in the visual chain: from
                directing talent on set, pulling manual anamorphic focus, and balancing high-speed
                gimbals, to fine-tuning audio design and sculpting custom film print curves in
                DaVinci Resolve.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Whether creating a 30-second viral commercial that stops thumbs on social media,
                or directing a moody 4-minute music video shot on vintage Super 8, my goal is always
                the same: create an unforgettable visual impression that resonates.
              </p>
            </div>

            {/* Quick Stats Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200">
                <span className="text-2xl font-black text-black">1 Year</span>
                <p className="text-xs text-neutral-500 mt-0.5">High-Intensity Craft</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200">
                <span className="text-2xl font-black text-black">+250k</span>
                <p className="text-xs text-neutral-500 mt-0.5">Audience Reach</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200">
                <span className="text-2xl font-black text-black">100%</span>
                <p className="text-xs text-neutral-500 mt-0.5">On-Schedule Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline: Year 1 Milestones */}
      <section className="bg-black text-white py-20 px-5 sm:px-8 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] font-semibold">
              Chronicle
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2">
              1 Year of Rapid Evolution
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              How focused dedication transformed raw passion into dependable commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {m.period}
                  </span>
                  <h3 className="text-lg font-bold mt-4 text-white leading-snug">{m.title}</h3>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center gap-2 text-xs text-amber-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Completed Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Locker */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] font-bold">
              Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black mt-2">
              The Gear & Post Suite
            </h2>
          </div>
          <p className="text-neutral-600 text-xs sm:text-sm max-w-md">
            Industry-standard digital cinema gear alongside vintage analog film cameras and a
            color-calibrated editing bay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gearList.map((g, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f5a623]" />
                {g.category}
              </h3>
              <ul className="space-y-3">
                {g.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <span className="text-neutral-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 text-center pt-8">
        <div className="p-10 sm:p-14 rounded-[40px] bg-[#f5a623] text-black shadow-xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-xl">
            Ready to bring your next story to life?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-900 max-w-md">
            Currently accepting bookings for brand campaigns, music videos, and editorial portraiture.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider transition transform hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-wider transition"
            >
              Browse Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
