import { DUMMY_NEWS } from "../../data/sample";
import NewsCard from "../../components/NewsCard";

const NewsPage = () => {
  const newsItem = DUMMY_NEWS.map((news) => (
    <NewsCard key={news.id} news={news} />
  ));
  return (
    <div className='w-9/10 sm:w-3/4 mx-auto grid sm:grid-cols-2 gap-8'>
      {newsItem}
    </div>
  );
};

export default NewsPage;
