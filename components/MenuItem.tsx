import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { MenuItem as MenuItemType } from "./types";

type Props = {
  menuItem: MenuItemType; 
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer dark:bg-[#11161b]" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent>
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
