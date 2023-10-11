import Image from "next/image";
import Link from "next/link";
import { NewsProps } from "../types";

const SmallNewsCard = ({ news }: { news: NewsProps }) => {
  const { title, image, slug } = news;

  return (
    <div className='bg-white w-5/6 sm:w-full rounded-lg shadow-lg overflow-hidden'>
      <Link href={`news/${slug}`} className='block'>
        <div className='relative h-24'>
          <Image
            src={`/news/${image}`}
            alt={title}
            width={500}
            height={500}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xs px-2 break-words font-semibold text-gray-800 mb-2'>
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default SmallNewsCard;
