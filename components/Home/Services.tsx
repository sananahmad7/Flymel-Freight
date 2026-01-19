"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTruck, FaPlane, FaShip, FaArrowRight } from "react-icons/fa";

// --- TYPES ---
interface Service {
  id: string;
  title: string;
  route: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imagePlaceholder: string;
}

// --- DATA ---
const services: Service[] = [
  {
    id: "land",
    title: "Land Freight",
    subtitle: "Regional & Cross-Border",
    route: "/services/land-freight",
    description:
      "Reliable ground transportation networks designed for efficiency. From heavy haulage to last-mile delivery.",
    features: [
      "FTL & LTL Solutions",
      "Cross-Border Logistics",
      "Railway Intermodal",
      "Heavy Haulage",
    ],
    imagePlaceholder:
      "bg-[url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
    icon: <FaTruck className="w-8 h-8" />,
  },
  {
    id: "air",
    title: "Air Freight",
    subtitle: "Global Express",
    route: "/services/air-freight",
    description:
      "When time is critical, our air cargo solutions deliver. Expedited shipping and secure handling.",
    features: [
      "Express/Priority Air",
      "Charter Services",
      "Perishable Cargo",
      "Door-to-Door",
    ],
    imagePlaceholder:
      "bg-[url('https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
    icon: <FaPlane className="w-8 h-8" />,
  },
  {
    id: "sea",
    title: "Sea Freight",
    subtitle: "Ocean & Coastal",
    route: "/services/sea-freight",
    description:
      "Cost-effective global shipping for large volumes. Partnerships with major lines ensure space availability.",
    features: [
      "FCL (Full Container)",
      "LCL (Less Container)",
      "Break Bulk",
      "Port-to-Port",
    ],
    imagePlaceholder:
      "bg-[url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
    icon: <FaShip className="w-8 h-8" />,
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-10 bg-white font-outfit ">
      <div className="max-w-7xl mx-auto px-6">
        {/* === HEADER === */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#E12128]"></div>
            <span className="text-[#E12128] font-bold uppercase tracking-widest text-xs">
              Our Capabilities
            </span>
            <div className="h-px w-8 bg-[#E12128]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#282562] mb-4">
            Global Logistics Solutions
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            We simplify complex supply chains. Choose the mode that fits your
            timeline and budget.
          </p>
        </div>

        {/* === GRID CONTAINER === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.route}
              className="group relative h-[450px] w-full overflow-hidden shadow-lg cursor-pointer bg-gray-900" // Reduced height, removed rounded-2xl
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* 1. BACKGROUND IMAGE LAYER */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out opacity-60 group-hover:opacity-40 ${service.imagePlaceholder} ${
                  hoveredService === service.id ? "scale-110" : "scale-100"
                }`}
              />

              {/* 2. OVERLAY (Navy Gradient) */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredService === service.id
                    ? "bg-[#282562]/80" // Lighter wash on hover to see features
                    : "bg-gradient-to-t from-[#0f0e24] via-[#282562]/20 to-transparent"
                }`}
              ></div>

              {/* 3. CONTENT CONTAINER */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* ICON & TITLE BLOCK (Moves up slightly on hover) */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    hoveredService === service.id
                      ? "-translate-y-4"
                      : "translate-y-0"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* Icon Box */}
                    <div
                      className={`flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md text-white border border-white/20 transition-colors duration-300 ${
                        hoveredService === service.id
                          ? "bg-[#E12128] border-[#E12128]"
                          : ""
                      }`}
                    >
                      {service.icon}
                    </div>

                    {/* Subtitle/Label */}
                    <div className="text-[#E12128] font-bold tracking-widest text-xs uppercase opacity-90">
                      {service.subtitle}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description (Fades out on hover to make room for features, or stays - let's fade it to reduce clutter) */}
                  <p
                    className={`text-white/70 text-sm leading-relaxed mb-6 transition-opacity duration-300 ${
                      hoveredService === service.id
                        ? "opacity-0 h-0 overflow-hidden"
                        : "opacity-100"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* 4. FEATURES LIST (Reveals in place) */}
                {/* Instead of a white popup, this slides UP from the bottom inside the card */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    hoveredService === service.id
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-white/20">
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-white font-medium"
                        >
                          <span className="w-1.5 h-1.5 bg-[#E12128]"></span>{" "}
                          {/* Square dot for industrial look */}
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-white font-bold text-xs uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
                      Explore Service{" "}
                      <FaArrowRight className="text-[#E12128]" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
