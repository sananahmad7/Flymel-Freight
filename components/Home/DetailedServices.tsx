"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaRoute,
  FaBoxOpen,
  FaGlobeAmericas,
  FaWarehouse,
  FaArrowRight,
} from "react-icons/fa";

// --- DATA ---
const services = [
  {
    id: "01",
    title: "Forwarding Services",
    shortDesc: "Strategic global logistics.",
    description:
      "We drive strategic theme areas vis-a-vis unique metrics, efficiently cultivating empowered e-services and orthogonal human capital for seamless global forwarding.",
    icon: <FaRoute className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "02",
    title: "Packaged Goods",
    shortDesc: "Secure, professional handling.",
    description:
      "Providing professional packaging services for your goods using high-quality materials that guarantee safe and secure access to your shipments throughout their journey.",
    icon: <FaBoxOpen className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "03",
    title: "Intl. Road Transport",
    shortDesc: "Reliable cross-border shipping.",
    description:
      "We process shipments with networks globally. In addition, we have the measures in place to transport all types of merchandise efficiently across borders.",
    icon: <FaGlobeAmericas className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1592838064575-70ed626c3a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2338&q=80",
  },
  {
    id: "04",
    title: "Warehousing",
    shortDesc: "Scalable storage solutions.",
    description:
      "At Cargo Services, we offer you various storage and shrink wrapping services, from the simplest to the most complex, to provide added value to your supply chain.",
    icon: <FaWarehouse className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2335&q=80",
  },
];

export default function DetailedServices() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  return (
    <section className="py-20 bg-white font-outfit">
      <div className="max-w-7xl mx-auto px-6">
        {/* === SECTION HEADER === */}
        <div className="mb-16 text-center">
          <span className="text-[#E12128] font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#282562] uppercase tracking-tight">
            Operational Capabilities
          </h2>
        </div>

        {/* =========================================
            MOBILE LAYOUT (Stacked Cards)
            Visible on < lg screens
           ========================================= */}
        <div className="flex flex-col gap-12 lg:hidden">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col shadow-xl shadow-slate-200"
            >
              {/* Image Top */}
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#282562]/20"></div>
                <div className="absolute top-4 left-4 bg-[#E12128] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  {service.id}
                </div>
              </div>

              {/* Content Bottom (Navy Background) */}
              <div className="bg-[#282562] p-8 text-white">
                <div className="flex items-center gap-3 mb-4 text-[#E12128]">
                  {service.icon}
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                    Service
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E12128]">
                  Learn More <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            DESKTOP LAYOUT (Split Screen Ledger)
            Visible on lg+ screens
           ========================================= */}
        <div className="hidden lg:flex flex-row h-[600px] shadow-2xl shadow-slate-200/50">
          {/* --- LEFT COLUMN: Navigation --- */}
          <div className="w-1/3 bg-[#282562] p-0 flex flex-col relative z-20">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`
                  group flex-1 flex items-center gap-5 px-8 text-left transition-all duration-300 ease-in-out border-b border-white/5 last:border-0
                  ${
                    activeServiceId === service.id
                      ? "bg-[#E12128] lg:bg-white/5" // Highlight active
                      : "hover:bg-white/5"
                  }
                `}
              >
                {/* Active Line Indicator */}
                <div
                  className={`w-1 h-full absolute left-0 top-0 transition-colors duration-300 ${activeServiceId === service.id ? "bg-[#E12128]" : "bg-transparent"}`}
                ></div>

                {/* ID */}
                <span
                  className={`font-mono text-sm transition-colors ${activeServiceId === service.id ? "text-[#E12128]" : "text-white/20"}`}
                >
                  {service.id}
                </span>

                {/* Text Info */}
                <div>
                  <h3
                    className={`font-bold text-lg uppercase tracking-wide transition-colors duration-300 ${activeServiceId === service.id ? "text-white" : "text-white/50 group-hover:text-white"}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 transition-colors duration-300 ${activeServiceId === service.id ? "text-white/60" : "text-white/20 group-hover:text-white/40"}`}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* Arrow */}
                <FaArrowRight
                  className={`ml-auto transition-all duration-300 ${activeServiceId === service.id ? "text-[#E12128] opacity-100 translate-x-0" : "text-white/10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`}
                />
              </button>
            ))}
          </div>

          {/* --- RIGHT COLUMN: Preview Panel --- */}
          <div className="w-2/3 relative bg-gray-900 overflow-hidden">
            {services.map((service) => (
              <div
                key={service.id}
                className={`
                  absolute inset-0 transition-all duration-700 ease-in-out
                  ${activeServiceId === service.id ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority={service.id === services[0].id}
                  />
                  {/* Heavy Overlay for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#282562]/90 via-[#282562]/40 to-transparent"></div>
                </div>

                {/* Content Box */}
                <div className="absolute bottom-0 left-0 p-16 max-w-xl">
                  <div
                    className={`transition-all duration-500 delay-100 transform ${activeServiceId === service.id ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-[#E12128] text-white mb-6">
                      {service.icon}
                    </div>

                    <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight leading-none">
                      {service.title}
                    </h3>

                    <p className="text-white/80 text-lg leading-relaxed mb-8 border-l-2 border-[#E12128] pl-6">
                      {service.description}
                    </p>

                    <button className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group hover:text-[#E12128] transition-colors">
                      <span>Full Specifications</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
