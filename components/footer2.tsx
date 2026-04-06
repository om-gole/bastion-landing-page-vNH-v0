"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-black px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/WhiteBastion.png"
            alt="Bastion Logo"
            width={36}
            height={36}
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold text-white tracking-tight">Bastion</span>
        </a>

        {/* Email */}
        <a
          href="mailto:omgole@berkeley.edu"
          className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
        >
          omgole@berkeley.edu
        </a>

        {/* Book a Demo */}
        <a
          href="https://cal.com/naimahammad/bastion"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
        >
          Book a Demo
          <span>→</span>
        </a>

      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-900">
        <p className="text-zinc-700 text-xs">© {new Date().getFullYear()} Bastion. All rights reserved.</p>
      </div>
    </footer>
  );
}