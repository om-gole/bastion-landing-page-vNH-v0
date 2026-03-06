"use client";

import { useRef, useEffect, useState } from "react";
import { Monitor, Database, FileText, Table2, BellRing } from "lucide-react";


const demoSlides = [
  {
    id: 1,
    title: "Portfolio Dashboard",
    description: "Get a complete overview of all your portfolio companies in one place",
    icon: Monitor,
    tip: {
      title: "Quick Overview",
      text: "See all your portfolio companies at a glance with key metrics, recent activity, and status indicators.",
    },
  },
  {
    id: 2,
    title: "Company Metrics",
    description: "Track revenue, EBITDA, runway, and custom KPIs for each company",
    icon: Database,
    tip: {
      title: "Real-time Tracking",
      text: "Metrics update automatically as new data comes in. Set custom KPIs that matter to your investment thesis.",
    },
  },
  {
    id: 3,
    title: "Document Processing",
    description: "AI-powered extraction from board decks and financial reports",
    icon: FileText,
    tip: {
      title: "AI-Powered",
      text: "Simply upload PDFs and our AI extracts key figures, populating your dashboard automatically.",
    },
  },
  {
    id: 4,
    title: "Excel Integration",
    description: "Sync data directly to your existing spreadsheets",
    icon: Table2,
    tip: {
      title: "Seamless Sync",
      text: "Connect your existing Excel models. Data flows bidirectionally, keeping everything in sync.",
    },
  },
  {
    id: 5,
    title: "Alerts & Insights",
    description: "Get notified about missing updates and declining metrics",
    icon: BellRing,
    tip: {
      title: "Proactive Alerts",
      text: "Get notified when metrics decline, reports are overdue, or anomalies are detected in the data.",
    },
  },
];

