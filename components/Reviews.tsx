import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { IoStar } from "react-icons/io5";

const reviews = [
  {
    stars: 5,
    text: "BiteZ has completely changed the way I order food. It's so convenient and the delivery is always on time.",
    avatarLetters: "JD",
    name: "John Doe",
    role: "Food Lover, BiteZ",
  },
  {
    stars: 5,
    text: "I've tried many food delivery services, but BiteZ stands out for its wide variety of restaurants and quick delivery.",
    avatarLetters: "JM",
    name: "Jane Smith",
    role: "Restaurant Owner, BiteZ",
  },
];

const Reviews = () => {
  return (
    <div className="p-10 lg:p-20">
      <h1 className="text-3xl font-bold">Customer Reviews</h1>
      <p className="mt-5 mb-10 text-1xl">
        Read what our satisfied users and restaurants have to say about BiteZ's service.
      </p>
      <div className="flex justify-between gap-10 flex-col md:flex-row">
        {reviews.map((review, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <div className="flex">
              {Array.from({ length: review.stars }, (_, index) => (
                <IoStar className="text-orange-500 text-2xl" key={index} />
              ))}
            </div>
            <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground md:w-[80%]">
              {review.text}
            </p>
            <div className="flex gap-2 md:gap-5 items-center">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarFallback>
                    {review.avatarLetters}
                  </AvatarFallback>
                </Avatar>
                <div className="text-[0.8rem] md:text-[0.9rem] text-muted-foreground">
                  <p>{review.name}</p>
                  <p>{review.role}</p>
                </div>
              </div>
              <div className="bg-[#222] h-16 w-[2px]" />
              <p className="text-[1rem] text-orange-500 font-bold">BiteZ.com</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
