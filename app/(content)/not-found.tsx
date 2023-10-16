const NewsNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-gray-900 p-8 rounded-lg shadow-lg text-center'>
        <h2 className='text-4xl font-bold text-red-500 mb-4'>
          News Page Not Found
        </h2>
        <p className='text-lg text-gray-400 mb-4'>
          Sorry, we couldn't find the news page you were looking for. 😢
        </p>
        <a
          href='/news'
          className='inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          Go Back to News
        </a>
      </div>
    </div>
  );
};

export default NewsNotFound;
