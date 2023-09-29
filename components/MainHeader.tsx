"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gray-800 p-4 fixed w-full top-0 z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-2xl font-bold'>
          <Link href='/'>HeadLine</Link>
        </div>
        <div className='hidden md:flex space-x-4'>
          <NavLink href='/news'>News</NavLink>
          <NavLink href='/archive'>Archive</NavLink>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden flex flex-col space-y-4 mt-4'>
          <NavLink href='/news'>News</NavLink>
          <NavLink href='/archive'>Archive</NavLink>
        </div>
      )}
    </nav>
  );
};

export default MainHeader;
