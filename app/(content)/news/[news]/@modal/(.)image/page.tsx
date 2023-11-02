"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

import { DUMMY_NEWS, RELATED_NEWS } from "@/data/sample";
import { NewsProps } from "@/types";

const ModalPage = ({
  params,
}: {
  params: {
    news: string;
  };
}) => {
  const { news: newsSlug } = params;
  let selectedNews: NewsProps | null = null;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  const relatedNews = RELATED_NEWS.find((news) => news.slug === newsSlug);
  const route = useRouter();
  if (newsItem) selectedNews = newsItem;
  else if (relatedNews) selectedNews = relatedNews;
  if (!selectedNews) notFound();

  return (
    <div
      onClick={route.back}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'
    >
      <div className='bg-white shadow-md rounded-lg overflow-hidden max-w-lg mx-auto'>
        <div className='p-4 relative'>
          <h2 className='text-2xl text-gray-800 font-bold text-center mb-4'>
            {selectedNews.title}
          </h2>
          <div className='flex justify-center'>
            <div className='w-full h-80'>
              <Image
                src={`/news/${selectedNews.image}`}
                alt={selectedNews.title}
                width={500}
                height={500}
                className='rounded w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
