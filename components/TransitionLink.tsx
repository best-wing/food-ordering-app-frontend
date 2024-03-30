"use client";
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from '@/utlis/animations';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children, className }) => {
  const router = useRouter();
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  };

  // Wrap children with a div that handles the click event
  return (
    <div onClick={handleClick} className={className} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default TransitionLink;
