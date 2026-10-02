"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    service: "Videography",
    budget: "$1,500 - $3,500",
    timeline: "Within 2 weeks",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const services = [
    "Commercial Videography",
    "Video Editing & Color Grading",
    "Editorial Photography",
    "Music Video Production",
    "Social Reels Package",
  ];

  const faqs = [
    {
      q: "What is your typical turnaround time for video editing?",
      a: "For social video edits and commercials, turnaround is typically 48 to 72 hours for first cuts. Full music videos and documentary projects take 1 to 2 weeks including color grading and sound design.",
    },
    {
      q: "Do you travel for on-location filming and photoshoots?",
      a: "Yes! All equipment (Sony FX3, lenses, gimbal, and field audio) fits into flight-ready Pelican cases. I travel domestically and internationally for brand and event shoots.",
    },
    {
      q: "What camera formats and delivery resolutions do you provide?",
      a: "Master deliverables are provided in 4K DCI or UHD (ProRes 422 HQ / H.264 / H.265) optimized for web, cinema, or social media aspect ratios (16:9, 9:16, 4:5, 1:1).",
    },
    {
      q: "What does the 1 year of experience guarantee?",
      a: "In my first year, I delivered over 45 commercial projects with 100% on-time delivery. You receive intensive focus, dedicated modern aesthetic instinct, and competitive commercial pricing.",
    },
  ];

  return (
    <div className="w-full bg-[#fafaf9] text-neutral-900 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f5a623] font-bold mb-3">
              <Sparkles className="w-4 h-4 fill-amber-400" />
              <span>Project Inquiries & Booking</span>
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-[-0.05em] leading-none text-black">
              contact
            </h1>
          </div>
          <p className="max-w-md text-sm text-neutral-600 leading-relaxed font-normal">
            Have a project, commercial campaign, or creative vision? Let&apos;s talk.
            Every inquiry receives a personalized response within 12 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Info */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[40px] border border-neutral-200/90 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                  Message Received!
                </h3>
                <p className="text-neutral-600 max-w-md text-sm leading-relaxed mb-6">
                  Thank you, <strong className="text-neutral-900">{formData.name}</strong>. I will
                  review your details and reply to{" "}
                  <strong className="text-neutral-900">{formData.email}</strong> within 12 hours with
                  availability and next steps.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-1">Start a Conversation</h3>
                  <p className="text-xs text-neutral-500">
                    Fill in the details below to receive a custom project quote and treatment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm outline-none focus:border-black focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm outline-none focus:border-black focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                    Service Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: svc })}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition ${
                          formData.service === svc
                            ? "bg-black text-white shadow-sm"
                            : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm outline-none focus:border-black focus:bg-white transition text-neutral-800"
                    >
                      <option>$500 - $1,500 (Short Social Cut / Single Shoot)</option>
                      <option>$1,500 - $3,500 (Music Video / Brand Commercial)</option>
                      <option>$3,500 - $8,000+ (Full Production & Multi-Day)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm outline-none focus:border-black focus:bg-white transition text-neutral-800"
                    >
                      <option>Urgent (&lt; 1 week)</option>
                      <option>Within 2 weeks</option>
                      <option>Next month (Flexible)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                    Project Concept & Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your brand, vibe, reference links, or shoot location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm outline-none focus:border-black focus:bg-white transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#f5a623] hover:bg-[#e69818] text-black font-bold text-sm tracking-wide transition transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Proof */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="p-8 rounded-[40px] bg-black text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Direct Details</h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-mono uppercase">Email</span>
                    <p className="font-semibold text-white mt-0.5">hello@abhishekvisuals.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-mono uppercase">Response Speed</span>
                    <p className="font-semibold text-white mt-0.5">&lt; 12 Hours Guarantee</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-mono uppercase">Base & Travel</span>
                    <p className="font-semibold text-white mt-0.5">Studio Base & Available Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social links row */}
              <div className="mt-8 pt-6 border-t border-neutral-800">
                <span className="text-xs font-mono uppercase text-neutral-400 mb-3 block">
                  Social Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "yt", name: "YouTube", href: "https://youtube.com" },
                    { label: "ig", name: "Instagram", href: "https://instagram.com" },
                    { label: "fb", name: "Facebook", href: "https://facebook.com" },
                    { label: "x", name: "X", href: "https://x.com" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full border border-neutral-700 hover:border-amber-400 hover:text-amber-400 text-xs font-mono transition"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust & Guarantee Box */}
            <div className="p-8 rounded-[40px] bg-neutral-100 border border-neutral-200/90">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700 font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Commercial Guarantee</span>
              </div>
              <h4 className="text-lg font-bold text-black mb-2">100% Satisfaction & 4K Master</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every project includes 2 rounds of revisions, dedicated audio mix & master, custom
                film color grading, and delivery in all required social and cinema dimensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 mt-24">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase text-[#f5a623] tracking-widest font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-sm"
            >
              <h3 className="text-base font-bold text-black mb-2">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
