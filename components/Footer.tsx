import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Wana have a conversation about{" "}
          <span className="text-purple">future</span> projects ?
        </h1>
        <p className="text-white-100 md:mt-10 my-5 text-center">
          Reach out to me today.
        </p>
        <Link href="mailto:alirezasalimiyan98@gmail.com">
          <MagicButton
            title="Lets get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Alireza
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link href={profile.url} key={profile.id} target="_blank">
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg 
              saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-rose-600 transform hover:-translate-y-1 transition duration-400 "
              >
                <Image
                  src={profile.img}
                  alt={String(profile.id)}
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
