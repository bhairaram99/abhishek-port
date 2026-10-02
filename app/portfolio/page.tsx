"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Filter, ArrowUpRight, Eye, Film, Camera } from "lucide-react";
import LightboxModal, { ProjectItem } from "@/components/LightboxModal";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Cinematography",
    "Video Editing",
    "Photography",
    "Commercials",
  ];

  const allProjects: ProjectItem[] = [
    {
      id: "arch-ode",
      title: "Symphony in White // Architectural Ode",
      category: "Cinematography",
      image: "/images/portfolio-arch.jpg",
      client: "Studio Architettura",
      year: "2026",
      stats: "120k Views",
      description:
        "4K slow-motion architectural documentary exploring fluid organic curves and natural lighting interplay.",
      tags: ["Sony FX3", "Anamorphic", "Architectural", "Commercial"],
    },
    {
      id: "solitary-tree-doc",
      title: "Solitude in Mist // 35mm Poetry",
      category: "Photography",
      image: "/images/portfolio-tree.jpg",
      client: "Nordic Minimalist Magazine",
      year: "2025",
      stats: "Award Feature",
      description:
        "Fine-art monochrome portrait of winter silence, printed in high-key silver gelatin aesthetic.",
      tags: ["35mm Monochrome", "High Key", "Editorial"],
    },
    {
      id: "wheel-rhythm",
      title: "Rotations // Modern Structural Rhythm",
      category: "Photography",
      image: "/images/portfolio-wheel.jpg",
      client: "Urban Visions Film Fest",
      year: "2025",
      stats: "Exhibition",
      description:
        "Structural geometry and repeating lines framing the London skyline in minimalist monochrome.",
      tags: ["Urban Architecture", "Geometry", "Print Gallery"],
    },
    {
      id: "yellow-palm-fashion",
      title: "Amber Reverie // Color & Texture",
      category: "Commercials",
      image: "/images/portfolio-palm.jpg",
      client: "Maison Soleil",
      year: "2026",
      stats: "Campaign Hit",
      description:
        "Vibrant monochromatic editorial fashion shoot emphasizing golden textures, warmth, and organic symmetry.",
      tags: ["Fashion", "Color Palette", "Commercial"],
    },
    {
      id: "cinema-music-video",
      title: "Golden Hour Melancholia // Music Video",
      category: "Video Editing",
      image: "/images/work-cinema.jpg",
      client: "Indie Sound Records",
      year: "2026",
      stats: "310k Streams",
      description:
        "Rhythm-driven cut with complex film grain overlays, pacing matched to dynamic guitar progression.",
      tags: ["DaVinci Resolve", "Music Video", "Film Emulation"],
    },
    {
      id: "concert-night-festival",
      title: "Electric Pulse // Live Tour Film",
      category: "Cinematography",
      image: "/images/work-concert.jpg",
      client: "Sonic Boom Festival",
      year: "2025",
      stats: "Official Aftermovie",
      description:
        "High-energy gimbal footage capturing stage pyrotechnics, crowd euphoria, and artist performance in low light.",
      tags: ["Gimbal RS3 Pro", "Low Light", "Event"],
    },
    {
      id: "vintage-film-experiment",
      title: "Super 8mm Memories // Analog Nostalgia",
      category: "Cinematography",
      image: "/images/hero-cameraman.jpg",
      client: "Personal Work",
      year: "2025",
      stats: "Festival Selection",
      description:
        "Genuine Super 8mm celluloid film reel developed by hand, exploring vintage optical characteristics.",
      tags: ["Super 8mm", "Analog Celluloid", "Experimental"],
    },
    {
      id: "sculpture-halo-session",
      title: "Geometric Resonance // Studio Portraits",
      category: "Photography",
      image: "/images/about-cameraman.jpg",
      client: "Modern Creator Series",
      year: "2026",
      stats: "Cover Feature",
      description:
        "High-contrast editorial black and white portrait session utilizing a bespoke 3D sculptural fan background.",
      tags: ["Studio Lighting", "Sculptural Art", "B&W"],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-[#fafaf9] text-neutral-900 pb-24">
      {/* Portfolio Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f5a623] font-bold mb-3">
              <Sparkles className="w-4 h-4 fill-amber-400" />
              <span>Selected Works & Archives</span>
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-[-0.05em] leading-none text-black">
              portfolio
            </h1>
          </div>
          <p className="max-w-md text-sm text-neutral-600 leading-relaxed font-normal">
            A comprehensive gallery of commercial films, viral social video cuts, and fine-art
            photography produced during 1 year of dedicated studio and field practice.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-neutral-400 font-mono ml-auto hidden sm:inline-block">
            Showing {filteredProjects.length} Works
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Hover Play / Expand Indicator */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-black ml-0.5" />
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-medium text-white">
                    {project.category}
                  </span>
                </div>

                {/* Stats Badge */}
                {project.stats && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#f5a623] text-[11px] font-mono font-bold text-black shadow-sm">
                      {project.stats}
                    </span>
                  </div>
                )}
              </div>

              {/* Information Row */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1.5">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black leading-snug group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-neutral-100">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
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
