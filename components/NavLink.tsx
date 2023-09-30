"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const path = usePathname();

  return (
    <Link
      className={
        path.startsWith(href)
          ? "bg-red-500 text-white px-4 py-1.5 rounded-md shadow-lg"
          : "text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-1.5 rounded-md"
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
