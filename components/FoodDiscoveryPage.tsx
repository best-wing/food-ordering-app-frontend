"use client";
import React from "react";
import SearchBar, { SearchForm } from "./SearchBar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import { ChefHat } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";
import { Link } from "react-scroll";

const FoodDiscoveryPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth0();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    router.push(`/search/${searchFormValues.searchQuery}`);
  };

  const listContent = [
    {
      title: "Discover a World of Delicious Cuisines",
      description:
        "Explore a wide variety of mouthwatering dishes from local restaurants.",
    },
    {
      title: "Track Your Order in Real-Time",
      description:
        "Stay updated with the progress of your delivery from the moment it's placed.",
    },
    {
      title: "24/7 Customer Support at Your Service",
      description:
        "Our dedicated support team is ready to assist you anytime, day or night.",
    },
  ];

  return (
    <main className="flex flex-col gap-12 items-center">
      <div id="order" className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-10 px-5 md:px-20 w-full md:w-[80%] lg:w-1/2">
        <h1 className="md:text-4xl text-3xl font-bold tracking-tight text-orange-600">
          Indulge in Your Favorite Meal Today
        </h1>
        <span className="md:text-xl text-lg">
          Deliciousness delivered with just a click!
        </span>
        <SearchBar
          placeHolder="Search by City or Country"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="container flex gap-10 flex-wrap lg:flex-nowrap lg:px-20 justify-between">
        <div className="flex flex-col justify-center gap-4 lg:w-[50%]">
          <h1 className="text-2xl md:text-4xl font-bold w-[80%]">
            Explore Our Menu and Savor the Flavors
          </h1>
          <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground lg:w-[90%]">
            Dive into BiteZ&apos;s diverse menu, featuring a cornucopia of dishes
            from the finest local eateries. Our platform makes it easy for you
            to explore, customize, and enjoy the gastronomic delights that await
            you. Here&apos;s how you can embark on a culinary journey with just a few
            clicks:
          </p>
          <div className="text-[0.8rem] md:text-[1rem] text-muted-foreground flex flex-col gap-y-3 w-full">
            <div className="flex gap-1">
              <div className="w-6 h-6">
                <ChefHat className="text-orange-500" size={25} />
              </div>
              <p>
                <span className="text-1xl font-bold text-[#222]">
                  Discover Unique Dishes:
                </span>{" "}
                Navigate through our extensive menu to find unique and
                tantalizing dishes that pique your curiosity and appetite.
              </p>
            </div>
            <div className="flex gap-1">
              <div className="w-6 h-6">
                <ChefHat className="text-orange-500" size={25} />
              </div>
              <p>
                <span className="text-1xl font-bold text-[#222]">
                  Tailor to Your Taste:
                </span>
                Customize your order to match your taste preferences—whether
                it&apos;s adding extra toppings, choosing the level of spice, or
                selecting side dishes, make each meal uniquely yours.
              </p>
            </div>
            <div className="flex gap-1">
              <div className="w-6 h-6">
                <ChefHat className="text-orange-500" size={25} />
              </div>
              <p>
                <span className="text-1xl font-bold text-[#222]">
                  Indulge in Your Favorites:
                </span>
                With your order tailored and placed, all that&apos;s left is to relax
                and anticipate the arrival of your delicious, carefully prepared
                meal. Get ready to indulge in a dining experience like no other!
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link smooth={true} duration={500} to="order">
              <Button>Order</Button>
            </Link>
            {isAuthenticated ? (
              <Button>Log Out</Button>
            ) : (
              <Button>Sign in</Button>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <AspectRatio ratio={16 / 10}>
            <img
              src="/assets/Menu-image.png"
              className="object-cover h-full w-full rounded-md"
              alt="Delicious food options"
            />
          </AspectRatio>
        </div>
      </div>
      <Separator />
      <div className="container flex flex-col lg:flex-row gap-10 lg:px-20">
        {listContent.map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <ChefHat className="text-orange-500" size={25} />
            <h1 className="text-2xl lg:text-3xl font-bold">{item.title}</h1>
            <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground">
              {item.description}
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
        ))}
      </div>
    </main>
  );
};

export default FoodDiscoveryPage;
