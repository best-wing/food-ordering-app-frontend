import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

function Header() {
  return (
    <div>
      <div className="border-b-2 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href={"/"}
            className="text-3x1 font-bold tracking-tight text-orange-500"
          >
            BiteZ.com
          </Link>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
