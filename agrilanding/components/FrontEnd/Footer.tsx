import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { Github, Twitter, Facebook } from "lucide-react";
import { Container, Section } from "../ui/craft";

export default function Footer() {
  return (
    <footer>
      <Section className="bg-[#204E51]">
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
                <h2 className="font-bold text-3xl text-white">AgriVista Farms</h2>
            </Link>
            <p>
              <Balancer className="text-white">
              Li Europan lingues es membres del sam familie. Lor separat existentie 
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-white">Pages</h5>
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
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Github />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
