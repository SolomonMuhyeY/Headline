"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  getAllNews,
  getAvailableNewsYear,
  getMonthsForYear,
  getNewsForYear,
} from "@/lib";
import NewsCard from "@/components/NewsCard";
import { NewsProps } from "@/types";

const Page = ({ params }: { params: { slug: string } }) => {
  const selectedYear = params.slug?.[0];
  const selectedMonth = params.slug?.[1];
  const [links, setLinks] = useState<string[] | number[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    const availableYears = getAvailableNewsYear();
    setYears(availableYears);

    // Fetch filtered news and links based on the selected year and month
    if (selectedYear && !selectedMonth) {
      const newsForYear = getNewsForYear(selectedYear);
      setFilteredNews(newsForYear);
      const monthsForYear = getMonthsForYear(selectedYear);
      setLinks(monthsForYear);
    } else if (selectedYear && selectedMonth) {
      setLinks([]);
      const allNews = getAllNews();
      setFilteredNews(allNews);
    }
  }, [selectedYear, selectedMonth]);
  // HANDLE INVALID FILTER
  if (
    (selectedYear && !getAvailableNewsYear().includes(+selectedYear)) ||
    (selectedMonth && !getMonthsForYear(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter!");
  }
  return (
    <div>
      <header className='archive-year'>
        {links.length > 0
          ? links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <Link key={link} href={href}>
                  <small>{link}</small>
                </Link>
              );
            })
          : years.map((year) => {
              return (
                <Link key={year} href={`/archive/${year}`}>
                  <small>{year}</small>
                </Link>
              );
            })}
      </header>
      <main className='main'>
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => <NewsCard key={news.id} news={news} />)
        ) : (
          <p>No Specific News. Select the year to see a news.</p>
        )}
      </main>
    </div>
  );
};

export default Page;
