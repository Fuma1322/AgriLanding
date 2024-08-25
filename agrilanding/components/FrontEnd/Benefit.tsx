import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Test from "./Test";

export default function Benefit() {
  return (
    <section className="py-14 ml-3">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white p-8 text-gray-600 dark:text-gray-300 gap-x-12 items-start justify-between lg:flex lg:flex-row-reverse md:px-8 relative">
          <div className="sm:hidden lg:block lg:max-w-xl relative">
            <Test />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h1 className="scroll-m-20 text-[#204E51] text-5xl font-bold text-left tracking-tight lg:text-6xl py-16">
              The Benefits <br/> of Choosing <br/> Our Expertise
              </h1>
              <p className="mt-3 max-w-xl">
              Li Europan lingues es membres del sam familie. <br/> Lor separat existentie es un myth. Por scientie, <br/> musica, sport etc, litot Europa usa li sam vocabular. 
              </p>
            </div>
            <div className="flex items-start justify-start py-14">
              <Link href="/get_started">
                <Button className="bg-[#204E51]">
                  Learn More <MoveRight className="ml-3"/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
