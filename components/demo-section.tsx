"use client";

import { useRef, useEffect, useState } from "react";

const demoSlides = [
  {
    id: 1,
    title: "Portfolio Dashboard",
    description: "Get a complete overview of all your portfolio companies in one place",
    placeholder: "Dashboard View",
  },
  {
    id: 2,
    title: "Company Metrics",
    description: "Track revenue, EBITDA, runway, and custom KPIs for each company",
    placeholder: "Metrics View",
  },
  {
    id: 3,
    title: "Document Processing",
    description: "AI-powered extraction from board decks and financial reports",
    placeholder: "Document View",
  },
  {
    id: 4,
    title: "Excel Integration",
    description: "Sync data directly to your existing spreadsheets",
    placeholder: "Excel View",
  },
  {
    id: 5,
    title: "Alerts & Insights",
    description: "Get notified about missing updates and declining metrics",
    placeholder: "Alerts View",
  },
];

export function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!container || !scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const slideWidth = scrollContainer.clientWidth * 0.85 + 24;
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(Math.min(newActiveSlide, demoSlides.length - 1));
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const slideWidth = scrollContainer.clientWidth * 0.85 + 24;
    scrollContainer.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <section
      id="demo"
      ref={containerRef}
      className="py-20 lg:py-28 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            See Bastion in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scroll through our product demo to see how Bastion transforms portfolio management
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg className="w-5 h-5 text-purple-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span className="text-sm text-muted-foreground">Scroll horizontally to explore</span>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Left Spacer */}
        <div className="shrink-0 w-[calc((100vw-85%)/2-1rem)]" />
        
        {demoSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`shrink-0 w-[85vw] max-w-5xl snap-center transition-all duration-500 ${
              isInView && activeSlide === index
                ? "scale-100 opacity-100"
                : "scale-95 opacity-60"
            }`}
          >
            {/* Demo Card - Light Mode */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-md px-4 py-1.5 text-xs text-gray-500 border border-gray-200 max-w-xs w-full text-center">
                    app.bastion.ai/dashboard
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Demo Content Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8 relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-8 left-8 w-32 h-32 bg-purple-500 rounded-2xl" />
                  <div className="absolute bottom-12 right-12 w-48 h-24 bg-purple-500 rounded-xl" />
                  <div className="absolute top-1/3 right-1/4 w-24 h-40 bg-purple-500 rounded-lg" />
                </div>
                
                {/* Placeholder Content */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{slide.placeholder}</p>
                  <p className="text-sm text-gray-500">Figma demo coming soon</p>
                </div>

                {/* Simulated UI Elements */}
                <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${30 + index * 15}%` }} />
                  </div>
                </div>
              </div>

              {/* Slide Info */}
              <div className="bg-white px-6 py-5 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">{slide.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Right Spacer */}
        <div className="shrink-0 w-[calc((100vw-85%)/2-1rem)]" />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {demoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-purple-500 w-8"
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
