"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";

const Faq = () => {
  return (
    <div className="container md:p-10 lg:p-20 bg-gray-50 flex flex-col">
      <div className="mb-20 flex flex-col items-center mt-10 md:mt-0">
        <AnimatedCharacters type="heading1" text="Frequently Asked Questions" />
        <p className="font-semibold lg:text-[20px] md:text-[18px] text-center xs:text-[14px] text-[#11142D]">
          Find answers to common questions about our organization, how to help,
          and where to go.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="space-y-10 mt-10"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-1xl md:text-[20px] font-bold text-[#11142D] text-start">
            How can I order food from a different country on BiteZ?
          </AccordionTrigger>
          <AccordionContent className="w-[80%]">
            Ordering international cuisine on BiteZ is simple! Browse our
            extensive list of restaurants offering dishes from around the world.
            Once you&apos;ve found something you&apos;d like to try, select the dish, add
            it to your cart, and proceed to checkout. We&apos;ll handle the rest,
            ensuring your food arrives fresh and as quickly as possible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-1xl md:text-[20px] font-bold text-[#11142D] text-start">
            I own a restaurant. How can I list my cuisine on BiteZ?
          </AccordionTrigger>
          <AccordionContent className="w-[80%]">
            We&apos;re thrilled to have you onboard! To list your restaurant and
            cuisine on BiteZ, create an account on our platform, then follow the
            instructions to add your restaurant&apos;s name, location, available
            cuisines, and images of your dishes. Once your submission is
            reviewed and approved by our team, you&apos;ll start appearing in
            searches on our site.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-1xl md:text-[20px] font-bold text-[#11142D] text-start">
            What makes BiteZ different from other food ordering services?
          </AccordionTrigger>
          <AccordionContent className="w-[80%]">
            BiteZ specializes in offering a diverse array of international
            cuisines, directly connecting food enthusiasts with authentic dishes
            from around the globe. Whether you&apos;re craving Italian pasta,
            Japanese sushi, or Indian curry, BiteZ brings the world to your
            doorstep. Additionally, our platform supports local restaurants
            worldwide, enabling them to reach a wider audience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-1xl md:text-[20px] font-bold text-[#11142D] text-start">
            How are orders delivered?
          </AccordionTrigger>
          <AccordionContent className="w-[80%]">
            BiteZ partners with a network of delivery services to ensure timely
            and safe delivery of your food. Depending on your location and the
            restaurant&apos;s proximity, we select the best delivery option to
            maintain the quality and warmth of your order.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-1xl md:text-[20px] font-bold text-[#11142D] text-start">
            Can I place an order for someone in another country?
          </AccordionTrigger>
          <AccordionContent className="w-[80%]">
            Yes, you can! BiteZ makes it easy to treat friends or family to
            delicious meals, no matter where they are. Simply enter the
            recipient&apos;s address during checkout, and we&apos;ll take care of
            delivering your thoughtful gift right to their door.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-1xl md:text-[20px] font-bold text-[#11142D] text-start">
            How can I contact BiteZ for support?
          </AccordionTrigger>
          <AccordionContent className="w-[80%]">
            Our customer support team is always here to help! For any inquiries,
            concerns, or feedback, please visit our Contact Us page. You can
            reach us through our support email, phone, or live chat. We strive
            to respond to all queries promptly and efficiently.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
