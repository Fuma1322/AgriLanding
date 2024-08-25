import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function TestimonialCards() {
  return (
    <section className="py-14 ml-3">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white p-8 text-gray-600 dark:text-gray-300 gap-x-12 items-start justify-between lg:flex lg:flex-row-reverse md:px-8 relative">
          <div className="sm:hidden lg:block lg:max-w-xl relative">
            <Image
              src="/agri2.png"
              className="rounded-lg"
              alt=""
              height={900}
              width={900}
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h1 className="scroll-m-20 text-[#204E51] text-5xl font-bold text-left tracking-tight lg:text-xl py-10">
                Our Passion for Agriculture Nurturing Growth and Sustaining the Future
              </h1>
              <p className="mt-3 max-w-xl">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
              </p>
            </div>
            <div className="flex items-start justify-start py-14">
              <Link href="/get_started">
                <Button className="bg-[#204E51]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
