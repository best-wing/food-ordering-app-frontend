import { HeroImg } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return <div>
    <Image className="object-cover max-h-[800px] w-full" src={HeroImg} alt="Hero Image" width={20000} height={20000}/>
  </div>;
};

export default Hero;
