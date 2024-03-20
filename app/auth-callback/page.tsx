"use client";
import { userCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const AuthCallback = () => {
  const { user } = useAuth0();
  const { createUser } = userCreateMyUser();
  const navigate = useRouter();
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate.push("/");
  }, [createUser, navigate, user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Loader className="animate-spin" size={48} />
    </div>
  );
};

export default AuthCallback;
