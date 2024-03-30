"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Location",
      links: [
        { href: "/search/UK", label: "UK" },
        { href: "/search/Spain", label: "Spain" },
        { href: "/search/Greece", label: "Greece" },
        { href: "/search/Germany", label: "Germany" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/faq", label: "FAQ" },
        { href: "/terms-and-Conditions", label: "Terms" },
        { href: "/privacy", label: "Privacy" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: FaTwitter,
      colorClasses:
        "text-[#222] hover:text-[#000] dark:text-[#d3d3d3] dark:hover:text-[#fff]",
    },
    {
      icon: FaFacebookSquare,
      colorClasses:
        "text-[#222] hover:text-[#000] dark:text-[#d3d3d3] dark:hover:text-[#fff]",
    },
    {
      icon: FaInstagram,
      colorClasses:
        "text-[#222] hover:text-[#000] dark:text-[#d3d3d3] dark:hover:text-[#fff]",
    },
  ];

  return (
    <div className="container pt-20 lg:px-20 md:px-10 xs:px-5 font-Cairo dark:bg-[#11161b]">
      <div className="flex justify-between md:items-center flex-col gap-6 md:flex-row">
        <div>
          <div className="mb-5">
            <h1 className="text-4xl font-bold text-orange-500">BiteZ.com</h1>
          </div>
          <div className="mb-5">
            <h1 className="font-bold text-[#2F4F4F] dark:text-white md:text-[30px] lg:text-[17px] xl:text-[22px]">
              Address:
            </h1>
            <p className="md:text-[16px] xs:text-[14px] text-[#222] font-sans dark:text-[#d3d3d3] underline">
              123 Main St, Sydney NSW 2000, Australia
            </p>
          </div>
          <h1 className="font-bold text-[#2F4F4F] dark:text-white md:text-[30px] lg:text-[17px] xl:text-[22px]">
            Contact:
          </h1>
          <p className="md:text-[16px] xs:text-[14px] text-[#222] font-sans dark:text-[#d3d3d3]">
            +1 (555) 123-4567
          </p>
          <p className="md:text-[16px] xs:text-[14px] text-[#222] font-sans dark:text-[#d3d3d3]">
            hello@bitez.com
          </p>
          <div className="flex gap-x-5 mt-5">
            {socialIcons.map((Icon, index) => (
              <Icon.icon
                key={index}
                className={`${Icon.colorClasses} cursor-pointer font-bold text-[25px]`}
              />
            ))}
          </div>
        </div>

        <div className="flex lg:gap-x-32 md:gap-x-10 lg:mr-20 flex-col md:flex-row xs:mt-10 gap-y-5">
          {footerLinks.map((section, index) => (
            <ul key={index} className="flex flex-col gap-y-3">
              <li className="font-bold text-[#222] dark:text-white md:text-[20px] lg:text-[17px] xl:text-[22px]">
                {section.title}
              </li>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="md:text-[16px] xs:text-[14px] font-sans text-[#222] dark:text-[#d3d3d3] cursor-pointer text w-max hover:text-orange-500 dark:hover:text-[#fff] hover:font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <hr className="mt-20" />
      <div className="flex justify-between w-full xs:flex-col md:flex-row md:items-center py-10 gap-y-3">
        <p className="md:text-[16px] xs:text-[12px] sm:text-[13px] text-[#222] dark:text-[#d3d3d3] cursor-pointer">
          © 2024 BiteZ. All rights reserved.
        </p>
        <div className="flex gap-x-5">
          <p className="md:text-[16px] xs:text-[12px] sm:text-[13px] text-[#222] font-sans dark:text-[#d3d3d3]">
            Powered by{" "}
            <Link
              target="_blank"
              className="underline underline-offset-2  cursor-pointer text-[#00dac4]"
              href="https://yie-portfolioo.vercel.app/"
            >
              Yie
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
