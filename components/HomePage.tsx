import { MenuImage } from "@/public/assets";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 px-5 md:px-20 w-full md:w-[80%] lg:w-1/2">
        <h1 className="md:text-4xl text-3xl font-bold tracking-tight text-orange-600">
          Indulge in Your Favorite Meal Today
        </h1>
        <span className="md:text-xl text-lg">Deliciousness delivered with just a click!</span>
        <input
          className="border-black p-5 border-[1px] rounded-xl"
          type="text"
        />
      </div>
      <div className="container flex gap-10 flex-wrap md:flex-nowrap">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:w-[50%]">
          <span className="font-bold md:text-3xl text-3xl tracking-tighter">
            Discover Our Mouthwatering Menu
          </span>
          <p className="md:w-[70%]">
            Indulge in a variety of delectable dishes, expertly crafted to
            satisfy your cravings. From savory starters to decadent desserts,
            our menu offers something for everyone.
          </p>
        </div>
        <Image
          className="md:w-[40%] rounded-lg object-cover"
          src={MenuImage}
          alt="Hero Image"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default HomePage;
