"use client";

import { useState, useEffect } from "react";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12M12 16H12.01"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <ShieldIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Bastion</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#demo"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Product
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#book-demo"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 bg-[length:200%_200%] animate-gradient hover:scale-105 transition-transform duration-300 animate-pulse-glow"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-4"
              >
                About
              </a>
              <a
                href="#demo"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-4"
              >
                Product
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-4"
              >
                Contact
              </a>
              <hr className="border-border/50" />
              <div className="px-4">
                <a
                  href="#book-demo"
                  className="block text-center bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 text-white px-5 py-2.5 rounded-full font-semibold animate-gradient bg-[length:200%_200%]"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
