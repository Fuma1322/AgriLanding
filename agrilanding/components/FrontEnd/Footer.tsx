"use client"

import { Facebook, Github, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer () {

  const footerNavs = [
    {
      label: "Pages",
      items: [
          {
              href: 'javascript:void()',
              name: 'Home'
          },
          {
              href: 'javascript:void()',
              name: 'About'
          },
          {
              href: 'javascript:void()',
              name: 'Product'
          },
          {
              href: 'javascript:void()',
              name: 'Blog'
          },
      ],
  },  
      {
          label: "About",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Testimonials'
              },
              {
                  href: 'javascript:void()',
                  name: 'Our Service'
              },
              {
                  href: 'javascript:void()',
                  name: 'Contact Us'
              },
              {
                  href: 'javascript:void()',
                  name: 'Benefit'
              },
          ]
      },
      {
        label: "",
        items: [
            {
                href: 'javascript:void()',
                name: ''
            },
            {
                href: 'javascript:void()',
                name: ''
            },
            {
                href: 'javascript:void()',
                name: ''
            },
            {
                href: 'javascript:void()',
                name: ''
            },
        ],
    },
  ]

  return (
      <footer className="text-white bg-[#204E51] py-20 mx-auto md:px-8">
          <div className="gap-6 justify-between md:flex">
              <div className="flex-1">
                  <div className="max-w-xs">
                  <Link href="/">
                      <h2 className="font-bold text-xl">Agrivista Farms</h2>
                  </Link>
                      <p className="leading-relaxed mt-6 text-[15px]">
                      Li Europan lingues es membres del sam <br/> familie. Lor separat existentie 
                      </p>
                  </div>
              </div>
              <div className="flex-1 mt-5 space-y-2 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                  {
                      footerNavs.map((item, idx) => (
                          <ul
                              className="space-y-4"
                              key={idx}
                          >
                              <h4 className="text-white font-bold text-lg">
                                  { item.label }
                              </h4>
                              {
                                  item.items.map(((el, idx) => (
                                      <li key={idx}>
                                          <a 
                                              href={el.href}
                                              className="hover:underline"
                                          
                                          >
                                              { el.name }
                                          </a>
                                      </li>
                                  )))
                              }
                          </ul>
                      ))
                  }
              </div>
          </div>
          <div className="items-center justify-between sm:flex">
              <div className="mt-2 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                      <li className="w-10 h-10 border rounded-xl bg-white flex items-center justify-center">
                          <Link href="javascript:void()">
                              <Instagram className="text-[#204E51]" />
                          </Link>
                      </li>

                      <li className="w-10 h-10 border rounded-xl bg-white flex items-center justify-center">
                          <Link href="javascript:void()">
                             <Twitter className="text-[#204E51]" />
                          </Link>
                      </li>

                      <li className="w-10 h-10 border rounded-xl bg-white flex items-center justify-center">
                          <Link href="javascript:void()">
                              <Facebook className="text-[#204E51]" />
                          </Link>
                      </li>

                      <li className="w-10 h-10 border rounded-xl bg-white flex items-center justify-center">
                          <Link href="javascript:void()">
                              <Github className="text-[#204E51]" />
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}
