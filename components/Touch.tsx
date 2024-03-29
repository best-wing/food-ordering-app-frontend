import React from "react";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";

const Touch = () => {
  const contactInfo = [
    {
      Icon: MdEmail,
      title: "Email",
      description: "For any support or inquiries, please fill out the contact form below.",
      contact: "hello@bitez.com"
    },
    {
      Icon: MdOutlinePhone,
      title: "Phone",
      description: "You can reach us by phone during our business hours.",
      contact: "+1 (555) 123-4567"
    },
    {
      Icon: RiMapPin2Fill,
      title: "Office",
      description: "Visit our office during working hours for any assistance.",
      contact: "123 Main St, Sydney NSW 2000, Australia"
    }
  ];

  return (
    <div className="p-10 lg:p-20">
      <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground">Delicious Food</p>
      <h1 className="text-3xl font-bold my-5">Get in Touch</h1>
      <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground">
        We&apos;re here to answer any questions you may have.
      </p>
      <div className="flex justify-between flex-col md:flex-row">
        {contactInfo.map(({ Icon, title, description, contact }, index) => (
          <div key={index} className="mt-10 space-y-5">
            <Icon className="text-2xl" />
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground">{description}</p>
            <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground underline-offset-1 underline">
              {contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Touch;
