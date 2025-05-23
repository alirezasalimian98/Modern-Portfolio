import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20 border-none" id="projects">
      <h1 className="heading">
      Recent{" "}
        <span className="text-purple"> project</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gsp-y-8 mt-10  ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] flex items-center justify-center w-[80vw] sm:h-[41rem] h-[32rem] sm:w-[570px] "
          >
            <PinContainer title={title} href={link}>
              <Link href={link} target="_blank">
                <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10  ">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src={"/bg.png"} alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute -bottom-10 transform rotate-[2.63deg] 
                    w-[500px] h-[300px] max-sm:w-[380px] max-sm:h-[300px]"
                  />
                  {/* transform rotate-[2.63deg] */}
                </div>
              </Link>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      className="border border-white-100/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      key={icon}
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2 " />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3 " color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
