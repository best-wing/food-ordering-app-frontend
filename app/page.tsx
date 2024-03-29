import Hero from "@/components/Hero";
import FoodDiscoveryPage from "@/components/FoodDiscoveryPage";
import React from "react";
import PopularDishes from "@/components/PopularDishes";
import { Separator } from "@/components/ui/separator";
import Reviews from "@/components/Reviews";
import Touch from "@/components/Touch";

const page = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <Hero />
      <FoodDiscoveryPage />
      <Separator className="my-20" />
      <PopularDishes />
      <Reviews />
      <Separator />
      <Touch />
    </div>
  );
};

export default page;
