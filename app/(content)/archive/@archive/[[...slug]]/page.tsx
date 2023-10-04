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
  const [links, setLinks] = useState<string[]>([]);
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

  // Handle invalid filter
  if (
    (selectedYear && !getAvailableNewsYear().includes(+selectedYear)) ||
    (selectedMonth &&
      (!selectedYear ||
        !getMonthsForYear(selectedYear).includes(selectedMonth)))
  ) {
    throw new Error("Invalid Filter!");
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <header className='sticky top-20 z-50 bg-slate-800 px-10 flex flex-wrap items-center justify-between mb-8'>
        <h1 className='text-xl font-bold'>Archive</h1>
        <nav className='flex space-x-4'>
          {links.length > 0
            ? links.map((link) => (
                <Link
                  key={link}
                  href={
                    selectedYear
                      ? `/archive/${selectedYear}/${link}`
                      : `/archive/${link}`
                  }
                  className='text-gray-300 hover:text-gray-500'
                >
                  <small>{link}</small>
                </Link>
              ))
            : years.map((year) => (
                <Link
                  key={year}
                  href={`/archive/${year}`}
                  className='text-gray-300 hover:text-gray-500'
                >
                  <small>{year}</small>
                </Link>
              ))}
        </nav>
      </header>

      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => <NewsCard key={news.id} news={news} />)
        ) : (
          <p className='col-span-3 text-center text-gray-600'>
            No specific news available. Select a year or month to view news.
          </p>
        )}
      </main>
    </div>
  );
};

export default Page;
