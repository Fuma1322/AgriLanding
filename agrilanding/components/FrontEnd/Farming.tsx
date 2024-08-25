import Link from "next/link";
import { Section, Container } from "@/components/ui/craft";
import { Button } from "@/components/ui/button";

const Farming = () => {
  return (
    <Section>
      {/* Background container */}
      <div
        className="relative h-[590px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("/agri7.png")`,
        }}
      >
        {/* Overlay content */}
        <Container className="flex flex-col items-start text-start text-white p-10 rounded-md">
        <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-7xl">
          Sustainable Farming <br/> Meets Technology: <br/> Building a Greener Future
        </h1>
          <div className="not-prose mt-6 flex gap-10 md:mt-12">
            <Button className="bg-[#204E51]">
              <Link href="/">
                Learn More
              </Link>
            </Button>
            <Button variant="ghost" className="border border-[#FFFF] hover:none">
              <Link href="/learn_more">
               Contact Us
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Farming;
