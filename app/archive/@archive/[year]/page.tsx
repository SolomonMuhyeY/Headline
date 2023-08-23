import NewsCard from "../../../../components/NewsCard";
import { getYearFilteredNews } from "../../../../lib";
import { NewsProps } from "../../../../types";

const page = ({
  params,
}: {
  params: {
    year: string;
  };
}) => {
  const yearBasedNews: NewsProps[] = getYearFilteredNews(params.year);
  // console.log(yearBasedNews);
  // console.log("YEAR BASED");
  return (
    <div>
      <h2>{params.year}</h2>
      {yearBasedNews.map((news) => (
        <NewsCard key={news.id} news={yearBasedNews} />
      ))}
    </div>
  );
};

export default page;
