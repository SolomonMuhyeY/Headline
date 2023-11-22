import { getAllNews, getNewsForYear } from "@/lib";
import { NewsProps } from "@/types";
import NewsCard from "../NewsCard";

export async function FilteredNews({
  year,
  month,
}: {
  year: string;
  month: string;
}) {
  let filteredNewsItem: NewsProps[] = [];

  if (year && !month) {
    filteredNewsItem = await getNewsForYear(year);
  } else if (year && month) {
    filteredNewsItem = await getAllNews();
  }
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {filteredNewsItem.length > 0 ? (
        filteredNewsItem.map((news) => <NewsCard key={news.id} news={news} />)
      ) : (
        <p className='col-span-3 text-center text-gray-600'>
          No specific news available. Select a year or month to view news.
        </p>
      )}
    </main>
  );
}
