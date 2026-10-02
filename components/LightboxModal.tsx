"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Play, Pause, Maximize2, Volume2, Film, CheckCircle2 } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  client?: string;
  year?: string;
  aspect?: string;
  description?: string;
  stats?: string;
  tags?: string[];
}

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function LightboxModal({ project, onClose }: LightboxProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
              REC // 4K DCI • 23.976 fps
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Container */}
        <div className="relative w-full h-[52vh] sm:h-[60vh] bg-black flex items-center justify-center group overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />

          {/* Interactive Play Overlay for Video Items */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-[#f5a623] hover:bg-[#ffb43a] text-black flex items-center justify-center shadow-2xl transition transform hover:scale-110 active:scale-95"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-black" />
              ) : (
                <Play className="w-7 h-7 fill-black ml-1" />
              )}
            </button>
          </div>

          {/* Viewfinder Overlay Lines */}
          <div className="absolute top-4 left-4 text-white/50 text-[10px] font-mono select-none">
            [ + ] 35MM T1.5
          </div>
          <div className="absolute top-4 right-4 text-white/50 text-[10px] font-mono select-none">
            ISO 800 | 5600K
          </div>
          <div className="absolute bottom-4 left-4 text-white/50 text-[10px] font-mono select-none">
            LUT: KODAK 5219 VISION3
          </div>
          <div className="absolute bottom-4 right-4 text-white/50 text-[10px] font-mono select-none">
            BATTERY 98%
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#f5a623]">
                {project.category}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs text-neutral-400">{project.year || "2025-2026"}</span>
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.description && (
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                {project.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.stats && (
              <span className="px-3 py-1.5 rounded-full bg-neutral-800 text-amber-400 text-xs font-mono font-semibold">
                {project.stats}
              </span>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
