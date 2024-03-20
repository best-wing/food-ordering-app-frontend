"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/components/forms/manage-restaurant-form/ManageRestaurantForm";
import { Loader } from "lucide-react";

const ManageRestaurant = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();
  const isEditing = !!restaurant


  const { isAuthenticated, isLoading: isAuthLoading } = useAuth0();
  const router = useRouter();

  // State to manage initial loading state
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (!isAuthLoading) {
      if (!isAuthenticated) {
        router.push("/");
      } else {
        setInitialLoading(false);
      }
    }
  }, [isAuthenticated, isAuthLoading, router]);

  // Render nothing or a loading spinner while determining auth state
  if (initialLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  // Render the form with or without restaurant data
  return (
    <div>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={isEditing ? updateRestaurant : createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </div>
  );
};

export default ManageRestaurant;
