"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import TransitionLink from "./TransitionLink";

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
      className="bg-white lg:px-10 dark:bg-[#11161b] text-white p-4 font-Cairo w-full border-b-[1px] z-50 border-[#E1E1E1] dark:border-[#555555] sticky top-0 right-0 transition-top duration-500"
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
            className="font-bold hover:text-orange-500 hover:bg-white hidden lg:block bg-orange-500"
          >
            Log in
          </Button>
        )}
        <div className="lg:hidden ml-auto">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Header;
