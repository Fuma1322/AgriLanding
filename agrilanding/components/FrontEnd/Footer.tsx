import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Twitter, Facebook, Instagram } from "lucide-react";

const buttons = [
  {
    icons: <Instagram className="text-[#204E51]" />,
  },
  {
    icons: <Twitter className="text-[#204E51]" />,
  },
  {
    icons: <Facebook className="text-[#204E51]" />,
  },
  {
    icons: <Github className="text-[#204E51]" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#204E51] lg:py-32 sm:py-44">
      <section>
        <div className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] lg:ml-72">
          <div className="flex flex-col gap-4">
            <Link href="/">
                <h2 className="font-bold text-3xl text-white">AgriVista Farms</h2>
            </Link>
            <p>
              <p className="text-white">
              Li Europan lingues es membres del sam <br/>
              familie. Lor separat existentie 
              </p>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white">Pages</h3>
            <Link href="/" className="text-white">Home</Link>
            <Link href="/" className="text-white">About</Link>
            <Link href="/" className="text-white">Product</Link>
            <Link href="/" className="text-white">Blog</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-white">About</h5>
            <Link href="/" className="text-white">Testimonials</Link>
            <Link href="/" className="text-white">Our Service</Link>
            <Link href="/" className="text-white">Contact Us</Link>
            <Link href="/" className="text-white">Benefit</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2 lg:ml-72">
          {buttons.map((items,idx) => {
            return (
            <Button key={idx} variant="outline" size="icon">
              {items.icons}
            </Button>
            )
          })}
          </div>
        </div>
      </section>
    </footer>
  );
}
