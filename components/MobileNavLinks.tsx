import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const MobileNavLinks = () => {
  const { logout, user } = useAuth0();
  return (
    <div className="flex flex-col gap-y-5">
      <Link
        href={"/order-status"}
        className="text-sm font-medium"
      >
        Order Status
      </Link>
      <Link
        href={"/manage-restaurant"}
        className="text-sm font-medium"
      >
        My Restaurant
      </Link>
      <Link
        href={"/user-profile"}
        className="text-sm font-medium"
      >
        User Profile
      </Link>
      <Link
        href={"/manage-restaurant"}
        className="text-sm font-medium"
      >
        Manage Restaurant
      </Link>
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
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
