import NewsCard from "@/components/NewsCard";
import { DUMMY_NEWS } from "@/data/sample";

const NewsPage = () => {
  const newsItems = DUMMY_NEWS.map((news) => (
    <div key={news.id}>
      <NewsCard news={news} />
    </div>
  ));

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Latest News</h1>
      <div className='grid md:grid-cols-12 gap-5'>
        {/* Column for Related News */}
        <div className='col-span-3 order-2 md:order-none md:sticky md:top-20'>
          <div className='md:sticky md:top-20'>
            <h2 className='text-xl text-left font-bold mb-2'>Related News</h2>
            <ul className='space-y-2'>
              <li className='flex items-center hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer'>
                List Item One
              </li>
              <li className='flex items-center hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer'>
                List Item Two
              </li>
              <li className='flex items-center hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer'>
                List Item Three
              </li>
              <li className='flex items-center hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer'>
                List Item Four
              </li>
              <li className='flex items-center hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer'>
                List Item Five
              </li>
              <li className='flex items-center hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer'>
                List Item Six
              </li>
            </ul>
          </div>
        </div>

        {/* Column for News Items */}
        <div className='grid mx-12 md:grid-cols-1 col-span-9 lg:grid-cols-2 gap-8'>
          {newsItems}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
