import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SmallNewsCardSkeleton from "./skeleton/SmallNewsCardSkeleton";

import { NewsProps } from "@/types";

const SmallNewsCard = ({ news }: { news: NewsProps }) => {
  // console.log(news);
  const { title, image, slug } = news;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect or fetch data if necessary
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-white w-5/6 sm:w-full rounded-lg shadow-lg overflow-hidden'>
      {isLoading ? (
        <SmallNewsCardSkeleton />
      ) : (
        <Link href={`news/${slug}`}>
          <div className='relative h-28'>
            <Image
              src={`/news/${image}`}
              alt={title}
              width={500}
              height={500}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='p-4'>
            <h3 className='text-xs px-2 break-words font-semibold text-gray-800 mb-2'>
              {title}
            </h3>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SmallNewsCard;
