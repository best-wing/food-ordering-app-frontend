"use client"
import Hero from "@/components/Hero";
import FoodDiscoveryPage from "@/components/FoodDiscoveryPage";
import React, { useEffect } from "react";
import PopularDishes from "@/components/PopularDishes";
import { Separator } from "@/components/ui/separator";
import Reviews from "@/components/Reviews";
import Touch from "@/components/Touch";
import { useGetRestaurant } from "@/api/RestaurantApi";

const Home = () => {
  const { restaurant } = useGetRestaurant();

  useEffect(() => {
    restaurant    
  }, [useGetRestaurant, restaurant])
  return (
    <div className="bg-gray-50 dark:bg-[#181c20] dark:text-white overflow-hidden">
      <Hero />
      <FoodDiscoveryPage />
      <Separator className="my-10 dark:hidden" />
      <PopularDishes />
      <Reviews />
      <Separator />
      <Touch />
    </div>
  );
};

export default Home;
