"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, X, Menu, Sparkles, ArrowUpRight, Film, Camera } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [exhibitionOpen, setExhibitionOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#fafaf9]/90 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          {/* Logo Mark matching the reference image */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
            <svg
              className="w-10 h-7 text-black transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 48 24"
              fill="currentColor"
            >
              {/* Abstract double-circle and vertical organic capsule mark */}
              <circle cx="10" cy="12" r="10" />
              <path d="M24 2C29.52 2 34 6.48 34 12C34 17.52 29.52 22 24 22V2Z" />
              <rect x="38" y="2" width="8" height="20" rx="4" />
            </svg>
            <span className="font-extrabold text-sm tracking-tight text-neutral-900 uppercase hidden sm:inline-block">
              Abhishek
            </span>
          </Link>

          {/* Desktop Nav Links with slashes */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-700">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-black font-semibold bg-neutral-200/60"
                        : "hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-neutral-300 text-xs font-light select-none">
                      /
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right Section: Exhibition pill & Action buttons */}
          <div className="flex items-center gap-3">
            {/* Exhibition Badge */}
            <button
              onClick={() => setExhibitionOpen(true)}
              className="group hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100/90 hover:bg-neutral-200/90 border border-neutral-200/70 transition-all text-xs text-neutral-800"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400 group-hover:rotate-12 transition-transform" />
              <span>
                <strong className="font-semibold text-neutral-900">Sala Canal</strong>
                <span className="text-neutral-500 ml-1">, 22 Nov 23</span>
              </span>
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-neutral-300 ml-0.5">
                <Image
                  src="/images/portfolio-arch.jpg"
                  alt="Sala Canal Exhibition"
                  fill
                  className="object-cover"
                />
              </div>
            </button>

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search portfolio"
              className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all shadow-sm"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile / Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white/95 px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 px-3 rounded-xl transition-all ${
                    pathname === link.href
                      ? "bg-amber-500/10 text-amber-900 font-bold"
                      : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200 mt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setExhibitionOpen(true);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-100 text-xs font-medium text-neutral-800"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                    Featured Showcase: Sala Canal (22 Nov 23)
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </button>
                <div className="flex items-center gap-3 text-xs text-neutral-500 px-3">
                  <span>Videographer</span>
                  <span>•</span>
                  <span>Editor</span>
                  <span>•</span>
                  <span>Photographer</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-3xl w-full max-w-xl p-6 shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-3 flex-1 mr-4">
                <Search className="w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search projects, films, photography, gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-base outline-none bg-transparent placeholder-neutral-400 font-medium"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Quick Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { title: "Visual Poetry Reel", tag: "Cinematography", link: "/portfolio" },
                  { title: "Music Video Festival", tag: "Concert / Gimbal", link: "/portfolio" },
                  { title: "Architectural Forms", tag: "Photography", link: "/portfolio" },
                  { title: "Super 8 Vintage Experiment", tag: "Film", link: "/portfolio" },
                  { title: "Equipment & Workflow", tag: "About", link: "/about" },
                  { title: "Book a Shoot", tag: "Contact", link: "/contact" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-50 hover:bg-amber-50 hover:border-amber-200 border border-neutral-200 text-xs text-neutral-700 transition"
                  >
                    <span className="font-semibold text-neutral-900">{item.title}</span>
                    <span className="text-[10px] bg-neutral-200/70 px-1.5 py-0.5 rounded text-neutral-600">
                      {item.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exhibition Info Modal */}
      {exhibitionOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setExhibitionOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
              <Image
                src="/images/portfolio-arch.jpg"
                alt="Exhibition preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Featured Exhibition
                </span>
                <h3 className="text-xl font-bold">Sala Canal de Isabel II</h3>
              </div>
            </div>
            <div className="space-y-3 text-neutral-600 text-sm">
              <p>
                <strong className="text-neutral-900 font-semibold">Date:</strong> 22 November 2023 - Madrid
              </p>
              <p>
                An exclusive curation of analogue Super 8 footage paired with contemporary Sony FX3 4K cinematic studies exploring modern architectural rhythm and human presence.
              </p>
              <div className="flex items-center gap-3 pt-3">
                <Link
                  href="/portfolio"
                  onClick={() => setExhibitionOpen(false)}
                  className="flex-1 text-center py-2.5 px-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition"
                >
                  View Gallery Series
                </Link>
                <button
                  onClick={() => setExhibitionOpen(false)}
                  className="py-2.5 px-4 rounded-full border border-neutral-300 hover:bg-neutral-100 font-semibold text-xs text-neutral-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
