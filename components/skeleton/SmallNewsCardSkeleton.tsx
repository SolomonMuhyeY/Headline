// SmallNewsCardSkeleton.tsx

import React from "react";

const SmallNewsCardSkeleton = () => (
  <div className='bg-white w-5/6 sm:w-full rounded-lg shadow-lg overflow-hidden'>
    <div className='relative h-28'>
      <div className='animate-pulse bg-gray-300 w-full h-full'></div>
    </div>
    <div className='p-4 animate-pulse'>
      <div className='bg-gray-300 h-4 mb-2 w-3/4'></div>
      <div className='bg-gray-300 h-4 mb-2 w-2/4'></div>
      <div className='bg-gray-300 h-4 mb-2 w-4/5'></div>
    </div>
  </div>
);

export default SmallNewsCardSkeleton;
