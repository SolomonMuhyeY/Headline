import { Suspense } from "react";
import { ArchiveFilter } from "@/components/archive/ArchiveFilter";
import { FilteredNews } from "@/components/archive/ArchiveFilteredNews";
import ArchiveFilterSkeleton from "@/components/skeleton/ArchiveFilterSkeleton";
import {
  getAvailableNewsYears,
  getAvailableYearMonths,
  getNewsForYear,
} from "@/lib";

import NewsCardSkeleton from "@/components/skeleton/NewsCardSkeleton";
// Fetch filtered news and links based on the selected year and month

const ArchivePage = async ({ params }: { params: { slug: string } }) => {
  const selectedYear = params.slug?.[0];
  const selectedMonth = params.slug?.[1];
  const years = await getAvailableNewsYears();
  const months = await getAvailableYearMonths(selectedYear);
  const filteredNewsItem = await getNewsForYear(selectedYear);

  return (
    <div className='container mx-auto px-4 py-8'>
      <header className='sticky top-20 z-50 bg-slate-800 px-10 py-4 flex flex-wrap items-center justify-between mb-8'>
        <h1 className='text-2xl font-bold'>Archive</h1>
        <Suspense
          fallback={<ArchiveFilterSkeleton years={years} months={months} />}
        >
          <ArchiveFilter year={selectedYear} month={selectedMonth} />
        </Suspense>
      </header>
      <Suspense
        fallback={
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <NewsCardSkeleton newsLength={filteredNewsItem.length} />
          </div>
        }
      >
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </div>
  );
};

export default ArchivePage;
