import React from "react";
import Image from "next/image";
import { Elispce } from "@/components/ui/Elispce";
import { moonImg, stackImg } from "@/assets";

const About: React.FC = () => {
  return (
    <div className="relative mt-24 overflow-x-hidden">
      <div className="relative flex flex-col justify-center items-center p-5 sm:p-20">
        <Elispce className="absolute bg-[#FED7D7] w-[300px] h-[300px] md:w-[600px] md:h-[600px] -right-40 lg:-right-80 top-64 bottom-0" />
        <div className="relative flex flex-col justify-center items-center max-w-[1000px]">
          <div className="absolute -top-10 -right-30">
            <Image src={moonImg} alt="moon img" />
          </div>
          <h1 className="font-main text-2xl md:text-4xl text-center">
            Get to Know Us!
          </h1>
          <p className="font-accent font-medium text-[18px] text-center mt-2 text-gray-500 max-w-[70ch]">
            At Klosanow, we revolutionize the educational landscape by providing
            a cutting-edge EdTech platform that seamlessly connects tutors with
            learners. Our innovative solution empowers tutors to create and
            share engaging pre-recorded video lessons, enabling learners to
            access and engage with the content conveniently on our platform,
            anytime and anywhere. Embrace the future of education with Klosanow
            and embark on a transformative learning experience that transcends
            traditional boundaries.
          </p>

          <div className="lg:-mt-24">
            <Image src={stackImg} alt="stack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
