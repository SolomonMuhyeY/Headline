import React from "react";
import { getLatestNews } from "../../../lib";
import NewsCard from "../../../components/NewsCard";

const LatestNewsPage = () => {
  const latestNews = getLatestNews();
  return (
    <div>
      <h1>Latest News</h1>
      {latestNews.map((news) => (
        <NewsCard news={news} />
      ))}
    </div>
  );
};

export default LatestNewsPage;
