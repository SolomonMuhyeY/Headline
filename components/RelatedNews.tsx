import { NewsProps } from "@/types";
import SmallNewsCard from "./SmallNewsCard";

const RelatedNews = async () => {
  const response = await fetch("http://localhost:8080/related-news");

  if (!response.ok) {
    throw new Error("Failed to fetch related news!");
  }
  const newsItems: NewsProps[] = await response.json();
  const relatedNews = newsItems.map((news) => {
    return <SmallNewsCard key={news.id} news={news} />;
  });
  return (
    <div className='-mt-16 col-span-8 md:col-span-3 order-2 px-12 md:px-2 md:order-none md:sticky md:top-20'>
      <h2 className='text-xl mb-8 text-left font-bold '>Related News</h2>
      <div className='grid w-full grid-cols-2 gap-8 md:gap-4'>
        {relatedNews}
      </div>
    </div>
  );
};

export default RelatedNews;
