"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/order-status",
    label: "Order Status",
  },
  {
    href: "/manage-restaurant",
    label: "Manage Restaurant",
  },
];

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const countryPaths = [
    "/search/uk",
    "/search/Spain",
    "/search/Greece",
    "/search/Germany",
  ];
  const isCountryPathActive = () =>
    countryPaths.some((countryPath) => pathname.includes(countryPath));
  return (
    <div className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <div className="flex items-center">
          {navLinks.map(({ href, label = "" }) => (
            <Link
              key={href}
              href={href}
              className={`${
                isActive(href)
                  ? "text-[#000] dark:text-white"
                  : "text-[#808080]"
              } font-bold hover:text-orange-500 mr-5`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/user-profile"
            className={`${
              isActive("/user-profile")
                ? "text-[#000] dark:text-white"
                : "text-[#808080]"
            } font-bold hover:text-orange-500`}
          >
            Profile
          </Link>
        </div>
      ) : null}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${
                isCountryPathActive()
                  ? "text-[#000] dark:text-white"
                  : "text-[#808080]"
              } font-bold hover:text-orange-500 text-1xl`}
            >
              Location
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[150px] p-2">
                <Link
                  className="block select-none space-y-1 text-sm font-medium rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/search/uk"
                >
                  UK
                </Link>
                <Link
                  className="block select-none space-y-1 text-sm font-medium  rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/search/Spain"
                >
                  Spain
                </Link>
                <Link
                  className="block select-none space-y-1 text-sm font-medium  rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/search/Greece"
                >
                  Greece
                </Link>
                <Link
                  className="block select-none space-y-1 text-sm font-medium  rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/search/Germany"
                >
                  Germany
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNav;
