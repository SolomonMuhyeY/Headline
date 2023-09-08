"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const path = usePathname();

  return (
    <Link
      className={
        path.startsWith(href)
          ? "border-2 border-red-500 px-4 py-1.5"
          : undefined
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
