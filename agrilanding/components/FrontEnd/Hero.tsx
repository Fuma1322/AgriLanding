import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/ui/craft";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Section>
      {/* Background container */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/51c0/c7df/ca620ffb1bccc651254509a40dafb2e8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBcAwSizHcjRFqip78akVHViz0NXf1Xc8J5O7D5ZNmS1tkJCGZp9Q8PHw1h3lPiPBK7oeuKlIvgW0S0sZzzv2Db2ZoCQbFkBEFuqpC9-WDXyfhLghN6tOoZeWnLxvIcj7c6rZUlnyu6NoX47AmRDqN9cYnJzK~bNOO2BdBEO9JdlfeEH3K1j3iZIdO6ziuCjX7Fv~6Y8LJZZCAuZfgAFkw0Xcnnm0UbQgKFmn2RKXEkyF0htUbnh8swWqUvu1Ru7vBT8WcBSlVYWuj2jex7XODCTw1Ospgg96nQFVAwsWED8YHXIoFkyWkSL3omZ3ktlTG~a-X~BsYEWY2EeXRmPIw__)`,
        }}
      >
        {/* Overlay content */}
        <Container className="flex flex-col items-center text-center text-white p-10 rounded-md">
        <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-5xl">
        The Role of Technology in Revolutionizing Agriculture
        </h1>
          <h3 className="text-muted-foreground text-white py-4">
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
