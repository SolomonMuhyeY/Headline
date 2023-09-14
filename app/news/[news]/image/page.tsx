import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

import { DUMMY_NEWS } from "@/data/sample";

const page = ({
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
    <div className='mx-12 flex justify-center flex-col'>
      <h2 className='text-4xl font-bold'>Image</h2>
      <Image
        src={`/news/${newsItem.image}`}
        alt={newsItem.title}
        width={550}
        height={550}
      />
    </div>
  );
};

export default page;
