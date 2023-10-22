import SmallNewsCard from "./SmallNewsCard";
import { getRelatedNews } from "@/lib";

const RelatedNews = () => {
  const relatedNewsData = getRelatedNews();
  const relatedNews = relatedNewsData.map((news) => {
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
