import React from "react";
import { getFullYear, getNewsForYear } from "../../../../lib";
import Link from "next/link";
import NewsCard from "../../../../components/NewsCard";

const page = ({ params }: { params: { slug: string } }) => {
  const years = getFullYear()!;
  const selectedYear = params.slug;
  let filteredNews;
  if (selectedYear) {
    filteredNews = getNewsForYear(selectedYear);
  }

  return (
    <div>
      <header className='archive-year'>
        {years.map((year) => (
          <Link key={year} href={`/archive/${year}`}>
            <small>{year}</small>
          </Link>
        ))}
      </header>
      <main className='main'>
        <h2>{params.slug}</h2>
        {filteredNews?.map((news) => (
          <NewsCard news={news} />
        ))}
      </main>
    </div>
  );
};

export default page;
