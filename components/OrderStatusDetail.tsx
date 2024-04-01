import React from "react";
import { Order } from "./types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5 lg">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-[#11142D] dark:text-white">Delivering to:</h2>
        <div className="flex flex-col gap-y-2">
          <span className="text-[1rem] text-[#727272]">
            <span className="font-bold text-[#11142D] dark:text-white">Name:</span>{" "}
            {order.deliveryDetails.name}
          </span>
          {order.status === "outForDelivery" || order.status === "delivered" ? (
            <span className="text-[1rem] text-[#727272] dark:text-[#D7D7D7]">
              <span className="font-bold text-[#11142D] dark:text-white">Order id:</span>{" "}
              {order._id}
            </span>
          ) : null}
          <span className="text-[1rem] text-[#727272] dark:text-[#D7D7D7]">
            <span className="font-bold text-[#11142D] dark:text-white">Address:</span>{" "}
            {order.deliveryDetails.addressLine1}
          </span>
          <span className="text-[1rem] text-[#727272] dark:text-[#D7D7D7]">
            <span className="font-bold text-[#11142D] dark:text-white">City:</span>{" "}
            {order.deliveryDetails.city}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[20px] font-bold text-[#11142D] dark:text-white">Your Order:</h2>
        <ul className="flex flex-col">
          {order.cartItems.map((item) => (
            <div
              key={item.menuItemId}
              className="border-2 dark:border-[#ababab] text-[1rem] text-[#727272] border-l-0 border-t-0 border-r-0 border-dotted flex flex-col justify-center py-3 gap-y-2"
            >
              <div className="text-[#727272] dark:text-[#D7D7D7]">
                <span className="font-bold text-[#333333] dark:text-white">Name:</span>{" "}
                {item.name}
              </div>
              <div className="text-[#727272] dark:text-[#D7D7D7]">
                <span className="font-bold text-[#333333] dark:text-white">quantity:</span>{" "}
                {item.quantity}
              </div>
              <div className="text-[#727272] dark:text-[#D7D7D7]">
                <span className="font-bold text-[#333333] dark:text-white">Price:</span> £
                {item.price}
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-[#11142D] dark:text-white">Total:</h2>
        <span className="text-[1rem] text-green-700 font-bold">
          £{(order.totalAmount / 100).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
