import NewsCard from "@/components/NewsCard";
import { DUMMY_NEWS } from "@/data/sample";

const NewsPage = () => {
  const newsItem = DUMMY_NEWS.map((news) => (
    <NewsCard key={crypto.randomUUID()} news={news} />
  ));
  return (
    <div className='w-9/10 sm:w-3/4 mx-auto grid md:grid-cols-2 gap-8'>
      {newsItem}
    </div>
  );
};

export default NewsPage;
