import React from "react";

const ArchiveFilterSkeleton = ({
  years,
  months,
}: {
  years: string[];
  months: string[];
}) => {
  let numOfDivs = 3;

  if (months.length > 0) {
    numOfDivs = months.length;
  } else if (years.length > 0) {
    numOfDivs = years.length;
  }

  return (
    <div className='w-40 animate-pulse'>
      <div className='flex justify-end gap-4'>
        {Array.from({ length: numOfDivs }).map((_, index) => (
          <div
            key={index}
            className={`h-4 px-3 py-1 rounded w-5/6 ${
              index % 3 === 0
                ? "bg-lime-200"
                : index % 3 === 1
                ? "bg-lime-400"
                : "bg-lime-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveFilterSkeleton;