export function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer for each slide
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSlide(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="demo"
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#08080a] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Platform Preview
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-balance">
            See Bastion in Action
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Scroll through to explore how Bastion transforms portfolio management
          </p>
        </div>
      </div>

      {/* Vertical Demo Slides */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {demoSlides.map((slide, index) => {
            const Icon = slide.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={slide.id}
                ref={(el) => { slideRefs.current[index] = el; }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              >
                {/* Comment/Tip Side */}
                <div className={`w-full lg:w-1/3 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className={`inline-block p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-sm transition-all duration-700 ${
                      activeSlide === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-40 translate-y-4'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:justify-end' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-sm font-semibold text-purple-400">{slide.tip.title}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                      {slide.tip.text}
                    </p>
                  </div>
                </div>

                {/* Demo Screen */}
                <div className="w-full lg:w-2/3">
                  <div
                    className={`transition-all duration-700 ${
                      activeSlide === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-60 scale-[0.97]'
                    }`}
                  >
                    {/* Browser Window */}
                    <div
                      className="rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900"
                      style={{
                        boxShadow: activeSlide === index
                          ? '0 50px 100px -20px rgba(0,0,0,0.8), 0 0 80px rgba(168,85,247,0.12)'
                          : '0 25px 50px -12px rgba(0,0,0,0.5)',
                      }}
                    >
                      {/* Browser Chrome */}
                      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-zinc-700" />
                          <div className="w-3 h-3 rounded-full bg-zinc-700" />
                          <div className="w-3 h-3 rounded-full bg-zinc-700" />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="flex items-center gap-2 bg-zinc-800/80 rounded-lg px-4 py-1.5 max-w-sm w-full">
                            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="text-xs text-zinc-500">app.bastion.ai/{slide.title.toLowerCase().replace(' ', '-')}</span>
                          </div>
                        </div>
                        <div className="w-16" />
                      </div>

                      {/* App Content - Light Mode */}
                      <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                        {/* Simulated Dashboard UI */}
                        <div className="absolute inset-0 p-6">
                          {/* Top Nav */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div className="h-2 w-20 bg-slate-200 rounded" />
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-2 w-16 bg-slate-200 rounded" />
                              <div className="h-2 w-16 bg-slate-200 rounded" />
                              <div className="w-8 h-8 rounded-full bg-slate-200" />
                            </div>
                          </div>

                          {/* Main Content - Varies by slide */}
                          {index === 0 && (
                            <div className="grid grid-cols-12 gap-4 h-[calc(100%-80px)]">
                              <div className="col-span-2 space-y-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-purple-100' : 'bg-slate-100'}`} />
                                ))}
                              </div>
                              <div className="col-span-10 space-y-4">
                                <div className="grid grid-cols-4 gap-3">
                                  {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                      <div className="h-2 w-12 bg-slate-200 rounded mb-2" />
                                      <div className="h-6 w-20 bg-gradient-to-r from-purple-200 to-violet-200 rounded" />
                                    </div>
                                  ))}
                                </div>
                                <div className="flex-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm h-40">
                                  <div className="flex items-end justify-between h-full gap-2 px-4">
                                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                                      <div key={i} className="flex-1 bg-gradient-to-t from-purple-500 to-violet-400 rounded-t opacity-80" style={{ height: `${h}%` }} />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {index === 1 && (
                            <div className="grid grid-cols-3 gap-4 h-[calc(100%-80px)]">
                              {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="h-2 w-16 bg-slate-200 rounded" />
                                    <div className={`h-5 w-12 rounded-full ${i % 2 === 0 ? 'bg-green-100' : 'bg-purple-100'}`} />
                                  </div>
                                  <div className="h-8 w-24 bg-gradient-to-r from-purple-200 to-violet-200 rounded mb-2" />
                                  <div className="h-1 w-full bg-slate-100 rounded">
                                    <div className={`h-full bg-purple-400 rounded`} style={{ width: `${30 + i * 10}%` }} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {index === 2 && (
                            <div className="flex gap-6 h-[calc(100%-80px)]">
                              <div className="w-1/3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="h-2 w-20 bg-slate-200 rounded mb-4" />
                                {[1, 2, 3, 4].map((i) => (
                                  <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
                                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                                      <div className="w-4 h-4 bg-purple-300 rounded" />
                                    </div>
                                    <div>
                                      <div className="h-2 w-24 bg-slate-200 rounded mb-1" />
                                      <div className="h-1.5 w-16 bg-slate-100 rounded" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="h-full flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-purple-100 flex items-center justify-center">
                                      <FileText className="w-8 h-8 text-purple-500" />
                                    </div>
                                    <div className="h-2 w-32 bg-slate-200 rounded mx-auto mb-2" />
                                    <div className="h-1.5 w-24 bg-slate-100 rounded mx-auto" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {index === 3 && (
                            <div className="h-[calc(100%-80px)] p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                              <div className="grid grid-cols-8 gap-0 h-full">
                                {Array.from({ length: 48 }).map((_, i) => (
                                  <div key={i} className={`border border-slate-100 p-1 ${i < 8 ? 'bg-slate-50 font-medium' : ''}`}>
                                    <div className={`h-2 w-full rounded ${i < 8 ? 'bg-slate-300' : i % 3 === 0 ? 'bg-purple-200' : 'bg-slate-200'}`} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {index === 4 && (
                            <div className="flex gap-4 h-[calc(100%-80px)]">
                              <div className="flex-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                                {[1, 2, 3].map((i) => (
                                  <div key={i} className={`p-3 rounded-lg border ${i === 1 ? 'border-red-200 bg-red-50' : i === 2 ? 'border-yellow-200 bg-yellow-50' : 'border-purple-200 bg-purple-50'}`}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-red-400' : i === 2 ? 'bg-yellow-400' : 'bg-purple-400'}`} />
                                      <div className="h-2 w-20 bg-slate-300 rounded" />
                                    </div>
                                    <div className="h-1.5 w-32 bg-slate-200 rounded" />
                                  </div>
                                ))}
                              </div>
                              <div className="w-1/3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="h-2 w-16 bg-slate-200 rounded mb-4" />
                                <div className="space-y-2">
                                  {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center gap-2">
                                      <div className={`w-3 h-3 rounded ${i <= 2 ? 'bg-purple-400' : 'bg-slate-200'}`} />
                                      <div className="h-1.5 w-full bg-slate-100 rounded" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Slide Label Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                              Step {index + 1}
                            </span>
                            <span className="text-xs text-slate-400">Figma demo coming soon</span>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">{slide.title}</h3>
                          <p className="text-sm text-slate-500">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Indicator - Fixed on side */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-50">
        {demoSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => {
              slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="group flex items-center gap-3"
          >
            <span className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${activeSlide === index ? 'text-purple-400' : 'text-zinc-500'}`}>
              {slide.title}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'bg-purple-500 scale-125'
                : 'bg-zinc-700 group-hover:bg-zinc-500'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}
