import { Check, HexagonIcon, Star, UsersRound } from "lucide-react";

export default function Test() {
  const features = [
    {
      icon: <Star />,
      title: "20+",
      desc: "Years Of Experience",
    },
    {
      icon: <HexagonIcon />,
      title: "40+",
      desc: "Product",
    },
    {
      icon: <Check />,
      title: "2,458+",
      desc: "Satisfied Clients",
    },
    {
      icon: <UsersRound />,
      title: "20",
      desc: "Local Team Members",
    },
  ];

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-12">
          <ul className="grid gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-1 bg-[#204E51] rounded-lg p-6 sm:p-8 lg:p-14">
            {features.map((item, idx) => (
              <li key={idx} className="flex flex-col md:flex-row gap-x-4 p-4 rounded-lg items-center">
                <div className="flex-none w-10 h-10 md:w-16 md:h-16 bg-[#204E45] text-white rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center text-center md:text-left mt-2 md:mt-0">
                  <h4 className="text-base md:text-lg text-white font-extrabold">{item.title}</h4>
                  <p className="text-sm md:text-base font-semibold text-white">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
