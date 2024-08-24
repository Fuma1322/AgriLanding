import { motion } from "framer-motion";
import React from "react";
import { PenTool, Globe, Layout, Twitter, NotebookPen, ChartScatter, Users } from "lucide-react"; // Import specific Lucide icons
import Image from "next/image";

const services = [
  {
    Image: "/agri1.png",
    title: "Rice",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
  },
  {
    icon: <Users className="h-16 w-16" />,
    title: "Wheat",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
  },
  {
    icon: <ChartScatter className="h-16 w-16" />,
    title: "Pumpkin",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
  },
  {
    icon: <Globe className="h-16 w-16" />,
    title: "Cabbage",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
  },
];

export default function Feature() {
  return (
    <div>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#204E51] text-3xl font-bold sm:text-4xl">
              Our Featured Product
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
                    <div className= "text-2xl rounded-full px-2 py-0.5 mt-4">
                      {service.Image}
                    </div>
                    <h4 className="text-lg font-semibold text-[#204E51] mt-4">
                      {service.title}
                    </h4>
                    <p className="sm:text-sm lg:text-xl text-center text-neutral-500 mt-4">
                      {service.description}
                    </p>
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
