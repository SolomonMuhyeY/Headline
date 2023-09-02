import React from "react";
import Link from "next/link";
import { getFullYear, getMonthsForYear, getNewsForYear } from "@/lib";
import NewsCard from "@/components/NewsCard";

const page = ({ params }: { params: { slug: string } }) => {
  const selectedYear = params.slug;
  const years = getFullYear()!;
  const months = getMonthsForYear(selectedYear);
  let filteredNews;
  if (selectedYear) {
    filteredNews = getNewsForYear(selectedYear);
  }

  return (
    <div>
      <header className='archive-year'>
        {years.map((year) => (
          <Link key={crypto.randomUUID()} href={`/archive/${year}`}>
            <small>{year}</small>
          </Link>
        ))}
      </header>
      <main className='main'>
        <h2>{params.slug}</h2>
        <div className='archive-month'>
          {months.map((mon) => (
            <small key={mon}>{mon}</small>
          ))}
        </div>
        {filteredNews?.map((news) => (
          <NewsCard key={crypto.randomUUID()} news={news} />
        ))}
      </main>
    </div>
  );
};

export default page;
