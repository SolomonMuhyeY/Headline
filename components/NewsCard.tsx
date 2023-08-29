import Image from "next/image";
import Link from "next/link";
import { NewsProps } from "../types";

const NewsCard = ({ news }: { news: NewsProps }) => {
  const { title, image, slug, date, content } = { ...news };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <Link
        href={`news/${slug}`}
        className='block opacity-85 hover:opacity-100 transition duration-300 ease-in-out'
      >
        <div className='relative h-72 w-/34 overflow-hidden'>
          <Image
            src={`/news/${image}`}
            alt={title}
            width={500}
            height={500}
            className='object-fit h-full w-full'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl font-semibold text-gray-800 mb-2 truncate'>
            {title}
          </h3>
          <p className='text-gray-600 text-sm mb-2 line-clamp-2'>{content}</p>
          <time className='text-gray-400 text-sm'>
            {new Date(date).toLocaleDateString()}
          </time>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
