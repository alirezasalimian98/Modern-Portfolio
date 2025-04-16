import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20 border-none" id="skills">
      <h1 className="heading mb-3">
        The <span className="text-purple">knowledge</span> and{" "}
        <span className="text-purple">abilities</span> I have honed over time
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex md:max-w-60 max-w-32 gap-2 items-center justify-center "
            >
              <img src={img} alt={name} className="md:w-10 w-5" />
              {/* <img src={nameImg} alt={name} className="md:w-24 w-20" /> */}
              <p className="md:w-24 w-20">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
