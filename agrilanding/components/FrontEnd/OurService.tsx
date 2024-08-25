import { motion } from "framer-motion";
import React from "react";
import { PenTool, Globe, Layout, Twitter, NotebookPen, ChartScatter, Users } from "lucide-react"; // Import specific Lucide icons
import Link from "next/link";

const services = [
  {
    icon: <NotebookPen className="h-16 w-16" />,
    description: "Blog and Article Writing",
    href:"#"
  },
  {
    icon: <Users className="h-16 w-16" />,
    description: "Website Content",
    href:"#"
  },
  {
    icon: <ChartScatter className="h-16 w-16" />,
    description: "Content Strategy and Consulting",
    href:"#"
  },
  {
    icon: <Globe className="h-16 w-16" />,
    description: "Social Media Management",
    href:"#"
  },
];

export default function Service() {
  return (
    <div>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#204E51] text-3xl font-bold sm:text-4xl">
              Our Service
            </h3>
            <p className="mt-3 flex items-center justify-center">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <motion.div
                    className="h-full rounded-2xl bg-white p-4 border border-neutral-200 shadow-xl flex flex-col items-center justify-center"
                  >
                    <Link href={service.href}>
                      <div className= "text-xl rounded-full px-20 py-0.5 mt-4">
                        {service.icon}
                      </div>
                      <p className="text-xl text-center font-semibold text-neutral-500 mt-4">
                        {service.description}
                      </p>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
