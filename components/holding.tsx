"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// String-art envelope: lines from left edge converging toward a focal point,
// then curving downward in a parabolic arc and fanning out.
function StringLines() {
  const numLines = 18;
  // Focal point — right side, upper third
  const fx = 1020;
  const fy = 260;

  const paths = Array.from({ length: numLines }, (_, i) => {
    const t = i / (numLines - 1);

    // Left edge: evenly spaced top-to-bottom
    const yStart = 40 + t * 820;

    // End points: fan out along the bottom edge, offset to the right of center
    const xEnd = 640 + t * 800;   // 640 → 1440
    const yEnd = 900;

    // Slight opacity variation — lines near the middle of the bundle are a touch brighter
    const mid = 0.5;
    const dist = Math.abs(t - mid);
    const opacity = 0.13 - dist * 0.07; // range ~0.06 – 0.13

    return (
      <path
        key={i}
        d={`M 0,${yStart} Q ${fx},${fy} ${xEnd},${yEnd}`}
        stroke={`rgba(255,255,255,${opacity.toFixed(3)})`}
        strokeWidth="0.75"
        fill="none"
      />
    );
  });

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Soft vignette so lines recede behind the centred content */}
        <radialGradient id="vignette" cx="42%" cy="50%" r="55%">
          <stop offset="0%"  stopColor="#0F1629" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#0F1629" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g>{paths}</g>
      <rect x="0" y="0" width="1440" height="900" fill="url(#vignette)" />
    </svg>
  );
}

export function Holding() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className={garamond.className}
      style={{
        backgroundColor: "#0F1629",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background lines */}
      <StringLines />

      {/* Centered container */}
      <div
        className="flex items-center justify-center"
        style={{ flex: 1, position: "relative" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "44px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          {/* Logo + wordmark row */}
          <div
            className="flex items-center gap-12 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Logo */}
            <div
              style={{
                transform: hovered ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.35s ease",
              }}
            >
              <Image
                src="/WhiteBastion.png"
                alt="Bastion Logo"
                width={140}
                height={140}
              />
            </div>

            {/* Text block */}
            <div style={{ position: "relative", height: "100px", display: "flex", alignItems: "center" }}>

              {/* Default — wordmark */}
              <span
                style={{
                  color: "white",
                  fontSize: "100px",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                  opacity: hovered ? 0 : 1,
                  transform: hovered ? "translateY(-8px)" : "translateY(0)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  display: "block",
                }}
              >
                Bastion
              </span>

              {/* Hover — description */}
              <div
                className="flex flex-col justify-center"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "420px",
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  pointerEvents: hovered ? "auto" : "none",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: 1.65,
                    fontFamily: "inherit",
                  }}
                >
                  The single source of truth for all your portfolio company data,
                  designed for your existing workflows.
                </span>
              </div>
            </div>
          </div>

          {/* Book a call button */}
          <a
            href="https://cal.com/naimahammad/bastion"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              cursor: "pointer",
              padding: "13px 38px",
              borderRadius: "6px",
              border: `1px solid ${btnHovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.18)"}`,
              background: btnHovered ? "rgba(255,255,255,0.07)" : "transparent",
              color: btnHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.65)",
              fontSize: "15px",
              fontFamily: garamond.style.fontFamily,
              fontWeight: 500,
              letterSpacing: "0.1em",
              transition: "all 0.25s ease",
              transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
            }}
          >
            Book a call
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              style={{
                opacity: btnHovered ? 1 : 0.5,
                transform: btnHovered ? "translateX(2px)" : "translateX(0)",
                transition: "transform 0.25s ease, opacity 0.25s ease",
              }}
            >
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          position: "relative",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.3s",
        }}
      >
        <span style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "15px",
          fontFamily: garamond.style.fontFamily,
          letterSpacing: "0.1em",
        }}>
          Coming soon
        </span>
        <span style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "14px",
          fontFamily: garamond.style.fontFamily,
          letterSpacing: "0.04em",
        }}>
          © {new Date().getFullYear()} Bastion. All rights reserved.
        </span>
      </div>
    </section>
  );
}
