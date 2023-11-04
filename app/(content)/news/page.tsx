"use client";
import { useState, useEffect } from "react";
import NewsCard from "@/components/NewsCard";
import RelatedNews from "@/components/RelatedNews";
import { DUMMY_NEWS } from "@/data/sample";
import { NewsProps } from "@/types";
import NewsCardSkeleton from "@/components/skeleton/NewsCardSkeleton";

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState<NewsProps[] | null>(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setNewsItems(DUMMY_NEWS);
    }, 0);
  }, []);

  const renderNewsItems = () => {
    if (!newsItems) {
      return Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <NewsCardSkeleton />
        </div>
      ));
    }

    return newsItems.map((news) => (
      <div key={news.id}>
        <NewsCard news={news} />
      </div>
    ));
  };

  return (
    <div className='container mx-auto px-4 py-8 overflow-x-hidden'>
      <h1 className='text-3xl font-bold mb-4'>Latest News</h1>
      <div className='relative grid md:grid-cols-12 gap-5'>
        {/* Column for Related News */}
        <div className='col-span-5 md:col-span-3 order-2 md:order-none md:sticky md:top-20'>
          <RelatedNews />
        </div>

        {/* Vertical Line */}
        <div className='hidden xl:block fixed left-96 top-0 bottom-0 h-full border-l-2 border-gray-700'></div>

        {/* Column for News Items */}
        <div className='grid md:mx-12 col-span-9 md:grid-cols-1  lg:grid-cols-2 gap-8'>
          {renderNewsItems()}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
