import Image from "next/image";
import Link from "next/link";
import { NewsProps } from "../types";
const NewsCard = ({ news }: { news: NewsProps }) => {
  const { title, image, slug, date, content } = { ...news };
  return (
    <Link href={`news/${slug}`}>
      <div className='img'>
        <Image
          src={`/news/${image}`}
          width={300}
          height={300}
          alt={title}
          priority
        />
      </div>
      <div className='contents'>
        <p>{title}</p>
        <span>{date}</span>
        <p>{content}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
