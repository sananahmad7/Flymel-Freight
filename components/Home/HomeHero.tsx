"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiArrowRight, FiAnchor, FiSend } from "react-icons/fi";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#282562] px-4 pt-24 pb-4 font-outfit text-white overflow-hidden">
      {/* Bento Grid Layout:
        - Mobile: Single column (grid-cols-1)
        - Desktop (md): 4 Columns, 3 Rows
        - Height: h-[85vh] to keep it above the fold but allow breathing room
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 w-full max-w-7xl mx-auto h-auto md:h-[85vh]">
        {/* === ITEM 1: The Main Stage (Interactive Globe) === 
            Spans: 2 Columns, 3 Rows (Left Side)
        */}
        <div className="md:col-span-2 md:row-span-3 bg-gradient-to-b from-[#1A1840] to-black rounded-3xl relative overflow-hidden group border border-white/5">
          {/* Visual Placeholder for 3D Globe */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-3xl animate-pulse" />
            {/* Actual 3D Canvas would go here */}
          </div>

          <div className="absolute bottom-8 left-8 z-10 max-w-md">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#E12128] bg-[#E12128]/10 rounded-full border border-[#E12128]/20"
            >
              GLOBAL CONNECTIVITY
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
              Melbourne to <br /> Middle East.{" "}
              <span className="text-white/50">Simplified.</span>
            </h1>
            <p className="text-white/60 text-sm max-w-sm">
              Experience the Kinetic Transparency network. Real-time data, zero
              friction.
            </p>
          </div>
        </div>

        {/* === ITEM 2: Tracking Module === 
            Spans: 2 Columns, 1 Row (Top Right)
        */}
        <div className="md:col-span-2 md:row-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FiSearch size={120} />
          </div>

          <h3 className="text-2xl font-semibold mb-6 z-10">Instant Track</h3>

          <div className="relative z-10 flex items-center w-full">
            <input
              type="text"
              placeholder="Enter AWB or Container Number"
              className="w-full bg-white/5 border border-white/20 rounded-full py-4 pl-6 pr-16 text-white placeholder-white/40 focus:outline-none focus:border-[#E12128] focus:bg-[#282562]/50 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#E12128] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-red-900/40">
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* === ITEM 3: Service A (Air Freight) === 
            Spans: 1 Column, 2 Rows (Bottom Middle)
        */}
        <motion.div
          className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            variants={{ hover: { scale: 1.1 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524592714635-d77511a4834d?auto=format&fit=crop&q=80')",
            }} // Airport Night
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#282562]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="mb-2 bg-white/10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FiSend className="text-[#E12128]" />
            </div>
            <motion.div variants={{ hover: { y: -5 } }}>
              <h4 className="text-xl font-bold">Air Freight</h4>
              <p className="text-xs text-white/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Next-flight out priority services.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* === ITEM 4: Service B (Sea Freight) === 
            Spans: 1 Column, 2 Rows (Bottom Right)
        */}
        <motion.div
          className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
          whileHover="hover"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            variants={{ hover: { scale: 1.1 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494412574643-35d324688133?auto=format&fit=crop&q=80')",
            }} // Ship Night
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#282562]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="mb-2 bg-white/10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FiAnchor className="text-[#E12128]" />
            </div>
            <motion.div variants={{ hover: { y: -5 } }}>
              <h4 className="text-xl font-bold">Ocean Freight</h4>
              <p className="text-xs text-white/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Full container load global transit.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
