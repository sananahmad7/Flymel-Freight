"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden font-outfit bg-[#282562]">
      {/* ================= MAIN VIDEO BACKGROUND ================= */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.9)" }}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ================= CINEMATIC GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e24]/20 via-[#282562]/30 to-transparent z-1"></div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col py-20 lg:py-30 2xl:py-35">
        <div
          className={`flex flex-col items-start max-w-4xl transition-all duration-1000 ease-out transform ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tagline */}
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E12128] font-bold tracking-widest uppercase text-xs md:text-sm">
            Global Logistics Network
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6 drop-shadow-lg">
            Moving Your World, <br />
            <span className="text-[#282562] bg-clip-text bg-gradient-to-r from-white to-white/60">
              Simplified.
            </span>
          </h1>

          {/* Subheadline (Reverted to stack below headline) */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light mb-10 drop-shadow-md">
            Experience friction-free supply chains. We combine advanced
            technology with human expertise to deliver certainty in an uncertain
            world.
          </p>

          {/* Buttons (Reverted to old style) */}
          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="group relative overflow-hidden px-8 py-4 bg-[#E12128] text-white text-lg font-bold rounded-xl shadow-lg shadow-red-900/30 hover:scale-105 hover:bg-[#282562] transition-all  flex items-center gap-3"
            >
              <span className="relative z-10">Get In Touch</span>
              <FiArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white text-lg font-semibold rounded-xl transition-all hover:bg-white/10 hover:border-white/40 flex items-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white/30 transition-all duration-1000 delay-700 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <FiChevronDown className="animate-bounce w-8 h-8" />
      </div>
    </section>
  );
}
