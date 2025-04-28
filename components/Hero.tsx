import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import CvButton from "./ui/CvButton";
import { VscVerifiedFilled } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Next-level development with Next.js craftsmanship
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning visions into reality through design, code, and innovation"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi im Alireza a front-end developer based in tehran
          </p>
          <div className="flex justify-center items-center gap-3">
            <Link href={"#projects"}>
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <Link href={"#projects"}>
              {/* <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            /> */}
              <CvButton
                title="Download cv"
                icon={<VscVerifiedFilled className="w-6 h-6" />}
                position="right"
                href="/pdf/Alireza_Salimiyan_resume.pdf"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
