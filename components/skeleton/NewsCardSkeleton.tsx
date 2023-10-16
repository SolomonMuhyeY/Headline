// components/skeletons/NewsCardSkeleton.tsx
const NewsCardSkeleton = () => {
  return (
    <div className='bg-white w-3/4 md:w-full rounded-lg shadow-lg overflow-hidden animate-pulse'>
      <div className='relative h-72 bg-gray-200'></div>
      <div className='py-6 px-12'>
        <div className='h-6 bg-gray-200 mb-2 rounded'></div>
        <div className='h-4 bg-gray-200 mb-2 rounded w-3/4'></div>
        <div className='h-4 bg-gray-200 mb-2 rounded w-5/6'></div>
        <div className='h-4 bg-gray-200 mb-2 rounded w-1/2'></div>
      </div>
      <div className='p-4 bg-gray-100'>
        <div className='h-4 bg-gray-200 rounded w-1/4'></div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
