"use client";
import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader } from "lucide-react";
import React from "react";

const OrderStatus = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center font-bold w-full text-4xl bg-gray-50">
        No orders found!
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5 justify-between container py-10 bg-gray-50">
      {orders.map((order) => (
        <div
          key={order._id}
          className="space-y-10 p-5 md:p-10 rounded-lg border-[1px] w-full"
        >
          <OrderStatusHeader order={order} />
          <div className="grid gap-20 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatus;
