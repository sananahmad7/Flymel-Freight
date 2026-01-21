"use client";

import React from "react";
import Link from "next/link";
import {
  FiClock,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Info() {
  return (
    <section className="relative w-full z-20 font-outfit mt-12 mb-12 px-6 ">
      <div className="container mx-auto">
        {/* Header Label - Compact */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-[#282562]/20 flex-1"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#282562]/40">
            System Access
          </span>
        </div>

        {/* === THE VERTICAL MANIFEST STACK (COMPACT) === */}
        <div className="flex flex-col border-t border-[#282562]/10 text-[#282562]">
          {/* === ROW 01: OPERATIONS === */}
          <div className="group relative border-b border-[#282562]/10 overflow-hidden cursor-default transition-all duration-300 hover:py-1">
            <div className="absolute inset-0 bg-[#282562] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-5 px-4 md:px-6 group-hover:text-white transition-colors duration-200">
              {/* Left */}
              <div className="flex items-baseline gap-4 w-1/3">
                <span className="text-xs font-mono text-[#E12128] group-hover:text-white/50 transition-colors">
                  01
                </span>
                <div className="flex items-center gap-2">
                  <FiClock className="text-lg" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Opening Hours
                  </h3>
                </div>
              </div>
              {/* Middle */}
              <div className="flex-1 mt-2 md:mt-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl md:text-2xl font-bold tracking-tight">
                    08:00 - 18:00
                  </span>
                  <span className="text-xs font-light opacity-60">
                    Mon - Fri
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* === ROW 02: DISPATCH === */}
          <a
            href="tel:+61470687907"
            className="group relative border-b border-[#282562]/10 overflow-hidden cursor-pointer transition-all duration-300 hover:py-1"
          >
            <div className="absolute inset-0 bg-[#282562] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-5 px-4 md:px-6 group-hover:text-white transition-colors duration-200">
              {/* Left */}
              <div className="flex items-baseline gap-4 w-1/3">
                <span className="text-xs font-mono text-[#E12128] group-hover:text-white/50 transition-colors">
                  02
                </span>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-lg" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Call us anyrime
                  </h3>
                </div>
              </div>
              {/* Middle */}
              <div className="flex-1 mt-2 md:mt-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:underline decoration-[#E12128] underline-offset-4 decoration-2">
                    +61 470 687 907
                  </span>
                  <span className="text-xs font-light opacity-60">
                    24/7 Line
                  </span>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <FiArrowUpRight className="text-xl" />
              </div>
            </div>
          </a>

          {/* === ROW 03: DIGITAL === */}
          <a
            href="mailto:info@flymel.com.au"
            className="group relative border-b border-[#282562]/10 overflow-hidden cursor-pointer transition-all duration-300 hover:py-1"
          >
            <div className="absolute inset-0 bg-[#282562] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-5 px-4 md:px-6 group-hover:text-white transition-colors duration-200">
              <div className="flex items-baseline gap-4 w-1/3">
                <span className="text-xs font-mono text-[#E12128] group-hover:text-white/50 transition-colors">
                  03
                </span>
                <div className="flex items-center gap-2">
                  <FiMail className="text-lg" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Email Us
                  </h3>
                </div>
              </div>
              <div className="flex-1 mt-2 md:mt-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl md:text-2xl font-bold tracking-tight break-all md:break-normal">
                    info@flymel.com.au
                  </span>
                  <span className="text-xs font-light opacity-60">
                    &lt; 15m Response
                  </span>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <FiArrowUpRight className="text-xl" />
              </div>
            </div>
          </a>

          {/* === ROW 04: ACTION (Footer) === */}
          <Link
            href="/booking"
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#E12128] z-0"></div>
            <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-1"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-6 px-4 md:px-6 text-white">
              <div className="flex items-baseline gap-4 w-1/3">
                <span className="text-xs font-mono text-black/20 group-hover:text-white/20 transition-colors"></span>
              </div>

              <div className="flex-1 mt-3 md:mt-0">
                <span className="text-2xl md:text-3xl font-bold tracking-tighter leading-none">
                  BUY CARGO SPACE
                </span>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E12128] group-hover:scale-110 transition-transform duration-200">
                  <FiArrowRight
                    size={18}
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
