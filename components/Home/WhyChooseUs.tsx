import React from "react";
import { FaShieldAlt, FaBox, FaGlobe, FaWarehouse } from "react-icons/fa";

const features = [
  {
    title: "SAFETY",
    description:
      "One of our main subjects we are focusing about in all our movements locally and globally and overs years we are gaining the best in safety and security by our high standards in handling and insurance.",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    title: "TRANSPORT OF PACKAGED GOODS",
    description:
      "Interactively generate covalent architectures whereas world-class leadership skills",
    icon: <FaBox className="w-6 h-6" />,
  },
  {
    title: "INTERNATIONAL ROAD TRANSPORT",
    description:
      "Interactively generate covalent architectures whereas world-class leadership skills",
    icon: <FaGlobe className="w-6 h-6" />,
  },
  {
    title: "WAREHOUSING SERVICE",
    description:
      "Interactively generate covalent architectures whereas world-class leadership skills",
    icon: <FaWarehouse className="w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#282562] font-outfit text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* === LEFT COLUMN: The Statement === */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Decorative Line */}

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              WHY CHOOSE <br />
              <span className="text-white/30">FLYMEL?</span>
            </h2>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
              <p>
                Flymel takes this opportunity with great pleasure to introduce
                ourselves that we are one of the premier service providers in
                Logistics industry and shipping services in the UAE and Gulf
                region.
              </p>
              <p className="text-white/40 text-sm border-l border-[#E12128] pl-4">
                Committed to excellence, precision, and the relentless pursuit
                of logistics perfection.
              </p>
            </div>
          </div>

          {/* === RIGHT COLUMN: The Capability Matrix === */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <div key={index} className="group flex flex-col gap-4">
                  {/* Icon & Header Line */}
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4 group-hover:border-[#E12128] transition-colors duration-500">
                    <div className="text-[#E12128] group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-sm tracking-widest uppercase text-white group-hover:text-[#E12128] transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
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
