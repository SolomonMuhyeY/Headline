import React from "react";
import { getLatestNews } from "../../../../lib";
import NewsCard from "../../../../components/NewsCard";

const LatestNewsPage = () => {
  const latestNews = getLatestNews();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Latest News</h1>
      <div className='grid grid-cols-1 mx-12 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {latestNews.map((news) => (
          <div key={news.id}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsPage;
