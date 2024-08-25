import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/ui/craft";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Section>
      {/* Background container */}
      <div
        className="relative h-[620px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("/agri1.png")`,
        }}
      >
        {/* Overlay content */}
        <Container className="flex flex-col items-center text-center text-white p-10 rounded-md">
        <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-5xl">
        The Role of Technology <br/> in Revolutionizing <br/> Agriculture
        </h1>
          <h3 className="text-muted-foreground text-white py-4 text-starts">
            <Balancer>
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
            </Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-10 md:mt-12">
            <Button className="bg-[#204E51]">
              <Link href="/">
                Get Started
              </Link>
            </Button>
            <Button variant="ghost" className="border border-[#FFFF] hover:none">
              <Link href="/learn_more">
               Learn More
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
