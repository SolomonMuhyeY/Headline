import { DUMMY_NEWS } from "../data/sample";
export const getFullYear = () => {
  const newsArr = DUMMY_NEWS;
  const years: number[] = [];

  newsArr.forEach((news) => {
    const year = new Date(news.date).getFullYear();
    years.push(year);
  });

  const uniqueYears = Array.from(new Set(years));
  return uniqueYears.sort((a, b) => b - a);
};

export const getYearFilteredNews = (year: string) => {
  const filteredNews = DUMMY_NEWS.filter((news) => {
    return new Date(news.date).getFullYear() === Number(year);
  });
  return filteredNews;
};

export const getLatestNews = () => {
  const newsArr = DUMMY_NEWS.slice();
  newsArr.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestNews = newsArr.slice(0, 3);
  return latestNews;
};
