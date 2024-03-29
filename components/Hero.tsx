"use client";
import { Dishes } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  percentage: string;
  label: string;
};

const Hero = () => {
  const { isAuthenticated } = useAuth0();
  const StatCard = ({ percentage, label }: Props) => (
    <div className="flex-1 flex gap-3">
      <div className="h-20 bg-white" style={{ width: "2px" }} />
      <div className="flex flex-col gap-y-5">
        <h1 className="text-4xl font-bold text-[#fff]">{percentage}%</h1>
        <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6]">{label}</p>
      </div>
    </div>
  );
  return (
    <div>
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
            <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6]">
              Delicious
            </p>
            <h1 className="text-3xl font-bold text-[#fff]">
              Explore World Cuisines from Your Home
            </h1>
            <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6] md:w-1/2">
              With BiteZ, embark on a culinary journey across the globe without
              leaving your house. We've partnered with authentic restaurants
              from various countries to offer you an unparalleled selection of
              international dishes. Dive into a new culture with every meal and
              join our global community of food lovers today.
            </p>

            <div className="flex gap-5">
              <Button>Learn More</Button>
              {isAuthenticated ? (
                <Link smooth={true} duration={500} to="order">
                  <Button>Order</Button>
                </Link>
              ) : (
                <Button>Sign in</Button>
              )}
            </div>
          </div>
          <div className="space-y-10 w-full">
            <div className="flex gap-3 w-full">
              <StatCard percentage="95" label="Global Cuisines Offered" />
              <StatCard percentage="85" label="On-Time Deliveries" />
            </div>
            <div className="flex gap-3 w-full">
              <StatCard percentage="90" label="Satisfied Eaters Worldwide" />
              <StatCard
                percentage="70"
                label="International Restaurants Partnered"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
