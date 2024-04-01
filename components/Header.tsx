"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import TransitionLink from "./TransitionLink";
import { ModeToggle } from "@/utlis/ModeToggle";

function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    const navbarElement = document.querySelector("nav");
    if (navbarElement) {
      setNavbarHeight(navbarElement.clientHeight);
    }
  }, []);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      style={{ top: showNav ? "0" : `-${navbarHeight}px` }}
      className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-10 p-4 w-full z-50 sticky top-0 right-0 transition-top duration-500"
    >
      <div className="flex justify-between items-center">
        <TransitionLink
          href={"/"}
          className="text-3x1 font-bold tracking-tight text-orange-500"
        >
          BiteZ.com
        </TransitionLink>
        <div className="hidden lg:block">
          <MainNav />
        </div>
        <div className="flex gap-5">
          {isAuthenticated ? (
            <Button
              onClick={() => logout()}
              className="font-bold hover:text-orange-500 hover:bg-white hidden lg:block"
            >
              Log Out
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={async () => await loginWithRedirect()}
              className="font-bold hover:text-orange-500 hidden lg:block"
            >
              Log in
            </Button>
          )}
          <div className="lg:block hidden">
            <ModeToggle />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-5 lg:hidden">
          <ModeToggle />
          <div className="mt-1">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
