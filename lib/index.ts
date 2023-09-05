import { monthNames } from "@/data/months";
import { DUMMY_NEWS } from "@/data/sample";

export const getAllNews = () => {
  return DUMMY_NEWS;
};

export const getAvailableNewsYear = () => {
  const newsArr = DUMMY_NEWS;
  const years: number[] = [];

  newsArr.forEach((news) => {
    const year = new Date(news.date).getFullYear();
    years.push(year);
  });

  const uniqueYears = Array.from(new Set(years));
  return uniqueYears.sort((a, b) => b - a);
};

export const getNewsForYear = (year: string) => {
  const filteredNews = DUMMY_NEWS.filter((news) => {
    return new Date(news.date).getFullYear() === Number(year);
  });
  return filteredNews;
};

export const getMonthsForYear = (year: string): string[] => {
  const allNews = DUMMY_NEWS;
  const selectedMonths: Set<number> = new Set();

  allNews.forEach((news) => {
    const newsDate = new Date(news.date);
    if (newsDate.getFullYear() === Number(year)) {
      selectedMonths.add(newsDate.getMonth() + 1); // Months are zero-based, so add 1
    }
  });

  const sortedMonths: number[] = Array.from(selectedMonths).sort(
    (a: number, b: number) => a - b
  );

  const monthNamesSorted: string[] = sortedMonths.map(
    (month) => monthNames[month - 1]
  ); // Convert month numbers to names

  return monthNamesSorted; // Return array of month names
};

export const getNewsForMonth = (month: string) => {
  return month;
};

export const getLatestNews = () => {
  const newsArr = DUMMY_NEWS.slice();
  newsArr.sort(
    (a: any, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestNews = newsArr.slice(0, 3);
  return latestNews;
};
