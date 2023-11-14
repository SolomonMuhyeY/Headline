import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

import { getNewsItem, getRelatedNewsItem } from "@/lib";
import ImageModal from "@/components/ImageModal";

const ModalPage = async ({
  params,
}: {
  params: {
    news: string;
  };
}) => {
  const { news: newsSlug } = params;
  let selectedNews;
  const newsItem = await getNewsItem(newsSlug);
  const relatedNews = await getRelatedNewsItem(newsSlug);
  if (newsItem) selectedNews = newsItem;
  else if (relatedNews) selectedNews = relatedNews;
  if (!selectedNews) notFound();

  return (
    <ImageModal>
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
    </ImageModal>
  );
};

export default ModalPage;
