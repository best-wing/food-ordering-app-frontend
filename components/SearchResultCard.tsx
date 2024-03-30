import React from "react";
import { Restaurant } from "./types";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import TransitionLink from "./TransitionLink";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <TransitionLink
      href={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
    >
      <AspectRatio ratio={14 / 6}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <div>
        <AnimatedCharacters
          className="text-2xl font-bold tracking-tight mb-2 group-hover:underline"
          text={restaurant.restaurantName}
          type="heading1"
        />
        <div id="card-content" className="flex flex-col gap-2 md:gap-5">
          <div>
            <div className="flex flex-row flex-wrap">
            <p className="mr-1">Cuisines: </p>
              {restaurant.cuisines.map((item, index) => (
                <span key={index} className="flex">
                  <span>{item}</span>
                  {index < restaurant.cuisines.length - 1 && <Dot />}
                </span>
              ))}
            </div>
            <div className="flex flex-col mt-2">
              <p>
                Country:{" "}
                <span className="text-green-600">{restaurant.country}</span>
              </p>
              <p>
                City: <span className="text-green-600">{restaurant.city}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-5 flex-col">
            <div className="flex items-center gap-1 text-green-600">
              <Clock className="text-green-600" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-1">
              <Banknote />
              Delivery from{" "}
              <span className="text-green-600">
                £{(restaurant.deliveryPrice / 100).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default SearchResultCard;
