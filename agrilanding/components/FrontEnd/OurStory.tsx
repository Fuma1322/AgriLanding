import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Cards() {
  return (
    <section className="py-14 ml-3">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white p-8 text-gray-600 dark:text-gray-300 gap-x-12 items-start justify-between lg:flex lg:flex-row-reverse md:px-8 relative">
          <div className="sm:hidden lg:block lg:max-w-xl relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-[#204E51] py-2 px-4 rounded-2xl font-bold lg:text-3xl tracking-tight shadow-md">
              Since 1976
            </div>
            <Image
              src="https://s3-alpha-sig.figma.com/img/e762/1efc/add90d96b68fd53a1a45e58910474cf5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U24OPf9Bawmr7XBwvaN3p0jOUvQbzNN7bLYHL815FiKVZBZOb5jxVRtzpJt7IGd7uphMIjWMZuRmod-EMfANErkc7mpxOjbsuIjdI-d7O-ouHFoXk~gM-cmCngIG390YfzNrJNHclkDiKqLcCR7Vkas1Hz4OSWqxCxiIf~wwku78xvi6~dgf5N09gUrA9qSdWfczgdN5ECHZfwjVmwuQKGWoulZjz8fjgI3RtMJZR30DOiRDLG6vhiZBSprmAG4D55XTvSqtHoeP6rgI9JDkuBbZniRnswAJJjKqiEfkLV~26nbfAgzYAf4F79bOcoJuRlPXDdUYgfDM5ac6jOdoqw__"
              className="rounded-lg"
              alt=""
              height={900}
              width={900}
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h1 className="scroll-m-20 text-[#204E51] text-5xl font-bold text-left tracking-tight lg:text-5xl py-10">
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
