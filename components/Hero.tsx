import Image from "next/image";

const Hero = () => {
  return (
    <div className='md:my-3 flex flex-col items-center  text-white rounded-lg overflow-hidden py-4'>
      <div className='img rounded-full flex items-center justify-center overflow-hidden mb-2 w-40 h-40'>
        <Image
          src='/news/news.png'
          width={160}
          height={160}
          alt='news'
          className='object-fit w-full h-full'
        />
      </div>
      <div className='text-center'>
        <h1 className='text-3xl leading-relaxed md:text-5xl font-bold mb-2 md:mb-7'>
          Welcome to
          <span className='inline mx-2 text-lime-400'>Headline</span>
          News
        </h1>
        <p className='text-md text-orange-300 md:text-lg px-4'>
          Stay updated with the latest tech news around the world
        </p>
      </div>
    </div>
  );
};

export default Hero;
