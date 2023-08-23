import { DUMMY_NEWS } from "../../data/sample";
import NewsCard from "../../components/NewsCard";

const NewsPage = () => {
  const newsItem = DUMMY_NEWS.map((news) => (
    <NewsCard key={news.id} news={news} />
  ));
  return <div>{newsItem}</div>;
};

export default NewsPage;
