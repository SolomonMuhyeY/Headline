"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

import { DUMMY_NEWS } from "@/data/sample";

const ModalPage = ({
  params,
}: {
  params: {
    news: string;
  };
}) => {
  const { news: newsSlug } = params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  const route = useRouter();
  if (!newsItem) notFound();

  return (
    <div
      onClick={route.back}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    >
      <div className='bg-white shadow-md rounded-lg overflow-hidden max-w-lg mx-auto'>
        <div className='p-4 relative'>
          <h2 className='text-4xl text-gray-800 font-bold text-center mb-4'>
            {newsItem.title}
          </h2>
          <div className='flex justify-center'>
            <Image
              src={`/news/${newsItem.image}`}
              alt={newsItem.title}
              width={550}
              height={550}
              className='rounded'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
