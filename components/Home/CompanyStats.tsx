"use client";

import React from "react";
import Image from "next/image";
import {
  FaUsers,
  FaRoad,
  FaTruckMoving,
  FaGlobeAmericas,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    value: "150+",
    label: "Employees",
    subLabel: "Global Team",
    description:
      "Credibly pursue superior resources whereas pandemic e-commerce.",
    icon: <FaUsers />,
  },
  {
    id: 2,
    value: "50K+",
    label: "Kilometers",
    subLabel: "Driven Annually",
    description: "Appropriately synthesize cross functional meta-services.",
    icon: <FaRoad />,
  },
  {
    id: 3,
    value: "25",
    label: "Fleet Size",
    subLabel: "Modern Trucks",
    description:
      "Credibly pursue superior resources whereas pandemic e-commerce.",
    icon: <FaTruckMoving />,
  },
  {
    id: 4,
    value: "100+",
    label: "Clients",
    subLabel: "Worldwide",
    description: "Appropriately synthesize cross functional meta-services.",
    icon: <FaGlobeAmericas />,
  },
];

export default function CompanyStats() {
  return (
    <section className="py-24 bg-white font-outfit">
      {/* THEME CONTAINER: Keeps width aligned with other sections */}
      <div className="container mx-auto px-6">
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row w-full shadow-2xl shadow-slate-200/50">
          {/* === LEFT COLUMN: Image === */}
          <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-auto">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Logistics Operations"
              fill
              className="object-cover"
            />
            {/* Navy Overlay for Brand Tint */}
            <div className="absolute inset-0 bg-[#282562]/30 mix-blend-multiply"></div>

            {/* Decorative Red Accent on Image */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E12128] z-10 flex items-center justify-center">
              <FaGlobeAmericas className="text-white w-10 h-10 animate-pulse" />
            </div>
          </div>

          {/* === RIGHT COLUMN: Content & Stats === */}
          <div className="w-full lg:w-1/2 bg-[#282562] text-white p-10 lg:p-16 xl:p-20">
            {/* Header */}
            <div className="mb-12">
              <span className="text-[#E12128] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                True Facts
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-none">
                The Facts Speak <br />
                <span className="text-white/30">For Themselves</span>
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((stat) => (
                <div key={stat.id} className="group">
                  {/* Value */}
                  <div className="text-4xl lg:text-5xl font-bold tracking-tight text-white group-hover:text-[#E12128] transition-colors duration-300 mb-2">
                    {stat.value}
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-white/10 mb-3 group-hover:w-full group-hover:bg-[#E12128] transition-all duration-500"></div>

                  {/* Label */}
                  <h3 className="text-base font-bold uppercase tracking-wider mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
                    {stat.subLabel}
                  </p>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed text-xs">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
