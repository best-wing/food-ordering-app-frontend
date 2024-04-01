import React from "react";
import { Restaurant } from "./types";
import { CartItem } from "@/app/detail/[restaurantId]/page";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;
    return (totalWithDelivery / 100).toFixed(2);
  };
  return (
    <div className="dark:bg-[#11161b]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>£{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between w-full">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <div className="flex items-center">
              <Trash
                className="cursor-pointer text-red-500"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              <div className="w-20 text-right">
                £{((item.price * item.quantity) / 100).toFixed(2)}
              </div>
            </div>
          </div>
        ))}

        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>£({(restaurant.deliveryPrice / 100).toFixed(2)})</span>
        </div>
        <Separator />
      </CardContent>
    </div>
  );
};

export default OrderSummary;
