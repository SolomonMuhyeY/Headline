import { getAvailableNewsYears, getAvailableYearMonths } from "@/lib";
import Link from "next/link";

export async function ArchiveFilter({
  year,
  month,
}: {
  year: string;
  month: string;
}) {
  let links: string[] = [];

  const years = await getAvailableNewsYears();
  const months = await getAvailableYearMonths(year);

  if (years && !months) {
    links = years;
  } else if (years && months) {
    links = months;
  }
  // Handle Error
  if ((year && !years.includes(year)) || (month && months.includes(month))) {
    throw new Error("Invalid Filter!");
  }
  return (
    <nav className='flex space-x-4'>
      {links.length > 0
        ? links.map((link) => (
            <Link
              key={link}
              href={year ? `/archive/${year}/${link}` : `/archive/${link}`}
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
  );
}
