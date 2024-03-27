import React from "react";
import { Order } from "./types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "./config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);
    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );
    const hours = created.getHours();
    const minutes = created.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };
  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((item) => item.value === order.status) ||
      ORDER_STATUS[0]
    );
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span className="text-[#333333]">Order Status: <span className="text-green-700">{getOrderStatusInfo().label}</span></span>
        <span className="text-[#333333]">Expected by: <span className="text-green-700">{getExpectedDelivery()}</span></span>
      </h1>
      <Progress
        className="animate-pulse mt-10"
        value={getOrderStatusInfo().progressValue}
      />
    </div>
  );
};

export default OrderStatusHeader;
