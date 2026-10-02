"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ArrowUpRight,
  Play,
  Sparkles,
  Camera,
  Film,
  Award,
  Sliders,
  CheckCircle2,
  Tv,
  Eye,
  Clock,
  ChevronRight,
} from "lucide-react";
import LightboxModal, { ProjectItem } from "@/components/LightboxModal";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const portfolioItems: ProjectItem[] = [
    {
      id: "arch-film",
      title: "Symphony in White // Architectural Ode",
      category: "Cinematography",
      image: "/images/portfolio-arch.jpg",
      client: "Studio Architettura",
      year: "2026",
      stats: "120k Views",
      description:
        "4K slow-motion architectural exploration investigating natural daylight interaction with fluid organic forms.",
    },
    {
      id: "solitary-tree",
      title: "Solitude in Mist // 35mm Poetry",
      category: "Photography",
      image: "/images/portfolio-tree.jpg",
      client: "Nordic Minimalist Magazine",
      year: "2025",
      stats: "Award Winner",
      description:
        "Fine art black and white medium format photograph capturing stillness and poetic silence on frozen terrain.",
    },
    {
      id: "wheel-geometry",
      title: "Rotations // Modern Structural Rhythm",
      category: "Editorial",
      image: "/images/portfolio-wheel.jpg",
      client: "Urban Visions Film Fest",
      year: "2025",
      stats: "Exhibition Feature",
      description:
        "High-contrast geometric study of observation mechanics framing the city horizon in monochrome clarity.",
    },
    {
      id: "yellow-palm",
      title: "Amber Reverie // Color & Texture",
      category: "Fashion Film & Stills",
      image: "/images/portfolio-palm.jpg",
      client: "Maison Soleil",
      year: "2026",
      stats: "Brand Campaign",
      description:
        "Editorial campaign exploring high saturation monochrome yellow palette with natural textures and subtle motion.",
    },
    {
      id: "cinema-room",
      title: "Golden Hour Melancholia // Music Video",
      category: "Video Editing & Color",
      image: "/images/work-cinema.jpg",
      client: "Indie Sound Records",
      year: "2026",
      stats: "310k Streams",
      description:
        "Full color grade and rhythm-based pacing cut in DaVinci Resolve using Kodak 5219 film emulation.",
    },
    {
      id: "concert-night",
      title: "Electric Pulse // Live Tour Film",
      category: "Gimbal & Videography",
      image: "/images/work-concert.jpg",
      client: "Sonic Boom Festival",
      year: "2025",
      stats: "Official Aftermovie",
      description:
        "High-energy gimbal footage capturing stage pyrotechnics, crowd euphoria, and artist performance in low light.",
    },
  ];

  return (
    <div className="w-full bg-[#fafaf9] overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Identical to Image 1 & 2)                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-4 pb-16 lg:pt-8 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography, Subtext, Social Pills, Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Massive Bold Lowercase Headline */}
            <div className="select-none">
              <h1 className="text-7xl sm:text-8xl md:text-[105px] xl:text-[120px] font-black tracking-[-0.05em] leading-[0.85] text-black">
                visual
                <br />
                poetry
              </h1>
            </div>

            {/* Subtext */}
            <p className="mt-8 text-neutral-700 text-sm sm:text-base font-normal max-w-md leading-relaxed">
              Welcome to a visual journey that transcends time and space.
              Discover the artistry of moments captured in motion.
            </p>

            {/* Social Pill Buttons matching image */}
            <div className="mt-8 flex items-center gap-2">
              {[
                { name: "yt", href: "https://youtube.com", label: "YouTube" },
                { name: "ig", href: "https://instagram.com", label: "Instagram" },
                { name: "fb", href: "https://facebook.com", label: "Facebook" },
                { name: "x", href: "https://x.com", label: "X (Twitter)" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-black/70 flex items-center justify-center text-xs font-mono font-medium text-black hover:bg-black hover:text-white transition-all duration-200 active:scale-95"
                >
                  {social.name}
                </a>
              ))}
              <div className="h-px bg-neutral-200 flex-1 ml-3" />
            </div>

            {/* Stats / Social Proof Metrics matching Image 2 */}
            <div className="mt-10 grid grid-cols-2 gap-6 pt-2">
              {/* Stat 1: +250k */}
              <div>
                <div className="text-4xl sm:text-5xl font-black italic tracking-tighter text-black">
                  +250k
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-600 mt-1 max-w-[200px] leading-snug">
                  Videos that reaching a wide audience and give lasting impression
                </p>
              </div>

              {/* Stat 2: +800k */}
              <div>
                <div className="text-4xl sm:text-5xl font-black italic tracking-tighter text-black">
                  +800k
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-600 mt-1 max-w-[200px] leading-snug">
                  Hours watched, engaging storytelling that captivates viewers
                </p>
              </div>
            </div>

            {/* Additional 1-Year Experience Highlight Pill */}
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                1 Year of Pro Experience • Videography & Editing
              </span>
            </div>
          </div>

          {/* Right Column: Yellow Amber Rounded Card with Filmmaker */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* The Main Amber Card */}
            <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-[48px] sm:rounded-[56px] bg-[#f5a623] p-4 sm:p-6 overflow-hidden shadow-2xl shadow-amber-500/20 group">
              {/* Hand-drawn Signature Script in Top-Left */}
              <div className="absolute top-6 left-8 z-20 pointer-events-none select-none">
                <span className="font-signature text-4xl sm:text-5xl text-white/90 font-bold drop-shadow-sm tracking-wide">
                  Abhishek
                </span>
              </div>

              {/* Top-Right Floating Globe Badge matching image */}
              <div className="absolute top-6 right-6 z-20">
                <div
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg border border-white/20 transition-transform duration-300 hover:rotate-45"
                  title="Global Productions"
                >
                  <Globe className="w-6 h-6 stroke-[1.5]" />
                </div>
              </div>

              {/* Filmmaker Photo with Vintage Camera */}
              <div className="relative w-full h-full rounded-[38px] sm:rounded-[46px] overflow-hidden">
                <Image
                  src="/images/hero-cameraman.jpg"
                  alt="Abhishek - Videographer and Photographer"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Left-edge Docked Pill Badge Widget (matching Image 1 & 2) */}
              <div className="absolute left-4 bottom-8 sm:left-6 sm:bottom-10 z-20 flex flex-col items-center gap-2.5 p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-xl">
                {/* Thumbnail 1: Hands holding camera */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/images/thumb-cam.jpg"
                    alt="Vintage camera shoot"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Thumbnail 2: Creative portrait */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/images/thumb-portrait.jpg"
                    alt="Creative director portrait"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Action arrow button */}
                <Link
                  href="/portfolio"
                  aria-label="View portfolio"
                  className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition transform hover:scale-105 active:scale-95 shadow-md"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. REPEATING INFINITE MARQUEE (Identical to Image 2 & 3)  */}
      {/* ========================================================= */}
      <div className="w-full bg-black text-white overflow-hidden py-4 select-none border-t border-neutral-900">
        <div className="animate-marquee flex items-center">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-7xl sm:text-8xl md:text-9xl font-black lowercase tracking-tighter whitespace-nowrap px-4 leading-none text-white/95"
            >
              about <span className="text-amber-500 font-serif font-light">.</span>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. ABOUT SECTION (Identical to Image 3 & 4)               */}
      {/* ========================================================= */}
      <section className="relative w-full bg-black text-white pt-12 pb-24 overflow-hidden">
        {/* Viewfinder Reticle / Camera Target Markings */}
        {/* Top-Left Target Reticle */}
        <div className="absolute top-8 left-8 z-10 hidden sm:flex items-center justify-center w-12 h-12">
          <svg className="w-10 h-10 text-white/60 animate-pulse-slow" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Top-Right Target Reticle */}
        <div className="absolute top-8 right-8 z-10 hidden sm:flex items-center justify-center w-12 h-12">
          <svg className="w-10 h-10 text-white/60 animate-pulse-slow" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Viewfinder Framing Calibration Ticks on Sides */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8 text-white/40">
          <span className="font-mono text-xs">+</span>
          <div className="w-0.5 h-16 bg-white/30" />
          <span className="font-mono text-xs">-</span>
          <div className="w-0.5 h-16 bg-white/30" />
          <span className="font-mono text-xs">+</span>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8 text-white/40">
          <span className="font-mono text-xs">+</span>
          <div className="w-0.5 h-16 bg-white/30" />
          <span className="font-mono text-xs">-</span>
          <div className="w-0.5 h-16 bg-white/30" />
          <span className="font-mono text-xs">+</span>
        </div>

        {/* Bottom Corner Targets */}
        <div className="absolute bottom-16 left-8 z-10 hidden sm:flex items-center justify-center w-12 h-12">
          <svg className="w-10 h-10 text-white/60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-8 z-10 hidden sm:flex items-center justify-center w-12 h-12">
          <svg className="w-10 h-10 text-white/60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Main Center Composition: B&W Cameraman with 3D White Fan Background */}
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="relative w-full max-w-lg aspect-[3/4] sm:aspect-[4/5] rounded-[40px] overflow-hidden border border-neutral-800 shadow-2xl mb-12 group">
            <Image
              src="/images/about-cameraman.jpg"
              alt="Abhishek - Artistic Portrait with Vintage Camera and Sculptural Fan"
              fill
              className="object-cover object-center filter grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette & Reticle HUD Overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
            <div className="absolute top-4 left-5 text-[11px] font-mono text-white/70">
              FRAME // 24.0 FPS • SHUTTER 180°
            </div>
            <div className="absolute bottom-4 right-5 text-[11px] font-mono text-amber-400">
              ● PRODUCING & EDITING
            </div>
          </div>

          {/* About Bio Text & Philosophy */}
          <div className="max-w-2xl text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              The Story & Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Shaping time, rhythm, and raw emotion into cinematic memories.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              I am Abhishek — a videographer, video editor, and photographer with 1 year of
              relentless dedication to the craft. From Super 8 film nostalgia to cutting-edge 4K
              digital cinema, my work lives at the intersection of analog warmth and modern
              narrative power.
            </p>

            {/* Core Specialties Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {[
                "Commercial Videography",
                "DaVinci Resolve Color Grading",
                "Music Video Direction",
                "Editorial Photography",
                "Fast Turnaround Post-Production",
                "Social Reel Architecture",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 font-medium hover:border-amber-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-wider transition transform hover:scale-105 active:scale-95"
              >
                <span>Read Full Story & Gear List</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Transition Tabs matching the bottom of Image 4 */}
        <div className="absolute bottom-0 left-0 right-0 h-10 flex justify-center gap-4 px-6 z-20 pointer-events-none">
          <div className="w-1/3 max-w-sm h-full bg-[#fafaf9] rounded-t-[36px]" />
          <div className="w-1/3 max-w-sm h-full bg-[#fafaf9] rounded-t-[36px]" />
          <div className="w-1/3 max-w-sm h-full bg-[#fafaf9] rounded-t-[36px]" />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PORTFOLIO SECTION (Identical to Image 5)               */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#fafaf9] pt-16 pb-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Huge Typography Overlay Header matching Image 5 */}
          <div className="relative mb-12 sm:mb-16">
            <h2 className="text-7xl sm:text-9xl md:text-[140px] font-black tracking-[-0.06em] leading-none text-black select-none">
              portfolio
            </h2>
            <div className="sm:absolute sm:right-0 sm:bottom-4 mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-4">
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xs">
                A curated selection of cinematic films, photo essays, and motion edits.
              </p>
              <Link
                href="/portfolio"
                className="px-5 py-2 rounded-full border border-neutral-900 hover:bg-black hover:text-white text-xs font-semibold transition"
              >
                View All
              </Link>
            </div>
          </div>

          {/* Grid Layout Matching Image 5 Composition */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Card 1: White Curved Architecture (Left Tall/Wide) */}
            <div
              onClick={() => setSelectedProject(portfolioItems[0])}
              className="md:col-span-4 group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-100 shadow-md cursor-pointer border border-neutral-200/80 transition-all hover:shadow-xl"
            >
              <Image
                src={portfolioItems[0].image}
                alt={portfolioItems[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  {portfolioItems[0].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{portfolioItems[0].title}</h3>
                <span className="text-xs text-neutral-300 mt-1">{portfolioItems[0].client}</span>
              </div>
            </div>

            {/* Card 2: Minimal Solitary Bare Tree (Center Tall) */}
            <div
              onClick={() => setSelectedProject(portfolioItems[1])}
              className="md:col-span-4 group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-100 shadow-md cursor-pointer border border-neutral-200/80 transition-all hover:shadow-xl"
            >
              <Image
                src={portfolioItems[1].image}
                alt={portfolioItems[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  {portfolioItems[1].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{portfolioItems[1].title}</h3>
                <span className="text-xs text-neutral-300 mt-1">{portfolioItems[1].client}</span>
              </div>
            </div>

            {/* Card 3: Observation Wheel Geometry */}
            <div
              onClick={() => setSelectedProject(portfolioItems[2])}
              className="md:col-span-4 group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-100 shadow-md cursor-pointer border border-neutral-200/80 transition-all hover:shadow-xl"
            >
              <Image
                src={portfolioItems[2].image}
                alt={portfolioItems[2].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  {portfolioItems[2].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{portfolioItems[2].title}</h3>
                <span className="text-xs text-neutral-300 mt-1">{portfolioItems[2].client}</span>
              </div>
            </div>

            {/* Card 4: Golden Palm Portrait (matching right accent card in Image 5) */}
            <div
              onClick={() => setSelectedProject(portfolioItems[3])}
              className="md:col-span-4 group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-[#f5a623] shadow-md cursor-pointer border border-neutral-200/80 transition-all hover:shadow-xl"
            >
              <Image
                src={portfolioItems[3].image}
                alt={portfolioItems[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  {portfolioItems[3].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{portfolioItems[3].title}</h3>
                <span className="text-xs text-neutral-300 mt-1">{portfolioItems[3].client}</span>
              </div>
            </div>

            {/* Card 5: Cinematic Film Still (Wide Video Edit) */}
            <div
              onClick={() => setSelectedProject(portfolioItems[4])}
              className="md:col-span-4 group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-900 shadow-md cursor-pointer border border-neutral-200/80 transition-all hover:shadow-xl"
            >
              <Image
                src={portfolioItems[4].image}
                alt={portfolioItems[4].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  {portfolioItems[4].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{portfolioItems[4].title}</h3>
                <span className="text-xs text-neutral-300 mt-1">{portfolioItems[4].client}</span>
              </div>
            </div>

            {/* Card 6: Concert Live Gimbal Shoot */}
            <div
              onClick={() => setSelectedProject(portfolioItems[5])}
              className="md:col-span-4 group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-900 shadow-md cursor-pointer border border-neutral-200/80 transition-all hover:shadow-xl"
            >
              <Image
                src={portfolioItems[5].image}
                alt={portfolioItems[5].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  {portfolioItems[5].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{portfolioItems[5].title}</h3>
                <span className="text-xs text-neutral-300 mt-1">{portfolioItems[5].client}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WORK PROOF & SOCIAL PROOF SECTION                      */}
      {/* ========================================================= */}
      <section className="w-full bg-neutral-950 text-white py-20 px-5 sm:px-8 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#f5a623] tracking-widest font-semibold">
                Work Proof & Client Trust
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2">
                Delivering high retention, viral reach & visual excellence.
              </h2>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm">
              In 1 year of commercial shooting and editing, these proven numbers reflect real
              audience attention and director satisfaction.
            </p>
          </div>

          {/* Social Proof Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                number: "+250,000",
                label: "Total Video Views",
                sub: "Across YouTube, Instagram Reels & Commercials",
                icon: Eye,
              },
              {
                number: "+800,000",
                label: "Minutes Watched",
                sub: "Captivating storytelling with high viewer retention",
                icon: Clock,
              },
              {
                number: "45+",
                label: "Projects Completed",
                sub: "Music videos, brand ads, events & photo essays",
                icon: Film,
              },
              {
                number: "100%",
                label: "Client Recommendation",
                sub: "Every project delivered on-time & color graded",
                icon: CheckCircle2,
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      {stat.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200">{stat.label}</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Abhishek transformed our music video concept into pure cinematic poetry. The pacing, the color grade, and the energy exceeded every expectation.",
                author: "Julian Vance",
                role: "Independent Artist & Songwriter",
                tag: "Music Video",
              },
              {
                quote:
                  "Only 1 year into his professional career and Abhishek shoots and edits with the instinct of a seasoned director of photography. Our reel got 180k organic views.",
                author: "Elena Rossi",
                role: "Creative Director, Vague Studios",
                tag: "Fashion Campaign",
              },
              {
                quote:
                  "Superb turnaround speed, impeccable communication, and an artistic eye that makes every frame feel like an editorial gallery print. Highly recommended.",
                author: "Marcus Thorne",
                role: "Event Producer, Sonic Boom",
                tag: "Festival Coverage",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col justify-between hover:bg-neutral-900/70 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-[#f5a623] border border-amber-500/20">
                      {t.tag}
                    </span>
                    <span className="text-amber-400 text-sm">★★★★★</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-800/80 mt-6">
                  <h4 className="text-xs font-bold text-white">{t.author}</h4>
                  <p className="text-[11px] text-neutral-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
