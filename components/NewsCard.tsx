import Image from "next/image";
import Link from "next/link";
import { NewsProps } from "../types";

const NewsCard = ({ news }: { news: NewsProps }) => {
  const { title, image, slug, date, content } = news;

  return (
    <div className='bg-white w-3/4 md:w-full rounded-lg shadow-lg overflow-hidden group'>
      <Link href={`news/${slug}`} passHref className='block'>
        <div className='relative h-72'>
          <Image
            src={`/news/${image}`}
            alt={title}
            width={500}
            height={500}
            className='object-cover w-full h-full rounded-t-lg transition duration-300 transform group-hover:scale-105'
          />
        </div>
        <div className='py-6 px-12'>
          <h3 className='text-xl font-semibold text-gray-800 mb-2 truncate'>
            {title}
          </h3>
          <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{content}</p>
          <time className='text-gray-400 text-sm'>
            {new Date(date).toLocaleDateString()}
          </time>
        </div>
      </Link>
      <div className='p-4 bg-gray-100'>
        <Link
          href={`news/${slug}`}
          passHref
          className='text-blue-600 hover:underline'
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
