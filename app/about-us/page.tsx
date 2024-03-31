"use client";
import { Dishes, Image1, Image2, Image3 } from "@/public/assets";
import Image from "next/image";
import React from "react";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";


const AboutUs = () => {

  return (
    <div className="h-full bg-gray-50">
      <div className="w-full h-[700px] lg:max-h-[800px] flex">
        <Image
          className="object-cover h-[700px] lg:max-h-[800px] w-full absolute brightness-50"
          src={Dishes}
          alt="Hero Image"
          width={2000}
          height={2000}
        />
        <div className="flex relative p-10 md:p-20 w-full flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col gap-y-5">
            <AnimatedCharacters className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6]" type="paragraph" text="Who We Are" />
            <AnimatedCharacters className="text-3xl font-bold text-[#fff]" type="heading1" text="Bringing the World to Your Table" />
            <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6] md:w-1/2">
              At BiteZ, we&apos;re more than just a food delivery service; we&apos;re a
              gateway to global cuisine. Founded on the belief that food is a
              language that transcends borders, we&apos;re dedicated to connecting
              you with authentic culinary experiences from around the world. Our
              platform is a vibrant community of food enthusiasts, explorers,
              and passionate restaurant partners. Join us as we make discovering
              and enjoying global cuisines easy, accessible, and endlessly
              delicious.
            </p>
          </div>
        </div>
      </div>
      <div className="container p-10 lg:p-20">
        <AnimatedCharacters className="text-2xl md:text-4xl font-bold" type="heading1" text="How to Discover and Order with BiteZ" />
        <div className="flex justify-between flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full h-full">
            <Image
              src={Image1}
              alt="Discover Cuisines"
              className="w-full h-[400px] object-cover"
              width={1000}
            />
            <AnimatedCharacters className="text-1xl font-bold my-2" type="heading2" text="Discover" />
            <p className="text-1xl text-muted-foreground">
              BiteZ opens a door to the world&apos;s cuisines, directly from our
              homepage. Explore our vast selection of restaurants offering
              dishes from across the globe. Whether you&apos;re craving something
              familiar or looking to try something new, our easy-to-navigate
              platform makes finding your next meal a breeze. Just browse or use
              our search to start your culinary adventure.
            </p>
          </div>
          <div className="w-full h-full">
            <Image
              src={Image2}
              alt="Place Your Order"
              className="w-full h-[400px] object-cover"
              width={500}
            />
            <AnimatedCharacters className="text-1xl font-bold my-2" type="heading2" text="Order" />
            <p className="text-1xl text-muted-foreground">
              Found something that tickles your taste buds? Add it to your cart
              with a tap. Our checkout process is streamlined for ease - review
              your order, select your payment method, and confirm. We&apos;ll handle
              the rest, ensuring your food is prepared, packed, and delivered
              with care, keeping you updated every step of the way.
            </p>
          </div>
          <div className="w-full h-full">
            <Image
              src={Image3}
              alt="Track Your Feast"
              className="w-full h-[400px] object-cover"
              width={1000}
            />
            <AnimatedCharacters className="text-1xl font-bold my-2" type="heading2" text="Enjoy" />
            <p className="text-1xl text-muted-foreground">
              Once your order is placed, sit back and get ready for a culinary
              delight. Track your order&apos;s progress from the kitchen to your
              doorstep in real-time. BiteZ&apos;s partnership with dedicated delivery
              partners ensures your food arrives as fresh as it leaves the
              restaurant, bringing the joy and flavors of the world right to
              your table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
