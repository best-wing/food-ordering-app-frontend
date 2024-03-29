import { Link } from "react-scroll";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    if (inputRef.current && isElementInViewport(inputRef.current)) {
      inputRef.current.focus();
    }
  };

  // Helper function to check if an element is in the viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return !(
      rect.top > window.innerHeight ||
      rect.left < 0 ||
      rect.bottom < 0 ||
      rect.right > window.innerWidth
    );
  };

  useEffect(() => {
    form.reset({ searchQuery });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });
    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  ref={inputRef}
                  className="border-none shadow-none md:text-xl focus-visible:ring-0 p-2 md:p-3"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full p-2 md:p-4 text-sm md:text-lg"
        >
          Reset
        </Button>
        <Button
          type="submit"
          className="rounded-full bg-orange-500 p-2 md:p-4 text-sm md:text-lg"
        >
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
