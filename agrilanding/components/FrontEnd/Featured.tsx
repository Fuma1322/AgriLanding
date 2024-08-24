import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const services = [
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/9fdb/c069/0f7319cf18358681e6be1f2da72c5e9f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G9B51jyW~et9fR3VWnNNi34CNUkwsbmqaUKzS2fcYFKR30oRolEfogYyOqXQDYBC2biDfkLeVynSXz~WNkyJPY7xIjiVp5lHJmi96odDvv4YNkCPR6fvOATJNVHR65x0YPyEFXOmnlwcg4AJdJ5c68Roo0Ou1b23Kv9IUKetUktH5OWLTZm-eVLDlgja6fkxg2haML7PT~n731VG6YTgnTpbHqnaLbvBUy25bmqjvVCCNTYG1aCkJVFiKAFZlIJJF4l4ny4IZDrSrKeoFd3hjN-aPBCOwO0moAU1pXugAcpZ~OJaosQpfizBKod-KY5TDw4jl56q3xcvxKBUBgGJpw__",
    title: "Rice",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/efb4/c917/311ba558964e2e9cf719292c492eec3b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bq7uaF7wncgJy1r1iRhnGZhasWBNwdyaFP-hXgTX3wHL9wJqz-26pYvYkg481w53uE9t8I8JfjgzLVKgqasKuEyAozR1YwDme7s1L2sjCB2UVyEp6587W4XtiTMp-H40OIvBFtoedscZFGz3voOzM-Rzny1ZAqXP5qUSS5aI7AuaZ5P-MkIfWrcv3HlbtOGYzxN1HPRA8lnFxzZJrG4gyhYw49-7XU6quWyskT98F1vDic6NrnaNasYEwYzbFwf-8p~O3s37wfdxQnthVDws0shWFDRUHZvdGtPzuEOIR1kDiwv77OOCFy59CsdW-J4GohSKsAy4102FkBsFcKgW-w__",
    title: "Wheat",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/c1e1/55f5/c90de42ffd322663bfbfdf9b98a982f3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5GT31xwHEVTA17cU2sU3RxBVuTbLlr6Ig04cgYGEdv5p32pT7NACvuHtdutwvRsMQ9H9s4BNXrRzNic4YqXIqIRxO0IsI2pZ6rnoektmg6fRjXZsd-Z4fhY8V3TMJ2DYIvfAUElTcIV9REjQHxG2PQfKhVNYtAaxy0~rGb7D4e-z7toGNvkwGX3Vn6~zxTWCc-VIQWQtD34a~t81vaV2fZvSWbuYcKZNTWu1zVGFfygnyHs9ckb~bN4l4IReVQ~xoXEXIdwG1W~SVlhVDwRfyNBXEPXw4kuSkbKXV0wVRnBHNDXGvb0fVZTUf3nRsAhNQd4smq6Xv0EwM5iX8mEXQ__",
    title: "Pumpkin",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/343d/35e3/947e9dd5df0fb4dadcc85f423a556b19?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gngGvDnwpQqdyndnrhcjjyOk0rOSqgw-Yt4wAxtttwybxx-~hLnO-8KyDNsh0HtR4MOgSLTafuEkpq6QfuL~GGGMh0hfEIEBlqszInVmeBa1E5aXHTKLOV5xdJcJ5qd4N7ngLJEnpsoT599sFeb-zjHAS6RIVhBvz9~W3xPJw1oic36OR2yrqPPusIrCMuzS-ybH-oGo-ynbcZOR81I88Ooi7zUTpODPg8h~d3Bd1QlppcVE1HVxP6PJAUrrdbxeOA8dvNsnbhwh4cbJIyYiwgG0Zc4S7tm~eEMXazsebAVLgxnWOq57hGkrBhB~CsSVyTZrrXiEmH~65V5GoO0vzA__",
    title: "Cabbage",
    description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
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
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service, idx) => (
              <li key={idx}>
                <motion.div
                  className="h-full rounded-2xl bg-white p-4 border border-neutral-200 shadow-xl flex flex-col items-center justify-center"
                >
                  <div className="w-full h-auto overflow-hidden rounded-lg">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={100}
                      height={100} 
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-lg"
                    />
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
