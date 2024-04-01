import React from "react";
import { Restaurant } from "./types";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import TransitionLink from "./TransitionLink";
import { motion } from "framer-motion"
type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  const cardVariants = {
    offscreen: {
      x: -50,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.8
      }
    }
  };
  return (
    <TransitionLink
      href={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <AspectRatio ratio={14 / 6}>
          <img
            src={restaurant.imageUrl}
            className="rounded-md w-full h-full object-cover"
            alt="Delicious food options"
          />
        </AspectRatio>
      </motion.div>
      <motion.div initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}>
        <AnimatedCharacters
          className="text-2xl font-bold tracking-tight mb-2 group-hover:underline"
          text={restaurant.restaurantName}
          type="heading1"
        />
        <div id="card-content" className="flex flex-col gap-2 md:gap-3">
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
          <div className="flex gap-2 flex-col">
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
      </motion.div>
    </TransitionLink>
  );
};

export default SearchResultCard;
