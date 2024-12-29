import React, { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero: FC<HeroProps> = ({ imgData, imgAlt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image alt={imgAlt} src={imgData} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl text-center">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
