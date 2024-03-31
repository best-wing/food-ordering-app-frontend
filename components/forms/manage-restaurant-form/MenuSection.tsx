import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { toast } from "sonner";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  const removeMenuItem = (index: number) => {
    remove(index);
    toast.success("Menu item removed successfully!");
  };

  const addMenuItem = () => {
    append({ name: "", price: "" });
    toast.success("Menu item added successfully!");
  };

  return (
    <div className="space-y-2">
      <div>
        <AnimatedCharacters
          className="text-2xl font-bold"
          text="Menu"
          type="heading1"
        />
        <FormDescription>
          Create your menu and give each item a name and a price and a image
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((field, index) => (
              <MenuItemInput
                key={field.id}
                index={index}
                removeMenuItem={() => removeMenuItem(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button type="button" onClick={addMenuItem}>
        Add Menu Item
      </Button>
    </div>
  );
};

export default MenuSection;