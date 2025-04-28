import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="py-20 border-none" id="testimonials">
      <h1 className="heading">
        Work <span className="text-purple"> experience</span>
      </h1>
      {/* <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"> */}
      <div className="w-full mt-12 flex flex-wrap items-center justify-center gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className={`flex-1 text-white border-neutral-200 dark:border-slate-800 max-w-[600px] h-[250px] `}
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                width={64}
                height={64}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20"
              />
              <div className="lg:ms-5 flex flex-col">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
                {card.url && (
                  <Link
                    className="text-start text-purple mt-3 font-semibold absolute bottom-5 right-10 hover:text-rose-400 transform hover:-translate-y-1 transition duration-400"
                    href={card.url!}
                    target="_blank"
                  >
                    Visit website !
                  </Link>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
