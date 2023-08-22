import { DUMMY_NEWS } from "../data/sample";
export const getFullYear = () => {
  const newsArr = DUMMY_NEWS;
  const years: number[] = [];
  newsArr.map((news) => {
    const year = new Date(news.date).getFullYear();
    years.push(year);
  });
  return years.sort((a, b) => b - a);
};
export const getYearFilteredNews = (year: string) => {
  const filteredNews = DUMMY_NEWS.filter((news) => {
    return new Date(news.date).getFullYear() === Number(year);
  });
  return filteredNews;
};
