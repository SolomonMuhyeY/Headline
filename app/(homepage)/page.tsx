import Hero from "@/components/Hero";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className='text-center w-5/6 md:w-3/4 mx-auto px-4'>
      <Hero />
      <div className='mt-2 md:w-4/5 mx-auto leading-relaxed'>
        <p className='text-gray-300 leading-loose mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          inventore aut assumenda, temporibus deserunt iure aliquam laboriosam
          mollitia expedita blanditiis perferendis sint totam sapiente maxime at
          laborum sed hic nulla.
        </p>
        <button
          type='button'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          <Link href='/news'>Read Latest News</Link>
        </button>
      </div>
    </div>
  );
}

export default Page;
