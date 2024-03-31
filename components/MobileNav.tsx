"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2 text-[15px]">
              <CircleUserRound className="text-orange-500" />
              <span>
                Welcome to BiteZ.com! <span>{user?.name}</span>
              </span>
            </span>
          ) : (
            <span>Welcome to BiteZ.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Location</AccordionTrigger>
                  <Link href="/search/UK">
                    <AccordionContent>UK</AccordionContent>
                  </Link>
                  <Link href="/search/Spain">
                    <AccordionContent>Spain</AccordionContent>
                  </Link>
                  <Link href="/search/Greece">
                    <AccordionContent>Greece</AccordionContent>
                  </Link>
                  <Link href="/search/Germany">
                    <AccordionContent>Germany</AccordionContent>
                  </Link>
                </AccordionItem>
              </Accordion>
              <Button
                onClick={() => loginWithRedirect()}
                className="flex-1 font-bold bg-orange-500"
              >
                Log in
              </Button>
            </>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
