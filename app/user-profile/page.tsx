"use client";
import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UserProfile = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  if (!isAuthenticated) {
    return null;
  }

  if (isGetLoading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <div className="h-screen">
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </div>
  );
};

export default UserProfile;
