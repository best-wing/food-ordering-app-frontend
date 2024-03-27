"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/components/forms/manage-restaurant-form/ManageRestaurantForm";
import { Loader } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItemCard from "@/components/OrderItemCard";

const ManageRestaurant = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();
  const isEditing = !!restaurant;

  const { orders } = useGetMyRestaurantOrders();

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
    <div className="bg-gray-50">
      <Tabs defaultValue="orders">
        <TabsList className="p-10 h-full bg-gray-50">
          <TabsTrigger className="text-1xl" value="orders">
            Orders
          </TabsTrigger>
          <TabsTrigger className="text-1xl" value="manage-restaurant">
            Manage Restaurant
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="orders"
          className={
            orders.length < 2
              ? "h-screen space-y-5 p-10"
              : "h-full space-y-5 p-10"
          }
        >
          <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
          {orders?.map((order) => (
            <OrderItemCard key={order._id} order={order} />
          ))}
        </TabsContent>
        <TabsContent value="manage-restaurant">
          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={isCreateLoading || isUpdateLoading}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageRestaurant;
