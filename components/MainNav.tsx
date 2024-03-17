"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <Button
            variant="ghost"
            onClick={async () => await loginWithRedirect()}
            className="font-bold hover:text-orange-500 hover:bg-white"
          >
            Log in
          </Button>
        )}
      </span>
    </div>
  );
};

export default MainNav;
