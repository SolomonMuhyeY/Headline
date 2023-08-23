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
  const newsSlug = params.news;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug)!;
  if (!newsItem) notFound();

  return (
    <div>
      <h1>NEWS DETIAL PAGE</h1>
      <div className='img'>
        <Image
          src={`/news/${newsItem.image}`}
          width={400}
          height={400}
          alt={newsItem?.title}
          priority
        />
      </div>
      <h2>{newsItem?.title}</h2>
      <small>{newsItem.date}</small>
      <p>{newsItem?.content}</p>
    </div>
  );
};

export default NewsDetailPage;
