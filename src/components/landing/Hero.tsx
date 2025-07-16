"use client";
import React from "react";
import Image from "next/image";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";
import { Elispce } from "../ui/Elispce";
import heroImg from "@/assets/images/general/hero.png";

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row lg:space-x-40 relative mt-10">
      <Elispce className="absolute w-[400px] h-[400px] border-secondary-thin -z-1 -top-52 -left-70" />
      <div className="relative space-y-5 p-8">
        <h1 className="font-main font-bold text-3xl md:text-4xl w-full lg:max-w-[23ch] leading-10 md:leading-11">
          Online teaching and learning just got seamless with Klosanow
        </h1>
        <Elispce className="absolute w-[35px] h-[35px] bg-secondary-thin -z-1 top-40 left-[80%] md:left-[96%]" />
        <p className="font-accent text-xl max-sm:w-full">
          Create engaging video learning content, send it to your learning
          community and stay connected 24/7 through the messaging feature on the
          platform.
        </p>
        <div className="">
          <JoinWaitlistButton
            className="w-44 h-12 px-20 hover:underline"
            handleButtonClick={() =>
              window.open("https://zc.vg/tav67", "_blank")
            }
          />
        </div>
      </div>

      <div className="relatve max-sm:mt-10 flex justify-center">
        <div className="flex justify-center items-center w-[380px] h-[380px] md:w-[450px] md:h-[450px] bg-secondary-sm rounded-full transition-all duration-500 hover:scale-110">
          <Elispce className="absolute w-[500px] h-[500px] border-secondary-sm -z-1 top-52 -right-52" />
          {/* <Elispce className="absolute w-[430px] h-[430px] bg-secondary-thin -z-1 top-0 " /> */}
          <Image
            src={heroImg}
            alt="hero"
            className="w-[350px] sm:w-[350px] md:w-[400px] lg:w-[400px]"
            width={500}
            height={500}
            sizes="(max-width: 640px) 250px,
         (max-width: 768px) 300px,
         (max-width: 1024px) 400px,
         500px"
            priority
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
