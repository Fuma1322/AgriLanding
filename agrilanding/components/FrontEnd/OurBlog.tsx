import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const services = [
  {
    imageSrc: "/agri6.png",
    title: "Innovations for a Greener Future",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.",
    href: "#"
  },
  {
    imageSrc: "/agri5.png",
    title: "The Power of Agricultural Analytics",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.",
    href: "#"
  },
  {
    imageSrc: "/agri4.png",
    title: "Cultivating Sustainable and Resilient Farms",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica..",
    href: "#"
  },
  {
    imageSrc: "/agri3.png",
    title: "Cabbage",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.",
    href: "#"
  },
];

export default function Blog() {
  return (
    <div>
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-[#204E51] text-3xl font-bold sm:text-4xl">
            Our Blog
          </h3>
          <p className="mt-3 flex items-center justify-center">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service, idx) => (
              <li key={idx}>
                <div
                  className="h-full rounded-2xl bg-white p-4 border border-neutral-200 shadow-xl flex flex-col items-center justify-center"
                >
                  <div className="w-full h-auto overflow-hidden flex justify-center rounded-lg">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={581}
                      height={774} 
                      className="rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-[#204E51] mt-4">
                    {service.title}
                  </h4>
                  <p className="text-sm text-center text-neutral-800 mt-4">
                    {service.description}
                  </p>
                  <div className="flex justify-start items-start">
                  <Link href={service.href} className="underline text-[#204E51]">
                    Read More
                  </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
