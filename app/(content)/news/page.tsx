import NewsCard from "@/components/NewsCard";
import RelatedNews from "@/components/RelatedNews";
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
      <div className='grid md:grid-cols-12 gap-5 relative'>
        {/* Column for Related News */}
        <div className='col-span-3 order-2 md:order-none md:sticky md:top-20'>
          <RelatedNews />
        </div>

        {/* Vertical Line */}
        <div className='hidden md:block fixed left-96 top-0 bottom-0 h-full border-l-2 border-gray-700'></div>

        {/* Column for News Items */}
        <div className='grid mx-12 md:grid-cols-1 col-span-9 lg:grid-cols-2 gap-8'>
          {newsItems}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
