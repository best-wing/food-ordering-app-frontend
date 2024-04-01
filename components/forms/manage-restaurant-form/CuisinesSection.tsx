import { cuisineList } from "@/components/config/restaurant-options-config";
import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";

const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <AnimatedCharacters
          className="text-2xl font-bold dark:text-white"
          text="Cuisines"
          type="heading1"
        />
        <FormDescription className="dark:text-[#D7D7D7]">
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1 dark:text-[#D7D7D7]">
              {cuisineList.map((cuisineItem, index) => (
                <CuisineCheckbox
                  key={index}
                  cuisine={cuisineItem}
                  field={field}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;
