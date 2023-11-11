import NewsCard from "@/components/NewsCard";
import RelatedNews from "@/components/RelatedNews";
import { NewsProps } from "@/types";
// import NewsCardSkeleton from "@/components/skeleton/NewsCardSkeleton";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news!");
  }
  const newsItems: NewsProps[] = await response.json();
  const news = newsItems.map((news) => (
    <div key={news.id}>
      <NewsCard news={news} />
    </div>
  ));

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Latest News</h1>
      <div className='relative grid md:grid-cols-12 gap-5'>
        {/* Column for Related News */}
        <div className='col-span-5 md:col-span-3 order-2 md:order-none md:sticky md:top-20'>
          <RelatedNews />
        </div>

        {/* Vertical Line */}
        <div className='hidden xl:block fixed left-96 top-0 bottom-0 h-full border-l-2 border-gray-700'></div>

        {/* Column for News Items */}
        <div className='grid md:mx-12 overflow-x-hidden col-span-9 md:grid-cols-1  lg:grid-cols-2 gap-8'>
          {news}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
