import React from "react";
import { DUMMY_NEWS } from "../../../data/sample";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailPage = ({
  params,
}: {
  params: {
    news: string;
  };
}) => {
  const { news: newsSlug } = params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{newsItem.title}</h1>
      <div className='relative h-80 w-3/4 mb-4'>
        <Image
          src={`/news/${newsItem.image}`}
          alt={newsItem.title}
          width={500}
          height={500}
          className='rounded-lg w-full h-full'
        />
      </div>
      <div className='flex items-center text-gray-500 mb-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 mr-1'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 3a7 7 0 0 1 7 7c0 3.86-3.141 7-7 7s-7-3.14-7-7a7 7 0 0 1 7-7zM9 12a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0v2zm1-5a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z'
          />
        </svg>
        <span>{new Date(newsItem.date).toLocaleDateString()}</span>
      </div>
      <p className='text-lg text-gray-700 leading-relaxed'>
        {newsItem.content}
      </p>
    </div>
  );
};

export default NewsDetailPage;
